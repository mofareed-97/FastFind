import AppLayout from "@/components/AppLayout";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class">
      <NextUIProvider>
        <AppLayout />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
// https://fakeapi.platzi.com/
// https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page
