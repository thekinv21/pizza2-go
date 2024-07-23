import { Nunito } from 'next/font/google'

import { Metadata } from 'next'
import './globals.scss'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Pizza2 Go | Home',
	description:
		'Pizza2 Go is a pizza delivery service that delivers pizza to your door step',
}

interface IRootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<IRootLayoutProps>) {
	return (
		<html lang='en'>
			<head>
				<link data-rh='true' rel='icon' href='/logo.png' />
			</head>
			<body className={nunito.className}>
				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
