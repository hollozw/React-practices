import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Default from '@/views/Default/index'
import Canvas from '@/views/Canvas/index'
import ICss from '@/views/ICss/index'
import Test from '@/views/Test'

const Routers = () => {
	const RoutersArr = [
		{ path: '/', element: <Default /> },
		{ path: '/canvas', element: <Canvas /> },
		{ path: '/icss', element: <ICss /> },
		{ path: '/test', element: <Test /> },
	]
	return (
		<BrowserRouter>
			<Routes>
				{RoutersArr.map((item, index) => {
					return <Route key={index} {...item} />
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
