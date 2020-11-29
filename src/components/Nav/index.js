import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/">Home</Link>
      <Link to="/timer">Timer</Link>
    </nav>
  );
}
