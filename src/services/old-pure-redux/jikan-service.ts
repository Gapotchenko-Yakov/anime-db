class JikanService {
  apiUrl = "https://api.jikan.moe/v4";

  getResource = async (resourcePath: string) => {
    const res = await fetch(`${this.apiUrl}/${resourcePath}`);
    if (!res.ok) {
      throw new Error(
        `Can't fetch "${this.apiUrl}${resourcePath}" with status ${res.status}`
      );
    }
    const body = await res.json();
    return body;
  };

  getAnimeList = async () => {
    const res = await this.getResource("/anime");
    return res;
  };
}

export default JikanService;
