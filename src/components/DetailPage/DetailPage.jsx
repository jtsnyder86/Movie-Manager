import { Link } from 'react-router-dom';
import DetailItem from '../DetailItem/DetailItem';
import { useSelector } from 'react-redux';




function DetailPage() {

    const movie = useSelector(store => store.movieId);

    const details = useSelector(store => store.movieDetails);

    return (
        <main>
            <section>


                <div>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title} />
                    <h5>{movie.description}</h5>
                    {details.map(detail => {
                        return (<h5>Genres:{detail.name}</h5>)
                    })}



                </div>



                <footer><Link to='/'>Return to list</Link></footer>


            </section>
        </main>
    )
}


export default DetailPage