import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ResponsiveContainer from './ResponsiveContainer';

const Container = ResponsiveContainer.extend`
    padding-top: 1em;
    padding-bottom: 1em;
    a {
        color: #bbb;
    }
    a:hover {
        color: #fff;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justfiy-content: flex-start;
`;

const Title = styled.h1`margin: 0 1rem 0 0;`;

const Separator = styled.small`
    margin: 0 0.3rem;
    color: #bbb;
`;

const SocialLinkContainer = styled.div`
    color: #bbb;
    margin-right: 0.5rem;
    font-size: 1.4rem;
`;
const Spacer = styled.div`margin: auto;`;
const Header = ({ links, socialLinks }) => {
    return (
        <Container>
            <Title>
                <Link to="/">Oded Welgreen</Link>
            </Title>
            {links.map((l) => (
                <div>
                    <Link to={l.href}>
                        <span>{l.name}</span>
                    </Link>
                    {links.indexOf(l) < links.length - 1 ? <Separator>•</Separator> : ''}
                </div>
            ))}
            <Spacer />
            {socialLinks.map((l) => (
                <SocialLinkContainer>
                    <a href={l.href}>
                        <span className={`social icon-${l.name}`} />
                    </a>
                </SocialLinkContainer>
            ))}
        </Container>
    );
};

export default Header;
