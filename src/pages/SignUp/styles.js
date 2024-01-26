import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    
    > main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    > div img {
        height: 2.94rem;
        margin: auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        > div {
            justify-content: flex-start;
        }

        > div img {
            margin: 0!important;

            height: 2.75rem;

            padding-left: 5.41rem;
        }
    }
`;

export const Form = styled.form`
    width: 60%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK700};

    border-radius: 1rem;

    > h1 {
        font-size: 2rem;
        font-weight: normal;
        text-align: center;
    }

    > a {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    } 

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 80%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        h1 {
            display: none;
        }
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK400};
        padding: 4rem 3.91rem 4rem 5.41rem;
    }
`;
