import React , { Component } from 'react';
class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value,e.target.desc.value);
                        // onSubmit 함수가 실행됐을때 , 인자로 그 props 의 target.title.value(title) , target.title.desc(contents) 를 가져온다
                    }.bind(this)}
                    //onSubmit 함수를 정의하게 되면 , submit 버튼을 눌렀을때 onSubmit 에 정의해둔 함수가 실행된다
                    // e.preventDefault 를 통해 onSubmit 이벤트 즉 submit 버튼을 눌렀을때 일어나는 기본적인 동작인
                    // 페이지가 바뀌는 것을 못하게 막는다
                >
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>

                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
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
    export default CreateContent;