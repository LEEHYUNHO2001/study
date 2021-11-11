# 8가지 미니게임

- [Development environment](#development-environment)
- [Function](#function)
- [React Game](#react-game)
- [More..](#more)

</br>
</br>

## Development environment

- Visual Stdio Code
- Node.js
- HTML / CSS
- React
- JavaScript(ES6)
- Babel
- Webpack

</br>
</br>

<img src="https://user-images.githubusercontent.com/78518132/141230678-668f17bc-35ec-4a70-9813-945434b88272.gif">

## Function

### React Life-Cycle vs useEffect

</br>

### React Life-Cycle

**componentDidMount** : 컴포넌트가 첫 랜더링된 후 실행됨. 여기에 비동기 요청을 많이한다.

**componentWillUnMount** : 컴포넌트가 제거되기 직전 실행, 부모가 없앴을 경우. 비동기 요청 정리.

**conponentDidUpdate** : 리랜더링 후 실행

</br>

constructor → render → ref → componentDidMount

→ (setState/props 바뀔때 → shouldComponentUpdate(true) → render → conponentDidUpdate)

→ 부모가 나를 없앴을 경우 componentWillUnMount → 소멸

</br>
</br>
</br>
</br>

### useEffect

```react
    useEffect(() => { //componentDidMount 역할(1대1 대응은 아님)
        interval.current = setInterval(changeHand, 50);
        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]); // -> 2번째 인자 componentDidUpdate 역할.
```

배열에 넣은 값들이 바뀔 때 useEffect가 실행됨

useEffect를 여러번 사용할 수 있다.

class의 경우 componentDidMount나 componentDidUpdate는 모든 state를 조건문으로 분기처리한다.

</br>
</br>
</br>
</br>

### useReducer

**useReducer(비동기임)을 사용하면 redux(동기임)와 비슷한 효과를 볼 수 있다. → useState를 줄임**

1. const [a, setA] 형식으로 선언하던 것을 initialState 과 같이 선언함
2. 이벤트가 발생할 곳에 액션을 만들어서 디스패치 해줌

   → dispatch({type: 'SET_SINNER', winner: 'O'})

3. state를 어떻게 바꿀지는 reducer에서 switch문으로 setState를 진행하면됨 → state를 직접 바꾸지 않고 ...state으로 얕은복사한 다음 바뀌는 부분만 winner: action.winner으로 바꾸어줌

tip) onClickTable는 자식 컴포넌트에서 사용할 것이니 useCallback(함수기억)으로 감싸준것.

export 클릭같은 메세지를 모듈로 감싸줌 → 자식컴포넌트에서 사용할것이니까

case CLICK_CELL: 부분에서 tableData를 선언하고 ...state.tableData로 얕은복사해줌

tableData[action.row] = [...tableData[action.row]]; 도 객체를 얕은복사 한것.

→ state를 직접 변경하지 않으려고 사용하는것(**불변성**을 지킴)

→ 이러한 과정은 immer 라이브러리로 가독성을 해결할 수 있음

</br>
</br>
</br>
</br>

### others

**useRef** : 일반 값을 기억

**useMemo** : 복잡한 함수 결과값을 기억

**useCallback** : 함수 자체를 기억 → 예를들어 Lotto 함수 전체가 실행되는데, 그 안에 특정 함수가 생성되는데 너무 오래걸리면 useCallback을 써보자. 그렇다면 해당 메소드는 기억되어 새로 생성하지 않아 기억하고 있던값으로 해결한다.

useMemo와 useCallback도 useEffect 처럼 2번째 인자값에 어떤값이 변하면 다시 기억할지 넣어주면된다. → onClickBtn의 경우 winNumbers가 바뀌면 기억하도록 해야하는게 좋을것.

자식함수에 함수를 넘겨주고싶을때는 useCallback 필수!!

**contextAPI**

사용하면 컴포넌트에 물려줄때 편하다. context를 생성 후 provider로 감싸주면 된다.

TableContext가 리랜더링 될때마다 value에 넣어준 값도 새로생기기 때문에 최적화가 어렵다.

→ useMemo로 캐싱을 해주자.

</br>
</br>
</br>
</br>

### Tip

```react
//클로저 에러 처리
this.interval = setInterval(() => {
	const {imgCoord} = this.state;
}
```

- 비동기 함수가 비동기 함수 바깥의 값을 참조하면 클로저 문제가 발생할 수 있다.
- setInterver, timeout 등의 경우, componentDidMount에 사용해야 메모리 누수가 발생하지 않는다.

</br>
</br>

## React Game

<img width="300" height="300" alt="home" src="https://user-images.githubusercontent.com/78518132/127663600-802bda05-20d0-41be-847e-ac0d8316d3a8.png"> <img width="300" height="300" alt="gugudan" src="https://user-images.githubusercontent.com/78518132/127664131-36e1ec03-defb-498c-a643-404ad7cdf68b.png"> <img width="300" height="300" alt="word" src="https://user-images.githubusercontent.com/78518132/127666778-c5711400-0fc8-4f8b-81c0-f13a67d26fd9.png">

</br>
</br>

<img width="300" height="300" alt="numberbaseball" src="https://user-images.githubusercontent.com/78518132/127664318-f149afa4-e3c8-4e4f-aab2-e7f2b8f16370.png"> <img width="300" height="300" alt="res" src="https://user-images.githubusercontent.com/78518132/127665235-11e91900-2a4d-4504-9a25-df030721900f.png"> <img width="300" height="300" alt="rsp" src="https://user-images.githubusercontent.com/78518132/127665454-54bdd2a6-1554-4c6d-9770-857c55fbad28.png">

</br>
</br>

<img width="300" height="300" alt="lotto" src="https://user-images.githubusercontent.com/78518132/127665555-f7b8df26-acf4-4582-9e79-d7f6fab5abac.png"> <img width="300" height="300" alt="ttt" src="https://user-images.githubusercontent.com/78518132/127666158-292eefb4-3332-460c-808a-baae1b9bdb31.png"> <img width="374" height="300" alt="mine" src="https://user-images.githubusercontent.com/78518132/127666443-f19897c0-e9a4-4855-8e3c-02b83985f161.png">

</br>
</br>

## More..

### import VS require

const React = require('react'); 를 import React form react; 으로 바꿀 수 있다.

module.exports = GuGuDan; 를 export default GuGuDan; 으로 바꿈

→ default는 한 파일에서 한번만 사용 가능 → 불러올 때 import GuGuDan

(엄밀하게 말하면 module.exports와 export default는 다름.. )

export const Component = '123123'; 은 불러올 때 import {Component} ;

node는 require만 사용가능. import 사용하고싶으면 babel 설치

</br>
</br>

### props

props를 보면 부모와 자식관계를 먼저 생각해야한다.

할아버지, 고조할아버지가 자식에게 값 주는거 등을 생각하면 redux, contextAPI 등을 사용

</br>
</br>

### React push

리엑트는 push를하면 감지를 못한다.

예전것과 지금것의 차이를 감지 못하기 때문에 render가 일어나지 않음

const arr2 = [...arr, 2] 로 써야함 → arr2에 기존 arr 복사하고 2 넣음

→ arr과 arr2는 다른것이기 때문에 render 가능

</br>
</br>

### devTool

devTool로 보면서 랜더링 될 필요 없는곳이 계속 랜더링 되고있지는 않은지 확인하며 최적화하자.

</br>
</br>

### React if

```react
{this.state.result.length === 0 ? null
 : <div>평균 시간 : {this.state.result.reduce((a, c) => a + c)
/ this.state.result.length}ms</div>}
```

리액트 render 에서 if문 대신 삼항연산자 사용하자.

</br>
</br>

### Hooks tip

조건문안에, 반복문 안에 Hooks를 넣지 말자.

ex) if(조건) {const[bonus, setBonus] = useState(null);} → 금지

useEffect 안에 useState 넣으면 안된다. (setResult같은거 말고 useState())

</br>
</br>

</br>
[참고](https://www.inflearn.com/course/web-game-react)
