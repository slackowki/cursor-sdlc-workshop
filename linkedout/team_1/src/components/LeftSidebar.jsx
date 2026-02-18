import { currentUser, groups, savedItems, events } from '../data/mockData'

function LeftSidebar() {
  // Get initials for avatar
  const initials = currentUser.name
    .split(' ')
    .map(n => n[0])
    .join('')

  return (
    <>
      {/* Profile Card */}
      <div className="card profile-card">
        <div className="profile-cover" />
        <div className="profile-avatar">{initials}</div>
        <div className="profile-name">{currentUser.name}</div>
        <div className="profile-headline">{currentUser.headline}</div>

        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-value">{currentUser.connections}</div>
            <div className="profile-stat-label">Connections</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">{currentUser.profileViewers.toLocaleString()}</div>
            <div className="profile-stat-label">Profile views</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">{currentUser.postImpressions.toLocaleString()}</div>
            <div className="profile-stat-label">Impressions</div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="card">
        <div className="sidebar-section">
          <div className="sidebar-section-title">My Groups</div>
          <ul className="sidebar-list">
            {groups.map(group => (
              <li key={group.id} className="sidebar-list-item">
                {group.name}
                <div className="sidebar-list-item-meta">
                  {group.members.toLocaleString()} members
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Saved & Events */}
      <div className="card">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Saved Items</div>
          <ul className="sidebar-list">
            {savedItems.map(item => (
              <li key={item.id} className="sidebar-list-item">
                {item.title}
                <div className="sidebar-list-item-meta">{item.savedAgo}</div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="divider" style={{ margin: '0 16px' }} />
        <div className="sidebar-section">
          <div className="sidebar-section-title">Events</div>
          <ul className="sidebar-list">
            {events.map(event => (
              <li key={event.id} className="sidebar-list-item">
                {event.name}
                <div className="sidebar-list-item-meta">{event.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default LeftSidebar
