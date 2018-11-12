import * as React from "react";
import { Box } from "rebass";
import styled from "styled-components";

interface InjectedDrawerProps {
  width: number | number[];
  open: boolean;
  handleClose(): void;
  toggleMenu(): void;
}

interface DrawerProps extends InjectedDrawerProps {
  children(props: InjectedDrawerProps): React.ReactNode;
}

const DrawerWrapper = styled(Box)<{open: boolean}>`
  z-index: 1400;
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-out;
`;

const DrawerOverlay = styled(Box)<{open: boolean, onClick(): void}>`
  z-index: 1400;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: ${props => props.open ? "auto" : "none"};
  background: rgba(0,0,0,0.4);
  height: 100%;
`;

const DrawerContent = styled(Box)<{open: boolean}>`
  z-index: 1400;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Drawer: React.SFC<DrawerProps> = ({width, open, toggleMenu, handleClose, children}) => {
  return (
    <>
      <DrawerOverlay open={open} onClick={handleClose}/>
      <DrawerWrapper
        open={open}
        width={200}
      >
        <DrawerContent open={open}>
          {children({
            open: open,
            handleClose: handleClose,
            toggleMenu: toggleMenu,
            width: width,
          })}
        </DrawerContent>
      </DrawerWrapper>
    </>
  );
}

export {
  Drawer
};
