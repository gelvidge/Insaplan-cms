import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconFunnel = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, stroke = 2, color = 'currentColor', ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 4 L21 4 L17 9 L7 9 Z" />
            <path d="M7 10 L17 10 L14.5 15 L9.5 15 Z" />
            <path d="M9.5 16 L14.5 16 L13 21 L11 21 Z" />
        </svg>
    )
);

IconFunnel.displayName = 'IconFunnel';
export default IconFunnel;
