import React , { Component } from 'react';
class Subject extends Component{
    render(){
        return(
            <header>
            {/* component 는 반드시 하나의 최상위 태그만 써야함 (ex. header) */}
            <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
                //Subject 라는 Component 에서 onChangePage 이벤트가 발생하게되면 여기서 호출한다.
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
            {/* 다음과 같이 수정한다면 --> 지정해놓은 title 을 다음과 같이 위치시키겠다
          --> 지정해놓은 sub 를 다음과 같이 위치시키겠다 라는 의미가 된다 */}
        </header>
        );
    }
}
export default Subject;