import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { OWNER_DETAILS, metaData } from './data/data';
import { Render } from './Footer';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex w-full   justify-between">
            
            <div className="flex w-[50%] items-center gap-8 ">
             <div className=''>
              <img
                  onClick={()=>navigate('/')}
                  className="h-14 md:overflow-visible cursor-pointer"
                  src="/logo.png"
                  alt="Workflow"
                />
             </div>

              <div className='hidden lg:w-[90%]  lg:overflow-visible lg:flex  justify-center gap-5 text-white'>
                <Render
                redirect={metaData.WHATSAPP_CHAT}
                 name={OWNER_DETAILS[2].name.split(',')[0]}
                 iconName={OWNER_DETAILS[2].iconName}
                />

                <Render 
                 redirect={OWNER_DETAILS[3].redirect}
                 name={OWNER_DETAILS[3].name}
                 iconName={OWNER_DETAILS[3].iconName}
                />
              </div>

            </div>
            
            <div className="w-[50%] hidden md:flex items-center justify-center  ">
                <Link
                 to={"/"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  About Us
                </Link>
                <Link
                  to={"/gallery"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                >
                  Gallery
                </Link>
                <Link
                  to={"/contact"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Contact Us
                </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to={"/"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              <Link
                to={"/gallery"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </Link>
              <Link
                to={"/contact"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
