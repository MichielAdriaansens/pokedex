import { useState, useEffect } from "react";


function BlinkAnim({ displayError }) {
    const [blinkOn, setBlinkOn] = useState(false);

    useEffect(() => {
        function blink() {
            setTimeout(() => {
                setBlinkOn(true);
            }, 1000);

            setTimeout(() => {
                setBlinkOn(false);
                blink();
            }, 2000);
        }
        blink()
    }, []);
    return (<>
        {blinkOn && <img className={`anim_blink ${displayError && 'error'}`} src={`${process.env.PUBLIC_URL}/lens-blink.png`} alt='' />}
    </>);
}

export default BlinkAnim;