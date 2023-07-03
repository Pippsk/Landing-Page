import styled from 'styled-components'

type StyledButtonProps = {
    bg:string
    color:string
}

export const StyledButton = styled.button<StyledButtonProps>`
    border-radius:50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding:15px 60px;
    background-color: ${({bg}) => bg || "white"};
    color:${({color}) => color || "black"};
    transition:0.5s all ease;

    &:hover {
        opacity:0.9;
        transform:scale(0.9);
    }

`
