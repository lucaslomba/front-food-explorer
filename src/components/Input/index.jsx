import { Container } from "./styles";

export function Input({ label, ...rest }) {
    return (
        <Container>
            <label htmlFor="">{label}</label>
            <input {...rest}/>
        </Container>
    )
}