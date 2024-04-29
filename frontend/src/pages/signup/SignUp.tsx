import { useState } from "react"
import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await signup(inputs);
    }

    

    return (
        <div className="flex flex-col items-center justify-start min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>

                        <input className="w-full input input-border h-10" type="text" placeholder="John Doe" 
                            value={inputs.fullName} 
                            onChange={(event) => setInputs({...inputs, fullName: event.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>

                        <input className="w-full input input-border h-10" type="text" placeholder="johndoe" 
                            value={inputs.username} 
                            onChange={(event) => setInputs({...inputs, username: event.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>

                        <input className="w-full input input-border h-10" type="password" placeholder="Enter password" 
                            value={inputs.password} 
                            onChange={(event) => setInputs({...inputs, password: event.target.value})}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm password</span>
                        </label>

                        <input className="w-full input input-border h-10" type="password" placeholder="Confirm password" 
                            value={inputs.confirmPassword} 
                            onChange={(event) => setInputs({...inputs, confirmPassword: event.target.value})}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" to="/login">Already have an account?</Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp