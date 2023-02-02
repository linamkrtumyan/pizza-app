import React, { useContext } from 'react'
import { SearchContext } from '../../App'
import styles from "./Search.module.scss"

export function Search() {
  const {searchValue, setSearchValue} = useContext(SearchContext)
  return (
    <input onChange={(e) => setSearchValue(e.target.value)} className={styles.root} placeholder="Поиск пиццы..."  />
  )
}

