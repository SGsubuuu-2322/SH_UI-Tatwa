import logoBg from "../assets/login-bg.svg";
import sanjoghelplinelogo from "../assets/sanjog-helpline-logo(white).png";
import ocacLogo from "../assets/ocac-logo.svg";

const LoginPage = () => {
  return (
    <div className="bg-[#005881] h-screen w-full flex items-center justify-center">
      <div
        className="h-[97%] w-4/6 bg-no-repeat bg-contain bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${logoBg})` }}
      >
        <div className="w-[35%] bg-[#19516A] rounded-2xl px-5 mb-10 shadow-2xl shadow-zinc-900 flex flex-col justify-center items-center">
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
              <a href="#">Remember Password</a>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>

        <div className="text-white text-lg">
          <button className="bg-[#054161] px-5 py-2 w-72 rounded-md border-2 border-blue-400 active:scale-105 duration-100">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
