"use client";

import { useSaveURL } from "@/hooks/useSaveURL";

const SaveUrl: React.FC = () => {
  const {
    url,
    error,
    shortCode,
    loading,
    handleSubmit,
    handleChange,
  } = useSaveURL();

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6 justify-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-s font-bold mb-2">
              URL to shorten
            </label>
            <input
              className={`${
                error && "border-red-500"
              } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              type="text"
              placeholder="Write your URL"
              value={url}
              onChange={handleChange}
            />
            {error && (
              <p className="text-red-500 text-xs italic mb-5">{error}</p>
            )}
            <button
              className="shadow bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "PROCESSING..." : "GENERATE SHORT URL"}
            </button>
            {shortCode && (
              <p className="text-lime-600 mt-5">
                ✔ URL saved successfully. Short code: {shortCode}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaveUrl;
