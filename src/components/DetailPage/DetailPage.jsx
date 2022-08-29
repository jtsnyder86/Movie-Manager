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
                            <div><h4>Genres:{details.map(detail => { 
                                return(<h5>{details.name}</h5>)})}</h4></div>
                            <h5>{movie.description}</h5>
                            
                        </div>
                    )
        
        
        <footer><Link to='/'>Return to list</Link></footer>
        
        
        </section>
        </main>
    )
}


export default DetailPage