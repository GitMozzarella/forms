import { forwardRef } from 'react'
import styles from './Input.module.css'

export const Input = forwardRef((props, ref) => {
	const asteriskStyle = {
		color: 'red',
		marginLeft: '2px',
	}

	return (
		<div className={styles.input}>
			<label
				className={styles.label}
				htmlFor={props.id}
				style={{
					fontSize: props.size + 'px',
				}}
			>
				{props.label}
				{props.required && <span style={asteriskStyle}>*</span>}
			</label>
			<span className={styles.description}>{props.description}</span>
			<input
				className={props.error ? styles.inputFieldError : styles.inputField}
				{...props}
				ref={ref}
				style={{
					borderRadius: props.radius + 'px',
					fontSize: props.size + 'px',
				}}
			/>
			<span className={styles.error}>{props.error}</span>
		</div>
	)
})
