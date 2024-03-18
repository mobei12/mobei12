export enum EMessageType {
	success = 'success',
	error = 'error',
	warning = 'warning',
	info = 'info',
}
/**
 * @description 展示提示
 * @param msg  提示信息
 * @param type 类型
 * @param duration 时长111
 * @param callback 回调
 */
interface IMessage {
	msg: string;
	type: EMessageType;
	duration: number;
	callback?: () => void;
}

type MessageComponent = (props: IMessage) => void;
const getColor = (type: EMessageType): string => {
	switch (type) {
		case EMessageType.success:
			return 'text-green-500 bg-green-100';
		case EMessageType.error:
			return 'text-red-500 bg-red-100';
		case EMessageType.warning:
			return 'text-yellow-500 bg-yellow-100';
		case EMessageType.info:
			return 'text-blue-500 bg-blue-100';
		default:
			return 'text-green-500 bg-green-100';
	}
};
const directiveRender: MessageComponent = ({ msg, type = EMessageType.success, duration, callback }) => {
	// 创建消息容器
	const container = document.createElement('div');
	container.setAttribute('class', 'fixed bottom-0 left-0 right-0 flex justify-center mb-4');
	document.body.appendChild(container);

	// 创建消息元素
	const messageElement = document.createElement('div');
	messageElement.textContent = msg;

	// 添加消息元素的样式
	messageElement.setAttribute('class', `font-semibold px-4 py-2 rounded-md text-center ${getColor(type)}`);

	// 添加消息元素到容器中
	container.appendChild(messageElement);

	// 设置定时器关闭消息
	setTimeout(() => {
		container.remove();
		if (typeof callback === 'function') {
			callback();
		}
	}, duration * 1000);
};
export default directiveRender;
