import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const createUserUnidade = async (request: Request, response: Response) => {
    const { nome, endereco } = request.body;

    try {
        const userUnidade = await prisma.unidade.create({
            data: {
                nome,
                endereco
            }
        });
        return response.status(201).json({
            error: false,
            message: "Unidade criada com sucesso",
            unidade: userUnidade
        });
    } catch (error: any) {
        return response.status(400).json({ error: true, message: error.message });
    }
};

export const addGerenteToUnidade = async (request: Request, response: Response) => {
    const { gerenteId, unidadeId } = request.body;

    try {
        const unidade = await prisma.unidade.findUnique({
            where: { id: unidadeId },
        });

        if (!unidade) {
            return response.status(404).json({
                error: true,
                message: 'Unidade não encontrada'
            });
        }

        const gerente = await prisma.gerente.update({
            where: { id: gerenteId },
            data: {
                unidade: {
                    connect: { id: unidadeId },
                },
            },
        });

        return response.status(200).json({
            error: false,
            message: `O gerente ${gerente.nome} foi conectado à unidade ${unidade?.nome}`,
            gerente
        });

    } catch (error: any) {
        return response.status(400).json({ error: true, message: error.message });
    }
};

export const getUnidadeById = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const unidade = await prisma.unidade.findUnique({
            where: { id: Number(id) }, 
        });

        if (!unidade) {
            return response.status(404).json({ error: true, message: 'Unidade não encontrada' });
        }

        return response.json({
            error: false,
            unidade
        });

    } catch (error: any) {
        return response.status(400).json({ error: true, message: error.message });
    }
};

export const getUnidades = async (_: Request, response: Response) => {
    try {
        const unidades = await prisma.unidade.findMany();
        
        if (unidades.length === 0) {
            return response.status(204).json({
                error: true,
                message: 'Nenhuma unidade foi encontrada'
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Segue a lista de todas as unidades',
            unidades
        });

    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno no servidor'
        });
    }
};
