import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="px-4 py-3 bg-[#1A0F1C] border-t border-[#4B2C3D]" onSubmit={handleSubmit}>
			<div className="relative w-full">
				<input
					type="text"
					className="w-full text-sm rounded-full py-2 pr-10 pl-4 bg-[#2B1B2E] border border-[#4B2C3D] text-[#F4E6F2] placeholder-[#B294A8] focus:outline-none focus:border-[#D73A49] transition-all duration-200"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					disabled={loading}
					className="absolute right-2 top-1/2 -translate-y-1/2 text-[#F4E6F2] hover:text-[#FF5C5C] transition-all"
				>
					{loading ? (
						<div className="loading loading-spinner w-5 h-5"></div>
					) : (
						<BsSend className="w-5 h-5" />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
