import { FC } from 'react';
import './index.scss';

const PageTemplate: FC = () => {
	const title = CUSTOMIZE_PORT ? `PageTemplate ${CUSTOMIZE_PORT}` : 'PageTemplate'
	return (
		<div >
			<h1 className="text-center text-3xl  text-yellow-50 font-bold">{title}</h1>
		</div>
	);
};
export default PageTemplate;
