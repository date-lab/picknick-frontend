import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import Index from '@components';
import './index.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    letter-spacing: 0.3px;
  }
`

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Index/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Index />
)
