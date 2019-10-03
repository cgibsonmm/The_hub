import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div>Top Catigories</div>
      <li>
        <Link to="/test">test</Link>
      </li>
      <li>
        <Link to='/test'>test</Link>
      </li>
      <li>
        <Link to='/test'>test</Link>
      </li>
    </div>
  )
}

export default Sidebar;