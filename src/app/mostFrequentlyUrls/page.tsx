import { getTop100 } from "@/api";
import { UrlsCollection } from "../components/Content/MostFrequentlyUrls/UrlsCollection";

const MostFrequentlyUrls =  async () => {

  const urlsResponse = await getTop100();

  return (
    <>
      <h1>Most Frequently Urls</h1>
      <UrlsCollection urls={urlsResponse.urls} />
    </>
  );
};

export default MostFrequentlyUrls;
