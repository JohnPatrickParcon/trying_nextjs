import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [search, setSearch] = useState();
  
  return (
    <>
      <h1>Main page</h1>
      <input 
        placeholder='Search Movie'
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
      />
    </>
  )
}
