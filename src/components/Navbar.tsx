import React, { useState } from 'react';
import Link from 'next/link';
import "@fontsource/poppins";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
            <div className="md:hidden">
                <button
                type="button"
                onClick={toggleMenu}
                className="text-white inline-flex items-center justify-center p-2 "
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17.5H1V16H19V17.5ZM13 10.5H1V9H13V10.5ZM1 3.5V2H19V3.5H1Z" fill="white"/>
                    </svg>                    
                ) : (
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                )}
                </button>
            </div>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <span className="text-white font-poppins logo">ZOO FOUNDATION</span>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="mx-10 flex items-baseline space-x-16">
                <Link
                    href="/"
                    className="text-gray-300  hover:text-white px-3 py-2  text-md font-medium"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="text-gray-300  hover:text-white px-3 py-2  text-md font-medium"
                >
                    About
                </Link>
                <Link
                    href="/getinvolved"
                    className="text-gray-300  hover:text-white px-3 py-2  text-md font-medium"
                >
                    Get Involved
                </Link>
                <Link
                    href="/collect"
                    className="text-gray-300  hover:text-white px-3 py-2  text-md font-medium"
                >
                    Collect
                </Link>
                {/* Add more links here */}
                </div>
            </div>
            <div className='flex items-center'>
                <Link
                    href="/donation"
                    className="text-black hover:bg-gray-700 bg-white hover:text-white px-6 py-1 rounded-full text-md font-medium hidden md:block"
                >
                    Donate
                </Link>
                <Link
                    href="#"
                    className="hidden md:block text-white pl-6 py-2 text-md font-medium"
                >
                    <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6295 26.8082H15.0901C15.2701 27.1912 15.3719 27.6187 15.3719 28.0713C15.3719 28.8775 15.0484 29.6085 14.5266 30.1384L14.5234 30.1417C14.0016 30.6715 13.2816 31 12.4865 31C11.6926 31 10.9726 30.6715 10.4507 30.1417L10.4474 30.1384C9.92569 29.6086 9.60214 28.8776 9.60214 28.0713C9.60214 27.6187 9.70399 27.1912 9.885 26.8082H7.91465C7.01783 26.8082 6.20253 26.4362 5.61217 25.8367C5.0218 25.2373 4.65537 24.4105 4.65537 23.4989C4.65537 22.5883 5.0218 21.7604 5.61217 21.1621C6.20253 20.5626 7.01679 20.1906 7.91465 20.1906H9.00749L8.05498 16.5787C8.04533 16.5483 8.03673 16.5178 8.03034 16.4863L7.66179 15.0883L6.55175 10.8814C6.5421 10.851 6.5335 10.8205 6.52711 10.789L5.30998 6.17506C5.30033 6.14567 5.29289 6.11628 5.28638 6.08582L4.11962 1.66561H0.820781C0.367592 1.66561 0 1.29246 0 0.833394C0 0.373241 0.367503 0 0.820781 0H4.7476V0.00106241C5.10974 0.00106241 5.44189 0.24695 5.53942 0.617964L6.71687 5.08048H34.1802V5.08154C34.2498 5.08154 34.3205 5.09028 34.3924 5.10988C34.8295 5.22851 35.0887 5.68429 34.972 6.12812L33.742 10.7898C33.7356 10.8202 33.7281 10.8507 33.7184 10.879L32.2388 16.4863C32.2324 16.5178 32.2238 16.5482 32.2142 16.5787L30.9959 21.1935C30.9187 21.5721 30.5887 21.8561 30.1923 21.8561H7.91384C7.46916 21.8561 7.06526 22.0411 6.77172 22.3391C6.47817 22.6372 6.296 23.0485 6.296 23.4988C6.296 23.9503 6.47818 24.3604 6.77172 24.6585C7.06526 24.9565 7.47032 25.1415 7.91384 25.1415H26.2304C27.0243 25.1415 27.7443 25.47 28.2672 25.9998L28.2705 26.0031C28.7922 26.5329 29.1158 27.264 29.1158 28.0713C29.1158 28.8774 28.7933 29.6085 28.2705 30.1384L28.2672 30.1417C27.7455 30.6714 27.0255 31 26.2304 31C25.4364 31 24.7164 30.6714 24.1935 30.1417L24.1902 30.1384C23.6685 29.6086 23.3449 28.8775 23.3449 28.0713C23.3449 27.6187 23.4456 27.1911 23.6278 26.8082L23.6295 26.8082ZM9.46268 15.4841H15.3428L14.9764 11.4522H8.39862L8.90761 13.38L9.46268 15.4841ZM16.9842 15.4841H23.2854L23.6518 11.4522H16.6179L16.9854 15.4841H16.9842ZM24.9268 15.4841H30.8081L31.8721 11.4522H25.2944L24.9279 15.4841H24.9268ZM30.3676 17.1497H24.7756L24.4991 20.1895H29.5661L30.3676 17.1497ZM23.1342 17.1497H17.1363L17.4127 20.1895H22.8577L23.1342 17.1497ZM15.4949 17.1497H9.90197L10.7045 20.1895H15.7715L15.4949 17.1497ZM7.95939 9.78549H14.8252L14.5488 6.7457H7.15792L7.96046 9.78549H7.95939ZM16.4666 9.78549H23.8039L24.0803 6.7457H16.1892L16.4657 9.78549H16.4666ZM25.4452 9.78549H32.3111L33.1136 6.7457H25.7216L25.4452 9.78549ZM27.1124 27.1747C26.8874 26.9474 26.5767 26.807 26.2316 26.807C25.8866 26.807 25.5749 26.9474 25.3508 27.1747C25.1269 27.4031 24.9877 27.7197 24.9877 28.0701C24.9877 28.4204 25.1269 28.7369 25.3508 28.9644C25.5758 29.1918 25.8866 29.3332 26.2316 29.3332C26.5767 29.3332 26.8884 29.1918 27.1124 28.9644C27.3363 28.736 27.4756 28.4194 27.4756 28.0701C27.4756 27.7197 27.3363 27.4033 27.1124 27.1747ZM13.3668 27.1768C13.1418 26.9484 12.831 26.807 12.4871 26.807C12.1421 26.807 11.8304 26.9474 11.6064 27.1747C11.3824 27.4031 11.2432 27.7197 11.2432 28.0701C11.2432 28.4205 11.3824 28.7369 11.6064 28.9644C11.8313 29.1918 12.1421 29.3332 12.4871 29.3332C12.8322 29.3332 13.1439 29.1918 13.369 28.9644C13.5929 28.736 13.7311 28.4194 13.7311 28.0701C13.7311 27.7209 13.5917 27.4053 13.3668 27.1768Z" fill="white"/>
                    </svg>
                </Link>
                <Link
                    href="#"
                    className="md:hidden text-white py-2 text-md font-medium"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5025 17.2956H8.62292C8.72576 17.5427 8.78395 17.8185 8.78395 18.1105C8.78395 18.6306 8.59907 19.1023 8.30092 19.4441L8.29906 19.4463C8.00091 19.7881 7.58948 20 7.13514 20C6.68146 20 6.27005 19.7881 5.97183 19.4463L5.96997 19.4441C5.67182 19.1023 5.48694 18.6307 5.48694 18.1105C5.48694 17.8185 5.54513 17.5427 5.64857 17.2956H4.52266C4.01019 17.2956 3.5443 17.0556 3.20695 16.6689C2.8696 16.2821 2.66021 15.7487 2.66021 15.1606C2.66021 14.5731 2.8696 14.039 3.20695 13.6529C3.5443 13.2662 4.00959 13.0262 4.52266 13.0262H5.14714L4.60285 10.6959C4.59733 10.6763 4.59242 10.6566 4.58876 10.6363L4.37817 9.73437L3.74386 7.02026C3.73834 7.00062 3.73343 6.98097 3.72977 6.96063L3.03428 3.98391C3.02876 3.96495 3.02451 3.94599 3.02079 3.92634L2.35407 1.07459H0.469017C0.210053 1.07459 0 0.833845 0 0.537674C0 0.240801 0.210002 0 0.469017 0H2.71291V0.000685423C2.91985 0.000685423 3.10965 0.159322 3.16538 0.398686L3.83821 3.27773H19.5315V3.27842C19.5713 3.27842 19.6117 3.28405 19.6528 3.29669C19.9026 3.37323 20.0507 3.66728 19.984 3.95363L19.2812 6.96115C19.2775 6.9808 19.2732 7.00045 19.2677 7.01873L18.4222 10.6363C18.4185 10.6566 18.4136 10.6763 18.4081 10.6959L17.7119 13.6732C17.6678 13.9175 17.4793 14.1007 17.2527 14.1007H4.52219C4.26809 14.1007 4.03729 14.2201 3.86955 14.4123C3.70181 14.6046 3.59771 14.87 3.59771 15.1605C3.59771 15.4518 3.70181 15.7164 3.86955 15.9087C4.03729 16.101 4.26876 16.2203 4.52219 16.2203H14.9888C15.4425 16.2203 15.8539 16.4323 16.1527 16.7741L16.1546 16.7762C16.4527 17.118 16.6376 17.5897 16.6376 18.1105C16.6376 18.6306 16.4533 19.1022 16.1546 19.4441L16.1527 19.4462C15.8545 19.788 15.4431 20 14.9888 20C14.5351 20 14.1237 19.788 13.8249 19.4462L13.823 19.4441C13.5248 19.1023 13.34 18.6306 13.34 18.1105C13.34 17.8185 13.3975 17.5427 13.5016 17.2956L13.5025 17.2956ZM5.40724 9.98973H8.76731L8.55791 7.38851H4.79921L5.09006 8.63225L5.40724 9.98973ZM9.70524 9.98973H13.3059L13.5153 7.38851H9.49592L9.70592 9.98973H9.70524ZM14.2439 9.98973H17.6046L18.2126 7.38851H14.4539L14.2445 9.98973H14.2439ZM17.3529 11.0643H14.1575L13.9995 13.0255H16.8949L17.3529 11.0643ZM13.2196 11.0643H9.79214L9.95012 13.0255H13.0615L13.2196 11.0643ZM8.85421 11.0643H5.65827L6.11686 13.0255H9.01229L8.85421 11.0643ZM4.54822 6.31322H8.47155L8.31357 4.35207H4.09024L4.54883 6.31322H4.54822ZM9.40949 6.31322H13.6022L13.7602 4.35207H9.25097L9.40895 6.31322H9.40949ZM14.5401 6.31322H18.4635L18.9221 4.35207H14.6981L14.5401 6.31322ZM15.4928 17.5321C15.3643 17.3854 15.1867 17.2948 14.9895 17.2948C14.7923 17.2948 14.6142 17.3854 14.4862 17.5321C14.3582 17.6794 14.2787 17.8837 14.2787 18.1097C14.2787 18.3358 14.3582 18.5399 14.4862 18.6867C14.6147 18.8334 14.7923 18.9246 14.9895 18.9246C15.1867 18.9246 15.3648 18.8334 15.4928 18.6867C15.6208 18.5393 15.7003 18.3351 15.7003 18.1097C15.7003 17.8837 15.6208 17.6795 15.4928 17.5321ZM7.63815 17.5334C7.5096 17.3861 7.33202 17.2948 7.13551 17.2948C6.93833 17.2948 6.76023 17.3854 6.6322 17.5321C6.50425 17.6794 6.42467 17.8837 6.42467 18.1097C6.42467 18.3358 6.50425 18.5399 6.6322 18.6867C6.76075 18.8334 6.93833 18.9246 7.13551 18.9246C7.33268 18.9246 7.51078 18.8334 7.6394 18.6867C7.76735 18.5394 7.84634 18.3351 7.84634 18.1097C7.84634 17.8845 7.76669 17.6808 7.63815 17.5334Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute z-50 h-[100vh] w-full bg-black" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/getinvolved"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Involved
            </Link>
            <Link
              href="/collect"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Collect
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Shopping Cart
            </Link>
            {/* Add more links here */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
