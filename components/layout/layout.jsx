import MainHeader from './main-header'

import React from 'react'

const Layout = (props) => (
  <>
    <MainHeader />
    <main>
      {props.children}
    </main>
  </>
)

export default Layout
