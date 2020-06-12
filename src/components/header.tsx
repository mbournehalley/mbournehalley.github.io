import React from 'react'

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.45rem` }}>
    <nav className="bp3-navbar bp3-dark">
      <div style={{ margin: `0 auto`, width: `960px` }}>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">{siteTitle}</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
          <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
          <span className="bp3-navbar-divider"></span>
          <button className="bp3-button bp3-minimal bp3-icon-git-repo"></button>
        </div>
      </div>
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
} as Partial<Props>

export default Header
