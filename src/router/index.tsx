import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Default from '../views/Default/index.tsx'
import Moxs from '../views/Moxs/index.tsx'
import XlsxProject from '../views/XlsxProject/index.tsx'
import Canvas from '../views/Canvas/index.tsx'
import Form from '../views/Form/index.tsx'

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Default />}></Route>
				<Route path="/moxs" element={<Moxs />}></Route>
				<Route path="/xlsx" element={<XlsxProject />}></Route>
				<Route path="/canvas" element={<Canvas />}></Route>
				<Route path="/form" element={<Form />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
