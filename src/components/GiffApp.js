
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { fetchGifs } from './fetchGifs';
import Gifs from './Gifs';

const GiffApp = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    
    const inputSearch = (e) => {
        setSearch(e.target.value)
        setLoading(false)
    }

    const searchHandler = async (e) => {
        e.preventDefault(e);
        const  { data } = await fetchGifs(search);

        setData(data);
        setSearch("");
    }

    const fetchGifs = async (search) => {
        const URL = "https://api.giphy.com/v1/gifs/search?api_key=91aYTHY2EHvBxrtpAky1ZbrSa5NmfG0f&q=" + search + "&limit=25&offset=0&rating=g&lang";
        const data = axios.get(URL).then((res) => {

            setLoading(true);
            return res.data
        });

        return data;
    
    }
    

    const fetchTrending = async () => {
       await axios
             .get("https://api.giphy.com/v1/gifs/trending?api_key=91aYTHY2EHvBxrtpAky1ZbrSa5NmfG0f&limit=24&rating=g")
             .then((res) => {
                 setLoading(true)
                 return setData(res.data.data);
             });
    }

    useEffect(()=> {
        fetchTrending();
    }, []);

    const loveQuery = async (e) => {
        const  { data } = await fetchGifs('love');
        setData(data);
        setSearch("");
    } 
    const angryQuery = async (e) => {
        const  { data } = await fetchGifs('foot');
        setData(data);
        setSearch("");
    } 
    const noWayQuery = async (e) => {
        const  { data } = await fetchGifs('no way');
        setData(data);
        setSearch("");
    } 
    
    

    return (
        <div className='gif-app'>
            <form>
                <input value={search} onChange={inputSearch} type='text' placeholder='Search a Gif...' />
                <input onClick={searchHandler} type='submit' value='search' />
            </form>
            <div className='gif-btn'>
                <button onClick={loveQuery}>#Love</button>
                <button onClick={noWayQuery}>#No way</button>
                <button onClick={angryQuery}>#Angry</button>
            </div>
            <div className='gif-container'>
                {loading ? <ul>
                   {data.map((gif) => (
                       <Gifs title={gif.title} key={gif.id} img={gif.images.original.url}/>
                   ))}
                </ul> : <div className="loader"></div>}
            </div>
        </div>
    )
}

export default GiffApp;