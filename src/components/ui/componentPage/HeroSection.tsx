"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [isHover, setIsHover] = React.useState(0);

  const languages = [
    {
      name: "Deutsch B1",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 36 36"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            fill="#FFCD05"
            d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
          />
          <path fill="#ED1F24" d="M0 14h36v9H0z" />
          <path
            fill="#141414"
            d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"
          />
        </svg>
      ),
    },
    {
      name: "English",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 36 36"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            fill="#00247D"
            d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
          />
          <path
            fill="#CF1B2B"
            d="m25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
          />
          <path
            fill="#EEE"
            d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
          />
          <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/",
      username: "@arthurJord05",
    },
    {
      id: 2,
      name: "Github",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/",
      username: "Arthur05-FT",
    },
    {
      id: 3,
      name: "Youtube",
      icon: <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/",
      username: "MrPatate Dev",
    },
  ];

  return (
    <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto lg:mx-0">
      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 flex rounded-full border-4 border-blue-600 bg-[url(/profile.png)] bg-center bg-cover mx-auto lg:mx-0"></div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-4">
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
          Arthur Jordy
        </span>
        <span className="text-sm sm:text-base text-slate-400 mt-1">
          Fullstack developer
        </span>
      </div>

      <Button className="bg-blue-600 w-full sm:w-fit cursor-none hover:bg-blue-700 transition mt-3 duration-100 text-xs sm:text-sm px-3 py-2 mx-auto lg:mx-0 block">
        <span className="truncate">arthurfotso.bfkg@gmail.com</span>
      </Button>

      <div className="mt-4 lg:mt-6 text-center lg:text-left">
        <span className="text-xs sm:text-sm text-neutral-400">
          20 ans - Cameroun, Bafoussam
        </span>

        <div className="mt-4 flex flex-col gap-3">
          <span className="font-bold text-sm sm:text-base">Languages</span>
          <div className="flex flex-col gap-2">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base"
              >
                {lang.icon}
                <span>{lang.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <span className="font-bold text-sm sm:text-base">Links</span>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="flex items-center p-2 sm:p-2.5 rounded-full hover:bg-blue-700 transition cursor-none duration-100 relative"
                  onMouseEnter={() => setIsHover(link.id)}
                  onMouseLeave={() => setIsHover(0)}
                >
                  {link.icon}

                  {isHover === link.id && (
                    <div className="hidden sm:block fixed bottom-4 right-4 px-3 py-2 bg-slate-800 text-white rounded z-50 shadow-lg">
                      <span className="text-sm font-medium">{link.name}</span>
                      <span className="block text-xs text-slate-400 mt-1">
                        {link.username}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
