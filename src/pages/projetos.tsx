
import ProjetoTemplate from "@/components/Layout/ProjetoTemplate";
import { Projeto } from "@/types/Projeto";
import axios from "axios";
import { useQuery } from "react-query"
import styles from './Projetos.module.css'
import ProjetosService from "@/services/ProjetosService";
import Link from "next/link";
import { IoMdAddCircleOutline } from 'react-icons/io';

const projetosService = new ProjetosService();

const getProjetos = async () => {
    return (await projetosService.getAll());
}

export default function Projetos(){

    const {data, isLoading } = useQuery({
        queryKey: ['projetos'],
        queryFn: getProjetos
    })

    function toEnd(){
        console.log("Descendo!")
        const btn = document.getElementById("btn");
        if(btn == undefined)return;
        btn.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <h1 className={styles.title}>Projetos</h1>
                <button onClick={toEnd}><IoMdAddCircleOutline className={styles.icon}/></button>
            </div>
            <div>{
                isLoading ? (<p>Loading...</p>)
                : (
                    data?.map((projeto) => (<ProjetoTemplate projeto={projeto} key={projeto.id}></ProjetoTemplate>))
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