import { Projeto } from "@/types/Projeto";
import styles from './ProjetoTemplate.module.css'

type ProjetoProps = {
    projeto: Projeto
}

export default function ProjetoTemplate({projeto}: ProjetoProps){
    return (
        <div>
            <div className={styles.column}>
                <div className={styles.card}>
                    <h1>{projeto.nome}</h1>
                    <h2>Categoria: <span>{projeto.categoria}</span></h2>
                    <h3>Orçamento Total: <span> R$ {projeto.tetoDeGastos},00</span></h3>
                </div>
            </div>
        </div>
    )
}