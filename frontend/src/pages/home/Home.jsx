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
            <div className="fixed inset-0 z-50 flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br from-[#4c1156] via-[#3d0e47] to-[#2d0a35]">
                {/* Background overlay to match your app's theme */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                
                {/* Loading content */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                    <div className="relative">
                        {/* Outer glow effect */}
                        <div className="absolute inset-0 rounded-full bg-[#E879F9] opacity-20 blur-xl animate-pulse"></div>
                        
                        {/* Loader */}
                        <HashLoader
                            color="#E879F9"
                            loading={loading}
                            size={80}
                            aria-label="Loading Spinner"
                        />
                    </div>
                    
                    {/* Loading text with animation */}
                    <div className="text-center space-y-2">
                        <p className="text-white text-xl font-medium animate-pulse">
                            Waking up the server...
                        </p>
                        <div className="flex justify-center space-x-1">
                            <div className="w-2 h-2 bg-[#E879F9] rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-[#E879F9] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-[#E879F9] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">
                            This may take a moment if the server is sleeping
                        </p>
                    </div>
                </div>
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