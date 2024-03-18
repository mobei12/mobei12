import { type FC } from 'react';

type MessageProps = {
	close: () => void;
};
const Message: FC<MessageProps> = ({ close }) => {
	return (
		<div>
			<h1>Message</h1>
			<button onClick={close}></button>
		</div>
	);
};

export default Message;
