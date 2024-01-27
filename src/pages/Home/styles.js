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
        "footer"
`

export const Content = styled.div`
    grid-area: content;
`