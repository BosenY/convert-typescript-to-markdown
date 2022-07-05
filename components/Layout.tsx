import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from './Footer'
import xw from 'xwind'
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div css={xw`flex flex-col h-screen`}>
    <Header />
    <div css={xw`flex-1`}>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
