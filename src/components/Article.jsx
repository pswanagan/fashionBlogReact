/* eslint-disable react/prop-types */

function Article({ date, title, imageSrc }) {
    return (
      <div>
        <h4>{date}</h4>
        <h2>{title}</h2>
        <img src={imageSrc} alt={`Image for ${title}`} />
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </article>
        <a href="" className="Continues"><b>Continues...</b></a>
        <br />
        <hr />
      </div>
    );
  }
  
  export default Article;