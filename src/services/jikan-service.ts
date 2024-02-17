class JikanService {
  apiUrl = "https://api.jikan.moe/v4";

  getResource = async (resourcePath) => {
    const res = await fetch(`${apiUrl}/${resourcePath}`);
    if (!res.ok) {
      throw new Error(
        `Can't fetch "${apiUrl}${resourcePath}" with status ${res.status}`
      );
    }
    const body = await res.json();
    return body;
  };

  getAnimeList = async () => {
    const res = await getResource("/anime");
    return res;
  };
}
