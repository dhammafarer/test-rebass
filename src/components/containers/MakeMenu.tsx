import * as React from "react"

interface InjectedProps {
  handleClose(): void;
  toggleMenu(): void;
  open: boolean;
}

interface MakeMenuProps {
  children(props: InjectedProps): React.ReactNode;
}

interface State {
  menu: boolean;
}

class MakeMenu extends React.Component<MakeMenuProps, {}> {
  state: State = {
    menu: false
  }

  handleKeyDown = (event: any) => {
    if (event.keyCode === 27) {
      this.handleClose();
    }
  }

  componentDidUpdate(prevProps: MakeMenuProps, prevState: State) {
    if (!prevState.menu && this.state.menu) {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }

  handleClose = () => {
    this.setState({menu: false})
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  toggleMenu = () => this.setState({menu: !this.state.menu})

  render() {
    return this.props.children({
      open: this.state.menu,
      handleClose: this.handleClose,
      toggleMenu: this.toggleMenu
    });
  }
}

export {
  MakeMenu,
};
