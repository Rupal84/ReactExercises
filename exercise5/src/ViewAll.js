import React from 'react';
import styled from 'styled-components';

const StyledPara = styled.p`
color: green;
font-size: 1.3rem;
font-weight: bold;
`;

const StyledDiv = styled.div`
text-align: left;
padding-left: 5px;
`

const ViewAll = ()=>{
    return (
        <StyledDiv><StyledPara>Keep checking! New books added every week!</StyledPara></StyledDiv>
    )
}

export default ViewAll;