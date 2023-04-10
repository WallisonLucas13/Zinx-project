import Link from "next/link";

export default function Forget(){
    return (
        <>
            <h1>Troque sua senha!</h1>
            <p>Cuidado para não Esquecer novamente!</p>
            <Link href="/login">Fazer Login</Link>
        </>
    )
}