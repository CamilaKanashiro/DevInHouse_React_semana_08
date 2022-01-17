import './App.css';
import Button from './components/Button'
import PerfilDeContato from './components/PerfilDeContato';
import Post from './components/Post';

function App() {
  return (
    <>
      <Button title="Get Started" color="#000" background="#7C0" />
      <Button title="Buy" color="#CCC" background="#F00" />
      <Button title="Stop" color="#FFF" background="#38F" />
      <Button title="Run" color="#000" background="#ACB8D6" />

      <PerfilDeContato 
        photo="https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png"
        name= "Bulbasaur"
        description="Bulbasaur" />

      <PerfilDeContato 
        photo="https://wikimon.net/images/thumb/d/d0/Tailmon_m10.png/172px-Tailmon_m10.png"
        name= "Tailmon"
        description="Hikari's Digimon!" />

      <PerfilDeContato 
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLHi9Zvo_KsX73pfav3QlTM8kjT3WSCmSBA&usqp=CAU"
        name= "m&m"
        description="Anytime" />

      <Post 
        perfilPhoto="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        name= "Nick"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sem vel eros aliquet, in imperdiet magna aliquet. Sed ligula arcu, rutrum non auctor lacinia, molestie a nisi."
        photoPost="https://images.unsplash.com/photo-1615297928064-24977384d0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
      />

      <Post 
        perfilPhoto="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80"
        name= "Jo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sem vel eros aliquet, in imperdiet magna aliquet. Sed ligula arcu, rutrum non auctor lacinia, molestie a nisi."
        photoPost="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      


    </>
  );
}

export default App;
