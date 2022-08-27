import {Link} from 'react-router-dom';
import DetailItem from '../DetailItem/DetailItem';
import {useSelector} from 'react-redux';




function DetailPage () {

    const details = useSelector(store => (store.genres))

    return(
        <main>
        <section>
            {details.map(detail => {
                    return (
                        <div key={detail.id}>
                            <h3>{detail.title}</h3>
                            <img src={detail.poster} alt={detail.title}/>
                            <h4>Genres: {detail.name}</h4>
                            <h5>{detail.description}</h5>
                            <DetailItem />
                        </div>
                    )})}
        
        
        
        </section>
        </main>
    )
}


export default DetailPage