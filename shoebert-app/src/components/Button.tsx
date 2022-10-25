import React from "react";

type ButtonProps = {
    title: string;
    pageLink: any
}

//Todo. muuta Any õigeks


const Button: React.FC<ButtonProps> = ({title, pageLink}) => {
    return (
        <button onClick={pageLink}>{title}</button>
    )
}

export default Button;