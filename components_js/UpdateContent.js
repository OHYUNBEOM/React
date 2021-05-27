import React , { Component } from 'react';
class UpdateContent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputFormHandler=this.inputFormHandler.bind(this);
    }
    // 변화하는 props 의 title 과 desc 를 받아와야 하기에 state 에 넣어줌
    // inputformhandler 함수를 bind(this) 된 상태로 바꿔서 코드중복 방지
    inputFormHandler(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }
    //state를 현재 타겟의 이름 : 현재 타겟의 value 로 변경해주는 함수를 만듬
    render(){
        return(
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value,e.target.desc.value);
                    }.bind(this)}
                >
                    <p>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        //value 는 title이고
                        onChange={this.inputFormHandler}
                        //title 의 내용이 변화할때마다 저장 --> onChange 사용 필수
                        ></input>
                    </p>

                    <p>
                        <textarea 
                        name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        //value 는 desc 이고
                        onChange={this.inputFormHandler}
                        //desc 의 내용이 변화할때마다 저장 --> onChange 사용 필수
                        ></textarea>
                    </p>

                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
            );
        }
    }
// create 링크 클릭시에 content 를 아에 createcontent 로 바꾸기위함
    export default UpdateContent;