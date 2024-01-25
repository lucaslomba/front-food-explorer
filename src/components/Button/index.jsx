import { Container } from './styles'

export function Button({ title, disabled = false, ...rest }) {
    return (
        <Container 
            type="button" 
            disabled={disabled} 
            {...rest}
        >
            {title}
        </Container>
    )
}