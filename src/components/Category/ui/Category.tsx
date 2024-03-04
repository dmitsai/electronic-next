import { Activity } from "./Activity"

interface CategoryProps {
    placeholder: string,
    hrefTheory?: string,
}

export const Category:React.FC<CategoryProps>= ({placeholder,hrefTheory})=> { 

    return (
        <div className={`flex flex-col`}>
            <p className={`text-lg`}>{placeholder}</p>
            <div className={'flex flex-row gap-x-2 items-center'}>
            <Activity placeholder={"Теория"} href={hrefTheory}/>
            <Activity placeholder={"Задачи"}/>
            <Activity placeholder={"Тесты"}/>
            </div>
        </div>
    )
}