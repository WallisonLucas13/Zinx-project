import ProjetosService from "@/services/ProjetosService";
import { Projeto } from "@/types/Projeto"
import { useRouter } from "next/router";
import { useQuery } from "react-query";


export default function Projeto(){

    const router = useRouter();
    const id = router.query.id;

    const projetosService = new ProjetosService();

    const getProjeto = () => {
        return projetosService.getOneProjetoById(Number(id));
    }

    const { data, isLoading } = useQuery({
        queryKey: `projeto[${id}]`,
        queryFn: getProjeto
    })

    return (
        <div>
            {data && (
                <div>
                    <div><h1>{data.nome}</h1></div>
                    <div><h2>{data.categoria}</h2></div>
                    <div><h3>{data.tetoDeGastos}</h3></div>
                </div>
            )}

            {isLoading && (
                <div><h1>Carregando...</h1></div>
            )}
        </div>
    )
}