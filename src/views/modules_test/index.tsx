import { useEffect } from "react"
import useFun from './fn'

const Modulesed = () => {
  useEffect(() => {
    useFun()
  }, [])
	return <>Modules</>
}

export default Modulesed
