import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { graphql } from 'graphql';
import importScripts from '../utils/importScripts';

const Container = styled.div`padding 1em 0;`;
const CodepenContainer = styled.li`list-style: none;`;
class ProjectsPage extends React.Component {
    componentDidMount() {
        importScripts([ 'https://codepen.io/assets/embed/ei.js' ]); //.then(() => {});
    }
    render() {
        const { data } = this.props;
        return (
            <Container>
                <ul>
                    {data.allCodepensJson.edges.map((obj) => obj.node).map((codepen) => (
                        <CodepenContainer key={codepen.hash}>
                            <h3>{codepen.name}</h3>
                            <p
                                data-height="329"
                                data-theme-id="6466"
                                data-slug-hash={codepen.hash}
                                data-default-tab="result"
                                className="codepen"
                            />
                        </CodepenContainer>
                    ))}
                </ul>
            </Container>
        );
        return;
    }
}
export default ProjectsPage;
export const query = graphql`
    query SiteProjectsQuery {
        allProjectsJson {
            edges {
                node {
                    name
                    gfycat
                    shortDesc
                    repo
                    link
                }
            }
        }
        allCodepensJson {
            edges {
                node {
                    hash
                    name
                }
            }
        }
    }
`;
