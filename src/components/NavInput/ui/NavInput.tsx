'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import SearchIcon from '~/assets/icons/search-icon.svg';

type NavInputProps = React.PropsWithChildren & {
    href: string;
    exact?: boolean;
    className?: string;
    style?: React.CSSProperties;
};

export const NavInput: React.FC<NavInputProps> = ({ href, exact = false, className }) => {
    const pathname = usePathname();
    const isActive = useMemo(
        () => (exact ? pathname === `${href}` : pathname.startsWith(`${href}`)),
        [exact, href, pathname]
    );

    return (
        <Link
            href={href}
            className={`flex h-12 w-full rounded-full border px-7 text-xs outline-none justify-between items-center bg-white text-black ${isActive ? 'border-header-blue' : 'border-white' } ${className}`}
        >
            <p className={`flex transform transition-all`}>Найти...</p>
           <SearchIcon  className={`h-4 w-4 stroke-gray-600   transform transition-all`}/>
        </Link>
    );
};
