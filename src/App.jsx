import Wrapper from 'components/Wrapper/Wrapper';
const object = { first: 'vasa', last: 'hevko' };
const name = object['first'];
console.log(name);

function App() {
  return (
    <div className="App">
      <Wrapper></Wrapper>
    </div>
  );
}

export default App;
