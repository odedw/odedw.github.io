import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 1440px;
  padding: 0 60px;
`;

const Content = styled.div`
  max-width: 1440px;
  padding: 20px 60px;
  font-family: "Vollkorn", serif;
`;

interface Props {
  title?: string;
}

const PageLayout: React.SFC<Props> = props => (
  <Container>
    <Head>
      <title>
        {props.title ? `${props.title} - Oded Welgreen` : "Oded Welgreen"}
      </title>
    </Head>
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default PageLayout;
