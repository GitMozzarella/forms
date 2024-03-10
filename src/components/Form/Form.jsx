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

	return <div></div>
}
