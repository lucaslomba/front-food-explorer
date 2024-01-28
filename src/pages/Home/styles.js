import styled from "styled-components";

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
`

export const Highlight = styled.div`
    height: 16.25rem;
    display: flex;
    justify-content: end;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.GRADIENTS200};

    position: relative;

    margin-top: 10.2rem;

    > img {
        position: absolute;
        width: 50%;
        bottom: -14px;
        left: -70px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-right: 6.2rem;
    
        > h1 {
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT300};
            font-weight: 400;
        }
    
        > span {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT300};
            font-weight: 400;
        }
    }
`
