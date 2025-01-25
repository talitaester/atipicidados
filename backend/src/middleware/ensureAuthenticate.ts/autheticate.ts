import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../secrets";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const token = request.cookies.token;
    
    if (!token) {
        return response.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        const decoded = verify(token, JWT_SECRET) as { userId: string };

        const userIdFromToken = decoded.userId;
      

        const userIdFromRequest = request.params.id || request.body.userId; 

        if (userIdFromRequest !== userIdFromToken) {
            return response.status(403).json({ message: "Forbidden - User ID mismatch" });
        }

        return next();
    } catch (error) {
        console.log(error);
        return response.status(401).json({ message: "Unauthorized - Invalid token" });
    }
}
