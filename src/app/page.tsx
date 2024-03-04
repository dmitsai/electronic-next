'use client';
import Image from "next/image";
import Logo from '~/assets/icons/logo.svg'
import { Header } from "~/components/Header/ui/Header";
import SeacrhIcon from '~/assets/icons/search-icon.svg';
import { SearchInput } from "~/components/Input";
import { Category } from "~/components/Category";
import { InfoCard } from "~/components/InfoCard";
import BookIcon from '~/assets/icons/book.svg';
import StudentsIcon from '~/assets/icons/students.svg';
import TelegramLogo from '~/assets/icons/telegram-logo.svg';
import { Footer } from "~/components/Footer";
import { HeaderMode } from "~/components/Header";
import { NavInput } from "~/components/NavInput";





export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-center bg-main-top-img"}>
       <Header mode={HeaderMode.WHITE} />
      <div className={"flex flex-col items-center justify-center gap-y-4 pb-60 pt-96"}>
          <p className={'text-3xl font-extrabold'}>Заряжай свой потенциал с электротехникой!</p>
          <div className={"flex flex-col items-center justify-center font-light"}>
            <p>Удобный сайт с полезными материалами для подготовки к экзаменам по </p>
            <p>электротехнике, электронике и схемотехнике, а также для самостоятельного изучения</p>
            <p> ключевых концепций электротехники в удобном формате.</p>
          </div>
        <NavInput href={"/theme"}/>
      </div>
      <div className={'flex flex-row gap-x-5  items-center justify-between py-32 mt-40 w-full px-80  bg-gradient-to-r from-mid-end via-mid-center to-mid-end' }>
          <div className={'flex flex-col gap-y-24 text-category-title'}> 
            <Category placeholder={"Основы электростатики"}/>
            <Category placeholder={"Электромагнетизм и электромагнитная индукция"}/>
            <Category placeholder={"Трансформаторы"}/>
            <Category placeholder={"Распределение электрической энергии"}/>
          </div>
          <div className={'flex flex-col  gap-y-24 text-category-title' }>
            <Category placeholder={"Электрические цепи постоянного тока"}/>
            <Category placeholder={"Электрические цепи переменного тока"}/>
            <Category placeholder={"Электрические машины"}/>
            <Category placeholder={"Че-то умное тут будет"}/>
          </div>
      </div>
      <div className={'flex flex-col items-center justify-center bg-gradient-to-t  from-white to-bottom-start w-full  px-80 pb-60 pt-24 relative gap-y-52'}>
        <div className={'flex flex-row gap-x-36'}>
              <InfoCard placeholder={"Подготовка к парам и экзаменам"} icon={<BookIcon/>}>
                <p>Наш сайт предлагает широкий выбор
                  материалов для подготовки к экзаменам по
                    таким предметам, как электротехника,
                  электроника и схемотехника. Здесь вы найдете
                   теорию по ключевым разделам, разборы
                   типовых задач, тесты, которые помогут вам
                   эффективно подготовиться к занятиям.</p>
                 
              </InfoCard>
       
          
          <InfoCard placeholder={"Самостоятельное обучение"} icon={<StudentsIcon/>}>
            <p>Мы предлагаем доступ к разнообразным   
               ресурсам, включая статьи, практические    
                задания и тесты для проверки знаний. Наш 
                ресурс разработан так, чтобы вы могли легко 
                освоить ключевые концепции и принципы
                 электротехники в своем темпе, независимо от 
                 вашего уровня подготовки.</p>
            </InfoCard>

        </div>
        <div className={'flex  text-black flex-row bg-telegram px-36 py-40 bg-no-repeat w-[1179px]'}>
          <div className={'flex flex-col w-full gap-y-5'}>
              <p className="text-3xl font-bold">У нас есть телеграм-бот!</p>
              <div className={'text-lg'}>
              <p>Добавляй бота в беседу с одногруппниками или обращайся </p>
              <p>к нему для личного пользования. Бот быстро найдет ответ на</p>
              <p> интересующий тебя вопрос!</p>
              </div>
              <button className={'flextext-white bg-btn-blue rounded-full p-4 w-96 text-white text-lg shadow-md shadow-btn-blue'}>Перейти к телеграм-боту</button>
            </div>
            <div className={'flex w-56 h-56'}>
            <TelegramLogo />
            </div>
            </div>
        </div>
        <Footer/>
    </main>
  );
}
