export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}
export interface UnsplashResponse {
  results: ImageData[];
  total: number;
  total_pages: number;
}
