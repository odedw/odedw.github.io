import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout: React.SFC = props => (
  <div>
    <Header />
    {props.children}
    <Footer/>
  </div>
);

export default PageLayout;
