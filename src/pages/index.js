import Landing from "../components/Landing";
import { useState, useLayoutEffect } from "react";
import ConjureCarousel from "../components/Carousel";

export default function Home() {
  const [bannerToggle, setBannerToggle] = useState(true);

  useLayoutEffect(() => {
    sessionStorage.getItem("state") === null
      ? sessionStorage.setItem("state", true)
      : setBannerToggle(false);
  }, [bannerToggle]);

  if (bannerToggle === true) {
    console.log("here");
    return (
      <>
        <Landing setInputValue={setBannerToggle} />
      </>
    );
  } else {
    return (
      <>
        <ConjureCarousel />
      </>
    );
  }
}
