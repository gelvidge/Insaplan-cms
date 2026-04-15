import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconStackedBars = forwardRef<SVGSVGElement, IconProps>(
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
            <rect x="5" y="7" width="5" height="11" rx="0.5" />
            <line x1="5" y1="12" x2="10" y2="12" />
            <rect x="13" y="4" width="5" height="14" rx="0.5" />
            <line x1="13" y1="10" x2="18" y2="10" />
        </svg>
    )
);

IconStackedBars.displayName = 'IconStackedBars';
export default IconStackedBars;
