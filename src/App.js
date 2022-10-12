import logo from './logo.svg';
import './App.css';
import Container from './Auth/Container';
import { AddStudent } from './Student-Example/views/product/AddStudent';
import { StudentList } from './Student-Example/views/product/StudentList';

function App() {
  return (
    <div className="App">
      <StudentList/>
      <AddStudent/>
    </div>
  );
}

export default App;
