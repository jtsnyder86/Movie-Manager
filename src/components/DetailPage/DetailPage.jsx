import {Link} from 'react-router-dom';
import DetailItem from '../DetailItem/DetailItem';
import {useSelector} from 'react-redux';




function DetailPage () {

    const movie = useSelector(store => store.movieId);

    const details = useSelector(store => store.movieDetails);

    return(
        <main>
        <section>
            
                    return (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <h5>{movie.description}</h5>
                            <ul>{details.map(detail => { 
                                return(<li>Genres:{detail.name}</li>)})}
                            </ul>
                            
                            
                        </div>
                    )
        
        
        <footer><Link to='/'>Return to list</Link></footer>
        
        
        </section>
        </main>
    )
}


export default DetailPage