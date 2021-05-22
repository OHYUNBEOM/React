import React , { Component } from 'react';
class Control extends Component{
    render(){
        return(
            <ul>
            <li><a href="/create" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
            {/* create 라는 a tag를 만들고 , create 링크 클릭시 발생하는 이벤트 
            즉 onclick 발생시에 발생한 부분의 props 의 onchangemode를 호출하는데
             그때의 mode 가 create라고 알려준다는 의미 */}
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
            <li><input onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)} type="button" value="delete"></input></li>
        </ul>
        );
    }
}
export default Control;