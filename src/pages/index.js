import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import CircleArt from '../components/CircleArt';
import CarouselArt from '../components/CarouselArt';
const Container = styled.div`padding 1em 0;`;
const ProfileImage = styled.img`
    width: 12em;
    height: 12em;
`;
const SectionContainer = styled.div`
    margin-bottom: 1em;
    clear: both;
`;
const ReverseSectionContainer = SectionContainer.extend`flex-direction: row-reverse;`;
const SectionHeader = styled.h1``;
const SectionText = styled.div``;
const General = styled.div`flex: 1;`;
const Left = styled.div`
    margin-bottom: 1em;
    @media all and (min-width: 480px) {
        display: inline-block;

        float: left;
        margin-right: 1em;
    }
`;
const Right = styled.div`
    margin-bottom: 1em;
    @media all and (min-width: 480px) {
        float: right;
        margin-left: 1em;
        display: inline-block;
    }
`;
const Interests = styled.div`flex: 1;`;
const Art2 = styled.div``;
const Skills = styled.div`flex: 1;`;

const IndexPage = () => (
    <Container>
        <SectionContainer>
            <Left>
                <ProfileImage src="/static/images/portrait.png" />
            </Left>
            <General>
                <SectionHeader>I Am a</SectionHeader>
                <SectionText>
                    Director of Engineering at{' '}
                    <a target="_blank" href="https://www.solutotlv.com/">
                        Soluto
                    </a>{' '}
                    by day,maker of <a href="https://www.odedwelgreen.com/projects">cool things</a> by night,{' '}
                    <a href="https://www.odedwelgreen.com/music">musician</a> on the weekends, husband and father around
                    the clock.
                </SectionText>
            </General>
        </SectionContainer>
        <SectionContainer>
            <Right>
                <CircleArt />
            </Right>
            <Interests>
                <SectionHeader>I Am Interested in</SectionHeader>
                <SectionText>
                    Procedural content generation, which for me is creating art that creates art. I'm a gamer and a
                    musician as well and am always looking for interesting ways to combine all three.
                </SectionText>
            </Interests>
        </SectionContainer>
        <SectionContainer>
            <Left>
                <CarouselArt />
            </Left>
            <Skills>
                <SectionHeader>I Am Good at</SectionHeader>
                <SectionText>
                    Learning new things and finding the right tool for the job. I started developing in C++, then Java
                    and .Net, took a detour with Objective C and inevitably ended up with Javascript. Today I use a bit
                    of each in my day job and mainly Javascript in my spare time. I have in experience in design and
                    development of scalable cloud services as well web and mobile applications. I am passionate about
                    user experience & Lean methodology. There has never been a better time for creation and creativity -
                    we can deploy a site, scale to multiple instances, easliy spin up a VM or do many other things that
                    used to take days, in a matter of minutes and at very low or zero cost. All of these are no longer{' '}
                    <a href="http://www.hanselman.com/blog/WeAreAbstractingOnTheShouldersOfGiants.aspx" target="_blank">
                        obstacles
                    </a>{' '}
                    on our creative path.
                </SectionText>
            </Skills>
        </SectionContainer>
    </Container>
);

export default IndexPage;
