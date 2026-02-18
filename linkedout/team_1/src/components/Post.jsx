function Post({ post }) {
  // Get initials for the avatar
  const initials = post.authorName
    .split(' ')
    .map(n => n[0])
    .join('')

  return (
    <div className="card post-card">
      {/* Header */}
      <div className="post-header">
        <div className="avatar">{initials}</div>
        <div className="post-author-info">
          <div>
            <span className="post-author-name">{post.authorName}</span>
            <span className="post-author-degree"> &middot; {post.connectionDegree}</span>
          </div>
          <div className="post-author-headline">{post.authorHeadline}</div>
          <div className="post-meta">
            <span>{post.timeAgo}</span>
            <span>&middot;</span>
            <span>🌐</span>
          </div>
        </div>
        <button className="post-more-btn">&#8943;</button>
      </div>

      {/* Content */}
      <div className="post-content">
        {post.content}
        {post.extraContent && '\n\n' + post.extraContent}
      </div>

      {/* Poll */}
      {post.type === 'poll' && post.pollOptions && (
        <div className="poll">
          {post.pollOptions.map((option, i) => (
            <div key={i} className="poll-option">
              <div
                className="poll-option-bar"
                style={{ width: `${option.percentage}%` }}
              />
              <div className="poll-option-text">
                <span>{option.text}</span>
                <span className="poll-option-pct">{option.percentage}%</span>
              </div>
            </div>
          ))}
          <div className="poll-meta">
            {post.pollVotes.toLocaleString()} votes &middot; {post.pollTimeLeft}
          </div>
        </div>
      )}

      {/* Article */}
      {post.type === 'article' && post.article && (
        <div className="post-article">
          <div className="post-article-thumb">
            {post.article.thumbnail}
          </div>
          <div className="post-article-body">
            <div className="post-article-title">{post.article.title}</div>
            <div className="post-article-source">
              {post.article.source} &middot; {post.article.readTime}
            </div>
          </div>
        </div>
      )}

      {/* Image */}
      {post.image && <div className="post-image">{post.image}</div>}

      {/* Engagement Stats */}
      <div className="post-engagement">
        <div className="post-reactions">
          <div className="post-reactions-icons">
            {(post.reactions || ['👍']).map((r, i) => (
              <span key={i}>{r}</span>
            ))}
          </div>
          <span>
            {post.likedBy
              ? `${post.likedBy} and ${post.likes.toLocaleString()} others`
              : `${post.likes.toLocaleString()}`}
          </span>
        </div>
        <div className="post-engagement-counts">
          <span>{post.comments} comments</span>
          <span>{post.reposts} reposts</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="post-actions">
        <button className="post-action-btn">👍 Like</button>
        <button className="post-action-btn">💬 Comment</button>
        <button className="post-action-btn">🔄 Repost</button>
        <button className="post-action-btn">📤 Send</button>
      </div>

      {/* Comments */}
      {post.topComments && post.topComments.length > 0 && (
        <div className="post-comments">
          {post.topComments.map((comment, i) => {
            const commentInitials = comment.authorName
              .split(' ')
              .map(n => n[0])
              .join('')

            return (
              <div key={i} className="comment">
                <div className="avatar avatar-sm">{commentInitials}</div>
                <div className="comment-body">
                  <div>
                    <span className="comment-author">{comment.authorName}</span>
                    {' '}
                    <span className="comment-headline">{comment.authorHeadline}</span>
                  </div>
                  <div className="comment-text">{comment.content}</div>
                  <div className="comment-actions">
                    <span>👍 {comment.likes}</span>
                    <span>Reply</span>
                    {comment.replies > 0 && (
                      <span>{comment.replies} replies</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
          {post.comments > 5 && (
            <div className="show-more-comments">
              Show {post.comments - post.topComments.length} more comments
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Post
