import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconSankey = forwardRef<SVGSVGElement, IconProps>(
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
            <rect x="3" y="5" width="2" height="4" rx="0.3" fill="none" />
            <rect x="3" y="15" width="2" height="4" rx="0.3" fill="none" />
            <rect x="19" y="8" width="2" height="3" rx="0.3" fill="none" />
            <rect x="19" y="13" width="2" height="3" rx="0.3" fill="none" />
            <path d="M5 6 C10 6, 14 8, 19 9" fill="none" strokeOpacity="0.5" />
            <path d="M5 9 C10 9, 14 10, 19 11" fill="none" strokeOpacity="0.5" />
            <path d="M5 7.5 C10 7.5, 14 12, 19 14" fill="none" strokeOpacity="0.4" />
            <path d="M5 16 C10 16, 14 14, 19 14.5" fill="none" strokeOpacity="0.5" />
            <path d="M5 18 C10 18, 14 16, 19 15.5" fill="none" strokeOpacity="0.5" />
        </svg>
    )
);

IconSankey.displayName = 'IconSankey';
export default IconSankey;
