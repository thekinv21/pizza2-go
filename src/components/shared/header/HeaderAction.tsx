import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

export function HeaderAction() {
	return (
		<div className='custom-flex-center gap-3'>
			<Button variant='outline' className='custom-flex-center gap-1'>
				<User size={16} aria-hidden='true' />
				Login
			</Button>

			<div>
				<Button variant='outline' className='group relative'>
					<b>200 &#8378;</b>
					<span className='h-full w-[1px] bg-primary/70 mx-3' />
					<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
						<ShoppingCart
							aria-hidden='true'
							className='h-4 w-4 relative'
							strokeWidth={2}
						/>
						<b className='mt-0.5'>3</b>
					</div>

					<ArrowRight
						size={20}
						className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
					/>
				</Button>
			</div>
		</div>
	)
}
