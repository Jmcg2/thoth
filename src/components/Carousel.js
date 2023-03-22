import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect } from "react";
// import MediaPlayer from "./mediaPlayer";

export const ConjureCarousel = () => {
  const autoplayOptions = {
    delay: 8000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1 },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          {" "}
          <Image
            src={"/images/conjure7.jpeg"}
            width={800}
            height={500}
            sizes="100vw"
            alt="conjure1"
            style={{ objectFit: "contain" }}
          ></Image>
          <div id="outer-div">
            <div id="inner-div">
              SCOTT AIR FORCE BASE, Ill. – Across the Air Force Airmen banded
              together to evacuate approximately 120,000 American citizens and
              Afghan evacuees during Operation Allies Refuge from the Hamid
              Karzai International Airport, Afghanistan. The operation itself,
              to date, is the largest noncombatant evacuation operation of its
              kind in Air Force history. When one thinks of an evacuation, the
              envisioning in their mind may be of security forces personnel
              ensuring safety and aircraft being expertly flown, but those are
              only a couple color pallets in the artfully crafted total picture.
              Enter the professionals of the 375th Communications Support
              Squadron Tether team. “The Tether Team is a team of developers
              within the Conjure Software Factory who were tasked to develop an
              application called Tether,” said Tech. Sgt. Lavelle Burgess, 375th
              Communications Support Squadron product manager.
            </div>
          </div>
        </div>
        <div className="embla__slide">
          {" "}
          <Image
            src={"/images/conjure2.webp"}
            width={800}
            height={500}
            sizes="100vw"
            alt="conjure1"
            style={{ objectFit: "contain" }}
          ></Image>
          <div id="outer-div">
            <div id="inner-div">
              U.S. Air Force Staff Sgt. Dayan Sauerbronn, 375th Communications
              Support Squadron application development supervisor, briefs Col.
              Chris Robinson, 375th Air Mobility Wing commander, about the
              capabilities of their cyber security Airmen on Scott AFB,
              Illinois, July 13, 2021. Robinson had the opportunity to inspect
              the assets and capabilities of the 375th Communications Group and
              meet its Airmen. (U.S. Air Force Photo by Airman 1st Class Isaac
              Olivera)
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <Image
            src="/images/conjure5.png"
            width={800}
            height={500}
            sizes="100vw"
            alt="conjure2"
            style={{ objectFit: "contain" }}
          ></Image>
          <div id="outer-div">
            <div id="inner-div">
              Hangar 18 joins 16 other Department of the Air Force software
              factories – including the first, Kessel Run – that have sprung up
              across the nation since the Air Force began its digital
              transformation efforts in 2017. These efforts were initially
              driven by the release of the Air Force Science and Technology
              Strategy for 2030, released in 2017, and then influenced by the
              digital engineering initiative laid out by Dr. Will Roper, former
              assistant secretary of the Air Force for acquisition, technology
              and logistics. Matthew Jacobsen, director of Hangar 18, cited
              Roper’s articles “There is no spoon” and “Bending the spoon” as
              significant in the formation of the software factories and Hangar
              18′s charter.
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <Image
            src="/images/conjure4.jpg"
            width={800}
            height={500}
            sizes="100vw"
            alt="conjure4"
            style={{ objectFit: "contain" }}
          ></Image>
          <div id="outer-div">
            <div id="inner-div">
              SCOTT AIR FORCE BASE, Ill. – The 375th Communications Support
              Squadron software services flight, Air Mobility Command’s only
              software factory, have developed and published a brand name and
              logo. The flight will now be known as “Conjure,” a name
              inextricably linked to the 375th CSPTS “wizard” mascot and AMCs
              airlift heritage of the Phoenix. The software development team has
              proven their ability to conjure software solutions to warfighter
              problems at the speed of relevance, and now they will have a
              unique and recognizable name and logo to display beside the other
              DoD software organizations. Conjure is directly supporting AMC’s
              global mission by maintaining and refining Magellan, a web-based
              application used for long range planning and optimization of AMC
              cargo and tanker aircraft requests. Additionally, the team is
              updating the Attachment Three Assessment Tool used by HQ AMC to
              conduct continual evaluation of wing programs across the command.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
