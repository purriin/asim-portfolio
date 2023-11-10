import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../assets/Asim_Resume_2023.pdf';
import '../App.css';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-elevation md:to-transparent fadedown">

        <nav className="relative flex items-center justify-between p-4 lg:px-8" aria-label="Global">
            {/* Logo: */}
            <div className="flex lg:flex-1">
                <Link to="#home" className="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1">
                    <span className="sr-only">Purriin</span>
                    <svg class="w-12 h-12" aria-hidden="true" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M 121 1966 L 123 1041 L 472 578 C 664 323 828 108 837 100 C 851 87 852 124 846 465 C 843 674 838 1070 835 1345 C 824 2420 821 2465 763 2572 C 690 2707 493 2818 247 2865 C 202 2874 155 2883 142 2886 L 119 2891 L 121 1966 Z M 428.475 2265.098 C 617.475 2220.098 240.543 2333.784 339.543 2235.784 C 423.543 2151.784 893.789 2290.67 790 2380 C 375.878 2736.431 -435.498 2011.497 747.46 423.694 C 828.713 314.634 829.273 357.149 698.273 528.149 C 602.273 653.149 533.782 1264.92 459.782 1364.92 L 442.035 1049.042 L 420.824 1949.084 C 420.824 2442.084 439.993 2278.141 443.993 2281.141 C 454.993 2292.141 346.475 2285.098 428.475 2265.098 Z"/>
                        <path d="M 1090 1488 L 1091 85 L 1113 115 C 1125 131 1289 344 1477 587 L 1820 1028 L 1892 1034 C 1932 1037 2037 1042 2125 1045 C 2214 1048 2313 1057 2349 1065 C 2454 1090 2545 1144 2641 1240 C 2801 1398 2886 1601 2835 1701 C 2820 1729 2747 1790 2728 1790 C 2723 1790 2693 1808 2661 1829 C 2565 1895 2516 1962 2491 2065 C 2472 2142 2412 2246 2361 2292 C 2311 2337 2183 2401 2107 2419 C 2010 2442 2001 2457 1969 2635 C 1943 2782 1921 2856 1900 2875 C 1884 2890 1877 2885 1805 2806 C 1733 2727 1577 2537 1537 2480 L 1520 2455 L 1429 2545 C 1379 2595 1286 2692 1223 2763 C 1159 2833 1103 2890 1099 2890 C 1094 2890 1090 2261 1090 1488 Z M 1814.684 2594.029 C 1825.684 2573.029 1879.164 2572.693 1879.164 2542.693 C 1879.164 2497.693 1852.568 1864.484 1878.568 1840.484 C 1894.568 1825.484 2133.869 1750.144 2168.869 1740.144 C 2379.869 1678.144 2059.208 2055.534 2118.208 1860.534 C 2154.208 1742.534 2565 1858 2691 1784 C 2787 1727 2560.665 1903.914 2568.665 1849.914 C 2586.665 1729.914 2625.439 1839.403 2462.767 1871.914 C 2413.378 1881.785 2595.724 2045.754 2271.724 2034.754 C 2173.724 2031.754 1188.062 2635.799 1176.062 2630.799 C 1154.062 2622.799 1122.824 1028.894 1109.975 758.976 C 1097.15 489.568 1329.849 557.083 1140.849 315.083 C 1077.849 235.083 1296.937 436.641 1290.937 439.641 C 1282.937 444.641 1252.961 572.471 1257.961 1492.471 C 1261.961 2213.471 1124 2817 1126 2819 C 1128 2821 1127.048 2542.946 1197.048 2469.946 C 1362.048 2297.946 1380.385 2457.722 1403.385 2451.722 C 1422.385 2446.722 1911.709 1715.911 2060.709 1897.911 C 2148.709 2005.911 1870 2840 1882 2840 C 1886 2840 1808.684 2605.029 1814.684 2594.029 Z"/>
                    </g>
                    </svg>
                </Link>
            </div>

            <div className="flex lg:hidden">
            <button
                type="button"
                className="transition-color ease-in-out duration-200 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-txt hover:text-bright"
                onClick={() => setMobileMenuOpen(true)}
            >

            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <Link to={item.href} className="transition-all ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-bright paragraph">
                {item.name}
                </Link>
            ))}
            <a href={Resume} target="_blank" rel="noreferrer">
                <div className="transition-all ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-bright paragraph rounded-lg px-3 ring-1 ring-txt hover-ring-bright">
                    <p>Resume</p>
                </div>
            </a>
            </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-bg menu">
            <div className="flex items-center justify-between">
                <Link to="#home" className="-m-1.5 p-1.5">
                    <span className="sr-only">Welcome</span>
                    <svg class="transition-color ease-in-out duration-200 text-txt hover:text-bright w-12 h-12" aria-hidden="true" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M 121 1966 L 123 1041 L 472 578 C 664 323 828 108 837 100 C 851 87 852 124 846 465 C 843 674 838 1070 835 1345 C 824 2420 821 2465 763 2572 C 690 2707 493 2818 247 2865 C 202 2874 155 2883 142 2886 L 119 2891 L 121 1966 Z M 428.475 2265.098 C 617.475 2220.098 240.543 2333.784 339.543 2235.784 C 423.543 2151.784 893.789 2290.67 790 2380 C 375.878 2736.431 -435.498 2011.497 747.46 423.694 C 828.713 314.634 829.273 357.149 698.273 528.149 C 602.273 653.149 533.782 1264.92 459.782 1364.92 L 442.035 1049.042 L 420.824 1949.084 C 420.824 2442.084 439.993 2278.141 443.993 2281.141 C 454.993 2292.141 346.475 2285.098 428.475 2265.098 Z"/>
                        <path d="M 1090 1488 L 1091 85 L 1113 115 C 1125 131 1289 344 1477 587 L 1820 1028 L 1892 1034 C 1932 1037 2037 1042 2125 1045 C 2214 1048 2313 1057 2349 1065 C 2454 1090 2545 1144 2641 1240 C 2801 1398 2886 1601 2835 1701 C 2820 1729 2747 1790 2728 1790 C 2723 1790 2693 1808 2661 1829 C 2565 1895 2516 1962 2491 2065 C 2472 2142 2412 2246 2361 2292 C 2311 2337 2183 2401 2107 2419 C 2010 2442 2001 2457 1969 2635 C 1943 2782 1921 2856 1900 2875 C 1884 2890 1877 2885 1805 2806 C 1733 2727 1577 2537 1537 2480 L 1520 2455 L 1429 2545 C 1379 2595 1286 2692 1223 2763 C 1159 2833 1103 2890 1099 2890 C 1094 2890 1090 2261 1090 1488 Z M 1814.684 2594.029 C 1825.684 2573.029 1879.164 2572.693 1879.164 2542.693 C 1879.164 2497.693 1852.568 1864.484 1878.568 1840.484 C 1894.568 1825.484 2133.869 1750.144 2168.869 1740.144 C 2379.869 1678.144 2059.208 2055.534 2118.208 1860.534 C 2154.208 1742.534 2565 1858 2691 1784 C 2787 1727 2560.665 1903.914 2568.665 1849.914 C 2586.665 1729.914 2625.439 1839.403 2462.767 1871.914 C 2413.378 1881.785 2595.724 2045.754 2271.724 2034.754 C 2173.724 2031.754 1188.062 2635.799 1176.062 2630.799 C 1154.062 2622.799 1122.824 1028.894 1109.975 758.976 C 1097.15 489.568 1329.849 557.083 1140.849 315.083 C 1077.849 235.083 1296.937 436.641 1290.937 439.641 C 1282.937 444.641 1252.961 572.471 1257.961 1492.471 C 1261.961 2213.471 1124 2817 1126 2819 C 1128 2821 1127.048 2542.946 1197.048 2469.946 C 1362.048 2297.946 1380.385 2457.722 1403.385 2451.722 C 1422.385 2446.722 1911.709 1715.911 2060.709 1897.911 C 2148.709 2005.911 1870 2840 1882 2840 C 1886 2840 1808.684 2605.029 1814.684 2594.029 Z"/>
                        </g>
                    </svg>
                </Link>
                <button
                type="button"
                className="transition-color ease-in-out duration-200 -m-2.5 rounded-md p-2.5 text-txt hover:text-bright"
                onClick={() => setMobileMenuOpen(false)}
                >

                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-bg">
                <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                    <Link to={item.href} className="transition-color ease-in-out duration-200 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-txt hover:bg-elevation hover:text-bright paragraph">
                    {item.name}
                    </Link>
                    ))}

                <a href={Resume} target="_blank" rel="noreferrer">
                    <div className="transition-color ease-in-out duration-200 ring-1 ring-txt hover:bg-elevation block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-txt hover:bg-elevation hover:text-bright paragraph hover-ring-bright">
                        <p>Resume</p>
                    </div>
                </a>
                    
                </div>
                
                <div className="py-6">
                </div>
                </div>
            </div>
            </Dialog.Panel>
            
        </Dialog>

    </header>
  )
}

export default Header;