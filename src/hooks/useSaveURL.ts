import { useState } from "react";

import { saveURL } from "../api";

export const useSaveURL = () => {
  const [url, setURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [shortCode, setShortCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!url.trim()) {
        setError("The URL cannot be empty.");

        return;
      }

      setLoading(true);

      const response = await saveURL(url);

      if(response.errors) {
        setError(response.errors[0])
      }
      else {
          setShortCode(response.short_code);
          setError(null);
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error saving the URL:", error);
      setError("An error occurred while saving the URL.");
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
    setError(null);
    setShortCode(null);
  };

  return { url, error, shortCode, loading, handleSubmit, handleChange };
};