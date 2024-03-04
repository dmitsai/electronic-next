import { Category } from "~/components/Category";
import { Activity } from "~/components/Category/ui/Activity";
import { Footer } from "~/components/Footer";
import { Header, HeaderMode } from "~/components/Header";
import { SearchInput } from "~/components/Input";

export default function BasicElectro () {

    return (<main className={'flex min-h-screen flex-col bg-theme-bg'}>
        <Header mode={HeaderMode.BLUE}/>
        <div className={'flex flex-col items-center justify-center w-full py-56 px-56 gap-y-5'}>
        <p className={'text-btn-blue text-3xl'}>Электрические цепи постоянного тока</p>
        <div className={'flex flex-row px-72 w-full justify-center gap-x-4'}>
        <Activity placeholder={'Задачи'}/> 
        <Activity placeholder={'Тесты'}/> 

        </div>
        <div className={'flex flex-row gap-x-48  items-center  py-16  bg-btn-blue bg-opacity-30 rounded-3xl justify-center px-12 w-[1400px] h-[765px]' }>
        
      </div>
        </div>
        <Footer/>
    </main>)
}