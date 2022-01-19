import react from "react"
import Button from "./Button"

const Header = ({ title }) => {
    const addFunction = (e) => {
        console.log("Ther's something to do");
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button content="Add" onClicked={addFunction} />
        </header>
    )
}

Header.defaultProps = {
    title: "No title"
}

export default Header
