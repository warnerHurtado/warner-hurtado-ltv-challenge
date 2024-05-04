import { Url } from "@/types";

export const UrlsCollection: React.FC<{ urls: Url[] }> = ({ urls }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 text-white">
      {urls.map((url) => (
        <li key={url.short_code} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <h3 className="text-sm font-semibold leading-6">{url.title}</h3>
              <p className="mt-1 truncate text-xs leading-5 text-gray-100">
                {url.full_url}
              </p>
              <p className="text-sm leading-6 text-gray-200">
                Click Count: {url.click_count}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
