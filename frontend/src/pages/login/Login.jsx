import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-[#1A0F1C] bg-opacity-80 backdrop-blur-lg'>
				<h1 className='text-3xl font-semibold text-center text-[#F4E6F2]'>
					Login <span className='text-[#FF5C5C]'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-[#B294A8]'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10 bg-[#2B1B2E] text-[#F4E6F2] border border-[#4B2C3D] focus:border-[#D73A49]'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-[#B294A8]'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-[#2B1B2E] text-[#F4E6F2] border border-[#4B2C3D] focus:border-[#D73A49]'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to='/signup'
						className='text-sm hover:underline text-[#B294A8] hover:text-[#FF5C5C] mt-2 inline-block'
					>
						Don't have an account?
					</Link>

					<div>
						<button
							className='btn btn-block btn-sm mt-2 bg-[#D73A49] text-white hover:bg-[#A42C39] border-none'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
