import { FC } from 'react';
import './App.scss';
import Element from './router/Element';
import routesConfig from './router/routesConfig';

const App: FC = () => {
	return (
		<div className="App h-full">
			<Element routesConfig={routesConfig} />
		</div>
	)
};
export default App;
