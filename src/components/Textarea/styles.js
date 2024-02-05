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

    > textarea {
        width: 100%;
        height: 150px;

        background-color: ${({ theme }) => theme.COLORS.DARK900};
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    
        border: none;
        resize: none;
    
        margin-bottom: 8px;
        border-radius: 8px;
    
        padding: 16px;
    
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT500};
        }
    }

`