import { checkAuthUser } from "@/functions/check_user_authenticated"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import {APP_ROUTES} from '../../constantes/app-routes';

type PrivateRouteProps = {
    children: ReactNode
}

const PrivateRoute = ({children}: PrivateRouteProps) => {

    const {push} = useRouter();

    const isAuth = checkAuthUser();

    useEffect(() => {
        if(!isAuth){
            push(APP_ROUTES.public.login);
        }
    }, [isAuth, push]);

    return (
        <>
            {!isAuth && null}
            {isAuth && children}
        </>
    );
}

export default PrivateRoute;