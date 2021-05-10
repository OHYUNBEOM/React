import React , { Component } from 'react';
class Subject extends Component{
    render(){
        return(
            <header>
            {/* component 는 반드시 하나의 최상위 태그만 써야함 (ex. header) */}
            <h1>{this.props.title}</h1>
            {this.props.sub}
            {/* 다음과 같이 수정한다면 --> 지정해놓은 title 을 다음과 같이 위치시키겠다
          --> 지정해놓은 sub 를 다음과 같이 위치시키겠다 라는 의미가 된다 */}
        </header>
        );
    }
}
export default Subject;