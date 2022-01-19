import react from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAddBtnClicked, isFormOpen }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          content={isFormOpen ? 'Close' : 'Add'}
          onClicked={onAddBtnClicked}
          color={isFormOpen ? 'red' : 'green'}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'No title',
}

export default Header
