// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
// 	return (
// 		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#1A0F1C] bg-opacity-80 backdrop-blur-lg shadow-lg border border-[#4B2C3D]'>
// 			<Sidebar />
// 			<MessageContainer />
// 		</div>
// 	);
// };

// export default Home;
import { useState, useEffect } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { HashLoader } from "react-spinners";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the backend is ready
        const checkBackendStatus = async () => {
            try {
                // Replace with your API endpoint - typically a lightweight health check endpoint
                const response = await fetch("https://letschat-t1b2.onrender.com/api/health", {
                    credentials: "include",
                });
                
                if (response.ok) {
                    setLoading(false);
                } else {
                    // Retry after a delay
                    setTimeout(checkBackendStatus, 1500);
                }
            } catch (error) {
                // If error (likely server not started), retry after a delay
                setTimeout(checkBackendStatus, 1500);
            }
        };

        checkBackendStatus();
    }, []);

    if (loading) {
		return (
			<div className="fixed inset-0 flex flex-col justify-center items-center bg-[#1A0F1C] bg-opacity-90 backdrop-blur-md z-50">
				<HashLoader
					color="#E879F9"
					loading={loading}
					size={90}
					aria-label="Loading Spinner"
				/>
				<p className="mt-6 text-pink-300 text-xl font-semibold animate-pulse">
					Waking up the server...
				</p>
			</div>
		);
	}


    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#1A0F1C] bg-opacity-80 backdrop-blur-lg shadow-lg border border-[#4B2C3D]'>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;