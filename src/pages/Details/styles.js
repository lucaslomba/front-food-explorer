import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header"
        "content"
        "footer";
`

export const Content = styled.div`
    grid-area: content;

    padding: 1.5rem 7.68rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 1.5rem 3rem;
    }

    > a {
        font-size: 1.5rem;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.LIGHT300};

        display: flex;
        align-items: center;
    }
`

export const Dish = styled.div`
    display: flex;
    gap: 3rem;

    margin-top: 2.6rem;
`

export const DashDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1.5rem;

    > h2 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT300};
    }

    > span {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT300};
    }
`

export const DashIngredients = styled.div`
    display: flex;
    gap: 0.75rem;

    > span {
        background-color: ${({ theme }) => theme.COLORS.DARK1000};
        border-radius: 5px;
        padding: 4px 8px;

        color: ${({ theme }) => theme.COLORS.LIGHT100};

        font-size: .875rem;
        line-height: 1.5rem;
    }
`

export const DashFooter = styled.div`
    display: flex;
    align-items: center;    

    gap: 2rem;

    width: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
    }
    
    > div {
        display: flex;
        align-items: center;  

        gap: .875rem;
        font-size: 1.25rem;
        font-weight: bold;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            gap: 1.16rem;
        }
    
        > svg {
            width: 1.5rem;
            height: 1.5rem;
    
            cursor: pointer;
        }
    }

    > button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO100};
        color: ${({ theme }) => theme.COLORS.LIGHT100};

        height: 3rem;
        border: 0;
        padding: 0 1rem;
        border-radius: .62rem;

        font-weight: 500;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.TOMATO200};
        }
    }
`