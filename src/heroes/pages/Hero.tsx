import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const heroById = useMemo(() => getHeroById(id), [id]);

  if(!heroById) {
    return <Navigate to='/heroes/marvel' />
  }

  const heroImage: string = `/assets/heroes/${heroById.id}.jpg`;

  const onReturnPage = () => {
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__bounceInDown" src={heroImage} alt={heroById.superhero} />
      </div>

      <div className="col-8">
        <h3>{heroById.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> {heroById.alter_ego} </li>
          <li className="list-group-item"><b>Publisher: </b> {heroById.publisher} </li>
          <li className="list-group-item"><b>First appearance: </b> {heroById.first_appearance} </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{heroById.characters}</p>

        <button onClick={onReturnPage} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  )
}

