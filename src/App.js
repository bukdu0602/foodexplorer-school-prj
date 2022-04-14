import "./styles/styles.scss";
import Header from "./Header";
import TopMain from "./TopMain";
import RecipeCuisine from "./RecipeCuisine";
import Blog from "./Blog";
import Footer from "./Footer";
import bg from "./images/bg.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Header></Header>
      <div id="reset">
        <TopMain></TopMain>
        <RecipeCuisine></RecipeCuisine>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
