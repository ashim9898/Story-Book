import { Route, Routes } from "react-router-dom"
import DynamicForm from '../src/components/dynamic_form/dynamic_form';
function App() {
  return (
    <Routes>
     
     <Route path="/" element={<DynamicForm />} />
    </Routes>
  );
}

export default App;
