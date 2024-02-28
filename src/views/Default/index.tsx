import { useEffect, createContext, useState } from 'react'

import TestSon1 from './components/TestSon1'
import TestSon2 from './components/TestSon2'

const TestSon1Provoid = createContext(0)
const TestSon2Provoid = createContext(0)

const Default = () => {
	useEffect(() => {}, [])
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)

	return (
		<>
			<TestSon1Provoid.Provider value={a}>
				<TestSon2Provoid.Provider value={b}>
					<TestSon1 Change={() => setA(1)}></TestSon1>
					<TestSon2></TestSon2>
				</TestSon2Provoid.Provider>
			</TestSon1Provoid.Provider>
		</>
	)
}

export default Default
