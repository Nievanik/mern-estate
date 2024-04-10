import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center py-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name=""
          id="username"
          placeholder="Username"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>

        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
