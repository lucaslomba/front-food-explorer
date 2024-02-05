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

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: grid;
        grid-template-rows: auto; 
        grid-template-columns: repeat(12, 1fr);

        :nth-child(1){
            grid-column: span 3;
        }
        :nth-child(2){
            grid-column: span 5;
        }
        :nth-child(3){
            grid-column: span 4;
        }
        :nth-child(4){
            grid-column: span 7;
        }
        :nth-child(5){
            grid-column: span 5;
        }
        :nth-child(6) {
            grid-column: span 12;
        }
    }
`