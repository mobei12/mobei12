import { FC } from 'react';
import './index.scss';
import avatar from 'src/images/avatar.jpg';

const personText = '来自古城西安，2015年大学本科毕业，来深圳从事开发工作，先后经历了两家公司。接触过移动端开发小程序和混合App,也有部分后台Java的开发经验，技术栈Vue、React、JS、typescript、node；工作内容包括但不限于：团队管理、小组任务分配、基础工程搭建、新技术调研；期待加一个可以共同成长的团队！';
const OverView: FC = () => {
	return (
		<div className='OverView-container pt-10'>
			<h1 className="text-center text-3xl  text-yellow-50 font-bold">OverView</h1>
			<figure className="md:flex hover:shadow-lg mt-2 ml-40 mr-40 h-auto  mx-auto bg-gradient-to-r from-blue-500 to-green-500   rounded-md overflow-hidden p-8 md:p-0 dark:bg-sky-800 hover:scale-105 transition-transform duration-300 ease-in-out">
				<img className=" w-52 mx-auto md:rounded-none rounded-full" src={avatar} alt="avatar" />
				<div className="pt-6  md:p-8 text-center md:text-left space-y-4">
					<blockquote>
						<p className=" text-yellow-50 text-lg  font-medium">{personText}</p>
					</blockquote>
				</div>
			</figure>
		</div>
	);
};
export default OverView;
