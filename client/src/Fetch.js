import React, {useState, useEffect} from 'react'
const HOME_API = "http://localhost:4000/";

const Fetch = () => {

    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetch(`${HOME_API}test`, {method: 'GET'})
        .then(res => console.log(res.statusText))
        .then(data => {
          setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {/* <li>{posts}</li> */}
            </ul>

        </div>
    )
}

export default Fetch;