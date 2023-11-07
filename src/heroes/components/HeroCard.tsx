import { Link } from "react-router-dom";
import { Hero } from "../interface/Heroes.interface"


interface HeroCard {
    hero: Hero,
}

const HeroCard = ({hero}: HeroCard) => {

    const heroImageUrl: string = `/assets/heroes/${hero.id}.jpg`;

    const charactersByHero = <p className="card-text">{hero.characters}</p>;
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4">
                    <img className="card-img" src={heroImageUrl} alt={hero.superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        { (hero.alter_ego !== hero.characters) && charactersByHero }
                        <p className="card-text">
                            <small className="text-muted">{hero.first_appearance}</small>
                        </p>

                        <Link to={`/heroes/hero/${hero.id}`}>
                            Mas...
                        </Link>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroCard
