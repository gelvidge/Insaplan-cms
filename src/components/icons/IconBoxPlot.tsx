import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconBoxPlot = forwardRef<SVGSVGElement, IconProps>(
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
            <line x1="12" y1="3" x2="12" y2="7" />
            <rect x="8.5" y="7" width="7" height="10" rx="0.5" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
    )
);

IconBoxPlot.displayName = 'IconBoxPlot';
export default IconBoxPlot;
