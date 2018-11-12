import * as React from "react";
import { Flex } from "rebass";


export const Content: React.SFC<{}> = (props) => (
  <Flex
    flexDirection="column"
    bg="lightgray"
    css={{
      minHeight: "100vh",
      overflowX: "hidden",
    }}
    {...props}
  />
);
