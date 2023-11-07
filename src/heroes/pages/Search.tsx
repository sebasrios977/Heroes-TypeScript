import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import HeroCard from "../components/HeroCard"
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`?q=${searchText}`); 
  }

  return (
    <div>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Busqueda</h4>
            <hr />

            <form onSubmit={onSearchSubmit}>
              <input 
                className="form-control"
                type="text" 
                placeholder="Busca un heroe"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />

              <button className="btn btn-outline-primary mt-1">Buscar</button>
              
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />


            {(q?.length === 0) && (
              <div className="alert alert-primary">
                Buscar heroe
              </div>
            )}

            {(heroes.length === 0 && q!.length > 0) && (
              <div className="alert alert-danger">
                Heroe no encontrado con <b>{q}</b>
              </div>  
            )}
            {
              heroes?.map(hero => (
                <HeroCard key={hero.id} hero={hero} />
              ))
            }
          </div>
        </div>
    </div>
  )
}
