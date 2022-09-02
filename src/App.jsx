import './App.css'
// import Location from './assets/components/Location'
// import Header from './assets/components/Header'
import Input from './assets/components/Input'

function App() {
  

  return (
    <div className="App">
      <div className="container">
        <div className="bubbles">
          <span style={{"--i": 11}}></span>
          <span style={{"--i": 12}}></span>
          <span style={{"--i": 24}}></span>
          <span style={{"--i": 10}}></span>
          <span style={{"--i": 14}}></span>
          <span style={{"--i": 23}}></span>
          <span style={{"--i": 18}}></span>
          <span style={{"--i": 16}}></span>
          <span style={{"--i": 19}}></span>
          <span style={{"--i": 20}}></span>
          <span style={{"--i": 22}}></span>
          <span style={{"--i": 25}}></span>
          <span style={{"--i": 18}}></span>
          <span style={{"--i": 21}}></span>
          <span style={{"--i": 15}}></span>
          <span style={{"--i": 13}}></span>
          <span style={{"--i": 26}}></span>
          <span style={{"--i": 17}}></span>
          <span style={{"--i": 13}}></span>
          <span style={{"--i": 28}}></span>
        </div>
        <div className='info__container'>
          {/* <Header/>
          <Location/> */}
          <Input/>
        </div>
      </div>
      
    </div>
  )
}

export default App
