import { forwardRef } from 'react'
import styles from './selector.module.css'

export const Selector = forwardRef((props, ref) => {
	return (
		<div className={styles.selector}>
			<label className={styles.label} htmlFor={props.id}>
				{props.label}
			</label>
			<select
				className={styles.selectField}
				{...props}
				ref={ref}
				name={props.name}
				id={props.id}
			>
				<option value="Default">Default</option>
				<option value="Filled">Filled</option>
				<option value="Unstyled">Unstyled</option>
			</select>
		</div>
	)
})
