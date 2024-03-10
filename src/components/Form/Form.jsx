import { SignIn } from '../SignIn/SignIn'
import { SignUp } from '../SignUp/SignUp.jsx'

export function Form() {
	const onSubmitSignin = (email, password) => {
		console.log(email, password)
	}

	const onSubmitSignup = (
		name,
		nickname,
		email,
		gender,
		password,
		confirmPassword
	) => {
		console.log(name, nickname, email, gender, password, confirmPassword)
	}

	return (
		<div>
			<SignIn onSubmit={onSubmitSignin} />
			<SignUp onSubmit={onSubmitSignup} />
		</div>
	)
}
