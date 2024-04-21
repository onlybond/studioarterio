import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Loading from "./components/Loading ";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loading />
      <Nav/>
      <ImageGallery/>
    </div>
  );
}

export default App;
