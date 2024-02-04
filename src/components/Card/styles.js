import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK200};

    padding: 1.5rem 1.5rem 2.87rem;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    position: relative;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1.1rem;

        font-size: 1.5rem;
    }
    
    > img {
        width: 176px;
        height: 176px;

        border-radius: 50%;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 88px;
            height: 88px;
        }
    }

    > span {
        font-size: 0.87rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT400};

        font-family: 'Roboto', sans-serif;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: none;
        }
    }

    > h2 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE200};

        font-family: 'Roboto', sans-serif;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.5rem;
        }
    }
`

export const LinkTitle = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT300};

    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1.16rem;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;    

    width: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
    }
    
    > button {
        margin-left: 1rem;
        margin-top: 0;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin-top: 1.5rem;
        }
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
`