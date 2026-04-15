import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconBiDirectional = forwardRef<SVGSVGElement, IconProps>(
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
            <line x1="12" y1="3" x2="12" y2="21" />
            <rect x="5" y="6" width="7" height="4" rx="0.5" />
            <rect x="12" y="6" width="5" height="4" rx="0.5" />
            <rect x="8" y="13" width="4" height="4" rx="0.5" />
            <rect x="12" y="13" width="8" height="4" rx="0.5" />
        </svg>
    )
);

IconBiDirectional.displayName = 'IconBiDirectional';
export default IconBiDirectional;
