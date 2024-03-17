import { FC } from 'react';

const NoFoundPage: FC = () => {
	const goBack = (): void => {
		// Todo 修改路由切换
		window.location.href = '/#/home/OverView';
	};
	return (
		<div className='text-center pt-20 space-y-10'>
			<h2 className='text-5xl'>404</h2>
			<div className=' bg-sky-500 w-20  p-1 mx-auto rounded-md cursor-pointer hover:bg-sky-700 text-gray-50' onClick={goBack}>
				去主页
			</div>
			<p className='text-gray-400'>这里什么 都没有</p>
			<p className='text-gray-400 mt-20'>design by @mobei</p>
		</div>
	);
};

export default NoFoundPage;
