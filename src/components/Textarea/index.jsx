import { Container } from "./styles";

export function Textarea({label, ...rest}){
    return (
        <Container>
            <label htmlFor="">{label}</label>
            <textarea {...rest}>

            </textarea>
        </Container>
    )
}