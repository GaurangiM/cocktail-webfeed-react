import axios from 'axios';
import { useState, useEffect } from 'react'
import FeedItem from '../../components/FeedItem/FeedItem'
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
    },)

    return (
        <div className="FeedPage">
            <h2>Have a look around these variety of cocktails and choose your favorite one !</h2>
            {feedData ? (
                    <div className="feedRender">
                        {
                            feedData.map(feed=> {
                                return <FeedItem key={feed.idDrink}
                                                    id={feed.idDrink}
                                                    name={feed.strDrink}
                                                    picture={feed.strDrinkThumb}/>
                            })
                        }
                    </div>
                    
                
            ): (<p>Loading...</p>)}
            
        </div>
    )
}

export default FeedPage;