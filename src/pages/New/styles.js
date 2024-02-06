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
            grid-column: span 8;
        }
        :nth-child(5){
            grid-column: span 4;
        }
        :nth-child(6) {
            grid-column: span 12;
        }
        :nth-child(7) {
            grid-column: span 12;

            display: flex;
            justify-content: end;

            > button {
                max-width: 15rem;
            }
        }
    }
`

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: .5rem;

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT400};
        font-size: 1rem;

        font-family: 'Roboto', sans-serif;
    }

    > select {
        padding: 1rem 0.87rem;
        border-radius: 5px;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK900};

        color: ${({ theme }) => theme.COLORS.LIGHT100};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT500};
        }
    }
`

export const IngredientsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: .5rem;

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT400};
        font-size: 1rem;

        font-family: 'Roboto', sans-serif;
    }

    > .tags {
        display: flex;
        flex-wrap: wrap;
        padding: 0.4rem;

        gap: 1rem;

        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK900};
    }
`