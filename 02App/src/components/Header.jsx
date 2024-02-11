/* eslint-disable react/prop-types */

// Destructuring props.title
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

// As a backup props
Header.defaultProps = {
    title: "Default Title",
};

export default Header;
