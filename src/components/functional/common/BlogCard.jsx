const BlogCard = ({ date, link, title, thumb }) => {
  return (
    <div className="item">
      <img src={thumb} alt="image" width={413} height={413} />
      <div className="pop-content">
        <h3>
          <a href={`blogs/${link}`}>{title}</a>
        </h3>
        <ul>
          <li>{date}</li>
        </ul>
      </div>
      <a href={`blogs/${link}`} aria-label="Go to blog details.">
        <div className="go-corner">
          <div className="go-arrow">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
