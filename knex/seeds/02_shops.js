/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("shops").del();
  await knex("shops").insert([
    {
      name: "Conjure",
      description:
        "Conjure develops mission planning software for Air Force Life Cycle Management Center's Air Mission Planning Directorate. Current efforts include both mobile and web capabilities to provide accurate real-time data and in-flight mission planning to pilots.",
      location: "Scott AFB, Illinois",
      contact: "aflcmc.hbmc.conjure@us.af.mil",
      branch_id: 1,
      img: "conjure",
    },
    {
      name: "Bespin",
      description: 
        "BESPIN is an Air Force software factory building technology solutions that meet Airmen where they are - anywhere, anytime, and for any mission. Experts in development, security, and operations (DevSecOps), BESPIN delivers applications to CloudOne under our continuous authorization to operate (cATO). This allows us to rapidly move technology solutions from idea to enterprise. To help the Air Force stay ahead of the 'tsunami of mobile application demand' Air Force Service Acquisition Executive Dr. William Roper gave BESPIN $21M in seed money in 2020. BESPIN now includes a human-centered design studio, a cloud engineering team, an accredited CI/CD pipeline, and several mobile and web app development teams.",
      location: "Montgomery, Alabama",
      contact: "https://teambespin.us/projects",
      branch_id: 1,
      img: "bespin",
    },
    {
      name: "Kessel Run",
      description: 
        "Kessel Run is a Division within Air Force Life Cycle Management Center's Digital Directorate. We are building a scalable software factory to architect, manufacture and operate warfighting systems to function effectively in highly contested environments, supporting operations ranging from routine through major theater war. We are composed of 7 Programs and leading digital transformation by focusing on developing and delivering software solutions centered around Command and Control, also known as “C2,” capabilities.",
      location: "Boston, Massachusetts",
      contact: "info@kr.af.mil",
      branch_id: 1,
      img: "kesselrun",
    },
    {
      name: "Army Software Factory",
      description:
        "The Army Software Factory (ASWF) is an Army Futures Command unit that enables Soldiers to become software professionals. We are prototyping a future force design with Soldier-led agile application teams while demonstrating a strategic joint capability for 2040. We find hidden tech talent in the Army and build proficiency and mastery in emerging technologies and processes. This results in an upskilled technical force that will enable the Army to become more data-centric and conduct operations in contested environments. Our process already resulted in applications and tools used by over 20,000 Soldiers. Every six months, we welcome cohorts of 25 and immerse them in fields of software design and development. With over 100 participants as of October 2022, ASWF exposes Soldiers and select Department of the Army (DA) Civilians to industry best practices in the tech hub of Austin, Texas.",
      location: "Austin, Texas",
      contact:
        "usarmy.austin-tx.futures-cmd.mbx.afc-hq-software-factory@mail.mil",
      branch_id: 3,
      img: "armysoftwarefactory",
    },
    {
      name: "Scorpion Camp",
      description:
        "Scorpion CAMP directly supports the 552 ACW with mission support software for both web and Electronic Flight Bags. Additionally, we are focused on providing Air Force Mission Defense Teams with tailored software capabilities in order to detect, defend, and deter cyber threats across high-value weapons systems.",
      location: "Tinker AFB, Oklahoma",
      contact: "552ACNS.DOUP.ScorpionCAMP@us.af.mil",
      branch_id: 1,
      img: "scorpioncamp",
    },
    {
      name: "Hangar 18",
      description:
        "The Hangar 18 mission is to deliver Agile and DevSecOps to the WPAFB Digital Acquisition and Engineering community. We accomplish this in three distinct ways: Deploying tools and tool pipelines, guiding technical efforts and educating the workforce",
      location: "Wright-Pattterson AFB, Ohio",
      contact: "https://hangar18@afresearchlab.com",
      branch_id: 1,
      img: "hangar18",
    },
    {
      name: "Corsair Ranch",
      description: 
        "Description: Corsair Ranch is the ANG and AFRC Software Factory. Located in Tucson, AZ, Corsair Ranch is the ANG AFRC Test Center's (AATC) Software Division with the unique charter to accelerate weapon system software delivery into Operational Test, accelerate incremental delivery during test, and position ANG and AFRC weapon systems for continuous software delivery in the field.",
      location: "Tuscon, Arizona", 
      contact:  "https://corsairranch.dso.mil",
      branch_id: 1,
      img: "corsairranch"
    },
    {
      name: "Space Camp",
      description: 
        "Located in Colorado Springs, CO, Space CAMP is a software factory focused on the continuous development and deployment of USSF mission applications to the warfighter. As a software node of Platform One (the DoD Executive agent for DevSecOps) for Continuous Integration/Continuous Deployment (CI/CD), we aim to avoid vendor-lock by building an open platform (Kubernetes/Istio), embracing DevSecOps principles outlined by the DoD CIO and AF CSO, considering microservice/service mesh architectures early and often, leveraging event-driven behavior across the entire portfolio, and building a network of like-minded software shops for collaboration.",
      location: "Colorado Springs, Colorado", 
      contact:  "https://spacecamp.il2.dso.mil/#/home",
      branch_id: 1,
      img: "spacecamp"
    }
  ]);
};
