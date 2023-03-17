import handleProjects from "../../helpers/getProjects";
import { useState, useEffect } from "react";
import search from "../../helpers/search";
import { useRouter } from "next/router";
import CardList from "../../components/CardList";

const Search = ({ projects }) => {
  const router = useRouter();
  const data = router.query;
  const tag = data.tag;
  let [projectsByTag, setProjectsByTag] = useState([]);

  useEffect(() => {
    setProjectsByTag(search(projects, tag));
  }, [tag]);

  return (
    <>
      <div className="mt-5 w-11/12 mx-auto">
        {/* <Dropdown
          className="mx-auto"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          termData={data}
        /> */}
      </div>
      <div className="flex justify-center">{`Projects using "${tag}"`}</div>
      <CardList data={projectsByTag} data_type="project" />
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await handleProjects();

  return {
    props: { projects },
    revalidate: 600,
  };
};

export default Search;
