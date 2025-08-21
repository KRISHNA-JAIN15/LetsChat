import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto w-full px-4 py-2">
			<button
				onClick={logout}
				disabled={loading}
				className={`flex items-center justify-center w-full gap-2 py-2 rounded-md bg-[#D73A49] text-white hover:bg-[#A42C39] transition-all duration-200 ${
					loading ? "opacity-70 cursor-not-allowed" : ""
				}`}
			>
				{loading ? (
					<span className="loading loading-spinner"></span>
				) : (
					<>
						<BiLogOut className="w-5 h-5" />
						Log Out
					</>
				)}
			</button>
		</div>
	);
};

export default LogoutButton;
