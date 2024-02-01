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
`

export const Highlight = styled.div`
    width: calc(100vw - 15.36rem);

    height: 10rem;
    display: flex;
    justify-content: end;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.GRADIENTS200};

    border-radius: .5rem;

    position: relative;

    margin-top: 2.1rem;
    margin-bottom: 3.8rem;

    > img {
        position: absolute;
        width: 50%;
        bottom: 0;
        left: -2rem;

        
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            max-width: 60%;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
            max-width: 40%;
        }
    }

    > div {
        width: 60%;

        display: flex;
        flex-direction: column;
    
        padding-right: 8px;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 60%;
        }

        > h1 {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT300};
            font-weight: 600;

            @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
                font-size: 2.5rem;
                font-weight: 400;
            }
        }
    
        > span {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT300};
            font-weight: 400;
        }

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-top: 10rem;
    }
`
