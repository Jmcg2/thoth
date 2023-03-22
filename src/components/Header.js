import ThemeButton from "./ThemeButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useCallback, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="flex justify-around h-auto w-full top-0 sticky z-10 p-4 bg-slate-600 dark:bg-slate-800">
        <div className="flex justify-between my-auto w-11/12 p-4">
          <h1
            className="text-white text-4xl hover:cursor-pointer font-mono font-bold no-underline hover:underline"
            onClick={() => router.push("/")}
          >
            THOTH
            {/* <Image src={"/images/s28.webp"} width={60} height={100}></Image> */}
          </h1>
        </div>
        <div className="flex justify-end my-auto w-11/12 p-4 gap-4">
          <button
            className="btn"
            onClick={() => {
              router.push("/shops");
            }}
          >
            Shops
          </button>
          <ThemeButton />
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <div className="flex flex-nowrap flex-col h-40 w-full   mx-auto top-0 sticky z-10 bg-slate-600 dark:bg-slate-800">
				<h1
					className="text-white text-5xl mx-auto mt-4 hover:cursor-pointer w-auto"
					onClick={() => router.push('/shops')}>
					SorftWair Shoops
				</h1>
				<div className="flex justify-around w-11/12 mx-auto mt-6 ">
					 <button
						className={`btn  ${path !== '/' ? 'visible' : 'invisible'}`}
						onClick={() => {
							router.back();
						}}>
						<ArrowLeftIcon className="h-6 w-6 flex-shrink-0" />
					</button>
					<Dropdown />
					<ThemeButton />
				</div>
			</div> */
}
