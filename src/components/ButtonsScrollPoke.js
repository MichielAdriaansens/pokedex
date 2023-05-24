function ButtonsScrollPoke({ curId, getData }) {

    function onClickHandler(e) {
        if (e.currentTarget.className === 'button vertical up') {
            getData(curId + 1);
        }
        else {
            getData(curId - 1);
        }
    }

    return (
        <div>
            <div className="button vertical up" onClick={(e) => { onClickHandler(e) }}></div>
            <div className="button vertical down" onClick={(e) => { onClickHandler(e) }}></div>
        </div>
    );
}

export default ButtonsScrollPoke;