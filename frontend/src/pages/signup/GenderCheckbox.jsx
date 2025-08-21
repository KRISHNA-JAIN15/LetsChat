const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex gap-6 mt-4 mb-2'>
			<div className='form-control'>
				<label
					className={`label gap-2 cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
						selectedGender === "male"
							? "bg-[#2B1B2E] border border-[#D73A49] shadow-md"
							: "bg-[#1A0F1C] border border-[#4B2C3D]"
					}`}
				>
					<span className='label-text text-[#F4E6F2]'>Male</span>
					<input
						type='checkbox'
						className='checkbox checkbox-sm accent-[#D73A49] border-[#4B2C3D]'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>

			<div className='form-control'>
				<label
					className={`label gap-2 cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
						selectedGender === "female"
							? "bg-[#2B1B2E] border border-[#D73A49] shadow-md"
							: "bg-[#1A0F1C] border border-[#4B2C3D]"
					}`}
				>
					<span className='label-text text-[#F4E6F2]'>Female</span>
					<input
						type='checkbox'
						className='checkbox checkbox-sm accent-[#D73A49] border-[#4B2C3D]'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
