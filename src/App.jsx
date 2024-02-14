import Page from "./Page";
import { NewsProvider, NewsSearchProvider } from "./provider";

function App() {
  return (
    <NewsSearchProvider>
      <NewsProvider>
        <Page />
      </NewsProvider>
    </NewsSearchProvider>
  );
}

export default App;
