import { heroes } from "../data/heroes"

export const getHeroesByName = (name: any) => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name) );
}

