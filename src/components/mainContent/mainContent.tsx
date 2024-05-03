import React, { HTMLAttributes } from "react";

interface IMainContent extends HTMLAttributes<HTMLDivElement>{}
interface IContentHeader extends HTMLAttributes<HTMLDivElement>{}
interface IContentBody extends HTMLAttributes<HTMLDivElement>{}

export function ContentHeader({ children, ...props }: IContentHeader){
    return <div className="content-header" {...props}>
        {children}
    </div>
}

export function ContentBody({ children, ...props }: IContentBody){
    return <div className="content" {...props}>
        {children}
    </div>
}

function MainContent({ children, ...props }: IMainContent) {
    return (
        <div className="content-wrapper" {...props}>
            {children}
        </div>
    )
}

export default MainContent;