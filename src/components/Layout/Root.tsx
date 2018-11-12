import * as React from "react";
import { Box } from "rebass";


export const Root: React.SFC<{}> = (props) => (
  <Box
    css={{
      position: "relative",
      overflowX: "hidden",
    }}
    {...props}
  />
);
