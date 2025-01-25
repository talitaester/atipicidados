import dayjs from 'dayjs'

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
class GenerateRefreshToken {
    async execute(userId:string, userType: 'gerente' | 'colaborador' | 'paciente'){
        const expireIn = dayjs().add(30, 'seconds').unix()

        const data: any = {
            expireIn,
            
        }
        if (userType === 'gerente'){
            data.gerenteId = userId
        }
        else if(userType === 'colaborador'){
            data.colaboradorId = userId
        }
        else if(userType === 'paciente'){
            data.pacienteId = userId
        }
        const generateRefreshToken = await prisma.refreshToken.create({
            data: data
    })
        return generateRefreshToken
    }
}
export {GenerateRefreshToken}
