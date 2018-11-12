import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n/withIntl";
import { Drawer } from "../components/Drawer/Drawer";
import { MakeMenu } from "../components/containers/MakeMenu";
import { Box } from "rebass";


type Props = {} & InjectedIntlProps;

const IndexPage: React.SFC<Props> = (({ intl }) => {
  return (
    <Layout>
      <MakeMenu>
        {ip =>
          <>
            <button onClick={ip.toggleMenu}>
              hi
            </button>
            <Drawer
              handleClose={ip.handleClose}
              toggleMenu={ip.toggleMenu}
              open={ip.open}
              width={1/2}
            >
              {dp =>
                <Box bg="red" width={200}>
                  Drawer Content
                </Box>
              }
            </Drawer>
          </>
        }
      </MakeMenu>
      index
    </Layout>
  );
});

export default withIntl(injectIntl(IndexPage));
