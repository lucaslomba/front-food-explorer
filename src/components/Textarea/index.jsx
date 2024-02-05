import { Container } from "./styles";

export function Textarea({label, value, ...rest}){
    return (
        <Container>
            <label htmlFor="">{label}</label>
            <textarea {...rest}>
                {value}
            </textarea>
        </Container>
    )
}