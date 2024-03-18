import { FC, useEffect } from 'react';
import showMessage, { EMessageType } from 'src/component/Message/index';
import './index.scss';

const PageTemplate: FC = () => {
	const title = CUSTOMIZE_PORT ? `PageTemplate ${CUSTOMIZE_PORT}` : 'PageTemplate';
	useEffect(() => {
		showMessage({
			msg: 'Hello, PageTemplate ',
			type: EMessageType.warning,
			duration: 3,
			callback: () => {
				console.log('Message closed');
			}
		});
	}, []);
	return (
		<div>
			<h1 className="text-center text-3xl  text-yellow-50 font-bold">{title}</h1>
		</div>
	);
};
export default PageTemplate;
