import { cn } from '@/lib/utils'
import { HeaderAction } from './HeaderAction'
import { HeaderField } from './HeaderField'
import { HeaderLogo } from './HeaderLogo'

import { CustomContainer } from '../CustomContainer'
import styles from './Header.module.scss'

interface IHeader {
	className?: string
}

export function Header({ className }: IHeader) {
	return (
		<header className={cn(styles.header, className)}>
			<CustomContainer className={styles.content}>
				<HeaderLogo />
				<HeaderField />
				<HeaderAction />
			</CustomContainer>
		</header>
	)
}
