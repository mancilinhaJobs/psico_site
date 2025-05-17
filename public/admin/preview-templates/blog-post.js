const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <div className="blog-post">
      <h1>{entry.getIn(['data', 'title'])}</h1>
      <div className="meta">
        <span className="date">{entry.getIn(['data', 'date'])}</span>
        <span className="tags">
          {entry.getIn(['data', 'tags']).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </span>
      </div>
      <div className="content">
        {widgetFor('body')}
      </div>
    </div>
  )
}

export default BlogPostPreview 