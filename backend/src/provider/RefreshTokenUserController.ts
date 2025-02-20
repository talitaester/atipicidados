import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";
import dayjs from "dayjs";

const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

export async function refreshTokenController(request: Request, response: Response) {
    const refresh_token = request.cookies?.refresh_token;
    const userIdParam = request.params.id; 

    if (!refresh_token) {
        return response.status(401).json({ error: true, message: "Refresh token não encontrado" });
    }

    try {
        const { token, newExpireIn, userId } = await refreshTokenUserUseCase.execute(refresh_token);

        if (userId !== userIdParam) {
            return response.status(403).json({ error: true, message: "Acesso negado" });
        }

        response.cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: (newExpireIn - dayjs().unix()) * 1000,
        });

        response.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
        });

        return response.status(200).json({ error: false, message: "Token renovado", refresh_token, token, userId });
    } catch (error: any) {
        return response.status(401).json({ error: true, message: error.message });
    }
}
