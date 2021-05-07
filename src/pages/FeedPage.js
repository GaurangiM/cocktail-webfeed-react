import { useState, useEffect } from 'react'

const FeedPage = (props)=> {
    const [feedData, setFeedData] = useState();

    useEffect(()=> {
        const fetchAPIData = async()=> {
            
        }
    },[])

    return (
        <div className="HomePage">
            <h2>Feed Page</h2>
        </div>
    )
}

export default FeedPage;