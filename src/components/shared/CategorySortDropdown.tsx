'use client'

import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'

import { ArrowDown, ArrowUp, Clock, Heart } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

interface ICategorySortPopup {
	className?: string
}

export function CategorySortDropdown({ className }: ICategorySortPopup) {
	const [sort, setSort] = useState<string>('popularity')

	const sortOptions = [
		{
			label: 'Popülerlik',
			value: 'popularity',
			icon: <Heart size={18} aria-hidden='true' />,
		},
		{
			label: 'En Yeniler',
			value: 'newest',
			icon: <Clock size={18} aria-hidden='true' />,
		},
		{
			label: 'Fiyata Göre (Artan)',
			value: 'price-asc',
			icon: <ArrowUp size={18} aria-hidden='true' />,
		},
		{
			label: 'Fiyata Göre (Azalan)',
			value: 'price-desc',
			icon: <ArrowDown size={18} aria-hidden='true' />,
		},
	]

	const handleSort = (sort: string) => {
		setSort(sort)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div
					aria-label='menu-trigger'
					role='button'
					className={cn(
						'inline-flex items-center gap-2.5 bg-gray-50 px-5 h-10 cursor-pointer rounded-2xl transition font-light text-sm duration-300',
						className
					)}
				>
					<ArrowUpDown size={16} aria-hidden='true' />
					<b>Sırala:</b>
					<span className='text-primary'>
						{sortOptions.find(option => option.value === sort)?.label}
					</span>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{sortOptions.map(option => (
					<DropdownMenuItem
						aria-label={`menuitem-${option.label}`}
						role={`menuitem-${option.label}`}
						key={option.value}
						onClick={() => handleSort(option.value)}
						className='flex items-center gap-2.5'
					>
						{option.icon}
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
