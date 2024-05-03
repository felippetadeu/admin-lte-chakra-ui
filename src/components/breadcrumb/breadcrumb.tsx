import React, { HTMLAttributes, LiHTMLAttributes, OlHTMLAttributes } from "react";

interface IBreadcrumb extends OlHTMLAttributes<HTMLOListElement>{}
interface IBreadcrumbItem extends LiHTMLAttributes<HTMLLIElement>{
    active: boolean;
}

function Breadcrumb({children, ...props}: IBreadcrumb){
    return (<ol className="breadcrumb float-sm-right" {...props}>
        {children}
    </ol>)
}

export function Item({ children, active=false }: IBreadcrumbItem){
    const activeClass = active ? 'active' : ''
    return <li className={`breadcrumb-item ${activeClass}`}>{children}</li>
}

export default Breadcrumb;