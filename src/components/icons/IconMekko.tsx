import React, { forwardRef } from 'react';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
    size?: number | string;
    stroke?: number | string;
    color?: string;
}

export const IconMekko = forwardRef<SVGSVGElement, IconProps>(
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
            <rect x="3" y="7" width="3" height="11" rx="0.35" />
            <rect x="7.6" y="9.5" width="4" height="8.5" rx="0.35" />
            <rect x="13" y="5" width="6" height="12" rx="0.35" />
        </svg>
    )
);

IconMekko.displayName = 'IconMekko';
export default IconMekko;
