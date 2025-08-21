import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#1A0F1C] bg-opacity-80 backdrop-blur-lg shadow-lg border border-[#4B2C3D]'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
