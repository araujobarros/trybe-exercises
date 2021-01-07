import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointmentList = ['synchronous online class', 'asynchronous online class','end of class']

const population = list => {
  return (
    list.map(element => <li>{element}</li>)
  );
}

function App() {
  return (
  <div>
    <h1>Task list</h1>
    {task('English Course')}
    {population(appointmentList)}
  </div>
  );
}

export default App;
