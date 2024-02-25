
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './todoList';
import Navbar from './navbar'

function App() {

  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <TodoList/>
    </>
  );
}

export default App
