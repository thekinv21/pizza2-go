import { Checkbox } from '../ui/checkbox'

export interface IFilterCheckbox {
	text: string
	value: string
	onCheckedChange?: () => void
	checked?: boolean
	endAdornment?: React.ReactNode
	name?: string
}

export function FilterCheckbox(props: IFilterCheckbox) {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				onCheckedChange={props.onCheckedChange}
				checked={props.checked}
				value={props.value}
				id={`checkbox-${String(props.value)}`}
				className='h-6 w-6 '
				name={props.name}
			/>

			{props.text ? (
				<label
					htmlFor={`checkbox-${String(props.value)}`}
					className='text-sm leading-none select-none cursor-pointer flex-1'
				>
					{props.text}
				</label>
			) : null}
			{props.endAdornment}
		</div>
	)
}
