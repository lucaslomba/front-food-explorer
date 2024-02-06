import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    padding: 0 1.6rem;
    border-radius: 0.8rem;
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT300}` : 'none'};

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT600};
    
    svg {
        vertical-align: middle;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT300};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT300};
    }

    > input {
        height: 2.2rem;

        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT100};
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;