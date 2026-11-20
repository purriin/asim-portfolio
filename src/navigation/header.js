import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../assets/Asim_Rahman_Resume.pdf';
import '../App.css';

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Education', href: '/#education' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Extra Curriculars', href: '/#extracurriculars' },
  { name: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-elevation md:to-transparent fadedown">
      <nav className="relative flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            smooth
            to="/#home"
            className="transition-all ease-in-out duration-200 text-primary hover:text-bright hover:-translate-y-1"
          >
            <span className="sr-only">Asim</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M211.97 210h-29.199v-39.531H80.125V210h-29.2v-80.522c0-11.755 2.022-22.574 6.065-32.457c4.043-9.882 9.658-18.38 16.846-25.493c7.187-7.112 15.685-12.653 25.493-16.62c9.808-3.969 20.514-5.953 32.12-5.953h65.81c2.021 0 3.93.374 5.727 1.123a14.47 14.47 0 0 1 4.717 3.145a14.47 14.47 0 0 1 3.145 4.716c.748 1.797 1.123 3.706 1.123 5.728V210zM80.126 141.27h102.646V78.154h-51.323c-.898 0-2.789.131-5.671.393c-2.883.262-6.214.918-9.995 1.966c-3.781 1.048-7.768 2.658-11.96 4.829c-4.193 2.171-8.05 5.166-11.568 8.984c-3.519 3.819-6.42 8.591-8.704 14.319c-2.283 5.728-3.425 12.672-3.425 20.833z"
              />
            </svg>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="transition-colors ease-in-out duration-200 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-txt hover:text-bright"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-10 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              smooth
              to={item.href}
              className="transition-all ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-bright paragraph"
            >
              {item.name}
            </Link>
          ))}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <div className="transition-all ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-bright paragraph rounded-lg px-3 py-1 ring-1 ring-txt hover-ring-bright">
              <p>Resume</p>
            </div>
          </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary bg-bg menu">
          <div className="flex items-center justify-between">
            <Link
              smooth
              to="/#home"
              className="-m-1.5 p-1.5 transition-all ease-in-out duration-200 text-primary hover:text-bright"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Asim</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M211.97 210h-29.199v-39.531H80.125V210h-29.2v-80.522c0-11.755 2.022-22.574 6.065-32.457c4.043-9.882 9.658-18.38 16.846-25.493c7.187-7.112 15.685-12.653 25.493-16.62c9.808-3.969 20.514-5.953 32.12-5.953h65.81c2.021 0 3.93.374 5.727 1.123a14.47 14.47 0 0 1 4.717 3.145a14.47 14.47 0 0 1 3.145 4.716c.748 1.797 1.123 3.706 1.123 5.728V210zM80.126 141.27h102.646V78.154h-51.323c-.898 0-2.789.131-5.671.393c-2.883.262-6.214.918-9.995 1.966c-3.781 1.048-7.768 2.658-11.96 4.829c-4.193 2.171-8.05 5.166-11.568 8.984c-3.519 3.819-6.42 8.591-8.704 14.319c-2.283 5.728-3.425 12.672-3.425 20.833z"
                />
              </svg>
            </Link>
            <button
              type="button"
              className="transition-colors ease-in-out duration-200 -m-2.5 rounded-md p-2.5 text-txt hover:text-bright"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    smooth
                    to={item.href}
                    className="transition-colors ease-in-out duration-200 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-txt hover:bg-elevation hover:text-bright paragraph"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block -mx-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="transition-colors ease-in-out duration-200 ring-1 ring-txt hover:bg-elevation block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-txt hover:text-bright paragraph hover-ring-bright">
                    <p>Resume</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;