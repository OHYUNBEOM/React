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
  constructor(props){
    super(props);
    //props 를 사용하기위해선 필요한 소스라고 이해하자
    this.state={
      mode:'read',
      Subject:{title:'WEB',sub:'World wide Web!'},
      welcome:{title:'Welcome',desc:'Hello React!!'},
      contents:[
        {id:1 , title:"HTML",desc:"HTML is HyperText ..."},
        {id:2 , title:"CSS",desc:"CSS is for design ..."},
        {id:3 , title:"JavaScript",desc:"JavaScript is for interactive ..."}
      ]
      //contents 에 여러가지 항목들이 들어가기에 [] 로 묶고 정리
      //다음과 같이 부모인 App Component 에서는 state 의 내부정보를 저장했고 
      //자식에게 전달할때는 props 를 통해 전달
    }
    //title 과 sub 를 state 화 시킴
    //다음과 같이 state 화 시키면 , App이 내부적으로 사용할 상태는 state 라는 형태를 통해 사용
    //만들어진 state 를 하위 component 인 subject(props) 로 전달함
    //외부에서 알 필요가 없는 정보를 철저하게 은닉하는 역할
  }
  //react 에서는 props 나 state 값이 바뀌면 해당되는 component 의 render 함수가 
  //호출되도록 약속되어있다. 즉 props 나 state 가 바뀌면 화면은 다시 그려진다
  render(){
    var _title,_desc=null;
    if(this.state.mode==='welcome')
    {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
    else if(this.state.mode==='read')
    {
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;

    }
    return(
      <div classname="App">
        <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        >
        </Subject>
        {/* Subject component 내에 onChangePage 라는 이벤트를 생성하고 , 
        function() 을 통해 함수화 시켜 this 의 state의 mode 를 welcome 으로 변경시킨다는 말
        즉 이벤트를 사용자가 직접 생성 */}
        {/* state화 시킨 subject 의 title 과 sub 정보를 불러오겠다 */}
        <Link data={this.state.contents}></Link>
        {/* link 의 data 로 this.state 의 contents 를 주입시킴 */}
        <ARTICLE title={_title} desc={_desc}></ARTICLE>
        {/* Article 의 title 과 desc 를 각각 _title , _desc 로 받을때 , 
        위 render 함수내부의 ifa문을 통해 state 의 mode 가 welcome 일때는 welcome 으로
        read 일때는 contents배열의 0번째로 출력 */}
      </div>
    ); 
  }
}
// 여러 태그들을 실제로 작성하여 html 파일에 적었던것과는 달리,
// react를 사용하게되면 Component 를 상속받아 해당 내용을 작성하고
// 이후에 실제로 Component 이름만 사용하여 나타낼 수 있음


export default App;
