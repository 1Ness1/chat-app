import GenderCheckbox from "./GenderCheckbox"
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-start min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Sign Up
                <span className="text-blue-500"> ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>

                    <input className="w-full input input-border h-10" type="text" placeholder="John Doe"/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>

                    <input className="w-full input input-border h-10" type="text" placeholder="johndoe" />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>

                    <input className="w-full input input-border h-10" type="password" placeholder="Enter password" />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Confirm password</span>
                    </label>

                    <input className="w-full input input-border h-10" type="password" placeholder="Confirm password" />
                </div>

                <GenderCheckbox />

                <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">Already have an account?</a>

                <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp