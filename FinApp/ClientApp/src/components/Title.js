import styled from 'styled-components';


const Title = styled.h2`
    color: ${({theme,white}) => white ? theme.white :  theme.grayDark};
    font-weight: ${({theme}) => theme.bold};
    font-size: ${({theme,big}) =>  big ? theme.fontSize.xl :theme.fontSize.m};

`;

export default Title;