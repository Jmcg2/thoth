import { ConjureCarousel } from "../components/Carousel";
import Landing from "../components/Landing";
import { useContext } from "react";
import { BannerContext } from "../pages/_app";

export default function Home() {
  const { bannerToggle, setBannerToggle } = useContext(BannerContext);

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
