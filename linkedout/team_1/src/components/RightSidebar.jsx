import {
  news,
  games,
  messages,
  jobs,
  notifications,
  suggestedConnections,
  promoted,
} from '../data/mockData'

function RightSidebar() {
  return (
    <>
      {/* News */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">📰</span>
          LinkedOut News
        </div>
        <ul className="news-list">
          {news.map(item => (
            <li key={item.id} className="news-item">
              <div className="news-title">{item.title}</div>
              <div className="news-meta">
                {item.timeAgo} &middot; {item.readers.toLocaleString()} readers
              </div>
            </li>
          ))}
        </ul>
        <span className="show-more">Show more &rarr;</span>
      </div>

      {/* Games */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">🎮</span>
          Today&apos;s Games
        </div>
        <div className="games-list">
          {games.map(game => (
            <div key={game.id} className="game-item">
              <div className="game-emoji">{game.emoji}</div>
              <div className="game-info">
                <div className="game-name">{game.name} #{game.number}</div>
                <div className="game-subtitle">{game.subtitle}</div>
              </div>
              <span className="game-play">Play</span>
            </div>
          ))}
        </div>
      </div>

      {/* Messaging */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">💬</span>
          Messaging
        </div>
        <div className="message-list">
          {messages.map(msg => {
            const msgInitials = msg.senderName
              .split(' ')
              .map(n => n[0])
              .join('')

            return (
              <div
                key={msg.id}
                className={`message-item${msg.unread ? ' unread' : ''}`}
              >
                {msg.unread && <div className="message-unread-dot" />}
                <div className="avatar avatar-sm">{msgInitials}</div>
                <div className="message-content">
                  <div className="message-sender">
                    {msg.senderName}
                    {msg.unreadCount > 0 && (
                      <span className="badge badge-primary" style={{ marginLeft: 4 }}>
                        {msg.unreadCount} new
                      </span>
                    )}
                  </div>
                  <div className="message-preview">{msg.preview}</div>
                </div>
                <div className="message-time">{msg.timeAgo}</div>
              </div>
            )
          })}
        </div>
        <span className="show-more">Open all messages</span>
      </div>

      {/* Jobs */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">💼</span>
          Jobs For You
        </div>
        <div className="job-list">
          {jobs.slice(0, 3).map(job => (
            <div key={job.id} className="job-item">
              <div className="job-title">{job.title}</div>
              <div className="job-company">
                {job.company} &middot; {job.location}
              </div>
              <div className="job-details">
                {job.salary} &middot; {job.applicants} applicants
              </div>
              <div className="job-connections">
                💡 {job.connectionsAtCompany} connections work here
              </div>
              <div className="job-actions">
                <button className="btn btn-sm btn-outline">Save</button>
                <button className="btn btn-sm btn-filled">
                  {job.easyApply ? 'Easy Apply' : 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <span className="show-more">See all recommendations &rarr;</span>
      </div>

      {/* People You May Know */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">👥</span>
          People You May Know
        </div>
        <div className="connections-grid">
          {suggestedConnections.slice(0, 4).map(person => {
            const personInitials = person.name
              .split(' ')
              .map(n => n[0])
              .join('')

            return (
              <div key={person.id} className="connection-card">
                <div className="avatar avatar-sm" style={{ margin: '0 auto' }}>
                  {personInitials}
                </div>
                <div className="connection-name">{person.name}</div>
                <div className="connection-headline">{person.headline}</div>
                <div className="connection-mutual">
                  {person.mutualConnections} mutual
                </div>
                <button
                  className="btn btn-sm btn-outline"
                  style={{ marginTop: 8, width: '100%' }}
                >
                  + Connect
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Notifications */}
      <div className="card right-section">
        <div className="right-section-title">
          <span className="right-section-title-icon">🔔</span>
          Notifications
        </div>
        <div className="notification-list">
          {notifications.map(notif => (
            <div key={notif.id} className="notification-item">
              <div className="notification-dot" />
              <div>
                {notif.text}
                <span className="notification-time"> &middot; {notif.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="show-more">See all notifications &rarr;</span>
      </div>

      {/* Promoted */}
      <div className="card right-section">
        <div className="promoted-label">Promoted</div>
        <div className="promoted-card">
          <div className="promoted-image">✨</div>
          <div className="promoted-body">
            <div className="promoted-title">{promoted.title}</div>
            <div className="promoted-desc">{promoted.description}</div>
            <button className="btn btn-sm btn-filled" style={{ marginTop: 8 }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-links">
        <a href="#">About</a> &middot;{' '}
        <a href="#">Accessibility</a> &middot;{' '}
        <a href="#">Help Center</a> &middot;{' '}
        <a href="#">Privacy</a> &middot;{' '}
        <a href="#">Terms</a>
        <br />
        <a href="#">Ad Choices</a> &middot;{' '}
        <a href="#">Advertising</a> &middot;{' '}
        <a href="#">Business Services</a>
        <div className="footer-copyright">LinkedOut Corporation &copy; 2025</div>
      </div>
    </>
  )
}

export default RightSidebar
