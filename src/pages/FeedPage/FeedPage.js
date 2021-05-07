import axios from 'axios';
import { useState, useEffect } from 'react'
import FeedItem from '../../components/FeedItem'
import  './FeedPage.css'

const FeedPage = (props)=> {
    const [feedData, setFeedData] = useState();

    useEffect(()=> {
        const fetchAPIData = async()=> {
           const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a") 
           console.log(response.data.drinks);
           setFeedData(response.data.drinks);
           console.log(feedData);
        }
        fetchAPIData();
    },[])

    return (
        <div className="FeedPage">
            <h2>Feed Page</h2>
            {feedData ? (
                    <div>
                        {
                            feedData.map(feed=> {
                                return <FeedItem key={feed.idDrink}
                                                    id={feed.idDrink}
                                                    category={feed.strCategory}
                                                    picture={feed.strDrinkThumb}/>
                            })
                        }
                    </div>
                    
                
            ): (<p>Loading...</p>)}
            
        </div>
    )
}

export default FeedPage;