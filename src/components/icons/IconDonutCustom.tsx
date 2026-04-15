import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconDonutCustom = forwardRef<SVGSVGElement, IconProps>(
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
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <line x1="12" y1="3.8" x2="12" y2="5.5" />
            <line x1="18.36" y1="5.64" x2="15.18" y2="8.82" />
        </svg>
    )
);

IconDonutCustom.displayName = 'IconDonutCustom';
export default IconDonutCustom;
