
import ProjetoTemplate from "@/components/Layout/ProjetoTemplate";
import { Projeto } from "@/types/Projeto";
import axios from "axios";
import { useQuery } from "react-query"
import styles from './Projetos.module.css'

const getProjetos = async () => {
    return (await axios.get<Projeto[]>("zinx-project-server-production.up.railway.app/projeto/todos")).data;
}


export default function Projetos(){

    const {data, isLoading } = useQuery({
        queryKey: ['projetos'],
        queryFn: getProjetos
    })


    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Projetos</h1>
            <div>{
                isLoading ? (<p>Loading...</p>)
                : (
                    data?.map((projeto) => (<ProjetoTemplate projeto={projeto} key={projeto.id}></ProjetoTemplate>))
                )
            }
            </div>
            
        </div>
    )
}