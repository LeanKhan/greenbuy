function Header() {
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="font-bold text-xl text-lime-500">
              GreenBuy{" "}
              <img
                style={{ display: "inline" }}
                src="https://icongr.am/octicons/sun.svg?size=30&color=84cc16"
                alt="greenbuy logo"
              />
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-lime-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-1xl md:text-2xl font-medium mb-2">
              #1 Directory of Home Tech Devices
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
