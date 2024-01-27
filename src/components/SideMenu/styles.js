import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
    background-color: ${({ theme }) => theme.COLORS.DARK400};
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-area: none;
        position: absolute;
        z-index: 1;

        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;

        &[data-menu-is-open="true"] {
        transform: translateX(0);
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }

`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    gap: 1rem;

    h1 {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    padding: 4rem 1.75rem 1.75rem;

    background-color: ${({ theme }) => theme.COLORS.DARK700};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 3rem 2.3rem 0;

  > button {
    border: none;
    background-color: transparent;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.LIGHT300};
    font-size: 2rem;

    height: 54px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK1000};
  }
`;

export const InputSearch = styled.div `
    width: 100%;

    padding: 0.75rem 1.16rem;
    background-color: ${({ theme }) => theme.COLORS.DARK900};
    border-radius: 5px;

    display: flex;
    align-items: center;

    gap: 8.7px;

    > svg {
        font-size: 1.5rem;
    }

    > input {
        width: 100%;
        background: none;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    }

    margin-bottom: 3rem;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT100};
  }
`;

