import Button from "../UI/Button";
import "./MovieItem.css"

const MovieItem = (props) => {
       return(
        <div>
            <li className="movies-actions">
                <div className="movies-action__image">
            <img src={props.img}/>
                </div>
            <div className="movie-action__info">
                <h2>{props.title}</h2>
                <p>{props.raiting}</p>
            <Button width="130px" marginLeft="40px" backgroundColor="red">
            Delete
          </Button>
          <Button width="100px" marginLeft="40px" backgroundColor="green">
            Edit
          </Button>
            </div>
            </li>
        </div>
       )
}

export default MovieItem;