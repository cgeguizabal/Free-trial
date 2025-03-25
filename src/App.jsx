import { ContentLeft } from "./ContentLeft";
import { ContentRight } from "./ContentRight";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="app__container">
        <ContentLeft />
        <ContentRight />
      </div>
      <Footer />
    </>
  );
}

export default App;
