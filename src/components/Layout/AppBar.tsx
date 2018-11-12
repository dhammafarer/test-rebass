import * as React from "react";
import { Box, Button, Flex, Text } from "rebass";
import { Menu } from "styled-icons/material";
import styled from "styled-components";

interface ButtonProps {
  onClick?(): void;
}

const Btn: React.SFC<ButtonProps> = (props) => (
  <Button
    {...props}
  />
);

const StyledButton = styled(Btn)`
  background: transparent;
  transition: background .1s ease-in;
  color: red;
  &:active {
    background: rgba(0,0,0,0.4);
  }
  &:focus {
    outline: 0;
  }
`

interface AppBarProps {
  handleClose(): void;
  toggleMenu(): void;
  open: boolean;
  logo: any;
}

export const AppBar: React.SFC<AppBarProps> = ({ toggleMenu, open, handleClose }) => (
  <Flex
    flexDirection="row"
    justifyContent="space-between"
    p={3}
    bg="grey"
    css={{
      zIndex: 100,
      boxShadow: "2px 2px 2px rgba(0,0,0,0.25)",
    }}
  >
    <Box>
      <Text fontSize={[3,4,5]} fontFamily="sans">
        {open ? "open" : "close"}
      </Text>
    </Box>
    <Flex alignItems="center">
      <StyledButton onClick={toggleMenu}>
        <Menu color="inherit" size={24}/>
      </StyledButton>
    </Flex>
  </Flex>
);
