import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

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

const PageLayout: React.SFC = props => (
  <Container>
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default PageLayout;
