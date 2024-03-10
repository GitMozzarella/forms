import styles from './App.module.css'
import { Form } from './components/Form/Form'

export function App() {
	return (
		<div className={styles.app}>
			<header className={styles.header}>React Forms</header>
			<Form />
		</div>
	)
}
