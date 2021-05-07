import './App.css';
//App 이라는 컴포넌트의 디자인을 그 앱 안에 넣는다는 의미
import { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        {/* component 는 반드시 하나의 최상위 태그만 써야함 (ex. header) */}
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class LITAG extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class ARTICLE extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language
      </article>

    );
  }
}

class App extends Component{
  render(){
    return(
      <div classname="App">
        <Subject></Subject>
        <LITAG></LITAG>
        <ARTICLE></ARTICLE>
      </div>
    ); 
  }
}
// 여러 태그들을 실제로 작성하여 html 파일에 적었던것과는 달리,
// react를 사용하게되면 Component 를 상속받아 해당 내용을 작성하고
// 이후에 실제로 Component 이름만 사용하여 나타낼 수 있음


export default App;
