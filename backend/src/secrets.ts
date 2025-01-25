import dotenv from 'dotenv';
dotenv.config({path:'.env'})

export const JWT_SECRET = String(process.env.JWT_SECRET)
export const SENHA_DE_APP_JULIO = String(process.env.SENHA_DE_APP_JULIO)
