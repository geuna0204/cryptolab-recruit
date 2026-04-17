import Image from "next/image";
import cryptolabLogo from "@/assets/cryptolab_logo.png";

const TopBar = () => {
  return (
    <header className="fixed top-0 px-4 left-0 right-0 h-17.5 bg-white border-b-2 border-gray-200 z-50">
      <div className="mx-auto h-full w-180 flex items-center">
        <Image
          src={cryptolabLogo}
          alt="CryptoLab"
          className="h-8 w-auto"
          priority
        />
      </div>
    </header>
  );
};

export default TopBar;
