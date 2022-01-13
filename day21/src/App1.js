import './App.css';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Cnt from './components/count/Cnt';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';
import ChangeColorProvider from './contexts/ChangeColorContext';
import CntProvider from './contexts/CntContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <Color />
      </ColorProvider>

      <hr />
      <CountProvider>
        <Count /> 
      </CountProvider>
      
      <hr />
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      
      <hr />
      <CntProvider>
        <Cnt />
      </CntProvider>
      
      <hr />
      <TodoProvider>
        <Todos />
      </TodoProvider>
      
    </div>
  );
}

export default App;

//https://ko.reactjs.org/docs/context.html
/*
오늘 context

components 폴더 -> 디자인?
contexts 폴더 -> 행동
 
작은 프로젝트는 context
큰프로젝트는 리덕스 - 까탈스러움
*/