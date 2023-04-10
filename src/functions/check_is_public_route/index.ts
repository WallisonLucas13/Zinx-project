import { APP_ROUTES } from "@/constantes/app-routes"

export const checkIsPublicRoute = (route: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public);

    return appPublicRoutes.includes(route);
}