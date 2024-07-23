'use client'

import clsx from 'clsx'
import React from 'react'

type TypeTitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ICustomTitle {
	size?: TypeTitleSize
	className?: string
	content: string
}

export function CustomTitle({ size = 'sm', ...props }: ICustomTitle) {
	const returnTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h3',
		xl: 'h1',
		'2xl': 'h1',
	}

	const returnClassBySize = {
		xs: 'text-[16px]',
		sm: 'text-[22px]',
		md: 'text-[24px]',
		lg: 'text-[32px]',
		xl: 'text-[40px]',
		'2xl': 'text-[48px]',
	}

	return React.createElement(
		returnTagBySize[size],
		{ className: clsx(returnClassBySize[size], props.className) },
		props.content
	)
}
