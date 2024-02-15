import { useEffect } from 'react'
import './index.css'
import { fn } from './test'
import img from '@/asset/example.jpg'
/**
 * @practice1
 */
const Practice = () => {
	useEffect(() => {
		fn()
	})
	return (
		<>
			<img src={fn() as any}></img>
		</>
	)
}

export default Practice
