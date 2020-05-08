import React from 'react';
import { Nav } from 'react-bootstrap';

import { timestamps } from '../config'

export default function Header({setTimeStampUrl}) {

  return (
    <header>
      <Nav className="justify-content-center" variant="tabs" defaultActiveKey={timestamps[0].url}>
        {timestamps.map(item => (
          <Nav.Item key={item.url}>
            <Nav.Link onClick={()=>{setTimeStampUrl(item.url)}} eventKey={item.url}>{item.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </header>
  )
}