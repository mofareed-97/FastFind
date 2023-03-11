import AppLayout from "@/common/components/AppLayout";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useSSR } from "@nextui-org/react";
import "@/assets/global.css";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});
export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <NextUIProvider theme={darkTheme}>
          {/* <NextUIProvider> */}
          <AppLayout />
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    )
  );
}
// https://fakeapi.platzi.com/
// https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page
