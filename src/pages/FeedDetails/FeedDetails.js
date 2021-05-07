import './FeedDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'

const FeedDetails = (props)=> {
    const [feedData, setFeedData] = useState();
    const routeParams= useParams();
    console.log(routeParams.id);

    useEffect(()=> {
        console.log(routeParams.id)
        const fetchAPIData = async()=> {
            try{
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${routeParams.id}`)
                console.log(response.data.drinks[0]);
                setFeedData(response.data.drinks[0])
                //console.log(feedData)
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchAPIData()
    },[])
    return (
        <div className="FeedDetails">
            {feedData ? 
            (<div>
                <img src={feedData.strDrinkThumb} alt="Cocktail"/>
                <div className="ingredientList">
                    {feedData.strIngredient1 && (
                        <p><span className="ingredients">
                        {feedData.strIngredient1}</span></p>
                    )}
                    {feedData.strIngredient2 && (
                        <p><span className="ingredients">
                        {feedData.strIngredient2}</span></p>
                    )}
                    {feedData.strIngredient3 && (
                        <p><span className="ingredients">
                        {feedData.strIngredient3}</span></p>
                    )}
                    {feedData.strIngredient4 && (
                        <p><span className="ingredients">
                        {feedData.strIngredient4}</span></p>
                    )}
                </div>
                <p>{feedData.strDrink}</p>
                <p>Category : {feedData.strCategory}</p>
                <p>Instructions : {feedData.strInstructions}</p>
            </div>) : (<p>Loading...</p>)}

        </div>
    )
}

export default FeedDetails;