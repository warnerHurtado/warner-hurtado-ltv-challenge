import { API_URL } from "@/config/constants/content";
import { Url } from "@/types";

export const UrlsCollection: React.FC<{ urls: Url[] }> = ({ urls }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 text-white">
      {urls.map((url) => (
        <li key={url.short_code} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <h2 className="font-semibold leading-6 text-yellow-200">
                {url.title ? url.title : "URL Without Tag Title"}
              </h2>
              <p className="mt-1 truncate text-xs leading-5 text-gray-100">
                Full Url:{" "}
                <a
                  href={url.full_url}
                  className="underline  hover:text-cyan-600"
                  target="_blank"
                >
                  {url.full_url}
                </a>
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-100">
                Short Code:{" "}
                <a
                  href={`${API_URL}/${url.short_code}`}
                  className="underline  hover:text-cyan-600"
                  target="_blank"
                >
                  {`${API_URL}/${url.short_code}`}
                </a>
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-100">
                Click Count: {url.click_count}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
