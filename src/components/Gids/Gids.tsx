import React, { useState } from 'react'
import styles from './Gids.module.scss'

interface GidsProps {
  gids: {
    id: number
    name: string
    age: string
    exp: string
    rating: string
    img: string
    desc: string
  }[]
}

const Gids: React.FC<GidsProps> = ({ gids }) => {
  return (
    <div className={styles.fullBlog}>
      {gids.map((g) => (
        <div className={styles.container} key={g.id}>
          <img src={g.img} alt={g.name} />
          <div className={styles.blog}>
            <p>{g.name}</p>
            <div className={styles.info}>
              <p className={styles.rating}>{g.rating}</p>
              <p>{g.age}</p>
              <p>{g.exp}</p>
            </div>
            <div className={styles.com_blog}>
              <p>{g.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gids
