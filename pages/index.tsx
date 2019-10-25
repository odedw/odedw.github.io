import * as React from "react";
import Page from "../components/PageLayout";
import styled from "styled-components";
const Content = styled.div`
`;
const Index = () => (
  <Page>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Content>
    <div
      style={{
        backgroundImage:
          "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg….3%202.4%201.2.8%202.3%201.6%203.4%202.6l-3%203.1z%22%2F%3E%0A%3C%2Fsvg%3E)"
      }}
    ></div>
  </Page>
);

export default Index;
