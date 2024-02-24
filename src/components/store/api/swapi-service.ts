import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person, Planet, Starship } from "../../../types";
import {
  PeopleResult,
  PlanetResult,
  StarshipsResult,
} from "../../../types/swapi-types";

const _apiUrl = "https://swapi.dev/api";
const _imageUrl = "https://starwars-visualguide.com/assets/img";

// Define a service using a base URL and expected endpoints
const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: _apiUrl }),
  endpoints: (builder) => ({
    getPersonByID: builder.query<Person, number>({
      query: (id) => `people/${id}`,
    }),
    getPlanetByID: builder.query<Planet, number>({
      query: (id) => `planets/${id}`,
    }),
    getStarshipByID: builder.query<Starship, number>({
      query: (id) => `starships/${id}`,
    }),
    getAllPeople: builder.query<PeopleResult, void>({
      query: () => `people/`,
    }),
    getAllPlanets: builder.query<PlanetResult, void>({
      query: () => `planets/`,
    }),
    getAllStarships: builder.query<StarshipsResult, void>({
      query: () => `starships/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPersonByIDQuery,
  useGetPlanetByIDQuery,
  useGetStarshipByIDQuery,
  useGetAllPeopleQuery,
  useGetAllPlanetsQuery,
  useGetAllStarshipsQuery,
} = starWarsApi;

export default starWarsApi;

// class SwapiService {
//   getResource = async (resourcePath: string) => {
//     const res = await fetch(`${this._apiUrl}/${resourcePath}`);
//     if (!res.ok) {
//       throw new Error(
//         `Can't fetch "${this._apiUrl}${resourcePath}" with status ${res.status}`
//       );
//     }
//     const body = await res.json();
//     return body;
//   };

//   getAllStarships = async () => {
//     const res = await this.getResource("/starships/");
//     return res.results.map(this._transformStarship);
//   };
//   getAllPeople = async () => {
//     const res = await this.getResource("/people/");
//     return res.results.map(this._transformPerson);
//   };
//   getAllPlanets = async () => {
//     const res = await this.getResource("/planets/");
//     return res.results.map(this._transformPlanet);
//   };

//   getPlanetImageURL = (id: number) => `${this._imageUrl}/planets/${id}.jpg`;
//   getPersonImageURL = (id: number) => `${this._imageUrl}/people/${id}.jpg`;
//   getStarshipImageURL = (id: number) => `${this._imageUrl}/starships/${id}.jpg`;

//   getStarship = async (id: number) => {
//     const starship = await this.getResource(`/starships/${id}`);
//     return this._transformStarship(starship);
//   };
//   getPerson = async (id: number) => {
//     const person = await this.getResource(`/people/${id}`);
//     return this._transformPerson(person);
//   };
//   getPlanet = async (id: number) => {
//     const planet = await this.getResource(`/planets/${id}`);
//     return this._transformPlanet(planet);
//   };
//   _extractId = (item: any) => {
//     const idRegExp = /\/([0-9]*)\/$/;
//     return item.url.match(idRegExp)[1];
//   };
//   _transformPlanet = (planet: any) => ({
//     id: this._extractId(planet),
//     name: planet.name,
//     population: planet.population,
//     rotationPeriod: planet.rotation_period,
//     diameter: planet.diameter,
//   });
//   _transformPerson = (person: any) => ({
//     ...person,
//     id: this._extractId(person),
//   });
//   _transformStarship = (starship: any) => ({
//     ...starship,
//     id: this._extractId(starship),
//   });
// }
