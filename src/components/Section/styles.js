import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
    margin: 28px 0;

    > h2 {
        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.LIGHT300};
        font-size: 2rem;
        font-weight: 400;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.5rem;
        }
    }
`