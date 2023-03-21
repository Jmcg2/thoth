import { ConjureCarousel } from "../components/Carousel";
import Landing from "../components/Landing";
import { useState, useLayoutEffect } from "react";

export default function Home() {
  const [bannerToggle, setBannerToggle] = useState(true);

  useLayoutEffect(() => {
    sessionStorage.getItem("state") === null
      ? sessionStorage.setItem("state", true)
      : setBannerToggle(false);
  }, []);

  if (bannerToggle === true) {
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
