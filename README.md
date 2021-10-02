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


## 2주차 
###  스터디 시간에 배운 내용을 제 임의대로 리팩토링 시간을 많이 가졌습니다.
- 스터디 시간에 공통 컴포넌트 `components/button/MainButton`,`components/input/MainInput` 으로 커스텀 컴포넌트를 만들어 재사용을 했습니다(회원가입 로그인 페이지)
    - input태그에서 엔터 키를 눌렀을때, 회원가입 및 로그인 버튼이 눌리게 하기 위해서 `MainInput` 태그 안에 `onKeyPress` 이벤트를 추가 했습니다.
    - 사용 방법은 input 태그 안에 `onKeyPress` 함수를 만들어 넘겨줍니다
```js
    const onSignUp = () => {
          //회원가입 버튼.
    }
    const onSignUpKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSignUp();
        }
    };
    ...
    return (
        <MainInput 
            ...
            onKeyPress={onSignUpKeyPress}
        />
        <MainButton text="회원가입"/>
    )
```    

    - 이 onKeyPress 함수는 회원가입과 로그인의 마지막 Input 태그에 적용했습니다.
- `useState`를 활용한 input태그의 값을 활용하는 방법을 배웠습니다.
    - `useInput`이라는 커스텀 hooks을 만들어서 재사용 했습니다. 꼭 사용하세요!
    - 기존의 input의 value값을 관리하는 onChange함수는 직접 만들어주어야하며 코드 수를 늘리는 범인입니다.
    - `hooks/useInput.js`
```js
import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
};
```  
  
    - 리턴의 첫 번째 인자로 value 값을 , 두번째는 onChange 함수를, 세번째 인자로 혹시 사용해야 하는 setState함수를 리턴해줍니다.    
- 사용 방법 
```js
import useInput from '../../hooks/useInput';
...
const SingUpPage = () => {
    const [id, onChangeId] = useInput(null);
    const [password, , setPassword] = useInput(null); // password의 onChange함수는 커스텀 해주기 위해서 빈 값으로 둡니다.
    ...
    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value); 
            setLastPasswordCheck(false);
            if (!checkPassword(e.target.value)) {
                setErrorPassword(true);
            } else {
                setErrorPassword(false);
            }

            // 이 부분은 패스워드 값을 입력해도 패스워드 확인 값이랑 같은지 검사.
            if (e.target.value === passwordCheck) {
                setErrorPasswordCheck(false);
            } else {
                setErrorPasswordCheck(true);
            }
        },
        [password, passwordCheck],
    );
    
    return (
        <MainInput
            value={id || ''}
            type="text"
            onChange={onChangeId} // 바로 사용
            placeholder="아이디를 입력해주세요"
        />
        ...
        <MainInput
            value={password || ''}
            type="password"
            onChange={onChangePassword} //직접 커스텀 한 onChange 함수를 넘겨줌!
            placeholder="비밀번호를 입력해주세요" 
        />
```
---
- 패스워드 검사 (정규식 활용)
정규식 검사를 위해 utils 함수를 만들어서 사용 했습니다.프로젝트 폴더를 보면 hooks랑 utils함수를 분리를 했는데 ... hooks파일은 기존 Hooks를 사용하는 커스텀 파일들을 , 그 외의 유틸 함수들은 utils함수에서 관리할 예정입니다.
- `utils/RegExpCheck.js`
```js
export const checkPassword = function (str) {
    const regExp =
        /^(?=.*[!@#$%^&*()_+|<>?:{}])(?=.*[a-zA-Z])(?=.*[0-9]).{5,15}/i;
    return regExp.test(str)
};
```    
- 5~15자의 문자를 3가지 조건에 의해서 검사합니다. / / 리터럴 표현으로 정규식 표현을 묶고, ^ -> 입력 문자의 시작입니다. 
- . -> 임의의 문자, * -> 0번이상 반복`({0,}과 동일한 표현)` () 하나의 하위 패턴으로 묶음, ?= > 전방 탐색 일치하는 패턴을 찾고 그값을 제외하지 않고 리턴,
-  `[!@#$%^&*()_+|<>?:{}]` -> 특수문자 검사, 특수문자는 영어나 숫자처럼 범위처럼 묶을 수 없고, 직접 입력해줘야 한다
-  `.{5,15}`수량자, 문자가 5~15개 범위로 제한,
-  `/i` 플래그,-> 대소문자 구분하지 않고 검색
---
### Redux-Pender 적용.
- 스터디 정규 진도에는 redux를 적용하지 않는다고 합니다만 redux 는 전역적으로 상태관리를 위한 아주 유용한 방법입니다.
- `redux-Pender`가 내부적으로 비동기 처리를 해서 `dispatch` 함수를 비동기로 사용할 수 있게 됐습니다. 또한 기존 `redux-saga` 코드와 다르게 코드 수가 절반 이하로 감소했습니다.
- 서버에 세션을 검사하는 API를 추가해, 로그인하지않은 유저는 `/login` 페이지로 이동하게 하기 위해 App.jsx에 세션 검사 API를 적용하고, login페이지로 push 하는 코드를 적용했습니다.
- App.jsx에서 `useHistory` 함수를 사용하기 위해 `BrowerRouter`를 App.jsx -> index.js로 옮겨서 감싸줬습니다.



