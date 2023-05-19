import React from 'react';

export default function Navigation() {
  const linkstyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        syle={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
        >
        <div style={linkstyle}>
          <a href="#">portfolio</a>
        </div>
        <div style={linkstyle}>
          <a href="#">resume</a>
        </div>
        <div style={linkstyle}>
          <a href="#">ContactMe</a>
        </div>
        <div style={linkstyle}>
          <a href="#">about</a>
        </div>
      </section>
    </nav>
  );
}
