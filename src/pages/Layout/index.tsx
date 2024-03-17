import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className='  h-full bg-gradient-to-br from-purple-500 to-cyan-500'>
			<Outlet />
		</div>
	);
}

export default Layout;
