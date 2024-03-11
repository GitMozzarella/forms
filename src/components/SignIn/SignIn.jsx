import { useState, useRef } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Selector } from '../Selector/Selector'
import styles from './SignIn.module.css'

export function SignIn({ onSubmit }) {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})

	const formSettingsInputsRef = useRef(null)
	const [settingsInputs, setSettingsInputs] = useState({
		placeholder: 'Your email',
		label: 'Email',
		description: '',
		error: null,
		variant: 'Default',
		radius: 5,
		size: 16,
		disabled: false,
		asterisk: false,
	})

	const handleSettingsInputsChange = (e) => {
		if (e.target.name === 'disabled' || e.target.name === 'asterisk') {
			setSettingsInputs((prev) => ({
				...prev,
				[e.target.name]: !prev[e.target.name],
			}))
		} else {
			setSettingsInputs((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}))
		}
	}
	const inputsStyle = settingsInputs.error
		? styles.inputFieldError
		: settingsInputs.variant === 'Default'
		? styles.inputField
		: settingsInputs.variant === 'Filled'
		? styles.inputFilled
		: styles.inputUnstyled

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(inputs.email, inputs.password)
		formRef.current.reset()
		setInputs({ email: '', password: '' })
	}
	const handleReset = (e) => {
		e.preventDefault()
		formRef.current.reset()
		setInputs({ email: '', password: '' })
		formSettingsInputsRef.current.reset()
		setSettingsInputs({
			placeholder: 'Your email',
			label: 'Email',
			description: '',
			error: null,
			variant: 'Default',
			radius: 5,
			size: 16,
			disabled: false,
			asterisk: false,
		})
	}

	return (
		<div className={styles.signin}>
			<div className={styles.inputs}>
				<form ref={formRef} onSubmit={handleSubmit}>
					<div>
						<Input
							className={inputsStyle}
							label={settingsInputs.label}
							required={settingsInputs.asterisk}
							autoComplete="email"
							type="email"
							id="email"
							name="email"
							placeholder={settingsInputs.placeholder}
							value={inputs.email}
							description={settingsInputs.description}
							error={settingsInputs.error}
							variant={settingsInputs.variant}
							radius={settingsInputs.radius}
							size={settingsInputs.size}
							disabled={settingsInputs.disabled}
							onChange={handleChange}
						/>
					</div>
					<Input
						className={inputsStyle}
						label="Password"
						required={settingsInputs.asterisk}
						type="password"
						id="password"
						name="password"
						placeholder="Your password"
						value={inputs.password}
						description="Insert your password here"
						error={settingsInputs.error}
						variant={settingsInputs.variant}
						radius={settingsInputs.radius}
						size={settingsInputs.size}
						disabled={settingsInputs.disabled}
						onChange={handleChange}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</div>

			<div className={styles.settings}>
				<form ref={formSettingsInputsRef} onChange={handleSettingsInputsChange}>
					<Input
						label="Placeholder"
						type="text"
						id="placeholder"
						name="placeholder"
						placeholder="Placeholder"
						defaultValue={settingsInputs.placeholder}
						radius={5}
					/>
					<Input
						label="Label"
						type="text"
						id="label"
						name="label"
						placeholder="Label"
						defaultValue={settingsInputs.label}
						radius={5}
					/>
					<Input
						label="Description"
						type="text"
						id="description"
						name="description"
						placeholder="Description"
						radius={5}
					/>
					<Input
						label="Error"
						type="text"
						id="error"
						name="error"
						placeholder="Error"
						radius={5}
					/>
					<Selector
						label="Variant"
						type="select"
						id="variant"
						name="variant"
						defaultValue={settingsInputs.variant}
					/>
					<Input
						label="Radius"
						type="range"
						id="radius"
						name="radius"
						min="0"
						max="15"
						step="5"
						defaultValue={settingsInputs.radius}
					/>
					<Input
						label="Size"
						type="range"
						id="size"
						name="size"
						min="12"
						max="28"
						step="4"
						defaultValue={settingsInputs.size}
					/>
					<Input
						className={styles.toggle}
						label="Disabled"
						type="checkbox"
						id="disabled"
						name="disabled"
						defaultChecked={settingsInputs.disabled}
					/>
					<Input
						className={styles.toggle}
						label="With asterisk"
						type="checkbox"
						id="asterisk"
						name="asterisk"
						defaultChecked={settingsInputs.asterisk}
					/>
					<button className={styles.reset} onClick={handleReset}>
						Reset
					</button>
				</form>
			</div>
		</div>
	)
}
