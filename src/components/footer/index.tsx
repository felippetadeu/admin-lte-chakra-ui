import React, { HTMLAttributes } from "react";

interface IFooter extends HTMLAttributes<HTMLDivElement>{

}


function Footer({ ...props }: IFooter) {
    return (
        <footer className="main-footer">
            <strong>Copyright &copy; 2014-2021 <a href="">Sistema</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
            </div>
      </footer>
    )
}

export default Footer;