import './App.css';
//App 이라는 컴포넌트의 디자인을 그 앱 안에 넣는다는 의미
import React ,{ Component } from 'react';
//React 사용시 필수 import
import Link from "./components/Link";
//components 의 Link에서 가져온다
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import Subject from "./components/Subject";
import Control from "./components/Control";
class App extends Component{
  constructor(props){
    super(props);
    //props 를 사용하기위해선 필요한 소스라고 이해하자
    this.max_content_id=3;
    this.state={
      mode:'create',
      selected_content_id:2,
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
    var _title,_desc,_article=null;
    if(this.state.mode==='welcome')
    {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
      //welcome 모드에 해당하는 _article 즉 본문내용을 불러옴
    }
    else if(this.state.mode==='read')
    {
      var i = 0;
      while(i<this.state.contents.length)
      {
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id)
        {
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i+=1;
      }
      _article=<ReadContent title={_title} desc={_desc}></ReadContent> 
      //read 모드에 해당하는 _article 즉 본문내용을 불러옴
    }else if(this.state.mode==='create')
    {
      _article=<CreateContent onSubmit={function(_title,_desc){
        // setState를 통해서 새로운 content 를 추가한다
        this.max_content_id+=1;
        //create 모드가 실행될 때 , max_content_id 를 1 추가
        // this.state.contents.push({id:this.max_content_id,title:_title,desc:_desc});
        // App.js 파일의 contents 의 마지막부분에 내가 form 에 입력한 id,title,desc를 push
        //하지만 push 를 하게되면 원본의 배열을 바꾸고 , concat 사용시 원본의 배열은 바뀌지않고
        //새로운 배열로 추가되므로 훼손이 없는 concat 을 사용할것
        var _contents = this.state.contents.concat(
          {id:this.max_content_id,title:_title,desc:_desc}
        )
        this.setState({contents:_contents});
      }.bind(this)}></CreateContent>
      //create 모드에 해당하는 _article 즉 본문내용을 불러옴
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
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}
        ></Link>


        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>

        {_article}
        {/* article 을 불러올 때 즉 html 과 같은 readmode 링크 클릭시 readcontent 를 ,
        create 와 같은 createmode 링크 클릭시에 CreateContent 로 불러오도록. content 를 분리하기위해
        _article 라는 변수를 선언하고 , 이 변수를 통해 불러옴 */}
      </div>
    ); 
  }
}



export default App;
