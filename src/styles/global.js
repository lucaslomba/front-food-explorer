import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK400};
        color: ${({ theme }) => theme.COLORS.LIGHT100};
        font-family: 'Poppins', sans-serif;

        -webkit-font-smoothing: antialiased;
    }
    
    border-style, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2;
    }

    button:hover, a:hover {
        cursor: pointer;
        transition: brightness(0.9);
    }
`