import { API_URL } from "@/config/constants/content";
import { GetURLSResponse, SaveURLResponse } from "@/types";

export const saveURL = async (full_url: string): Promise<SaveURLResponse> => {
  try {
    const response = await fetch(`${API_URL}/short_urls.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ full_url }),
    });

    return (await response.json()) as SaveURLResponse;
  } catch (error) {
    console.error("Error saving the URL:", error);
    throw error;
  }
};

export const getTop100 = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return (await response.json()) as GetURLSResponse;
  } catch (error) {
    console.error("Error getting the URLS:", error);
    throw error;
  }
};
