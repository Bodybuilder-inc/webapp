import React from 'react'
import type { FC } from 'react'

import styles from './index.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainText}>Bodybuilder sua aplicação de acadêmia</h1>
    </div>
  )
}

export default Home
