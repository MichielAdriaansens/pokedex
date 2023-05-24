import { useState } from 'react';
import Scroll from '../container/Scroll';
import '../style/pokedex.css';
import '../style/Buttons.css';
import ButtonImgSwitch from './ButtonsImgSwitch';
import ButtonsScrollPoke from './ButtonsScrollPoke';
import BlinkAnim from './BlinkAnim';

function Pokedex({ id, name, images, description, types, getData, error, loading }) {
    const [flipImage, setFlipImage] = useState(false);
    const errorimg = `${process.env.PUBLIC_URL}/static.gif`;

    return (
        <div className='pokedex'>
            <img src={`${process.env.PUBLIC_URL}/pokedex1.png`} alt='pokedex' style={{ position: 'absolute' }} />

            {!loading ?
                (<>
                    <BlinkAnim displayError={error} />
                    {!error ?
                        (<img
                            className='pokeImg'
                            src={!flipImage ? (images.front) : (images.back)}
                            alt={`${name}`}
                        />)
                        :
                        (<img
                            className='pokeImg errorScreen'
                            src={errorimg}
                            alt='static'
                        />)
                    }
                    <Scroll addClass='description'>
                        <p className='pokeDescription'>{name}:<br />{description}</p>
                    </Scroll>
                    <Scroll addClass='name'>
                        <p className='pokeName'>{name}</p>
                    </Scroll>
                    <p className='pokeId'>#{id}</p>
                    <p className='pokeId pokeType'>{types}</p>
                    <ButtonImgSwitch showBackImg={flipImage} setShowBackImg={setFlipImage} />
                    <ButtonsScrollPoke curId={id} getData={getData} />
                </>)
                :
                (<img
                    className='loading pokeImg'
                    src={`${process.env.PUBLIC_URL}/pokeLoad.gif`}
                    alt={`loading`}

                />)
            }


        </div>
    );
}

export default Pokedex;