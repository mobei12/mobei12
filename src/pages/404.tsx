import { FC } from 'react';

const NoFoundPage: FC = () => {
	const goBack = (): void => {
		window.history.back();
	};
	return (
		<div title="没有找到您访问的页面" ><button type="button" onClick={goBack}>返回</button>
		</div>
	);
};

export default NoFoundPage;
