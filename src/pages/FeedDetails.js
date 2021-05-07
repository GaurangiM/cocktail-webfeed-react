import './FeedDetails.css'

const FeedDetails = ({ category, picture })=> {
    return (
        <div className="FeedDetails">
            <div className="feedPicture">
                <img src={picture + '/preview'} alt="A cocktail"/>
            </div>
            <div >
                <p>More Details</p>
            </div>
        </div>
    )
}

export default FeedDetails;