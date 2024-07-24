'use client'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { CustomTitle } from './CustomTitle'
import { FilterCheckbox } from './FilterCheckbox'
import { CheckboxFilterGroup } from './FilterGroupCheckbox'
import { RangeSlider } from './RangeSlider'

interface ICustomFilters {
	className?: string
}

export function Filters({ className }: ICustomFilters) {
	return (
		<section className={cn('space-y-5 select-none', className)}>
			<CustomTitle
				content='Filtrele'
				size='lg'
				className='font-semibold text-md'
			/>

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='İndirimde Olanlar' value='discount' />
				<FilterCheckbox text='Yeni Ürünler' value='new' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Fiyat Aralığı:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='Min' min={0} defaultValue={0} />
					<Input
						type='number'
						placeholder='Max'
						max={1000}
						defaultValue={100}
						min={100}
					/>
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFilterGroup
				title='Malzemeler'
				className='mt-6'
				items={[
					{ text: 'Peynir', value: 'cheese' },
					{ text: 'Mantar', value: 'mushroom' },
					{ text: 'Sucuk', value: 'sausage' },
					{ text: 'Zeytin', value: 'olive' },
					{ text: 'Salam', value: 'salami' },
					{ text: 'Sosis', value: 'sausage' },
					{ text: 'Biber', value: 'pepper' },
				]}
				defaultItems={[
					{ text: 'Peynir', value: 'cheese' },
					{ text: 'Mantar', value: 'mushroom' },
					{ text: 'Sucuk', value: 'sausage' },
					{ text: 'Zeytin', value: 'olive' },
					{ text: 'Salam', value: 'salami' },
					{ text: 'Sosis', value: 'sausage' },
					{ text: 'Biber', value: 'pepper' },
				]}
				onChange={() => {}}
			/>
		</section>
	)
}
