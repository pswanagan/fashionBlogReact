
import './App.css'

import Header from './components/Header';

import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Article date="11/12/20" title="On the Street in Brooklyn" imageSrc="..\public\blog-image-1.jpg" />
        <Article date="11/11/20" title="Vintage in Vogue" imageSrc="..\public\blog-image-2.jpg" />
      </main>
      <Footer />
    </div>
  );
}

export default App;