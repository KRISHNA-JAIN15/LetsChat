import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();

	const isSelected = selectedConversation?._id === conversation._id;
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-2 items-center cursor-pointer rounded px-2 py-2 transition-colors duration-200
				${isSelected ? "bg-[#2B1B2E]" : "hover:bg-[#2B1B2E]"}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
					<div className='w-12 rounded-full border border-[#4B2C3D]'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between items-center'>
						<p className='font-semibold text-[#F4E6F2]'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='border-b border-[#4B2C3D] mx-4 my-1' />}
		</>
	);
};

export default Conversation;
