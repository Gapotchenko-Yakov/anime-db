import React from "react";
import PlanetDetails from "../item-details/item-details";
import SwapiService from "../../services/old-pure-redux/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

type RandomPlanetState = {
  loading: boolean;
  error: boolean;
  planet: {
    id: number;
    name: string;
    population: number;
    rotationPeriod: number;
    diameter: number;
  };
};

class RandomPlanet extends React.Component<{}, RandomPlanetState> {
  swapiService = new SwapiService();

  updatePlanet = () => {
    const randomId = Math.floor(Math.random() * 30) + 2; //20000; //

    this.setState({ loading: true });

    this.swapiService
      .getPlanet(randomId)
      .then((planet) => this.setState({ loading: false, error: false, planet }))
      .catch((e) => this.setState({ loading: false, error: true }));
  };

  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      planet: {},
    } as RandomPlanetState;
  }

  componentDidMount() {
    this.updatePlanet();
  }

  //   componentDidCatch() {
  //     this.setState({ error: true });
  //   }

  render() {
    const {
      loading,
      error,
      planet: { id, name, population, rotationPeriod, diameter } = {},
    } = this.state;

    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;

    return (
      <div className="row bg-info m-2">
        <div className="col-md-4">
          <img src={this.swapiService.getPlanetImageURL(id)} alt="" />
        </div>
        <div className="col-md-8">
          <ul>
            <li>
              <span className="w-25">Name:&nbsp;&nbsp;&nbsp;</span>
              <span className="w-75">{name}</span>
            </li>{" "}
            <li>
              <span className="w-25">Population:&nbsp;&nbsp;&nbsp;</span>
              <span className="w-75">{population}</span>
            </li>{" "}
            <li>
              <span className="w-25">Rotation Period:&nbsp;&nbsp;&nbsp;</span>
              <span className="w-75">{rotationPeriod}</span>
            </li>{" "}
            <li>
              <span className="w-25">Diameter:&nbsp;&nbsp;&nbsp;</span>
              <span className="w-75">{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
