import React from 'react'
import { useState } from 'react'

function Form () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form>
            {name}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" 
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <textarea type = "password" name="password"></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form