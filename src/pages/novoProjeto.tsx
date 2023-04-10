import Link from 'next/link'
import styles from './novoProjeto.module.css'
import { useForm as UseForm } from 'react-hook-form'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    nome: Yup.string().required("Campo Obrigatório"),
    categoria: Yup.string().min(3, 'Selecione uma opção').required("Selecione uma opção"),
    tetoDeGastos: Yup.number().default(0).moreThan(0, 'Defina um teto de gastos sólido').required("Campo Obrigatório")
})

export default function novoProjeto(){

    const { register, handleSubmit, formState, reset } = UseForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            nome: '',
            categoria: '',
            tetoDeGastos: 0
        }
    });

    const { errors, isSubmitting } = formState;

    console.log(errors);

    const handleSubmitData = (data: any) => {
        console.log('submit', data)
    }

    return (
        <div>

            <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>

            <h1>Crie seu novo Projeto</h1>
                
                <div>
                    <label>Nome do Projeto: </label>
                    <input {... register('nome')} type="text" placeholder="insira o nome do projeto"></input>
                    {errors.nome && (
                        <p className={styles.errorNome}>{errors.nome.message}</p>
                    )}
                </div>

                <div>
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
                        <p className={styles.errorCategoria}>{errors.categoria.message}</p>
                    )}
                </div>

                <div>
                    <label>Teto de Gastos: </label>
                    <input {... register('tetoDeGastos')} type="number" placeholder="insira o teto de gastos" value="0"></input>
                    {errors.tetoDeGastos && (
                        <p className={styles.errorGastos}>{errors.tetoDeGastos.message}</p>
                    )}
                </div>

                <div>
                <button className={styles.btn} id="btn" type='submit'>Criar Projeto</button>
                </div>

            </form>
        </div>
    )
}