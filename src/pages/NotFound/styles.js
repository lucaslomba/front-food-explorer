import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    
    > span {
        font-size: 1.5rem;
        font-weight: bold;
    }

    > a {
        font-size: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT100};
    }
`