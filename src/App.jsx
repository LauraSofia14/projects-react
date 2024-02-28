import * as React from 'react';
import styled from 'styled-components';
import Article from './components/article.jsx';


const AppWrapper = styled.div `
background-color: none; `;

function App() {
    return (
        <AppWrapper>
        <Article></Article>
        </AppWrapper>
    );

}

export default App;