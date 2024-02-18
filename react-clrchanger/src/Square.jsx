const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF",
            }}
        >
            <p>{colorValue ? colorValue : "Empty value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
};

//default props if no props are passed by
Square.defaultProps = {
    colorValue: "Empty color value",
};

export default Square;
