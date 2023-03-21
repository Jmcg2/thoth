import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Contact from "./Contact";

function Footer() {
  return (
    <>
      <div
        style={{ minHeight: "23.5vh" }}
        className="bg-slate-400 dark:bg-slate-900 h-auto w-full flex md:flex-row flex-col justify-around items-center"
      >
        <div className="p-5">
          <ul>
            <Link href="/">
              <Image
                src="/images/conjurelogo.png"
                height={92}
                width={174}
                alt="conjurelogo"
              ></Image>
            </Link>
            <div className="flex gap-6 pb-5 pt-2">
              <Link href={"https://www.instagram.com/usairforce/?hl=en"}>
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              </Link>
              <Link href={"https://twitter.com/usairforce"}>
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/united-states-air-force"
                }
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href={"https://www.youtube.com/user/AFBlueTube"}>
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-conjure font-bold text-2xl pb-4">
              Software Factories
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href="/shops/Conjure">Conjure</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href="/shops/Bespin">Bespin</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href="/shops/Kessel%20Run">Kessel Run</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href="/shops/Scorpion%20Camp">Scorpion Camp</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href="/shops/Army%20Software%20Factory">
                Army Software Factory
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-conjure font-bold text-2xl pb-4">Tags</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href={"/search?tag=HTML"}>HTML</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href={"/search?tag=JAVA"}>Java</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href={"/search?tag=UDL+%28unified+data+library%29"}>
                UDL (Unified Data Library)
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href={"/search?tag=Android"}>Android</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              <Link href={"/search?tag=Javascript"}>Javascript</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-conjure font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              Contact Us - Civ
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              Contact Us - MIL
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              AF Portal
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-conjure2 cursor-pointer">
              MyPay
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-slate-400 dark:bg-slate-900">
        <h1 className="bg-slate-400 dark:bg-slate-900 font-semibold">
          © 2022-2023 All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
