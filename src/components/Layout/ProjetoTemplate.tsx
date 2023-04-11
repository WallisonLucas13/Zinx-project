import { Projeto } from "@/types/Projeto";
import styles from './ProjetoTemplate.module.css'
import { useRouter } from "next/router";
import Link from "next/link";
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

type ProjetoProps = {
    projeto: Projeto,
    handleDelete: (id: number) => Promise<void>
}

export default function ProjetoTemplate({projeto, handleDelete}: ProjetoProps){

    const path = `/projeto/${projeto.id}`;
    const deleteEmitter = () => {
        handleDelete(projeto.id);
    }

    return (
            <div className={styles.card}>
                    <h1>{projeto.nome}</h1>
                    <p>
                        <span>Orçamento: <span> R${projeto.tetoDeGastos},00</span></span>
                    </p>
                    <p className={styles.category}>
                        <span className={`${styles[projeto.categoria.toLowerCase()]}`}></span> {projeto.categoria}
                    </p>

                    <div className={styles.cardActions}>
                        <Link href={path}><BsPencil/> Editar</Link>

                        <button onClick={deleteEmitter}>
                            <BsFillTrashFill/> Excluir
                        </button>
                    </div>
            </div>
    )
}