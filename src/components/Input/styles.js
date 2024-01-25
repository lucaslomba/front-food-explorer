import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: .5rem;

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT400};
        font-size: 1rem;

        font-family: 'Roboto', sans-serif;
    }

    > input {
        padding: 0.75rem 0.87rem;
        border-radius: 5px;

        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT100};
        background-color: transparent;

        color: ${({ theme }) => theme.COLORS.LIGHT100};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT500};
        }
    }
`