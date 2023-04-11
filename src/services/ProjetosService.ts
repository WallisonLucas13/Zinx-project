import { Projeto } from "@/types/Projeto";
import axios from "axios";

export default class ProjetosService{

    private API_GET_ALL: string = "https://zinx-project-server-production.up.railway.app/projeto/todos";
    private API_POST: string = "https://zinx-project-server-production.up.railway.app/projeto/novo";
    private API_GET: string = "https://zinx-project-server-production.up.railway.app/projeto/find/";
    private API_DELETE: string = "https://zinx-project-server-production.up.railway.app/projeto/delete/";

    public getAll = async () => {
        return (await axios.get<Projeto[]>(this.API_GET_ALL)).data;  
    }

    public postProjeto = async (data: any) => {
        return (await axios.post<Projeto>(this.API_POST, data)).data;
    }

    public getOneProjetoById = async (id: number) => {
        return (await axios.get<Projeto>(this.API_GET+id)).data;
    }

    public deleteProjetoById = async (id: number) => {
        return (await axios.delete<Projeto>(this.API_DELETE+id)).data;
    }
}
