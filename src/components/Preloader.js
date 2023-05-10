import React from 'react'
import styles from './styles/preloader.module.css'
import img from '../images/preanimation.gif'

export default function Preloader() {
  return (
    <div className={styles.body}>
      <div className={styles.center}>
        <div className={styles.ring}>
        </div>
        <img src={img} alt="" />
          {/* <span>loading...</span> */}
      </div>
    </div>
  )
}
