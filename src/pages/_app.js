import { useState } from "react"
import '@/styles/Sass/index.scss'
import { AppContext } from "../../components/Context"

export default function App({ Component, pageProps }) {
  const [data,setData] = useState([])
  return (
    <AppContext.Provider value={{data,setData}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
