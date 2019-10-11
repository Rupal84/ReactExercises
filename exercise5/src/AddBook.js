import React from 'react';
import styled from 'styled-components';

const StyledPara = styled.p`
font-size: 1.3rem;
font-weight: bold;
color: red;
`
const StyledDiv = styled.div`
text-align: left;
padding-left: 5px;
`

export const AddBook = () => {
    return (
        <StyledDiv>
            <StyledPara>Sorry, we're still working on this feature</StyledPara>
            </StyledDiv>
    )
}