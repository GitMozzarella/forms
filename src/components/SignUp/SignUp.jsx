import { useState, useRef } from 'react'

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

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
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

	return (
		<div>
			<form></form>
		</div>
	)
}
