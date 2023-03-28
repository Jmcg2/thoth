import handleShops from "../../helpers/getShops";
import CardList from "../../components/CardList";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import search from "../../helpers/search";
import useSWRImmutable from "swr";

export default function Shops({ shops }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredShops = search(shops, searchValue);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data } = useSWRImmutable("/api/get_auto_terms", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    //searchbar
    <>
      <div className="mt-5 w-11/12 mx-auto">
        <Dropdown
          className="mx-auto"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          termData={data}
        />
      </div>
      <CardList data={filteredShops} data_type="shop" />
    </>
  );
}

export const getStaticProps = async () => {
  const shops = await handleShops();

  return {
    props: { shops },
    revalidate: 600,
  };
};
