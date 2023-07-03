
import { StyledButton } from "../Styled/StyledButton"

type ButtonProps = {
    children:string
}

const Button = ({children}:ButtonProps) => {
    return (
    <>
    
    <StyledButton>
        {children}
    </StyledButton>
    
    </>)
} 

export default Button