import Link from "next/link";

export default function Login(){
    return (
        <>
            <h1>Login</h1>
            <Link href="/forget">Esqueceu sua senha?</Link>
        </>
    )
}