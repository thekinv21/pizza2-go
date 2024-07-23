import { cn } from '@/lib/utils'
import { Categories } from './categories/Categories'
import { CategorySortDropdown } from './categories/CategorySortDropdown'
import { CustomContainer } from './CustomContainer'

interface ICustomTopBar {
	className?: string
}

export function CustomTopBar({ className }: ICustomTopBar) {
	return (
		<div
			className={cn(
				'sticky top-0 z-10 bg-white py-6 w-full shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<CustomContainer className='flex flex-col md:flex-row items-center justify-center gap-5 md:justify-between'>
				<Categories />
				<CategorySortDropdown />
			</CustomContainer>
		</div>
	)
}
