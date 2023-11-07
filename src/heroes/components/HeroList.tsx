import { getHeroesByPublisher } from "../helpers";
import { Publisher } from "../interface/Heroes.interface";
import HeroCard from "./HeroCard";
import { useMemo } from 'react';

interface PublisherList {
    publisher: Publisher
}

export const HeroList = ({publisher}: PublisherList) => {

    const heroesByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroesByPublisher.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

