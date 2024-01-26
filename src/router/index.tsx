import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Default from '@/views/Default/index'
import Canvas from '@/views/Canvas/index'
import ICss from '@/views/ICss/index'

const Routers = () => {
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
