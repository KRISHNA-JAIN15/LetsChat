import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup when component unmounts
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="md:min-w-[450px] flex flex-col h-full bg-[#1A0F1C] bg-opacity-80 backdrop-blur-md">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="px-4 py-3 border-b border-[#4B2C3D] text-[#F4E6F2]">
						<span className="text-sm text-[#B294A8]">To:</span>{" "}
						<span className="font-semibold text-[#FF5C5C]">{selectedConversation.fullName}</span>
					</div>

					{/* Messages Area */}
					<div className="flex-1 overflow-y-auto">
						<Messages />
					</div>

					{/* Input */}
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

// ─────────────────────────────────────────────

const NoChatSelected = () => {
	const { authUser } = useAuthContext();

	return (
		<div className="flex items-center justify-center w-full h-full bg-[#1A0F1C] bg-opacity-80 backdrop-blur-md rounded-md">
			<div className="px-4 text-center sm:text-lg md:text-xl text-[#F4E6F2] font-semibold flex flex-col items-center gap-3">
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p className="text-[#B294A8]">Select a chat to start messaging</p>
				<TiMessages className="text-[#FF5C5C] text-4xl md:text-6xl" />
			</div>
		</div>
	);
};
