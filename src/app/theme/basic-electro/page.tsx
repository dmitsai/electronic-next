import { Category } from "~/components/Category";
import { Activity } from "~/components/Category/ui/Activity";
import { Footer } from "~/components/Footer";
import { Header, HeaderMode } from "~/components/Header";
import { SearchInput } from "~/components/Input";
import Atom from '~/assets/icons/atom.svg'

export default function BasicElectro () {

    return (
    <main className={'flex min-h-screen flex-col w-full relative items-center justify-start bg-gradient-to-r from-atom-end via-white to-atom-end z-10'}>
      <div className="absolute -z-10 top-10 w-[600px]  h-[600px]">
        <Atom />
      </div>
        <Header mode={HeaderMode.BLUE}/>
        <div className={'flex flex-col items-center justify-center w-full py-56 px-56 gap-y-5'}>
        <p className={'text-btn-blue text-3xl font-bold'}>Электрические цепи постоянного тока</p>
        <div className={'flex flex-row px-72 w-full justify-center gap-x-4'}>
        <Activity placeholder={'Задачи'}/> 
        <Activity placeholder={'Тесты'}/> 

        </div>
        <div className={'flex flex-row gap-x-48  items-center  py-16  bg-btn-blue bg-opacity-30 rounded-3xl justify-center px-12 w-2/3 h-96' }>
        </div>
        </div>
        <Footer/>
    </main>)
}