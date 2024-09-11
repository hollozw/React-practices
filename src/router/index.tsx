import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { RouteComponent } from './route'

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				{RouteComponent().map((item) => {
					return (
						<Route
							key={item.key}
							path={item.path}
							element={item.element}
						></Route>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
