import React, { useState} from 'react'
import Counter from './Counter'

export default function Greeter() {
    const [greet, setGreet] = useState("Joe")

    const handleChange = (event) => {
        setGreet(event.target.value)
    }
    
    return (
        <div>
            <h1>Welcome, {greet}</h1>
            <input type="text" onChange={handleChange}/>
            <Counter/>

        </div>
    )

}
