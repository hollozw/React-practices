import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Default from '@/views/Default/index'
import Canvas from '@/views/Canvas/index'
import ICss from '@/views/ICss/index'
import Test from '@/views/Test'
import Module from '@/views/modules_test'
import Appraisal from '@/views/Appraisal_System_Project/index'

const Routers = () => {
	const RoutersArr = [
		{ path: '/', element: <Default /> },
		{ path: '/canvas', element: <Canvas /> },
		{ path: '/icss', element: <ICss /> },
		{ path: '/test', element: <Test /> },
		{ path: '/module', element: <Module /> },
	]
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Default />}></Route>
				<Route path="/canvas" element={<Canvas />}></Route>
				<Route path="/icss" element={<ICss />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
