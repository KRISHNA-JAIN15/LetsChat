import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className='w-full p-6 rounded-lg shadow-md bg-[#1A0F1C] bg-opacity-80 backdrop-blur-lg'>
    <h1 className='text-3xl font-semibold text-center text-[#F4E6F2]'>
      Sign Up <span className='text-[#FF5C5C]'>ChatApp</span>
    </h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text text-[#B294A8]'>Full Name</span>
        </label>
        <input
          type='text'
          placeholder='Your Full Name'
          className='w-full input input-bordered h-10 bg-[#2B1B2E] text-[#F4E6F2] border border-[#4B2C3D] focus:border-[#D73A49]'
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text text-[#B294A8]'>Username</span>
        </label>
        <input
          type='text'
          placeholder='username'
          className='w-full input input-bordered h-10 bg-[#2B1B2E] text-[#F4E6F2] border border-[#4B2C3D] focus:border-[#D73A49]'
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </div>

      <div>
        <label className='label'>
          <span className='text-base label-text text-[#B294A8]'>Confirm Password</span>
        </label>
        <input
          type='password'
          placeholder='Confirm Password'
          className='w-full input input-bordered h-10 bg-[#2B1B2E] text-[#F4E6F2] border border-[#4B2C3D] focus:border-[#D73A49]'
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
        />
      </div>

      <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

      <Link
        to={"/login"}
        className='text-sm hover:underline text-[#B294A8] hover:text-[#FF5C5C] mt-2 inline-block'
      >
        Already have an account?
      </Link>

      <div>
        <button
          className='btn btn-block btn-sm mt-2 bg-[#D73A49] text-white hover:bg-[#A42C39] border-none'
          disabled={loading}
        >
          {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
        </button>
      </div>
    </form>
  </div>
</div>


	);
};

export default SignUp;
