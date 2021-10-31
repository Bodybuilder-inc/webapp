// import { SignInButton } from '../SignInButton';
// import { SignUpButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img
          className={styles.mainImage}
          src="/images/bodybuilder.svg"
          alt="bodybuilder"
        />
        <nav className={styles.listContent}>
          <a>About</a>
          <a>Training</a>
          <a>Etc...</a>
          <a>Etc...</a>
        </nav>
      </div>
      <div className={styles.headerContent}>
        <div>SignIn</div>
        <div className={styles.signup}>SignUP</div>
      </div>
    </header>
  )
}
