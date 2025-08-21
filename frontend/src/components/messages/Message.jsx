import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);

	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

	const bubbleBgColor = fromMe
		? "bg-[#D73A49]" // sender
		: "bg-[#2B1B2E]"; // receiver

	const textColor = fromMe ? "text-white" : "text-[#F4E6F2]";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 h-10 rounded-full border-2 border-[#4B2C3D] shadow-md">
					<img
						alt="User Avatar"
						src={profilePic}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			<div
				className={`chat-bubble ${bubbleBgColor} ${textColor} ${shakeClass} px-4 py-2 rounded-xl max-w-xs md:max-w-md break-words`}
			>
				{message.message}
			</div>

			<div className="chat-footer opacity-60 text-xs text-[#B294A8] mt-1">
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;
