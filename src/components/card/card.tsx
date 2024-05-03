import React, { HTMLAttributes } from "react";

interface ICard extends HTMLAttributes<HTMLDivElement>{}
interface IHeader extends HTMLAttributes<HTMLDivElement>{}
interface IHeaderTitle extends HTMLAttributes<HTMLHeadingElement>{}
interface IHeaderTools extends HTMLAttributes<HTMLDivElement>{}
interface IBody extends HTMLAttributes<HTMLDivElement>{}
interface IFooter extends HTMLAttributes<HTMLDivElement>{}

export function HeaderTitle({ children, ...props }:IHeaderTitle){
    return (<h3 className="card-title" {...props}>{children}</h3>);
}

export function HeaderTools({ children, ...props}: IHeaderTools){
    return (<div className="card-tools" {...props}>
        {children}
    </div>)
}

export function Header({ children, ...props }:IHeader){
    return (
        <div className="card-header" {...props}>
            {children}
        </div>
    );
}

export function Body({ children, ...props }:IBody){
    return (<div className="card-body" {...props}>
        {children}
    </div>)
}

export function Footer({ children, ...props }:IFooter){
    return (<div className="card-footer" {...props}>
        {children}
    </div>)
}

function Card({children, ...props}: ICard){
    return (
        <div className="card" {...props}>
            {children}
      </div>
    );
}

export default Card;