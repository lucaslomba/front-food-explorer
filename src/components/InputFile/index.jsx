import { FiUpload } from "react-icons/fi";
import { Container, FileSelect } from "./styles";

export function InputFile({id, label, ...rest }) {
    return (
        <Container>
            <FileSelect htmlFor={id}>
                {label}

                <span> 
                    <FiUpload />

                    Selecione imagem
                </span>
            </FileSelect>
            <input type="file" id={id} {...rest}/>
        </Container>
    )
}