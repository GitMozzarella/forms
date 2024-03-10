import { useState, useRef } from 'react'

export function SignIn({ onSubmit }) {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})

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

	return (
		<div>
			<form></form>
		</div>
	)
}
