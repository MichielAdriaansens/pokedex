import { useState } from "react";

function Searchbar({ getPokemonData }) {
    const [userInput, setUserInput] = useState('');

    function getDataCalled() {
        let value = userInput;

        setUserInput('');
        getPokemonData(value);
    }

    function keyDownHandler(event) {
        // console.log(userInput);
        if (event.key === 'Enter') {
            getDataCalled();
        }
    }

    return (
        <div className='userinput' >
            <input
                placeholder='type name or id'
                onChange={(e) => { setUserInput(e.target.value) }}
                value={userInput}
                onKeyDown={keyDownHandler}
            />
            <button onClick={getDataCalled} >search</button>
        </div>
    );
}

export default Searchbar;