interface Character {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}

export type { Character };
