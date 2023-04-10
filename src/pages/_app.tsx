"use client";

import NavBar from '@/components/Layout/NavBar';
import PrivateRoute from '@/components/PrivateRoute';
import { checkIsPublicRoute } from '@/functions/check_is_public_route';
import { queryClient } from '@/services/queryClient';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {

  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <NavBar/>
      {isPublicPage && (
        <>
          <Component {...pageProps} />
        </>
      )}

      {!isPublicPage && (
          <>
            <PrivateRoute>
              <Component {...pageProps} />
            </PrivateRoute>
          </>
      )}
      </QueryClientProvider>
    </>
  )
}
