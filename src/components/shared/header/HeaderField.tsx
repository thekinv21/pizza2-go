import { Input } from '@/components/ui/input'

import styles from './Header.module.scss'

export function HeaderField() {
	return (
		<div className={styles.input_container}>
			<Input placeholder='Search for food' className={styles.input} />
		</div>
	)
}
