import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import Breakpoints from "./Breakpoints";

const OuterContainer = styled.header`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  padding: 10px 60px;
  @media ${Breakpoints.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const PageNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const SocialNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  a {
    color: black;
    text-decoration: none;
  }
  @media ${Breakpoints.tablet} {
    margin-top: 0;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Title = styled.a`
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 3.15px;
  line-height: 29px;
  text-transform: uppercase;
  text-align: center;
`;

const Divider = styled.span`
  padding: 5px;
  &::before {
    content: "•";
  }
`;

const SocialIcon = styled.a`
  margin: 0 5px;
  font-size: 32px;
  color: #5b5650;

  &:hover {
    color: #458c9a;
    transition: all 0.3s;
  }
`;

const pages = [
  { name: "projects" },
  { name: "music" },
  { href: "/", name: "about" },
  { name: "contact" }
];

const social = [
  { class: "icon-github", url: "https://github.com/odedw" },
  { class: "icon-twitter", url: "https://twitter.com/InjaLab" },
  { class: "icon-youtube", url: "https://www.youtube.com/c/injalab" },
  {
    class: "icon-linkedin",
    url: "https://www.linkedin.com/pub/oded-welgreen/10/0/a0b"
  },
  { class: "icon-mail", url: "oded.welgreen@gmail.com" }
];
const Spacer = styled.div`
  flex: 1 0 0;
`;
const Header = () => (
  <OuterContainer>
    <Container>
      <Title href="/">Oded Welgreen</Title>
      <Spacer />
      <PageNavigation>
        {pages.map((item, i) => (
          <div key={item.name}>
            <Link href={item.href ? item.href : `/${item.name}`}>
              <a>{item.name}</a>
            </Link>
            {i < pages.length - 1 && <Divider />}
          </div>
        ))}
      </PageNavigation>

      <SocialNavigation>
        {social.map((item, i) => (
          <Link href={item.url} key={i}>
            <SocialIcon
              href={item.url}
              target="_blank"
              className={item.class}
            ></SocialIcon>
          </Link>
        ))}
      </SocialNavigation>
    </Container>
  </OuterContainer>
);

export default Header;
