import { Category } from '@mui/icons-material'
import React from 'react'
import css from '../Header/Header.module.css'

export default function Header({title}) {
  return (
    <div className={css.header}>
    <h1 id={css.Category} className={css.title}>
        {title}
    </h1>
    </div>
  )
}
