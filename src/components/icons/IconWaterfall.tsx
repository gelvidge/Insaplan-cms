import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconWaterfall = forwardRef<SVGSVGElement, IconProps>(
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
            <rect x="3" y="12" width="3" height="6" rx="0.4" />
            <rect x="7.5" y="8" width="3" height="4" rx="0.4" />
            <rect x="12" y="10" width="3" height="3" rx="0.4" />
            <rect x="16.5" y="9" width="3" height="9" rx="0.4" />
            <line x1="6" y1="12" x2="7.5" y2="12" strokeDasharray="1,1" strokeOpacity="0.6" />
            <line x1="10.5" y1="8" x2="12" y2="13" strokeDasharray="1,1" strokeOpacity="0.6" />
            <line x1="15" y1="10" x2="16.5" y2="9" strokeDasharray="1,1" strokeOpacity="0.6" />
        </svg>
    )
);

IconWaterfall.displayName = 'IconWaterfall';
export default IconWaterfall;
