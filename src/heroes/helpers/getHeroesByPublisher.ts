import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
    return heroes.filter(hero => hero.publisher === publisher);
}