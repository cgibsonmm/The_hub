import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer'

const Sidebar = () => {
  return (
    <Menu>
      <MenuLabel>Top Catigories</MenuLabel>
      <MenuList>
        <li>
          <MenuLink><Link to='/test'>test</Link></MenuLink>
        </li>
        <li>
          <MenuLink><Link to='/test'>test</Link></MenuLink>
        </li>
        <li>
          <MenuLink><Link to='/test'>test</Link></MenuLink>
        </li>
      </MenuList>
    </Menu>
  )
}

export default Sidebar;