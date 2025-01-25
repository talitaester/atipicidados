import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { SENHA_DE_APP_JULIO } from "../secrets";

const prisma = new PrismaClient();

export const sendPassword = async (request: Request, response: Response) => {
    const { email } = request.body;

    try {
        const user = await prisma.paciente.findUnique({
            where: { email }
        });

        if (!user) {
            return response.status(404).json({ error: "Email não encontrado" });
        }
        const senhaJulio = SENHA_DE_APP_JULIO

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'juliomoreira0111@gmail.com', 
                pass: senhaJulio
            }
        });

        const newPassword = crypto.randomBytes(4).toString('hex');

        transporter.sendMail({
            from: 'Equipe Atipicidados <atipicidados@gmail.com>',
            to: email,
            subject: 'Recuperação de Senha',
            html: `
            <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
                Olá <strong>${user.nome}</strong>,<br><br>
                Recebemos um pedido para redefinir a senha da sua conta.<br><br>
                Sua nova senha para acessar o Atipicidados é: <strong style="font-size: 18px; color: #007BFF;">${newPassword}</strong><br><br>
                Caso deseje, você pode alterar sua senha para uma de sua escolha através das configurações da sua conta.<br><br>
                Se você não solicitou a redefinição da senha, por favor, ignore este e-mail.<br>
                O link de redefinição de senha expirará em 24 horas.<br><br>
                Atenciosamente,<br>
                <strong>Equipe Atipicidados</strong><br><br>
                Se precisar de mais assistência, não hesite em nos contatar.
            </p>
            `
        }).then(async () => {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await prisma.paciente.update({
                where: { email },
                data: { password: hashedPassword }
            });

            return response.status(200).json({ message: 'Email enviado com sucesso.' });
        }).catch((error) => {
            return response.status(500).json({ error: "Erro ao enviar nova senha." });
        });

    } catch (error) {
        return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
};
