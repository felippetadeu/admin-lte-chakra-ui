import React, { HTMLAttributes } from "react"

interface IHeader extends HTMLAttributes<HTMLDivElement>{}
interface ITitle extends HTMLAttributes<HTMLDivElement>{}
interface IBody extends HTMLAttributes<HTMLDivElement>{}

export function Title({ children, ...props }: ITitle){
    return (
        <div className="col-sm-6">
            <h1 className="m-0">{children}</h1>
        </div>
    );
}

export function Body({ children, ...props }: IBody){
  return (
      <div className="col-sm-6">
          {children}
      </div>
  );
}

export function Header({ children, ...props }: IHeader){
    return (<div className="container-fluid">
      <div className="row mb-2">
        {children}
      </div>
    </div>)
}
