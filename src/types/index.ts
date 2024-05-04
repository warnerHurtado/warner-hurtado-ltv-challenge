export type SaveURLResponse = {
  short_code: string;
  errors: string[];
};

export type Url = {
  click_count: number;
  full_url: string;
  short_code: string;
  title: string | null;
};

export type GetURLSResponse = {
  urls: Url[];
};
