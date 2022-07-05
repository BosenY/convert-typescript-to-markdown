import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from './Footer'
import GitHubForkRibbon from 'react-github-fork-ribbon';
import xw from 'xwind'
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <GitHubForkRibbon href="https://github.com/BosenY/convert-typescript-to-markdown"
      target="_blank"
      position="right">
      Fork me on GitHub
    </GitHubForkRibbon>
    <div css={xw`flex flex-col h-screen`}>
      <Header />
      <div css={xw`flex-1`}>{props.children}</div>
      <Footer />
    </div>
  </>
);

export default Layout;
