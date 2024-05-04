interface SaveURLResponse {
  short_code: string;
  errors: string[];
}

const API_URL = 'http://localhost:3000';

export const saveURL = async (full_url: string): Promise<SaveURLResponse> => {
  try {
    const response = await fetch(`${API_URL}/short_urls.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ full_url }),
    });

    return await response.json() as SaveURLResponse;
  } catch (error) {
    console.error('Error saving the URL:', error);
    throw error;
  }
};