import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer'

const Sidebar = () => {
  return (
    <Menu>
      <MenuLabel>Top Catigories</MenuLabel>
      <MenuList>
        <li>
          <MenuLink href="/test">test</MenuLink>
        </li>
        <li>
          <MenuLink href='/test'>test</MenuLink>
        </li>
        <li>
          <MenuLink href='/test'>test</MenuLink>
        </li>
      </MenuList>
    </Menu>
  )
}

export default Sidebar;