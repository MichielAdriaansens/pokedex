import { useState } from "react";

function Searchbar({ getPokemonData }) {
    const [userInput, setUserInput] = useState('');

    function keyDownHandler(event) {
        // console.log(userInput);
        if (event.key === 'Enter') {
            getPokemonData(userInput);
        }
    }

    return (
        <div className='userinput' >
            <input
                placeholder='type name or id'
                onChange={(e) => { setUserInput(e.target.value) }}
                onKeyDown={keyDownHandler}
            />
            <button onClick={() => { getPokemonData(userInput) }} >search</button>
        </div>
    );
}

export default Searchbar;