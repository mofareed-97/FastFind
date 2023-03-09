import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react/types/theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
// https://fakeapi.platzi.com/
// https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page
