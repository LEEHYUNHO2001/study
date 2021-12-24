# Wine

[샘플 API](https://sampleapis.com/) 에서 [Wine API](https://sampleapis.com/api-list/wines)와 [Beer API](https://sampleapis.com/api-list/beers)를 사용하고 있습니다. 맥주 데이터와 와인 데이터를 받아와 읽어주는 기능을 구현했습니다.

API를 이용해 데이터를 받아오고 프로젝트에서 유지보수 하기 쉽도록 추상화하는데 집중한 프로젝트 입니다.

- 서비스 링크 : https://wine-theta.vercel.app/
- GitHub : https://github.com/LEEHYUNHO2001/wine
- Velog : https://velog.io/@leehyunho2001/Wine

<br>

## 시작하기

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

<br>

## 스택

- Front-End
  - React Hooks
  - Next.js
  - TypeScript
  - Styled-components
- Deploy
  - Vercel

<br>

## src 디렉터리 구조

```
  src
  ├─ components
  │   ├─ layout
  │   │   ├─ index.ts
  │   │   ├─ Layout.tsx
  │   │   ├─ Navigation.tsx
  │   │
  │   ├─ BeerCard.tsx
  │   ├─ BeerContainer.tsx
  │   ├─ Error.tsx
  │   ├─ index.tsx
  │   ├─ IndexList.tsx
  │   ├─ Loading.tsx
  │   ├─ WineCard.tsx
  │   ├─ WineContainer.tsx
  │
  ├─ constants
  │   ├─ index.ts
  │
  ├─ hooks
  │   ├─ useBeerData.tsx
  │   ├─ useWineData.tsx
  │
  ├─ pages
  │   ├─ api
  │   │   ├─ hello.ts
  │   │
  │   ├─ beers
  │   │   ├─ ale.tsx
  │   │   ├─ index.tsx
  │   │   ├─ stouts.tsx
  │   │
  │   ├─ wines
  │   │   ├─ dessert.tsx
  │   │   ├─ index.tsx
  │   │   ├─ port.tsx
  │   │   ├─ reds.tsx
  │   │   ├─ rose.tsx
  │   │   ├─ sparkling.tsx
  │   │   ├─ whites.tsx
  │   │
  │   ├─ _app.tsx
  │   └─ index.tsx
  │
  ├─ types
  │   ├─ Beer.ts
  │   ├─ Wine.ts
  │   ├─ Route.ts
  │   ├─ SUBS.ts
  │
  └─  utils
        ├─ fetcher.ts

  index.html
```

- components : 컴포넌트를 모아놓은 디렉터리
- constants : 엔드포인트 및 공통적으로 사용되는 상수를 변수로 담기 위한 디렉터리
- hooks : 커스텀 훅 디렉터리
- pages : 폴더나 파일이 Route 역할을 하게 될 디렉터리
- types : 각종 타입 인터페이스를 가진 디렉터리
- utils : 모든 페이지에 적용할 함수 등을 가진 디렉터리

<br>

## 개발일정

- 기간 : 2021.12.19(목) ~ 2021.12.24(일)
  - 초기 환경 셋팅
  - 프로젝트 추상화
  - Wines API, Beers API 데이터 읽기
  - styled-components
