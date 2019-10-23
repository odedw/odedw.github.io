import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.header`
  display: flex;
  flex-direction: row;
`;

const PageNavigation = styled.nav`
  display: flex;
  flex-direction: row;
`;

const SocialNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
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

const Header = () => (
  <Container>
    <Title>Oded Welgreen</Title>
    <PageNavigation>
      {pages.map((item, i) => (
        <div key={item.name}>
          <Link href={item.href ? item.href : `/${item.name}`}>
            <a>{item.name}</a>
          </Link>
          {i < pages.length - 1 && <span>•</span>}
        </div>
      ))}
    </PageNavigation>

    <SocialNavigation>
      {social.map(item => (
        <Link href={item.url}>
          <a target="_blank" className={item.class}></a>
        </Link>
      ))}
    </SocialNavigation>
  </Container>
);

export default Header;
