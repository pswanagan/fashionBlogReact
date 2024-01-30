function Article({ date, title, image, summary }) {
    return (
      <article>
        <h3>{date}</h3>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{summary}</p>
        {/* Continue link */}
      </article>
    );
  }
  
  export default Article;