import { Category } from "~/components/Category";
import { Footer } from "~/components/Footer";
import { Header, HeaderMode } from "~/components/Header";
import { SearchInput } from "~/components/Input";
import Atom from '~/assets/icons/atom.svg';

export default function Theme () {

    return (<main className={'flex min-h-screen flex-col relative  bg-gradient-to-r from-atom-end via-white to-atom-end z-10 items-center'}>
      <div className="absolute -z-10 top-10 w-[600px]  h-[600px]">
        <Atom />
      </div>
        <Header mode={HeaderMode.BLUE}/>
        
        <div className={'flex flex-col items-center justify-center w-full py-56 px-56 gap-y-5'}>
        <p className={'text-btn-blue text-3xl font-bold'}>Введи название интересующей тебя темы</p>
        <div className={'flex w-4/5 px-60'}>
        <SearchInput/>
        </div>
        <div className={'flex flex-row gap-x-48  items-center  py-16  bg-btn-blue bg-opacity-30 rounded-3xl justify-center px-12 mt-10' }>
          <div className={'flex flex-col gap-y-24 text-white '}> 
            <Category placeholder={"Основы электростатики"} hrefTheory="/theme/basic-electro"/>
            <Category placeholder={"Электромагнетизм и электромагнитная индукция"}/>
            <Category placeholder={"Трансформаторы"}/>
            <Category placeholder={"Распределение электрической энергии"}/>
          </div>
          <div className={'flex flex-col  gap-y-24 text-white '}>
            <Category placeholder={"Электрические цепи постоянного тока"}/>
            <Category placeholder={"Электрические цепи переменного тока"}/>
            <Category placeholder={"Электрические машины"}/>
            <Category placeholder={"Че-то умное тут будет"}/>
          </div>
      </div>
        </div>
        <Footer/>
    </main>)
}