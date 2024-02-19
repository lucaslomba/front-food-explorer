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

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 2rem;
        }
    }
`

export const Dish = styled.div`
    display: flex;
    gap: 3rem;

    margin-top: 2.6rem;

    > img {
        max-width: 50%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        margin-top: 1.33rem;

        > img {
            max-width: 100%;
        }
    }
`

export const DishDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        align-items: center;
    }

    gap: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 2rem;
    }

    > h2 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT300};

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 2.25rem;
            text-align: center;
        }
    }

    > span {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT300};

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.33rem;
            text-align: center;
        }
    }
`

export const DishIngredients = styled.div`
    display: flex;
    gap: 0.75rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    > span {
        background-color: ${({ theme }) => theme.COLORS.DARK1000};
        border-radius: 5px;
        padding: 4px 8px;

        color: ${({ theme }) => theme.COLORS.LIGHT100};

        font-size: .875rem;
        line-height: 1.5rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            text-align: center;
        }
    }
`

export const DishFooter = styled.div`
    display: flex;
    align-items: center;    

    gap: 2rem;

    width: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-top: 2rem;
        justify-content: center;
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