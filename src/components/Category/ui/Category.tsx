import { Activity } from "./Activity"

interface CategoryProps {
    placeholder: string,
}

export const Category:React.FC<CategoryProps>= ({placeholder})=> { 
    return (
        <div className={'flex flex-col'}>
            <p className={'text-category-title text-lg'}>{placeholder}</p>
            <div className={'flex flex-row gap-x-2 items-center'}>
            <Activity placeholder={"Теория"}/>
            <Activity placeholder={"Задачи"}/>
            <Activity placeholder={"Тесты"}/>
            </div>
        </div>
    )
}