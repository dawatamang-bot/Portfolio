const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/">
            <i class="ri-facebook-circle-fill text-xl  text-gray-600"></i>
          </a>
          <a href="/">
            <i class="ri-mail-open-fill text-xl  text-gray-600"></i>
          </a>
          <i class="ri-mail-open-fill text-xl  text-gray-600"></i>
          <i class="ri-instagram-fill text-xl  text-gray-600"></i>
          <i class=" ri-linkedin-box-fill text-xl  text-gray-600"></i>
          <i class="ri-github-fill text-xl  text-gray-600"></i>
        </div>
        <div className="w-[1px] h-52 bg-[#194042] sm:hidden"></div>
      </div>
    </div>
  );
};
export default LeftSider;
