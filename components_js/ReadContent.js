import React , { Component } from 'react';
class ReadContent extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
            );
        }
    }
//html / css / javascript 링크 클릭시에 content(본문내용) 바꾸기 위함
    export default ReadContent;