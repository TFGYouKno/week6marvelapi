import {useEffect, useState } from 'react';
import axios from 'axios'

const CharacterList = () => {
    const[heroes, setHeroes] = useState([]);
    const[loading, setLoading] = useState(true);
    
    

    useEffect(()=>{
        const fetchHeroes = async () => {
            try{
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=622d9d65b9313973e25890e52cfc48de&hash=18cc4ba93b6ceb6009e066300b4bd121');
                console.log(response.data.data.results)
                setHeroes(response.data.data.results);
                setLoading(false);
            } catch (error){
                console.log("Error fetching heroes", error)
            }
        }
        fetchHeroes();
    }, [])
     
    if(loading){
        return <h3>Loading Heroes...</h3>
    }

    return (
        <div>
            <h3>Heroes</h3>
            {heroes.map((hero) => (
                <div key={hero.id} className="character" onClick={() => setSearchID(hero.id)}>
                    <h4>{hero.name}</h4>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} width="200" alt={hero.name} />
                    <br></br>
                </div>
            ))}
        </div>
    )

}



export default CharacterList

