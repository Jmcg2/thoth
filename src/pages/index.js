import { ConjureCarousel } from "../components/Carousel";
import Landing from "../components/Landing";
import { useState } from "react";

export default function Home() {
  const [toggleAgree, setToggleAgree] = useState(false);

  if (toggleAgree === false) {
    return (
      <>
        <Landing inputValue={toggleAgree} setInputValue={setToggleAgree} />
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
