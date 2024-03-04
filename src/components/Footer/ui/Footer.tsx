import IconLogo from '~/assets/icons/logo-icon.svg';
import VkLogo from '~/assets/icons/vk-black.svg';
import TgLogo from '~/assets/icons/tg-black.svg';
import Emblem from '~/assets/icons/emblem.svg';

export const Footer = () => {

    return (
        <footer className={'flex flex-row bg-footer w-full text-white py-10 justify-around px-10'}>
            <div className={'flex flex-col gap-y-4'}>
                <div className={'flex flex-row w-full gap-x-16 items-center'}>
                    <div className='flex flex-row items-center gap-x-2'>
                        <div className={'flex bg-white rounded-lg w-12 h-12 pl-1'}>
                            <IconLogo />
                        </div>
                        <div className={'flex flex-col justify-start'}>
                            <p className='font-bold'>Название</p> 
                            <p className='text-sm font-light'>твой помощник в учебе</p>
                        </div>
                    </div>
                    <p className='font-bold'>Сайт разработан студентами КубГТУ</p> 
                </div> 
               <div className={'flex flex-row items-center gap-x-16 font-bold'}>
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
                    <p>
                        О проекте
                    </p>
                    <p>
                        Контакты
                    </p>
                    <p>
                        Телеграм-бот
                    </p>
                    <p>
                        © Название 2024
                    </p>
               </div>
            </div>
            <div className={'flex flex-col justify-end items-center'}>
                <p className='font-bold'>Связанное с нами</p>
                <div className={'flex flex-row gap-x-2 items-center'}>
                    <div className={'flex flex-row items-center gap-x-4'}>
                    <div  className = {'flex w-8 h-8'}>
                        <VkLogo/>
                    </div>
                    <div  className = {'flex w-8 h-8'}>
                        <TgLogo />
                    </div>
                    </div>
                    <div className = {'flex w-11 h-11'}>
                        <Emblem />
                    </div>
                </div>
            </div>
        </footer>
    )
}