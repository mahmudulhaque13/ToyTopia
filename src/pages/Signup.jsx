import React from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router";

const Signup = () => {
  const handleSignup = () => {};
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-300 to-orange-400">
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:bg-orange-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:bg-orange-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:bg-orange-300"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  //   type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:bg-orange-300"
                />
                <span
                  //   onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {/* {show ? <FaEye /> : <IoEyeOff />} */}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-white  font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
