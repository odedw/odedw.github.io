import React from 'react';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
    max-width: 28rem;

    margin: auto;
    clear: both;
    @media (min-width: 38rem) {
        max-width: 32rem;
    }
    @media (min-width: 56rem) {
        max-width: 45rem;
    }
`;

export default ResponsiveContainer;
