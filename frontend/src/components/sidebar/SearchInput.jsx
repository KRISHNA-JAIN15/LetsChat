import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-2 bg-[#1A0F1C] bg-opacity-80 backdrop-blur-md px-3 py-2 rounded-full w-full"
		>
			<input
				type="text"
				placeholder="Search…"
				className="flex-1 bg-transparent text-[#F4E6F2] placeholder-[#B294A8] focus:outline-none"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				className="p-2 rounded-full bg-[#D73A49] hover:bg-[#A42C39] transition-all duration-200 text-white"
			>
				<IoSearchSharp className="w-5 h-5" />
			</button>
		</form>
	);
};

export default SearchInput;
