'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

export function HeaderLogo() {
	return (
		<Link href='/' className={styles.logo_container}>
			<Image
				src={'/logo.png'}
				alt='site_logo'
				width={45}
				height={45}
				priority
				draggable={false}
			/>

			<div>
				<h1>Pizza2 GO</h1>
				<p>Order your favorite</p>
			</div>
		</Link>
	)
}
