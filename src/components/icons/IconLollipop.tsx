import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconLollipop = forwardRef<SVGSVGElement, IconProps>(
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
            <line x1="6" y1="18" x2="6" y2="8" />
            <circle cx="6" cy="6" r="1.4" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <circle cx="12" cy="10" r="1.2" />
            <line x1="18" y1="18" x2="18" y2="14" />
            <circle cx="18" cy="12" r="1.1" />
        </svg>
    )
);

IconLollipop.displayName = 'IconLollipop';
export default IconLollipop;
