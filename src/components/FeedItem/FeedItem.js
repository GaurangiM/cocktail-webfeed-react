import './FeedItem.css'
import { Link } from 'react-router-dom'

const FeedItem = ({ id, name, picture })=> {
    //console.log(id);
    return (
        <div className="FeedItem">
            <div className="feedPicture">
                <img src={picture + '/preview'} alt="A cocktail"/>
            </div>
            <div className="feedData">
                <p>{name}</p>
            </div>
            <div className="feedLink">
                <Link to={`/details/${id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default FeedItem;