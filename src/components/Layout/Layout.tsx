import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

import { Normalize } from "styled-normalize";
import { Head } from "./Head";

import { Root } from "./Root";
import { Content } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

interface Data {
  logo: any;
  logoWhite: any;
}

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout2Query {
        logo: file(relativePath: {eq: "logos/logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: {eq: "logos/logo-white.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }`
    }
    render={(data: Data) => {
      return (
        <ThemeProvider theme={theme}>
          <Root>
            <Normalize/>
            <Head/>
            <Content>
              <Header logo={data.logo}/>
              <Main>{children}</Main>
              <Footer />
            </Content>
          </Root>
        </ThemeProvider>
      ); }
    }
  />
);

export const RootLayout = Layout;
