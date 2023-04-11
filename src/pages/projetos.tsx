
import ProjetoTemplate from "@/components/Layout/ProjetoTemplate";
import { Projeto } from "@/types/Projeto";
import axios from "axios";
import { useMutation, useQuery } from "react-query"
import styles from './Projetos.module.css'
import ProjetosService from "@/services/ProjetosService";
import Link from "next/link";
import { IoMdAddCircleOutline } from 'react-icons/io';

const projetosService = new ProjetosService();

const getProjetos = async () => {
    return (await projetosService.getAll());
}

export default function Projetos(){

    const {data, isLoading, refetch} = useQuery({
        queryKey: ['projetos'],
        queryFn: getProjetos
    })

    function toEnd(){
        console.log("Descendo!")
        const btn = document.getElementById("btn");
        if(btn == undefined)return;
        btn.scrollIntoView({ behavior: "smooth" });
    }

    const mutation = useMutation((id: number) => {
        return projetosService.deleteProjetoById(id);
    });

    const deleteProjeto = async (id: number) => {
        mutation.mutate(id);
        if(mutation.isSuccess){
            console.log(mutation.status)
            console.log((await refetch()).data);
        }
    }


    return (
        <div className={styles.content}>

            <div className={styles.header}>
                <h1 className={styles.title}>Projetos</h1>
                <button onClick={toEnd}><IoMdAddCircleOutline className={styles.icon}/></button>
            </div>
            <div className={styles.contentProjetos}>{
                isLoading ? (<div className={styles.contentLoadingMessage}><p>Carregando...</p></div>)
                : (
                    data?.map((projeto) => (
                        <ProjetoTemplate projeto={projeto} handleDelete={deleteProjeto} key={projeto.id}></ProjetoTemplate>
                    ))
                )
            }
            </div>

            <div className={styles.areaBtn}>
                <h2>Crie novos Projetos</h2>
                <button className={styles.btn} id="btn"><Link href="/novoProjeto">Criar Projeto</Link></button>
            </div>
            
        </div>
    )
}