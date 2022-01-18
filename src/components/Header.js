import react from "react"

const Header = ({ title }) =>
{
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "No title"
}

export default Header
