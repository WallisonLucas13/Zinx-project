import { Servico } from "./Servico";

export interface Projeto{
    id: number;
    nome: string;
    categoria: string;
    tetoDeGastos: string;
    servicos: Servico[]
}