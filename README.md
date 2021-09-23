# GDSCTimeFront
GDSC에서 진행하는 에브리타임 클론 프로젝트입니다.

## 1주차 
1주차에는 클론할 서비스인 `에브리타임` 의 기능 분석과 리액트 프로젝트 구조를 짜는 수업을 들었습니다.   
컴포넌트는 아토믹 디자인으로 분리할 예정입니다.
> 아토믹 디자인 ?   
> 아토믹 디자인은 뷰를 Atoms(원자) -> Molecules(분자) -> Organisms(유기체) -> Templates -> Pages 순으로 작은 것들을 만들고, 결합해 좀 더 큰 단위의 뷰를 만들어 나가는 디자인 시스템입니다.
- 실제 이렇게 5단계로 구분해 버리면 복잡하기 때문에 components(atom) , layout(Organisms), Pages 로 분리해서 작업을 진행합니다.
프로젝트 구조는 다음과 같습니다.
```
- src
    - assets
    - components    -> 공통으로 쓰이는 작은 요소(또는 따로 분리해서 쓰고 싶은 것들 ) 
    - hooks         -> coustom hooks or uilts 폴더
    - layout        -> components가 모여서 이루어진 요소들 또는 큰 덩어리 (ex 네비게이션)
    - pages         -> 말 그대로 페이지
        - Main
            - components -> Main 페이지에서만 사용되는 특정 컴포넌트들
            - index.js   -> 페이지의 index 파일
        - Board
            - components
            - index.js
```
#### 1주차 과제 
- 에브리 타임의 메인 페이지와 메시지 목록 페이지 구현하기 ( 추석 다음 주 까지 ) 
- 과제    
  <table border="1" bordercolor="gray" align="center" >
    <thead>
      <tr>
        <td  align="center"><b>메인페이지</b></td>
        <td  align="center"><b>메시지 페이지</b></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img width="200" height="300px" alt="스크린샷 2021-09-19 오후 8 55 36" src="https://user-images.githubusercontent.com/28949213/133926639-aea679a5-179d-4ed6-91a1-5f470f047bbe.png"></td>
        <td><img width="200" height="300px" alt="스크린샷 2021-09-19 오후 8 56 11" src="https://user-images.githubusercontent.com/28949213/133926635-3b982361-64f9-4c5b-8618-557f1c8614e8.png"></td>
      </tr>
    </tbody>
  </table>
    
 - 보더가 적용된 카드는 컴포넌트로 만들어서 재사용했습니다.(size를 props로 받아서 내맘대로 쓰려구) (사실 global class를 적용시키는게 더 좋아 보이는.. **리팩토링 예정**)
 - 배너 페이지는 모바일 페이지를 클론하기에 예전에 구현해봤던 < > 버튼을 눌러서 움직이는 것이 아닌 마우스 클릭 후 좌우로 이동하는걸 감지해서 움직이게 구현했습니다 (모바일 터치처럼 작동하길 기대..)
 - `즐겨찾는 게시판 + 더보기>` 이렇게 한줄을 컴포넌트`components/ShowMore.jsx`로 만들어서 더보기가 필요한 친구는 props로 값을 `more={true}`로 전달해서 더보기를 렌더링해주고 더보기가 없는 칸은 false로 더보기 없이 렌더링해줍니다.
 - `즐겨찾는 게시판`의 한줄을 `layout/BoardBody`(네이밍 최악..) , `실시간 인기 글`의 `익명+날짜`컴포넌트를 `layout/PreviewProfile`, 그 밑에 내용과 카테고리, 좋아요 댓글 갯수를 `layout/PreviewBoard`로
`HOT 게시글` 의 내용을 `layout/PreviewOnly`로 만들었습니다.






