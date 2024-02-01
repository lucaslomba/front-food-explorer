import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 7.68rem;

    background-color: ${({ theme }) => theme.COLORS.DARK700};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.5rem 2.25rem;

        > img {
            height: 1.5rem;
        }

        > span {
            color: ${({ theme }) => theme.COLORS.LIGHT200};
            font-size: 1rem;
        }
    }
`