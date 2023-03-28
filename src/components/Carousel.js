import { Carousel, Embla } from "@mantine/carousel";
import { useEffect, useState, useCallback } from "react";
import { Progress } from "@mantine/core";

const ConjureCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(Embla);
  const images = [
    {
      url: "/images/conjureshaw.jpeg",
      text: " SCOTT AIR FORCE BASE, Ill. – The Air Force’s Chief Software Officer recently recognized Scott’s “Conjure” team as an official Software Factory. Conjure is the name the 375th Communications Support Squadron created for their software development team, which references their “wizard” mascot and Air Mobility Command’s airlift heritage of the Phoenix. Conjure joins 14 other Software Factories located across the United States, with names such as “Corsair Ranch” in Arizona, “LevelUp” in Texas and “Kessel Run” in Massachusetts for example.",
    },
    {
      url: "/images/conjure11.jpeg",
      text: "SCOTT AIR FORCE BASE, Ill. – Across the Air Force Airmen banded together to evacuate approximately 120,000 American citizens and Afghan evacuees during Operation Allies Refuge from the Hamid Karzai International Airport, Afghanistan. The operation itself, to date, is the largest noncombatant evacuation operation of its kind in Air    Force history. When one thinks of an evacuation, the envisioning in    their mind may be of security forces personnel ensuring safety and    aircraft being expertly flown, but those are only a couple color    pallets in the artfully crafted total picture.",
    },
    {
      url: "/images/conjure12.jpeg",
      text: "U.S. Air Force Staff Sgt. Dayan Sauerbronn, 375th Communications Support Squadron application development supervisor, briefs Col. Chris Robinson, 375th Air Mobility Wing commander, about the capabilities of their cyber security Airmen on Scott AFB, Illinois, July 13, 2021.",
    },
    {
      url: "/images/conjure13.jpeg",
      text: "The 375th Communications Support Squadron software services flight, Air Mobility Command’s only software factory, have developed and published a brand name and logo. The flight will now be known as “Conjure,” a name inextricably linked to the 375th CSPTS “wizard” mascot and AMCs airlift heritage of the Phoenix. The software development team has proven their ability to conjure software solutions to warfighter problems at the speed of relevance, and now they will have a unique and recognizable name and logo to display beside the other DoD software organizations.",
    },
  ];

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = Object.keys(images).map((keyName, i) => {
    return (
      <Carousel.Slide key={i}>
        <img src={images[i].url}></img>
        <div class="bottom-right" key={i}>
          {images[i].text}
        </div>
      </Carousel.Slide>
    );
  });

  return (
    <div className="carousel">
      <Carousel
        slideSize="70%"
        getEmblaApi={setEmbla}
        sx={{ flex: 1 }}
        align="start"
        slideGap="md"
        withControls
        withIndicators
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {slides}
      </Carousel>
      <Progress
        styles={(theme) => ({
          bar: {
            transitionDuration: "200ms",
            backgroundImage: theme.fn.gradient({
              from: "red",
              to: "purple",
            }),
          },
        })}
        value={scrollProgress}
        size="lg"
        mt={"xl"}
        mx={"auto"}
      ></Progress>
    </div>
  );
};

export default ConjureCarousel;
