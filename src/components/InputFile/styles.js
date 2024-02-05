import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    > input {
        display: none;
    }
`

export const FileSelect = styled.label`
    color: ${({ theme }) => theme.COLORS.LIGHT400};
    font-size: 1rem;

    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;

    gap: .5rem;

    > span {
        padding: 0.9rem 0.87rem;
        border-radius: 5px;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK900};

        color: ${({ theme }) => theme.COLORS.LIGHT100};

        display: flex;
        align-items: center;

        gap: .5rem;

        cursor: pointer;
    }
`