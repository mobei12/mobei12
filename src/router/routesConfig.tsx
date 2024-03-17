import { Navigate } from 'react-router-dom';
/* ---userEnd---*/
import NotFind from 'src/pages/404';
import Home from 'src/pages/Layout';
import PageTemplate from 'src/pages/Layout/PageTemplate';
import OverView from 'src/pages/Layout/OverView';
import { ExtendedRouteObject } from './type';
/* ---HomeEnd---*/

const routesConfig: ExtendedRouteObject[] = [
	{
		path: '/home',
		// auth: true,
		element: <Home />,
		children: [
			{
				path: 'PageTemplate',
				title: '页面模板',
				element: <PageTemplate />,
			},
			{
				path: 'OverView',
				title: '概况',
				element: <OverView />,
			},
			{
				path: '',
				element: <Navigate to="OverView" replace />,
			},
		],
	},
	{
		path: '*',
		element: <NotFind />,
	},
];
export default routesConfig;
