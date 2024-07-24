import { cn } from '@/lib/utils'
import { CategorySortDropdown } from './CategorySortDropdown'
import { CategoryTab } from './CategoryTab'
import { Container } from './Container'

interface ITopBar {
	className?: string
}

export function TopBar({ className }: ITopBar) {
	return (
		<div
			className={cn(
				'sticky top-0 z-10 bg-white py-6 w-full shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex flex-col md:flex-row items-center justify-center gap-5 md:justify-between'>
				<CategoryTab />
				<CategorySortDropdown />
			</Container>
		</div>
	)
}
