import React, { ButtonHTMLAttributes } from "react";
import { Button as ChakraButton } from '@chakra-ui/react';

type ButtonSizes = '' | 'btn-lg' | 'btn-sm' | 'btn-xs' ;
type ButtonBorders = '' | 'btn-flat';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSizes;
    border?: ButtonBorders;
}

function Button({ size='', border='', children, ...props } : IButton){
    const className = `btn ${(props.className || '')} ${size} ${border}`
    return <ChakraButton {...props} className={className}>{children}</ChakraButton>
}

export default Button;