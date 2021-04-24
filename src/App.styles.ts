import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body {
    color: #F7E1DD;
    background-color: #FF5733;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

/*button {
    color: white;
    background-color: #FF5638;
}*/

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
`;