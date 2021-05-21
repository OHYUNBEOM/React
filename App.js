import './App.css';
//App 이라는 컴포넌트의 디자인을 그 앱 안에 넣는다는 의미
import React ,{ Component } from 'react';
//React 사용시 필수 import
import Link from "./components/Link";
//components 의 Link에서 가져온다
import ARTICLE from "./components/ARTICLE";
import Subject from "./components/Subject";
class App extends Component{
  constructor(props){
    super(props);
    //props 를 사용하기위해선 필요한 소스라고 이해하자
    this.state={
      mode:'read',
      selected_content_id:2,
      //초기 selected_content_id 를 2로 설정 ( 즉 css 를 의미 )
      Subject:{title:'WEB',sub:'World wide Web!'},
      welcome:{title:'Welcome',desc:'Hello React!!'},
      contents:[
        {id:1 , title:"HTML",desc:"HTML is HyperText ..."},
        {id:2 , title:"CSS",desc:"CSS is for design ..."},
        {id:3 , title:"JavaScript",desc:"JavaScript is for interactive ..."}
      ]
    }
  }
  render(){
    var _title,_desc=null;
    if(this.state.mode==='welcome')
    {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
    else if(this.state.mode==='read')
    {
      var i = 0;
      while(i<this.state.contents.length)
      {
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id)
        //data 의 id 가 내가 선택한 a태그의 id 와 같다면 
        {
          _title=data.title;
          _desc=data.desc;
          break;
          //title 과 desc 를 각각 바꿔주고 while 문 종료
        }
        i+=1;
      }
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
        <Link 
        onChangePage={function(id){//id 를 onChangePage의 인자로 주고
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
            // Link 부분에서 onChangePage 이벤트 발생시에 , mode 를 read 로 / selected_content_id 를 그 data 의 id 로(Link.js에 명시)
          });
        }.bind(this)}
        data={this.state.contents}
        ></Link>
        <ARTICLE title={_title} desc={_desc}></ARTICLE>
      </div>
    ); 
  }
}



export default App;
