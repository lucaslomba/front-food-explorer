import { useAuth } from "../../hooks/auth"

export function Home(){
    const { signOut } = useAuth()

    return(
        <>
            <button type="button" onClick={signOut}>Sair</button>
        </>
    )
}