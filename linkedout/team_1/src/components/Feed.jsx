import { useState } from 'react'
import { posts, currentUser } from '../data/mockData'
import Post from './Post'

function Feed() {
  const [sortBy, setSortBy] = useState('Top')

  // Get initials for the avatar
  const initials = currentUser.name
    .split(' ')
    .map(n => n[0])
    .join('')

  return (
    <>
      {/* Post Creator */}
      <div className="card post-creator">
        <div className="post-creator-top">
          <div className="avatar">{initials}</div>
          <input
            className="post-creator-input"
            type="text"
            placeholder="What do you want to talk about?"
            readOnly
          />
        </div>
        <div className="post-creator-actions">
          <button className="post-creator-action">
            <span className="post-creator-action-icon">📷</span>
            Photo
          </button>
          <button className="post-creator-action">
            <span className="post-creator-action-icon">🎥</span>
            Video
          </button>
          <button className="post-creator-action">
            <span className="post-creator-action-icon">📝</span>
            Article
          </button>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="sort-bar">
        <div className="sort-bar-line" />
        <div className="sort-bar-label">
          Sort by:
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option>Top</option>
            <option>Recent</option>
          </select>
        </div>
      </div>

      {/* Post Feed */}
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}

      {/* Load More */}
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <span className="show-more">Show more posts</span>
      </div>
    </>
  )
}

export default Feed
