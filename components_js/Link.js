import React , { Component } from 'react';
//react 사용시 필수
class Link extends Component{
    render()
    {
        var lists=[];
        //배열 생성
        var data=this.props.data
        //this.props 의 data 를 data 에 담음
        var i=0;
        while(i<data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    //data의 id 를 받아옴 --> dataset의 id 가 계속해서 클릭한 해당 Link 부분의 content 의 id 로 변경됨
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                        // onClick 이벤트 발생시에 그 event 객체의 target(-->a) 의 dataset의 id 를 onChangePage함수의 인자로 넘겨준다
                    }.bind(this)}
                    >{data[i].title}</a>
                    </li>);
            i=i+1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                    {/* <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li> 
                    다음과 같이 일일이 hyperlink 태그를 입력하지않고
                    while 문을 통해 App 에서 만든 data 의 개수만큼 lists 라는 배열에 태그와 제목을 push해주어
                    {lists}만 return 해주게 변경 */}
                </ul>
            </nav>
        );
    }
}
export default Link;
//Link 라는 class 를 가져다 쓸 수 있게된다