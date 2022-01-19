import react from 'react'
import Button from './Button'

const Header = ({ title, onAddBtnClicked, isFormOpen }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        content={isFormOpen ? 'Close' : 'Add'}
        onClicked={onAddBtnClicked}
        color={isFormOpen ? 'red' : 'green'}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'No title',
}

export default Header
