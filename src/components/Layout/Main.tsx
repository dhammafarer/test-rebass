import * as React from "react";
import { Box } from "rebass";


export const Main: React.SFC<{}> = (props) => (
  <Box
    bg="white"
    css={{
      maxWidth: "1400px",
      width: "100%",
      margin: "0 auto",
      flexGrow: 1,
    }}
    {...props}
  />
);
