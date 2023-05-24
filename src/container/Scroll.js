function Scroll({ children, addClass }) {
    return (
        <div className={`scroll ${addClass.toString()}`}>
            {children}
        </div>
    );
}

export default Scroll;