import { CustomContainer } from '@/components/shared/CustomContainer'
import { CustomTitle } from '@/components/shared/CustomTitle'
import { CustomTopBar } from '@/components/shared/CustomTopBar'
import { Fragment } from 'react'

export default function HomePage() {
	return (
		<Fragment>
			<CustomContainer className='mt-5'>
				<CustomTitle
					content='Mevcut Pizzalar'
					className='font-extrabold text-center md:text-left'
					size='lg'
				/>
			</CustomContainer>
			<CustomTopBar />

			<CustomContainer className='pb-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>Filter</div>
					<div className='flex flex-col gap-16'>List of products</div>
				</div>
			</CustomContainer>
		</Fragment>
	)
}
