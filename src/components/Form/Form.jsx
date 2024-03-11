import { SignIn } from '../SignIn/SignIn'
import { SignUp } from '../SignUp/SignUp.jsx'
import styles from './Form.module.css'

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
			<header className={styles.header}>SignIn</header>
			<SignIn onSubmit={onSubmitSignin} />
			<header className={styles.header}>SignUp</header>
			<SignUp onSubmit={onSubmitSignup} />
		</div>
	)
}
