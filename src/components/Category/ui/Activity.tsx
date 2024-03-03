interface ActivityProps {
    placeholder: string,
}
export const Activity:React.FC<ActivityProps> = ({placeholder}) => {
    return(
        <div className={'flex items-center justify-center rounded-full py-3 text-white bg-activity h-10 px-5'}>
            {placeholder}
        </div>
    )
}