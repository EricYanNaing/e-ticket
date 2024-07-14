import { Link } from "react-router-dom";

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <div>
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center w-full ">
        <div className=" bg-red-400 shadow-md rounded-lg px-8 py-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center mb-4 text-white">
            {isLogin ? "Welcome Back!" : "Register New Account"}
          </h1>
          <form action="#">
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium  text-white mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium  text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <label className="ml-2 block text-sm text-gray-600 ">
                  {isLogin ? "Not registered?" : "Already Have an account?"}
                </label>
              </div>
              {isLogin ? (
                <Link to={"/register"} className=" text-white ">
                  Create Account Here
                </Link>
              ) : (
                <Link to={"/login"} className=" text-white ">
                  Login Here
                </Link>
              )}
            </div>
            <button
              type="submit"
              className="w-1/2 m-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-500 bg-white hover:bg-gray-200 focus:outline-none "
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
