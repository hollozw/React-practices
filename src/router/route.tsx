import Default from '@/views/Default/index'
import Canvas from '@/views/Canvas/index'
import ICss from '@/views/ICss/index'
import Login from '@/views/Login/index'

export function RouteComponent() {
	return [
		{
			path: '/',
			key: 'default',
			element: <Default />,
		},
		{
			path: '/canvas',
			key: 'canvas',
			element: <Canvas />,
		},
		{
			path: '/icss',
			key: 'icss',
			element: <ICss />,
		},
		{
			path: '/login',
			key: 'login',
			element: <Login />,
		},
		{
			path: '*',
			key: '404',
			element: (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<h1>404</h1>
				</div>
			),
		},
	]
}
