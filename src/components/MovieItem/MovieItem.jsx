import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const viewDetails = () => {
    
        dispatch({
            type: 'GET_DETAILS'
        })

        dispatch({
            type: 'GET_DETAILS'
        })
        

        history.push(`/details/${movie.id}`)
    }

    return (
        <div key={movie.id} onClick={viewDetails}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    )
}


export default MovieItem