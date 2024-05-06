import { getTop100 } from "@/api";
import { UrlsCollection } from "../components/MostFrequentlyUrls/UrlsCollection";

const MostFrequentlyUrls = async () => {
  const urlsResponse = await getTop100();

  return (
    <>
      <h1 className="block uppercase tracking-wide text-white font-bold mb-2 ">
        Top 100 Most Frequently Urls
      </h1>
      <UrlsCollection urls={urlsResponse.urls} />
    </>
  );
};

export default MostFrequentlyUrls;
