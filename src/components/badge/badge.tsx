import React, { HTMLAttributes } from "react";

type Style = '' | 'badge-danger' | 'badge-warning' | 'badge-info' | 'badge-primary'
interface IBadge extends HTMLAttributes<HTMLSpanElement> {
    className?: string
    badgeStyle?: Style
}

function Badge({ className = '', badgeStyle = '', children, ...props }: IBadge) {
    const classes = `badge ${badgeStyle} ${className}`;

    return (<span className={classes} {...props}>{children}</span>)
}

export default Badge;