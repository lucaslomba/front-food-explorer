import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO100};
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    height: 3rem;
    border: 0;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: .62rem;

    font-weight: 500;

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO400};
        cursor: not-allowed;
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO200};
    }
`