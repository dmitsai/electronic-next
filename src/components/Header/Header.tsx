'use client';
import  Logo from '~/assets/icons/logo.svg';
import IconLogo from '~/assets/icons/logo-icon.svg';
import IconDots from '~/assets/icons/dots.svg';
import IconSeacrh from '~/assets/icons/search-icon.svg';

export const Header:React.FC = () => {
    return (
        <header className={'z-50 flex w-full flex-row items-center justify-between  px-32  text-white h-fit pt-5 '}>
                <div className='flex flex-row items-center gap-x-2'>
                    <div className={'flex bg-white rounded-lg w-12 h-12 pl-1'}>
                        <IconLogo />
                    </div>
                    <div className={'flex flex-col justify-start'}>
                        <p className='text-lg'>Название</p> 
                        <p className='text-sm'>твой помощник в учебе</p>
                    </div>
                </div>
                <div className={'flex flex-row items-center gap-x-16'}>
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
                    <IconDots className= {'w-6 h-6'}/>
                    <IconSeacrh  className= {'w-6 h-6'}/>
                </div>
        </header>
    )
}