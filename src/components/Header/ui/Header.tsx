'use client';
import IconLogo from '~/assets/icons/logo-icon.svg';
import IconDots from '~/assets/icons/dots.svg';
import IconSearch from '~/assets/icons/search-icon.svg';
import WhiteIconLogo from '~/assets/icons/white-logo.svg'
import BlueIconSearch from '~/assets/icons/blue-seacrh.svg';
import BlueIconDots from '~/assets/icons/blue-dots.svg';
import {type HeaderModeType, HeaderMode } from '../model/constants';
import Link from 'next/link';

interface HeaderProps {
    mode: HeaderModeType;
}

export const Header:React.FC<HeaderProps> = ({mode}) => {
    return (
        <header className={`z-50 flex w-full flex-row items-center justify-between  px-32 h-fit pt-5 ${mode === HeaderMode.WHITE ? 'text-white': 'text-btn-blue'}`}>
                <div className='flex flex-row items-center gap-x-2'>
                    { mode === HeaderMode.WHITE ? 
                    <Link className={'flex bg-white rounded-lg w-12 h-12 pl-1'} href={'/'} >
                        <IconLogo /> 
                    </Link> 
                    : 
                    <Link href={'/'} className={'flex bg-btn-blue rounded-lg w-12 h-12 items-center justify-center'}>
                        <WhiteIconLogo className = {'w-7 h-7'}/>
                    </Link> 

                    }
                    <div className={'flex flex-col justify-start'}>
                        <p className='text-lg font-extrabold'>Название</p> 
                        <p className='text-sm font-light'>твой помощник в учебе</p>
                    </div>
                </div>
                <div className={'flex flex-row items-center gap-x-16 font-extrabold'}>
                    <p>
                        Темы
                    </p>
                    <p>
                        Задачи
                    </p>
                    <p>
                        Тесты
                    </p>
                    <p>
                        Экзамены
                    </p>
                    {
                        mode === HeaderMode.WHITE ?
                    <IconDots className= {'w-6 h-6'}/>
                    :
                    <BlueIconDots className= {'w-6 h-6'}/>
                     }
                     {
                        mode === HeaderMode.WHITE ?
                    <IconSearch  className= {'w-6 h-6'}/> 
                    :
                    <BlueIconSearch className= {'w-6 h-6'}/>

                    }
                </div>
        </header>
    )
}