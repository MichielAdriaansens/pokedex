function ButtonImgSwitch({ showBackImg, setShowBackImg }) {

    const onClickHandler = () => {
        setShowBackImg(!showBackImg)
    }

    return (
        <div onClick={onClickHandler} >
            <div className="button horizontal left"></div>
            <div className="button horizontal right" ></div>
            <div className="button circle" ></div>
        </div>
    );
}

export default ButtonImgSwitch;