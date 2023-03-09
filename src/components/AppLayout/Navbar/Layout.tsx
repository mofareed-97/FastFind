// import { Content } from "./Content.js";
import { ReactNode } from "react";
import { styled } from "@nextui-org/react";

const Box = styled("div", {
  boxSizing: "border-box",
});
export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    {/* <Content /> */}
  </Box>
);
