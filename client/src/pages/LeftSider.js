const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="mailto: contact@tamangdawa.com.np">
            <i className="ri-mail-open-fill text-xl text-gray-600"></i>
          </a>
          <a href="https://www.linkedin.com/in/dawa-tamang-7201842a2/">
            <i className="ri-linkedin-box-fill text-xl text-gray-600"></i>
          </a>
          <a href="https://github.com/dawatamang-bot">
            <i className="ri-github-fill text-xl text-gray-600"></i>
          </a>
          <a href="https://www.instagram.com/lamadawatamang/">
            <i className="ri-instagram-fill text-xl text-gray-600"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-[#194042] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
