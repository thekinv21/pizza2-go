import { Container, CustomTitle, Filters, TopBar } from '@/components/shared'

import { Fragment } from 'react'

export default function HomePage() {
	return (
		<Fragment>
			<Container className='mt-5'>
				<CustomTitle
					content='Mevcut Pizzalar'
					className='font-extrabold text-center md:text-left'
					size='lg'
				/>
			</Container>
			<TopBar />

			<Container className='py-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex flex-col gap-16'>List of products</div>
				</div>
			</Container>
		</Fragment>
	)
}
