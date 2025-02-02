import Atom from '~/assets/icons/atom.svg';
import FirstImage from '~/assets/icons/first-img.svg';
import SecondImage from '~/assets/icons/second-img.svg';
import ThridImage from '~/assets/icons/thrid-img.svg';
import { Category } from '~/components/Category';
import { Activity } from '~/components/Category/ui/Activity';
import { Footer } from '~/components/Footer';
import { Header, HeaderMode } from '~/components/Header';
import { SearchInput } from '~/components/Input';

export default function BasicElectro() {
    return (
        <main
            className={
                'from-atom-end to-atom-end relative z-10 flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-r via-white'
            }
        >
            <div className='absolute top-10 -z-10 h-[600px]  w-[600px]'>
                <Atom />
            </div>
            <Header mode={HeaderMode.BLUE} />
            <div className={'flex w-full flex-col items-center justify-center gap-y-5 px-36 py-56'}>
              <div className='flex flex-col w-full text-justify items-center'>
                <p className={'text-3xl font-bold text-btn-blue'}>Измерение электрических величин и параметров</p>
                <p className={'text-3xl font-bold text-btn-blue'}>электрических цепей</p>
                </div>
                <div className={'flex w-full flex-row justify-center gap-x-4 px-72'}>
                    <Activity placeholder={'Задачи'} />
                    <Activity placeholder={'Тесты'} />
                </div>
                <div
                    className={
                        'flex flex-col  items-start  justify-start  gap-y-6 rounded-3xl bg-btn-blue bg-opacity-30 px-10 py-16 text-white'
                    }
                >
                    <p className={'text-3xl  font-bold'}>1. Виды и методы измерения электрических величин</p>
                    <p>
                        {' '}
                        В зависимости от способа обработки экспериментальных данных для нахождения результата различают
                        <span className='font-bold'>прямые, косвенные, совместные и совокупные измерения.</span>
                    </p>
                    <p>
                        При <span className={'font-bold'}>прямом измерении</span> искомое значение величины находят
                        непосредственно из опытных данных в результате выполнения измерения; например, измерение
                        амперметром тока в ветви цепи.
                    </p>
                    <p>
                        При <span className={'font-bold'}>косвенном измерении</span> искомое значение величины находят
                        на основании известной зависимости между измеряемой величиной и величинами, подвергаемыми прямым
                        измерениям; например, определение сопротивления R резистора из уравнения{' '}
                        <span className={'font-bold'}> R = U/I</span>, в которое подставляют измеренное значение
                        напряжения<span className={'font-bold'}> U </span>на зажимах резистора и протекающего через него
                        постоянного тока I.
                    </p>
                    <p>
                        <span className={'font-bold'}>Совместные измерения</span> — одновременные измерения нескольких
                        неодноимённых величин для нахождения зависимости между ними; например, определение зависимости
                        сопротивления резистора от температуры по формуле{' '}
                        <span className={'font-bold'}> Rₜ = R₀(1 + аt + bt²)</span> посредством измерения сопротивления
                        резистора Rₜ при трех различных температурах <span className={'font-bold'}>t</span>. Составив
                        систему из трех уравнений, находят параметры <span className={'font-bold'}>R₀, a и b</span>{' '}
                        зависимости сопротивления резистора от температуры.
                    </p>
                    <p>
                        Совокупные измерения — одновременные измерения нескольких одноименных величин, при которых
                        искомые значения величин находят решением системы уравнений, составленных из результатов прямых
                        измерений различных сочетаний этих величин; например, определение сопротивлений резисторов,
                        соединенных треугольником, посредством измерения сопротивлений между различными вершинами
                        треугольника. По результатам трех измерений по известным соотношениям определяют сопротивления
                        резисторов треугольника.
                    </p>
                    <p>
                        Различают также <span className={'font-bold'}> аналоговые </span> и{' '}
                        <span className={'font-bold'}>дискретные</span> измерения. При{' '}
                        <span className={'font-bold'}>аналоговых</span> измерениях на заданном интервале число измерений
                        электрической величины бесконечно, а при <span className={'font-bold'}>дискретных</span> — число
                        измерений конечно.
                    </p>
                    <p>
                        В зависимости от способа применения меры известной величины, выделяют при измерениях
                        <span className={'font-bold'}>метод непосредственной оценки</span> и
                        <span className={'font-bold'}>метод сравнения с мерой</span>. При
                        <span className={'font-bold'}>методе непосредственной оценки</span> значение измеряемой величины
                        определяют непосредственно по отсчётному устройству (индикатору) измерительного прибора;
                        например, измерение напряжения с помощью вольтметра.
                        <span className={'font-bold'}>Методы сравнения с мерой</span> — методы, при которых проводится
                        сравнение измеряемой величины и величины, воспроизводимой мерой; например, измерение
                        сопротивления резистора с помощью моста сопротивлений.
                    </p>
                    <p className={'text-3xl font-bold'}>2. Измерение тока и напряжения.</p>
                    <p>
                        <span className={'font-bold'}>Мгновенные значения напряжения</span> и{' '}
                        <span className={'font-bold'}>тока</span> можно измерить с помощью двухканального осциллографа{' '}
                        <span className={'font-bold'}>XSC1</span>, например, в среде Multisim.{' '}
                    </p>
                    <p>
                        {' '}
                        <span className={'font-bold'}>Измерение действующих значений напряжения</span> и{' '}
                        <span className={'font-bold'}>тока</span> в ветвях электрической цепи проводится{' '}
                        <span className={'font-bold'}>вольтметрами</span>. и{' '}
                        <span className={'font-bold'}>амперметрами</span>.{' '}
                        <span className={'font-bold'}>Амперметр</span> включается последовательно с элементами участка
                        цепи, а <span className={'font-bold'}>вольтметр</span> — параллельно участку (рис. 1, а и б),
                        напряжение на котором необходимо измерить. Модели амперметров и вольтметров среды Multisim не
                        требуют установки диапазона измерений.
                    </p>
                    <div className='flex w-full flex-row items-end justify-start gap-x-1'>
                        <FirstImage className={'h-[35rem] w-[40rem]'} />

                        <p>Рис. 1</p>
                    </div>
                    <p>
                        В<span className={'font-bold'}> реальных цепях</span> для расширения диапазона измерения тока
                        конкретным амперметром применяют <span className={'font-bold'}> шунт</span> (тарированный
                        резистор), включаемый параллельно с амперметром. В этом случае значение измеряемого тока равно
                        показанию амперметра, умноженному на постоянный коэффициент, определяемый по{' '}
                        <span className={'font-bold'}> правилу делителя тока</span>. При измерении больших переменных
                        токов используют измерительный <span className={'font-bold'}>трансформатор тока</span>,
                        первичная обмотка которого включается в ветвь с измеряемым током, а вторичная — замкнута на
                        амперметр. Значение измеряемого тока равно показанию амперметра, умноженную на константу,
                        определяемую коэффициентом трансформации тока измерительного трансформатора.
                    </p>
                    <p>
                        С целью расширения диапазона измерения напряжения конкретным вольтметром последовательно с его
                        входом включают тарированный резистор. В этом случае значение измеряемого напряжения равно
                        показанию вольтметра, умноженному на коэффициент, определяемый по
                        <span className={'font-bold'}>правилу делителя напряжения</span> . При измерении высоких
                        напряжений переменного тока используют измерительный
                        <span className={'font-bold'}> трансформатор напряжения</span>, к вторичной обмотке которого
                        подключают вольтметр. Измеряемое напряжение равно показанию вольтметра, умноженному на
                        константу, зависящую от коэффициент трансформации напряжения измерительного трансформатора.
                    </p>
                    <p className={'text-3xl font-bold'}>3. Измерение сопротивлений.</p>
                    <p>
                        Для<span className={'font-bold'}> прямого измерения сопротивления</span> резистивного элемента
                        (резистора в том числе) в среде Multisim можно использовать мультиметр{' '}
                        <span className={'font-bold'}>XXM2</span> (рис. 2).
                    </p>
                    <div className='flex w-full flex-row items-end justify-start gap-x-1'>
                        <SecondImage className={'h-[35rem] w-[25rem]'} />

                        <p>Рис. 2</p>
                    </div>
                    <p>
                    <span className={'font-bold'}>В практике измерения сопротивлений</span> резистивных элементов, кроме прямых и сравнительных методов,
                        широко используется так называемый  <span className={'font-bold'}>метод вольтметра-амперметра</span>, в основу которого положен<span className={'font-bold'}> закон
                        Ома для цепей</span>постоянного тока (см. рис. 1, а и б). <span className={'font-bold'}>Заметим</span>, что этот метод позволяет получить
                        лишь приближенное значение измеряемого сопротивления <span className={'font-bold'}> R ≈ U/I</span>.
                    </p>
                    <p>Так, для схемы, изображенной на рис. 1, а, <span className={'font-bold'}>R₁ = U/(I - U/Rᵥ)</span>,</p>
                    <p>
                        а для схемы, изображенной на рис. 1, б, <span className={'font-bold'}>R₂ = (U - RАI)/I</span>, где <span className={'font-bold'}>Rᵥ</span> и <span className={'font-bold'}>RА</span> — внутренние сопротивления
                        вольтметра и амперметра соответственно.
                    </p>
                    <p>
                        
                            'Анализ приведенных выражений позволяет сделать выводы: первой  схемой (рис. 1, а) следует пользоваться при измерении сравнительно малых сопротивлений, когда <span className={'font-bold'}>{'Rᵥ >> R₁'}</span>, а второй схемой (рис. 1, б) – при измерении больших сопротивлений, когда  <span className={'font-bold'}>{"RА << R₂"}</span>.'
                        
                    </p>
                    <p className={'text-3xl font-bold'}>4. Измерение угла сдвига фаз.</p>
                    <p>
                        Для измерения <span className={'font-bold'}>угла сдвига фаз φ</span> между синусоидальным напряжением и током в реальной цепи
                        используют: измерители разности фаз; так называемый <span className={'font-bold'}>метод вольтметра-амперметра-ваттметра</span>, при
                        котором угол <span className={'font-bold'}>φ</span> определяют из уравнения<span className={'font-bold'}> φ = arccos(Р/UI)</span>, где<span className={'font-bold'}> Р </span>— показание ваттметра, а также
                        методы, основанные на измерении временного интервала <span className={'font-bold'}>∆t</span> при помощи электронно-лучевого
                        осциллографа.
                    </p>
                    <p>
                    Временной интервал <span className={'font-bold'}>t = φ/ω = φ/ 2πf</span> пропорционален фазовому сдвигу<span className={'font-bold'}> φ </span>между синусоидальным напряжением и током в 
                    неразветвлённой цепи (рис. 3, а) и обратно пропорционален угловой частоте <span className={'font-bold'}>φ</span>напряжения (тока).
                    </p>
                    <div className='flex flex-row items-end justify-start gap-x-1 w-full'>
                        <ThridImage className={'h-[27rem] w-[45rem]'} />
                        <p>Рис. 3</p>
                    </div>
                    <p>При этом <span className={'font-bold'}> фазовый угол</span> (в градусах) определяют по формуле  <span className={'font-bold'}> φ = 360°∆t/Т</span>,  где  <span className={'font-bold'}>T = l/f</span>  — период изменения напряжения в секундах (с); f  частота питающего цепь напряжения в герцах (Гц). 
                    </p>
                    <p>  
                    <span className={'font-bold'}>  Временной интервал ∆t = T2 – T1</span> обычно измеряют между нулевыми значениями осциллограмм напряжения и тока с помощью визирных линий (визиров), расположенных слева и справа от экрана осциллографа (рис. 3,  а). Угол <span className={'font-bold'}> φ </span>берется со знаком "плюс", если ток отстаёт по фазе от напряжения (см. рис. 3, а), и со знаком "минус", если ток опережает по фазе напряжение.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
