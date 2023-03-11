import type { CSS } from "@nextui-org/react";

import { styled } from "@nextui-org/react";
import { ReactNode } from "react";

export const BoxStyled = styled("div", {
  // base styles...
  // variants...
});

interface IProps {
  children: ReactNode;
  classes?: CSS;
}
const Box = ({ children, classes }: IProps) => {
  return <BoxStyled css={classes}>{children}</BoxStyled>;
};

export default Box;
