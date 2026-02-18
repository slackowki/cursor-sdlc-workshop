import { messages, notifications } from '../data/mockData'

function Navbar() {
  const unreadMessages = messages.filter(m => m.unread).length
  const notifCount = notifications.length

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <span className="navbar-logo">LinkedOut</span>

        {/* Search */}
        <div className="navbar-search">
          <div className="navbar-search-wrapper">
            <span className="navbar-search-icon">🔍</span>
            <input
              className="input"
              type="text"
              placeholder="Search"
              style={{ paddingLeft: 36 }}
            />
          </div>
        </div>

        {/* Nav Links */}
        <div className="navbar-links">
          <a href="#" className="navbar-link active">
            <span className="navbar-link-icon">🏠</span>
            <span className="navbar-link-label">Home</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">👥</span>
            <span className="navbar-link-label">Network</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">💼</span>
            <span className="navbar-link-label">Jobs</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">💬</span>
            <span className="navbar-link-label">Messaging</span>
            {unreadMessages > 0 && (
              <span className="navbar-badge">{unreadMessages}</span>
            )}
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">🔔</span>
            <span className="navbar-link-label">Notifications</span>
            {notifCount > 0 && (
              <span className="navbar-badge">{notifCount}</span>
            )}
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">👤</span>
            <span className="navbar-link-label">Me</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="navbar-link-icon">🎮</span>
            <span className="navbar-link-label">Games</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
