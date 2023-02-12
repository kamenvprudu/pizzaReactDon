import React from 'react'

import styles from './NotFound.module.scss'
export default function index() {
  return (
    <div className={styles.root}>
      <h1 className={styles.description}>
        Ничего не найдено
      </h1>
      <p className={styles.textab}>К сожалению в даным момент интернет-страница не найдена</p>
    </div>
  )
}
