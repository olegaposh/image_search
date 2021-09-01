import axios from 'axios';
import React, {useState, useEffect} from 'react'

export const Search = () => {

    const [search, setSearch] = useState("");

    const handleInputChange = event => {

        const {value} = event.target;
        setSearch(value);

    }

    const handleSubmit = event => {

        console.log(search)
    }

    useEffect(() => {

        axios
            .get("https://api.unsplash.com/")

    }, [])


    return (
        <div className="container">
            <div className="row p-5">
                <div className="col text-center">
                    <input onChange={handleInputChange} type="text" name="photo" placeholder="Search for Photos..."/>
                    <button onClick={handleSubmit} type="submit">Search</button>
                </div>
            </div>

        </div>
    )
}
