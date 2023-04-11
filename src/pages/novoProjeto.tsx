import Link from 'next/link'
import styles from './novoProjeto.module.css'
import { useForm as UseForm } from 'react-hook-form'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { useQuery } from 'react-query';
import ProjetosService from '@/services/ProjetosService';

const schema = Yup.object().shape({
    nome: Yup.string().required("Campo Obrigatório"),
    categoria: Yup.string().min(3, 'Selecione uma opção').required("Selecione uma opção"),
    tetoDeGastos: Yup.number().min(0, 'Campo Obrigatório').default(0).moreThan(0, 'Você precisa gastar mais!').required("Campo Obrigatório")
})

const verificarError = (message: string | undefined) => {

    if(message != undefined && message.length > 50){
        return "Campo Obrigatório";
    }
    return message;
}

export default function novoProjeto(){

    const projetosService = new ProjetosService();

    const { register, handleSubmit, formState, reset } = UseForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            nome: '',
            categoria: '',
            tetoDeGastos: 1
        }
    });

    const { errors, isSubmitting } = formState;

    const handleSubmitData = (dataForm: any) => {
        
    }

    return (
        <div className={styles.contentAll}>

            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>
                
                <div className={styles.formControl}>
                    <label>Nome do Projeto: </label>
                    <input {... register('nome')} type="text" placeholder="insira o nome do projeto"></input>
                    {errors.nome && (
                        <span className={styles.errorNome}>* {errors.nome.message}</span>
                    )}
                </div>

                <div className={styles.formControl}>
                    <label>Orçamento do Projeto: </label>
                    <input {... register('tetoDeGastos')} type="number" placeholder="insira o orçamento total" min='0'></input>
                    {errors.tetoDeGastos && (
                        <span className={styles.errorGastos}>* {verificarError(errors.tetoDeGastos.message)}</span>
                    )}
                </div>

                <div className={styles.formControl}>
                    <label>Categoria do Projeto: </label>
                    <select {... register('categoria')}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-End">Back-end</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Database">Database</option>
                        <option value="Redes">Redes</option>
                        <option value="Hardware">Manutenção Hardware</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.categoria && (
                        <span className={styles.errorCategoria}>* {errors.categoria.message}</span>
                    )}
                </div>

                <div>
                <button className={styles.btn} id="btn" type='submit'>Criar Projeto</button>
                </div>

            </form>
        </div>
    )
}