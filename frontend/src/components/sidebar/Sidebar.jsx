import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="w-full md:w-80 h-full flex flex-col p-4 bg-[#1A0F1C] bg-opacity-80 backdrop-blur-md border-r border-[#4B2C3D]">
			{/* Search Bar */}
			<SearchInput />

			{/* Divider */}
			<div className="divider px-3 text-[#B294A8]">Chats</div>

			{/* Conversations List */}
			<div className="flex-1 overflow-y-auto">
				<Conversations />
			</div>

			{/* Logout */}
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
