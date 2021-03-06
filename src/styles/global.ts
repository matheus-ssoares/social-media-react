import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
  }
  :root{
    --blue: #0CAACD;
    --orange:#ffa500;
  }
  html{
        @media(max-width:1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width:720px){
            font-size: 87.5%; //14px
        }
  }
  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    --roboto-font-family: 'Roboto', sans-serif;
    font-family: var(--roboto-font-family);
    background:${({ theme }) => theme.body};
  }
  button{
      user-select: none;
      cursor: pointer;
  }
    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h1, h3, h4, h5, h6, strong{
        font-weight:600;
    }
    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left:0;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: ${({ theme }) => theme.body};
        padding: 3rem;
        position: relative;
        border-radius:0.25rem ;
        
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        fill: ${({ theme }) => theme.lines};
        &:hover{
            filter: brightness(0.8);
        }
    }
`;

interface Breakpoints {
  tablet: string;
  mobileMedium: string;
}

export const breakpoints: Breakpoints = {
  tablet: `(max-width: 650px)`,
  mobileMedium: `(max-width: 380px)`,
};
