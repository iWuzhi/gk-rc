/**
 * author iWuzhi
 * date 2020-12-23 18:10:44
 */

import React from 'react';

interface IProps {

}

const Nav: React.FC<IProps> = () => {
  return (
    <ul className="nav flex-column" style={{ minWidth: 320, borderRight: 'solid 1px red', height: '100%' }}>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
      </li>
    </ul>
  )
}

export default Nav;