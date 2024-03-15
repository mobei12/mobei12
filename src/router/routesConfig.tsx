import { Navigate } from 'react-router-dom';
/* ---userEnd---*/
import NotFind from 'src/pages/404';
import Home from 'src/pages/Layout';
import PageTemplate from 'src/pages/Layout/PageTemplate';
import ToDoList from 'src/pages/Layout/ToDoList';
import { ExtendedRouteObject } from './type';
/* ---HomeEnd---*/

const routesConfig: ExtendedRouteObject[] = [
	{
		path: '/home',
		auth: true,
		element: <Home />,
		children: [
			{
				path: 'PageTemplate',
				title: '页面模板',
				element: <PageTemplate />,
			},
			{
				path: 'ToDoList',
				title: 'TodoList',
				element: <ToDoList />,
			},
			{
				path: '',
				element: <Navigate to="PageTemplate" replace />,
			},
		],
	},
	{
		path: '*',
		element: <NotFind />,
	},
];
export default routesConfig;
