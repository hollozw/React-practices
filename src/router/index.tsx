import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Default from '@/views/Default/index'
import Canvas from '@/views/Canvas/index'
import ICss from '@/views/ICss/index'
import Appraisal from '@/views/Appraisal_System_Project/index'

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Default />}></Route>
				<Route path="/canvas" element={<Canvas />}></Route>
				<Route path="/icss" element={<ICss />}></Route>
				<Route path="/app" element={<Appraisal />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
