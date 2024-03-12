import { forwardRef } from 'react'
import styles from './Input.module.css'

export const Input = forwardRef(({ ...props }, ref) => {
	const asteriskStyle = {
		color: 'red',
		marginLeft: '2px',
	}

	const inputStyle = {
		borderRadius: props.radius + 'px',
		fontSize: props.size + 'px',
		paddingLeft: props.icon ? '40px' : '10px',
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
			<div className={styles.inputFieldContainer}>
				{props.icon && <div className={styles.icon}>{props.icon}</div>}{' '}
				<input
					className={`${
						props.error ? styles.inputFieldError : styles.inputField
					} ${props.icon ? styles.inputWithIcon : ''}`}
					{...props}
					ref={ref}
					style={inputStyle}
				/>
			</div>
			<span className={styles.error}>{props.error}</span>
		</div>
	)
})
