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
import UpdateContent from "./components/UpdateContent";
class App extends Component{
  constructor(props){
    super(props);
    //props 를 사용하기위해선 필요한 소스라고 이해하자
    this.max_content_id=3;
    this.state={
      mode:'update',
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
  getReadContent()
  {
    var i = 0;
      while(i<this.state.contents.length)
      {
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id)
        {
          return data;
          break;
        }
        i+=1;
      }
  }
  //기존에 this.state.mode==='read'일 때 하는 작업을 getReadContent 라는 함수화 시켜줌
  getContent()
  //getContent 함수에 각 모드에 해당하는 title 과 desc 를 불러오는 모든것들을 입력해두고
  {
    var _title,_desc,_article=null;
    if(this.state.mode==='welcome')
    {
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode==='read')
    {
      var _content=this.getReadContent();
      //함수화 되어있는 getReadContent 를 호출하기만 하여 _content 라는 변수에 저장(title,desc가 저장)
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent> 
    }else if(this.state.mode==='create')
    {
      _article=<CreateContent onSubmit={function(_title,_desc){
        this.max_content_id+=1;
        var _contents=Array.from(this.state.contents);
        _contents.push({id:this.max_content_id,title:_title,desc:_desc});
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
        //_contents 라는 변수를 만들고 this.state.contents 를 복사해서 _contents에게 주고,
        //_contents에 id,title,desc 를 push 해주고
        //setState를 통해 contents를 _contents 로 변경해주면 concat 과 같은효과를 보인다.

        //추가로 Create 가 끝난 이후에 mode 를 read 로 바꾸고,
        //selected_content_id 를 현재의 max_content_id 로 바꿔주어,
        //create와 동시에 화면에 띄워질수있도록 변경
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode==='update')
    {
      _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={
        function(_id,_title,_desc){
          var _contents=Array.from(this.state.contents);
          //this.state.contents를 복사한 새로운 배열을 _content 에 담는다 Array.from : js 의 문법
          //원본을 바꾸지 않는 테크닉
          var i=0;
          while(i<_contents.length)
          {
            if(_contents[i].id===_id)//content[i]의 id 값과 우리가 입력받은 _id 값이 같다면
            {
              _contents[i]={id:_id,title:_title,desc:_desc};
              break;
            }
            i+=1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
            //Update 가 이루어짐과 동시에 mode 를 read로 바꾸어
            //Update 시킨 내용이 화면에 띄워지게
          });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render(){
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

        {this.getContent()}
        {/* render 내부에서 _article 을 호출하는 부분에 this.getContent()를 통해 작성한 함수를 불러옴으로
        코드를 매욱 가독성 좋고 간결하게 변경 */}
      </div>
    ); 
  }
}



export default App;
