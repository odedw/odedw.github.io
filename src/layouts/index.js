import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ResponsiveContainer from '../components/ResponsiveContainer';
import Header from '../components/header';
import './index.css';
import styled from 'styled-components';
import { graphql } from 'graphql';

//TODO meta and title
const LayoutContainer = styled.div``;
const Divider = styled.div`border-bottom: 1px solid #eee;`;
const Layout = ({ children, data }) => (
    <LayoutContainer>
        <Helmet>
            <title>Oded Welgreen</title>
        </Helmet>

        <Header
            links={data.allHeaderlinksJson.edges.map((obj) => obj.node)}
            socialLinks={data.allSociallinksJson.edges.map((obj) => obj.node)}
        />
        <Divider />
        <div>
            <ResponsiveContainer>{children()}</ResponsiveContainer>
        </div>
    </LayoutContainer>
);

Layout.propTypes = {
    children: PropTypes.func
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
        allHeaderlinksJson {
            edges {
                node {
                    href
                    name
                }
            }
        }
        allSociallinksJson {
            edges {
                node {
                    href
                    name
                }
            }
        }
    }
`;
