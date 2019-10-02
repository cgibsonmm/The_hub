import React, { useState, useStyles } from 'react';
import { Link, useHistory } from 'react-router-dom'
import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarEnd,
  NavbarMenu,
  NavbarBurger,
} from 'bloomer'


const Header = ({ handleInput, handleSearchSubmit }) => {
  const [input, setInput] = useState('')
  const [isActive, setIsActive] = useState(false)
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
    e.target.reset()
  }

  const handleChange = (e) => {
    e.stopPropagation()
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setIsActive(!isActive)
  }
  return (
    <header>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link to='/'><h1>The Hub</h1></Link>
          </NavbarItem>
          <NavbarBurger isActive={isActive} onClick={handleClick} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive} onClick={handleClick}>
          <NavbarEnd>
            <NavbarItem>
              <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} onClick={e => e.stopPropagation()} placeholder='search' />
                <Button isColor='primary' type="submit">Search</Button>
              </form>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </header>
  )
}

export default Header;