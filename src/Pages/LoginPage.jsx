import logoBg from "../assets/login-bg.svg";
import sanjoghelplinelogo from "../assets/sanjog-helpline-logo(white).png";
import ocacLogo from "../assets/ocac-logo.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-[#005881] h-screen w-full flex items-center justify-center">
      <div
        className="h-[97%] w-4/6 bg-no-repeat bg-contain bg-center flex flex-col justify-center items-center border-2 border-red-500"
        style={{ backgroundImage: `url(${logoBg})` }}
      >
        <div className="w-2/5 bg-[#19516A] rounded-2xl px-12 mb-10 shadow-2xl shadow-zinc-900 flex flex-col justify-center items-center border-2 border-red-500">
          <div className="w-full flex justify-center mt-6">
            <img src={sanjoghelplinelogo} alt="logo" className="w-32 inline" />
            <span className="inline border-[1px] border-zinc-400 mx-2"></span>
            <img src={ocacLogo} alt="logo" className="w-32 inline" />
          </div>
          <div className="text-center text-white font-semibold text-2xl mt-6">
            <h1>Login</h1>
          </div>
          <form className="w-full mt-6 mb-4">
            <div>
              <label htmlFor="username" className="text-white">
                Enter your login details
              </label>
              <input
                type="text"
                name="username"
                placeholder="Email or Username"
                className="w-full rounded-md py-1 px-2 mt-1"
              />
            </div>
            <div className="w-full mt-4">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="**********"
                className="w-full rounded-md py-1 px-2 mt-1"
              />
            </div>
            <div className="flex justify-between text-sm text-zinc-400 mt-2">
              <Link
                href="#"
                className="hover:underline-offset-2 hover:text-white hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button className="bg-[#054161] px-5 py-2 w-full mt-8 mb-5 text-white rounded-md border-2 border-[#82A0B0] active:scale-105 duration-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
