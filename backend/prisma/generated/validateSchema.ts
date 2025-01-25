import { type Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColaboradorCreateNestedManyWithoutPacientesInputSchema, GeneroSchema, InputJsonValueSchema, NullableJsonNullValueInputSchema, PacienteCreateNestedManyWithoutColaboradoresInputSchema, RacaSchema, UnidadeCreateNestedOneWithoutGerentesInputSchema, UnidadeCreateNestedOneWithoutPacientesInputSchema } from './zod';



export const GerenteCreateInputSchema = z.object({
  password: z.string().min(8, { message: 'Sua senha precisa ter no mínimo 8 caracteres' }),
  nome: z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }),
  cpf: z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }),
  rg: z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }),
  email: z.string().email({ message: 'Digite um email válido' }),
  telefone: z.string()
    .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
    .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }),
  raca: RacaSchema,
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  unidadeId: z.number(),
}).strict();

export default GerenteCreateInputSchema




export const PacienteCreateInputSchema = z.object({
  analise: z.boolean().optional(),
  nome: z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }).optional().nullable(),
  cpf: z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }).optional().nullable(),
  rg: z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }).optional().nullable(),
  nascimentodata: z.string()
    .optional()
    .nullable()
    .refine((date) => {
      if (!date) return true;
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      return regex.test(date);
    }, { message: 'A data de nascimento deve estar no formato DD/MM/YYYY' }),
  nomemae: z.string().optional().nullable(),
  nomepai: z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }).optional().nullable(),
  telefone: z.string()
    .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
    .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }).optional().nullable(),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  laudofile: z.string().optional().nullable(),
  relescolar: z.string().optional().nullable(),
  gestacao: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  nascimento: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  autonomia: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  comportamento: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  desenvolimento: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  pedagogico: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  geral: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  mae: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  pai: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  maisinfo: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  escola: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  saudeinfo: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  raca: z.lazy(() => RacaSchema).optional().nullable(),
  unidadeId: z.number().default(1),
}).strict();


export const ColaboradorCreateInputSchema = z.object({
  nome: z.string().min(3, { message: 'Insira um nome com pelo menos 3 caracteres' }),
  cpf: z.string().length(11, { message: 'O CPF precisa ter 11 dígitos' }),
  rg: z.string().regex(/^[0-9]{7,14}[A-Za-z0-9]?$/, { message: 'O RG deve ter entre 7 e 14 caracteres, podendo incluir letras e dígitos verificadores' }),
  nascimentodata: z.string()
    .optional()
    .nullable()
    .refine((date) => {
      if (!date) return true;
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      return regex.test(date);
    }, { message: 'A data de nascimento deve estar no formato DD/MM/YYYY' }),
  telefone: z.string()
    .min(10, { message: 'O telefone precisa ter no mínimo 10 dígitos' })
    .max(11, { message: 'O telefone precisa ter no máximo 11 dígitos' }),
  titulo: z.string(),
  formacao: z.string(),
  password: z.string().min(8, { message: 'Sua senha precisa ter no mínimo 8 caracteres' }),
  genero: z.lazy(() => GeneroSchema),
  email: z.string().email({ message: 'Digite um email válido' }),
  raca: z.lazy(() => RacaSchema),
  rgdocfile: z.string().optional().nullable(),
  fotofile: z.string().optional().nullable(),
  compresfile: z.string().optional().nullable(),
  unidadeId: z.number(),
}).strict();

