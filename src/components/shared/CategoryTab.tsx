'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

interface ICategoryTab {
	className?: string
}

type TypeCategory = {
	id: number
	categoryName: string
	order: number
}

export function CategoryTab({ className, ...props }: ICategoryTab) {
	const categories: TypeCategory[] = [
		{ id: 1, categoryName: 'Tümü', order: 1 },
		{ id: 2, categoryName: 'Pizza', order: 2 },
		{ id: 3, categoryName: 'Pasta', order: 3 },
		{ id: 4, categoryName: 'İçecek', order: 4 },
		{ id: 5, categoryName: 'Tatlı', order: 5 },
	]

	const [active, setActive] = useState<number>(
		categories.sort((a: TypeCategory, b: TypeCategory) => a.order - b.order)[0]
			?.id
	)

	return (
		<section
			className={cn(
				'md:inline-flex bg-gray-50 flex flex-row flex-wrap text-center gap-1 p-2 md:w-auto overflow-y-scroll mt-3 rounded-2xl',
				className
			)}
		>
			{categories
				.sort((a: TypeCategory, b: TypeCategory) => a.order - b.order)
				.map((category: TypeCategory) => (
					<div
						key={category.id}
						className={cn(
							'flex items-center font-bold h-8 rounded-2xl px-8 transition duration-300 ',
							active === category.id ? 'text-white bg-primary/80' : 'text-black'
						)}
					>
						<button
							aria-label={category.categoryName}
							onClick={() => setActive(category.id)}
							className='focus:outline-none text-center w-full md:text-left'
						>
							<span>{category.categoryName}</span>
						</button>
					</div>
				))}
		</section>
	)
}
