import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';

import Test from './components/Test';
import Counter from './components/Counter';
import Content from './components/Content';
import CounterUseState from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />

      <Counter />
      <CounterUseState />

      <Content>
        <p>This is content</p>
      </Content>
      <Blog />
      <Footer copyright={`cryptodweb ${new Date().getFullYear()}`} />
    </div>
  );
}

export default App;
