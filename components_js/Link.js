import React , { Component } from 'react';
//react 사용시 필수
class Link extends Component{
    render()
    {
        return(
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}
export default Link;
//Link 라는 class 를 가져다 쓸 수 있게된다