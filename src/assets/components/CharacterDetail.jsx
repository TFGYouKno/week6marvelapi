import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function CharacterDetail(prop) {
    //these use destructuring to pull out the value of id and set it equal to a variable called id
    const {id} = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchHero = async () => {
            try{
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=622d9d65b9313973e25890e52cfc48de&hash=18cc4ba93b6ceb6009e066300b4bd121`);
                console.log(response.data.data.results)
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch (error){
                console.log("Error fetching hero", error)
            }
        }
        fetchHero();
    },[id])

    if(loading){
        return <h3>Loading Hero...</h3>
    }

    return (
        <div>
            <br/>
            <Link to="/characters">Back to Characters</Link>

            <div>
                <img src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} width="300" alt={hero?.name} />
                <h2>{hero.name}</h2>

                {hero.description && (
                    <p>{hero.description}</p>
                ) 
                }

                <h3>Comics</h3>
                {hero.comics.items.map((comic) => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}

            </div>

        </div>
    )



}

export default CharacterDetail;