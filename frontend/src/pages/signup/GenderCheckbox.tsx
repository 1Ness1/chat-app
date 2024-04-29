const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input className={`checkbox border-slate-900 ${selectedGender === "male" ? "selected" : ""}`} type="checkbox" 
                    checked={selectedGender === "male"} 
                    onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input className={`checkbox border-slate-900 ${selectedGender === "female" ? "selected" : ""}`} type="checkbox" 
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox