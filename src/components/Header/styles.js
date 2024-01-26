import styled from 'styled-components'

export const Container = styled.div`
    padding: 1.5rem 7.68rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK600};

    > img {
        height: 1.87rem;

        &[data-is-admin="true"] {
            height: 2.43rem;
        }
    }
`

export const ButtonCart = styled.button`
    border: none;
    display: flex;
    white-space: nowrap;
    align-items: center; 

    padding: 0.75rem 2.9rem;
    border-radius: 5px;
    gap: 5px;

    > svg {
        font-size: 1.37rem;
    }
    
    color: ${({ theme }) => theme.COLORS.LIGHT100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO200};

    :hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO100};
    }
`

export const ButtonLogOut = styled.button`
    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center; 

    > svg {
        font-size: 1.37rem;
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    }
`

export const InputSearch = styled.div `
    width: 100%;

    padding: 0.75rem 6.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK900};
    border-radius: 5px;

    display: flex;
    align-items: center;

    gap: 8.7px;

    > svg {
        font-size: 1.5rem;
    }

    > input {
        width: 100%;
        background: none;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    }
`