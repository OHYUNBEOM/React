import './App.css';
//App 이라는 컴포넌트의 디자인을 그 앱 안에 넣는다는 의미
import React ,{ Component } from 'react';
//React 사용시 필수 import
import Link from "./components/Link";
//components 의 Link에서 가져온다
import ARTICLE from "./components/ARTICLE";
import Subject from "./components/Subject";


//src 폴더에 components 폴더 생성 후 , 사용할 Component 들을 파일화 해서 App.js 파일에 삽입

// class Subject extends Component{
//   render(){
//     return(
//       <header>
//         {/* component 는 반드시 하나의 최상위 태그만 써야함 (ex. header) */}
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//         {/* 다음과 같이 수정한다면 --> 지정해놓은 title 을 다음과 같이 위치시키겠다
//         --> 지정해놓은 sub 를 다음과 같이 위치시키겠다 라는 의미가 된다 */}
//       </header>
//     );
//   }
// }

// class Link extends Component{
//   render()
//   {
//       return(
//           <nav>
//               <ul>
//                   <li><a href="1.html">HTML</a></li>
//                   <li><a href="2.html">CSS</a></li>
//                   <li><a href="3.html">JavaScript</a></li>
//               </ul>
//           </nav>
//       );
//   }
// }

// class ARTICLE extends Component{
//   render(){
//     return(
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>

//     );
//   }
// }

class App extends Component{
  render(){
    return(
      <div classname="App">
        <Subject title="WEB" sub="REACT"></Subject>
        <Link></Link>
        <ARTICLE title="HTML" desc="HTML is HyperText Markup Language"></ARTICLE>
      </div>
    ); 
  }
}
// 여러 태그들을 실제로 작성하여 html 파일에 적었던것과는 달리,
// react를 사용하게되면 Component 를 상속받아 해당 내용을 작성하고
// 이후에 실제로 Component 이름만 사용하여 나타낼 수 있음


export default App;
