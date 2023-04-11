import { Projeto } from "@/types/Projeto";
import axios from "axios";

export default class ProjetosService{

    private API_GET_ALL: string = "https://zinx-project-server-production.up.railway.app/projeto/todos";
    private API_POST: string = "https://zinx-project-server-production.up.railway.app/projeto/novo";

    public getAll = async () => {
        return (await axios.get<Projeto[]>(this.API_GET_ALL)).data;  
    }

    public postProjeto = async (data: any) => {
        return (await axios.post<Projeto>(this.API_POST, data)).data;
    }
}
