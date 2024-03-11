import { useState, useRef } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Selector } from '../Selector/Selector'
import styles from './SignUp.module.css'

export function SignUp({ onSubmit }) {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		name: '',
		nickname: '',
		email: '',
		gender: '',
		password: '',
		confirmPassword: '',
	})

	const formSettingsInputsRef = useRef(null)
	const [settingsInputs, setSettingsInputs] = useState({
		placeholder: 'Your name',
		label: 'Name',
		description: '',
		error: null,
		variant: 'Default',
		radius: 5,
		size: 16,
		disabled: false,
		asterisk: false,
	})

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

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

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(
			inputs.name,
			inputs.nickname,
			inputs.email,
			inputs.gender,
			inputs.password,
			inputs.confirmPassword
		)
		formRef.current.reset()
		setInputs({
			name: '',
			nickname: '',
			email: '',
			gender: '',
			password: '',
			confirmPassword: '',
		})
	}

	const inputsStyle = settingsInputs.error
		? styles.inputFieldError
		: settingsInputs.variant === 'Default'
		? styles.inputField
		: settingsInputs.variant === 'Filled'
		? styles.inputFilled
		: styles.inputUnstyled

	const handleReset = (e) => {
		e.preventDefault()
		formRef.current.reset()
		setInputs({
			name: '',
			nickname: '',
			email: '',
			gender: '',
			password: '',
			confirmPassword: '',
		})
		formSettingsInputsRef.current.reset()
		setSettingsInputs({
			placeholder: 'Your name',
			label: 'Name',
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
		<div className={styles.signup}>
			<div className={styles.inputs}>
				<form ref={formRef} onSubmit={handleSubmit}>
					<Input
						className={inputsStyle}
						label={settingsInputs.label}
						required={settingsInputs.asterisk}
						autoComplete="name"
						type="text"
						id="name"
						name="name"
						placeholder={settingsInputs.placeholder}
						value={inputs.name}
						description={settingsInputs.description}
						error={settingsInputs.error}
						variant={settingsInputs.variant}
						radius={settingsInputs.radius}
						size={settingsInputs.size}
						disabled={settingsInputs.disabled}
						onChange={handleChange}
					/>
					<Input
						className={inputsStyle}
						label="Nickname"
						required={settingsInputs.asterisk}
						type="text"
						id="nickname"
						name="nickname"
						placeholder="Your nickname"
						value={inputs.nickname}
						description={settingsInputs.description}
						error={settingsInputs.error}
						variant={settingsInputs.variant}
						radius={settingsInputs.radius}
						size={settingsInputs.size}
						disabled={settingsInputs.disabled}
						onChange={handleChange}
					/>
					<Input
						className={inputsStyle}
						label="Email"
						required={settingsInputs.asterisk}
						autoComplete="email"
						type="email"
						id="email"
						name="email"
						placeholder="Your email"
						value={inputs.email}
						description={settingsInputs.description}
						error={settingsInputs.error}
						variant={settingsInputs.variant}
						radius={settingsInputs.radius}
						size={settingsInputs.size}
						disabled={settingsInputs.disabled}
						onChange={handleChange}
					/>
					<div className={styles.genderContainer}>
						<div className={styles.male}>
							<Input
								className={styles.gender}
								label="Male"
								required={settingsInputs.asterisk}
								type="radio"
								id="male"
								name="gender"
								value="male"
								size={settingsInputs.size}
								disabled={settingsInputs.disabled}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.female}>
							<Input
								className={styles.gender}
								label="Female"
								required={settingsInputs.asterisk}
								type="radio"
								id="female"
								name="gender"
								value="female"
								size={settingsInputs.size}
								disabled={settingsInputs.disabled}
								onChange={handleChange}
							/>
						</div>
					</div>
					<Input
						label="Password"
						className={inputsStyle}
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
					<Input
						label="Confirm Password"
						className={inputsStyle}
						required={settingsInputs.asterisk}
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Confirm password"
						value={inputs.confirmPassword}
						description="Confirm your password here"
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
