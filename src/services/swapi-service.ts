class SwapiService {
  _apiUrl = "https://swapi.dev/api";
  _imageUrl = "https://starwars-visualguide.com/assets/img";

  getResource = async (resourcePath) => {
    const res = await fetch(`${this._apiUrl}/${resourcePath}`);
    if (!res.ok) {
      throw new Error(
        `Can't fetch "${this._apiUrl}${resourcePath}" with status ${res.status}`
      );
    }
    const body = await res.json();
    return body;
  };

  getAllStarships = async () => {
    const res = await this.getResource("/starships/");
    return res.results.map(this._transformStarship);
  };
  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results.map(this._transformPerson);
  };
  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._transformPlanet);
  };

  getPlanetImageURL = (id) => `${this._imageUrl}/planets/${id}.jpg`;
  getPersonImageURL = (id) => `${this._imageUrl}/people/${id}.jpg`;
  getStarshipImageURL = (id) => `${this._imageUrl}/starships/${id}.jpg`;

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };
  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };
  _transformPlanet = (planet) => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });
  _transformPerson = (person) => ({ ...person, id: this._extractId(person) });
  _transformStarship = (starship) => ({
    ...starship,
    id: this._extractId(starship),
  });
}

export default SwapiService;
