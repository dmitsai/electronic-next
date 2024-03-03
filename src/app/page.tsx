'use client';
import Image from "next/image";
import Logo from '~/assets/icons/logo.svg'
import { Header } from "~/components/Header/Header";
import SeacrhIcon from '~/assets/icons/search-icon.svg';
import { SearchInput } from "~/components/Header/Input";
import { Category } from "~/components/Category";



export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-center bg-main-top-img"}>
       <Header/>
      <div className={"flex flex-col items-center justify-center gap-y-4 pb-60 pt-96"}>
          <p className={'text-3xl'}>Заряжай свой потенциал с электротехникой!</p>
          <div className={"flex flex-col items-center justify-center"}>
            <p>Удобный сайт с полезными материалами для подготовки к экзаменам по </p>
            <p>электротехнике, электронике и схемотехнике, а также для самостоятельного изучения</p>
            <p> ключевых концепций электротехники в удобном формате.</p>
          </div>
        <SearchInput/>
      </div>
      <div className={'flex flex-row gap-x-5  items-center justify-between py-32 mt-20 w-full px-80  bg-gradient-to-r from-mid-end via-mid-center to-mid-end' }>
          <div className={'flex flex-col gap-y-24 '}> 
            <Category placeholder={"Основы электростатики"}/>
            <Category placeholder={"Электромагнетизм и электромагнитная индукция"}/>
            <Category placeholder={"Трансформаторы"}/>
            <Category placeholder={"Распределение электрической энергии"}/>
          </div>
          <div className={'flex flex-col  gap-y-24  '}>
            <Category placeholder={"Электрические цепи постоянного тока"}/>
            <Category placeholder={"Электрические цепи переменного тока"}/>
            <Category placeholder={"Электрические машины"}/>
            <Category placeholder={"Че-то умное тут будет"}/>
          </div>
      </div>

    </main>
  );
}
