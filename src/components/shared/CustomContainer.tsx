import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

interface ICustomContainer {
	className?: string
}

export function CustomContainer({
	children,
	className,
}: PropsWithChildren<ICustomContainer>) {
	return (
		<section
			className={cn(
				'mx-auto max-w-full sm:max-w-5xl lg:max-w-7xl px-4',
				className
			)}
		>
			{children}
		</section>
	)
}
