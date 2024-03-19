import { FC } from 'react';
import showMessage, { EMessageType } from 'src/component/Message/index';
import './index.scss';

const PageTemplate: FC = () => {
	const title = CUSTOMIZE_PORT ? `PageTemplate ${CUSTOMIZE_PORT}` : 'PageTemplate';

	return (
		<div>
			<h1 className="text-center text-3xl  text-yellow-50 font-bold">{title}</h1>
			<div
				className='text-center text-3xl mt-80  text-yellow-50 font-bold mx-auto border-2 p-2 bg-sky-500 hover:bg-sky-700 w-40 cursor-pointer rounded'
				onClick={() => {
					showMessage({
						msg: 'Hello, PageTemplate ',
						type: EMessageType.success,
						duration: 1,
						callback: () => {
							console.log('Message closed');
						},
					});
				}}
			>
				Click
			</div>
		</div>
	);
};
export default PageTemplate;
