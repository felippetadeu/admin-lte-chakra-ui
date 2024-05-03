import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";

type DropdownMenuSide = '' | ' dropdown-menu-left' | ' dropdown-menu-right'
type DropdownMenuSize = '' | ' dropdown-menu-lg' | ' dropdown-menu-sm'

interface IDropdown extends HTMLAttributes<HTMLElement> {}
interface IDropdownDivider extends HTMLAttributes<HTMLElement> {}
interface IDropdownHeader extends HTMLAttributes<HTMLElement> {}
interface IDropdownTitle extends HTMLAttributes<HTMLElement> {}
interface IDropdownItem extends AnchorHTMLAttributes<HTMLAnchorElement> {}
interface IDropdownMenu extends HTMLAttributes<HTMLElement> {
    side?: DropdownMenuSide,
    size?: DropdownMenuSize
}

export function DropdownItem({ href="#", children, ...props }: IDropdownItem){
    return (
        <a className={`dropdown-item`} href={href} {...props}>{children}</a>
    )
}

export function DropdownDivider({ children, ...props }: IDropdownDivider) {
    return (
        <div className="dropdown-divider" {...props}>{children}</div>
    )
}

export function DropdownHeader({ children, ...props }: IDropdownHeader) {
    return (
        <span className="dropdown-item dropdown-header" {...props}>{children}</span>
    )
}

export function DropdownTitle({ children, ...props }: IDropdownTitle) {
    return (
        <h3 className="dropdown-title" {...props}>{children}</h3>
    )
}

export function DropdownMenu({ size = '', side = '', children, ...props }:IDropdownMenu){

    return (
    <div className={`dropdown-menu ${size} ${side}`} aria-labelledby="navbarDropdown2" {...props}>
        {children}
    </div>
    )
}