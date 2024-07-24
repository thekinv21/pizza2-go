'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FilterCheckbox, IFilterCheckbox } from './FilterCheckbox'

type Item = IFilterCheckbox

interface ICheckboxFilterGroup {
	title: string
	items: Item[]
	defaultItems: Item[]
	searchInputPlaceholder?: string
	onChange: (items: string[]) => void
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	limit?: number
	className?: string
	selected?: Set<string>
	name?: string
}

export function CheckboxFilterGroup({
	className,
	limit = 5,
	searchInputPlaceholder = 'Search...',
	...props
}: ICheckboxFilterGroup) {
	const [showAll, setShowAll] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>('')

	const itemsList = showAll ? props.items : props.defaultItems.slice(0, limit)

	const handleFilterChange = (term: string) => {
		setSearchTerm(term)
	}

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{props.title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
						value={searchTerm}
						onChange={e => handleFilterChange(e.target.value)}
					/>
				</div>
			)}

			<div className='custom-flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{itemsList.map((item, idx: number) => (
					<FilterCheckbox
						key={idx}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={props.selected?.has(item.value)}
						onCheckedChange={() => props.onClickCheckbox?.(item.value)}
						name={props.name}
					/>
				))}

				{props.items.length > limit && (
					<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
						<Button
							onClick={() => setShowAll(!showAll)}
							variant='link'
							className='text-primary mt-3'
						>
							{showAll ? ' - Daha az' : ' + Daha Fazla'}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}
