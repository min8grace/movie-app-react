import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({id, coverImg, title, year, summary, genres}){
    return (
        <div> 
            <img src={coverImg} alt={title} className={StyleSheet.movie__img}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={StyleSheet.movie__year}>{year}</h3>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}... ` : summary}</p>
            <ul className={StyleSheet.movie__genres}>
            { genres.map( gen=> ( 
                <li key={gen}>{gen}</li>
            ))} 
            </ul>
        </div>
    );
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,    
};
export default Movie;