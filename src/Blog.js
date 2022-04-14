import pasta from "./images/pasta.jpg";
import ramen from "./images/ramen.jpg";
import prevBtn from "./images/previous-btn.png";
function Blog() {
  return (
    <div className="blog">
      <div className="blogCard">
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
        <p>Posted by Mike Lee on Sunday, August 25, 2013</p>
        <img src={pasta} alt="Pasta" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab
          aspernatur illum odio commodi nesciunt nisi eius aperiam sint.
        </p>
        <div>
          <a href="/">Read More</a>
        </div>
      </div>

      <div className="blogCard">
        <h1>VEL, EAQUE QUISQUAM SIT AMET</h1>
        <p>Posted by Mike Lee on Monday, July 29, 2013</p>
        <img src={ramen} alt="Ramen" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab
          aspernatur illum odio commodi nesciunt nisi eius aperiam sint.
        </p>
        <div>
          <a href="/">Read More...</a>
        </div>
      </div>
      <img id="prevButton" src={prevBtn} alt="Previous button" />
    </div>
  );
}

export default Blog;
