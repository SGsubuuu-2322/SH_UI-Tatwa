import sHLogo from "../assets/sanjog-helpline-logo(white).png";
import ocacLogo from "../assets/ocac-logo.svg";
import cmImg from "../assets/cm-odisha.png";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-custom-radial">
      <navbar className="w-full">
        <div className="w-full px-10">
          <div className="pt-5 flex justify-between items-center">
            <img src={sHLogo} alt="logo" className="w-44" />
            <img src={ocacLogo} alt="logo" className="w-44" />
            <div className="flex text-white items-center ">
              <div className="flex flex-col ">
                <p className="text-[16px] leading-3">Shri Naveen Pattnaik</p>
                <p className="text-[12px]">Hon&#769;able Chief Minister</p>
              </div>
              <img src={cmImg} alt="logo" className="h-20" />
            </div>
          </div>
        </div>
        <hr className="bg-[#386177]" />
      </navbar>
    </div>
  );
};

export default HomePage;
