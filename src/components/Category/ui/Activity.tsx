'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActivityProps {
    placeholder: string,
    href?: string;
    exact?: boolean;
}

export const Activity:React.FC<ActivityProps> = ({placeholder,href}) => {
    const pathname = usePathname();
    return(
        <Link href={href ?? pathname} className={'flex items-center justify-center rounded-full py-3 text-white bg-activity h-10 px-5'}>
            {placeholder}
        </Link>
    )
}