
![배너](https://user-images.githubusercontent.com/90380269/181918617-1668bd04-8beb-4f60-91a0-d5e5c3d2dbb8.png)

# Bae-Chelin (배슐랭)

<br>

### “사회적 교통 약자도 편하게 식사하세요”

<br>
<br>

배슐랭은 사회적 교통 약자가 보다 쉽게 이용할 수 있는 배리어 프리 식당이나 카페 등 가게 정보를 알려주고 사용자 위치 맞춤 추천 서비스를 제공합니다.

사회적 교통 약자분들 위한 음식점 정보와 유저들의 생생한 방문 경험이 담긴 리뷰들로 편하게 방문해보세요! 

<br>

배슐랭이 사회적 교통약자분들이 편하게 살아갈 수 있도록 한 걸음 나아가겠습니다.

<br>
<br>

👩‍🦼 [배슐랭 바로가기](https://bae-chelin.com/)

<br>

![Line 1](https://user-images.githubusercontent.com/90380269/181489532-4bbb5041-8de1-4ac9-89b2-9400e577ddd2.png)

<br>

# Background

![background](https://user-images.githubusercontent.com/90380269/181490264-a9c64413-8c59-4ad7-863f-2e423e705858.png)

<br>


<b>배리어 프리 (Barrier-free)</b>는 사회적 약자가 생활하기에 불편함을 주는 물리전, 제도적 장벽을 제거하자는 운동입니다.

생활공간에서 장애인과 비장애인 간의 장벽을 없애자는 움직임이 증가하고 있지만 아직도 **사회적 교통약자**는 **행복을 추구할 기본적인 권리**를 보장받지 못하고 있습니다.

<br>
<br>

**배슐랭**에서는 **배리어 프리 가게들을 알려주고, 위치 기반 맛집 정보 서비스를 제공**해 사회적 교통약자분들의 보다 편리한 가게 이용을 가능하게 합니다.


<br>

# Features

### 🏘 내 주변에 있는 배리어 프리 가게
    
- 사용자의 **현재 위치**를 기반으로 주위의 배리어 프리 가게를 한눈에 확인할 수 있습니다.
    
<br>

### 🤔 다른 사람들은 어느 가게를 많이 갔을까?
    
- **별점 순, 북마크 순**으로 인기 가게들을 확인할 수 있습니다.
    
- 다른 사람들의 **실시간 후기**를 확인할 수 있습니다.
    
<br>    

### ☑️ 나한테 필요한 배리어 프리 시설은?
    
- 내가 원하는 **배리어 프리 시설별**(휠체어 경사로, 엘레베이터, 전용 화장실, 전용 주차장, 출입구 단차)로 가게들을 확인할 수 있습니다.
    
<br>    

### 🗺 가게들을 지도로 한눈에 확인
    
- 가게 카드를 클릭하면 상세 페이지에서 위치를 **지도**로 한 눈에 확인할 수 있습니다.
    
- 사용자의 **현재 위치**를 기반으로 주위의 배리어 프리 가게를 **지도**로 한 눈에 확인할 수 있습니다.
    
<br>    

### 🔖 가고 싶은 가게를 북마크
    
- 가고 싶거나 저장해두고 싶은 가게를 **북마크** 하고, **폴더별**로 확인할 수 있습니다.
    
<br>    

### 📄 내 경험을 공유하기
    
- 방문 후기를 작성해서 다른 사용자들에게 **별점과 리뷰를 공유**할 수 있습니다.
    
<br>

### 🔍 찾고 싶은 가게를 검색하기
    
- **지역과 키워드**로 찾고 싶은 가게를 **검색**할 수 있습니다.

    
<br>
<br>

![Line 1](https://user-images.githubusercontent.com/90380269/181489532-4bbb5041-8de1-4ac9-89b2-9400e577ddd2.png)

# Project

[시연영상](https://youtu.be/Rj_ltQcIaWg)

[발표영상](https://youtu.be/_0pyS0Lx0NU)

[팀 노션](https://planet-punishment-427.notion.site/99-7-4-a179c828bbbf47aea74d2bea85f47372)    

<br>

## Project Timeline

`2022-06-24` ~  `2022-08-01` (6주)

<br>

## Tech Stack

### Language

- Typescript

### Deploy

- 

### Tech

- 

### Others

- Kakao Maps API


<br>

## Project Design

### Service Architecture

<img width="2228" alt="MPNP Architecture" src="https://user-images.githubusercontent.com/90380269/182749337-887ec52f-c1c5-4656-a1be-8b90f5041dba.png">

<br>

### ERD

![배슐랭_ERD](https://user-images.githubusercontent.com/90380269/181498144-bb8968c8-f6be-44a6-8fca-6a9dba3bd8bf.png)


### API

[API 설계](https://planet-punishment-427.notion.site/API-829b965bd9ed4347ab51701fcf1d3896)


<br>

## Development

### Core Tech
| 사용 기술 | 기술적 의사 결정 |
| --- | --- |
| - React-Query
- Recoil | 사용 목적
가볍고 효율적인 데이터 캐싱과 상태관리

- 무겁고 많은 데이터들을 잦은 API요청으로 계속해서 필터링하고 가져오는 배슐랭 서비스 특성 상 단순 비동기 통신으로는 클라이언트 쪽의 많은 부담이 예상되었음. 
이에 데이터 캐싱을 쉽고 효율적으로 구현할 수 있는 react-query의 장점을 적극적으로 활용하고 API요청 횟수를 줄임

- 조건부 렌더링을 함으로써 다양한 렌더링 이슈를 개선할 수 있었음.

- 아울러 리액트쿼리의 캐싱 된 서버 데이터를 적극적으로 활용 한다면 
client state 의 무게가 훨씬 가벼워짐. 
이에 Redux와 같은 무거운 보일러 플레이트 툴 보단 프로젝트에 가볍고 빠르게 적용할 수 있는 recoil을 이용해 서비스의 핵심 로직에만 집중할 수 있도록 함. |
| - Typescript | - 데이터의 타입을 미리 지정해 예상하지 못한 오류들을 줄이고 디버깅에 용이함
- 어떤 데이터인지 리터럴 타입을 명시적으로 작성한다면 추론을 쉬워지기에 팀 내의 협업과 소통이 더욱 수월해지는 장점이 있음 |
| - Kakao map api | 사용 목적
- 사용자 주변의 업장 정보를 데이터 시각화를 통해 효율적으로 보여기 위함
- 지도의 위 경도 좌표를 세부적으로 제공 받아 서버의 데이터 검색에 용이함

선택지
네이버, 구글 등 기타 기업의 맵API

선택 이유
- 타 기업의 API보다 공식 문서와 레퍼런스가 잘 정리되어 있어 빠르게 익힐 수 있음.
- 사용자 액션에 따른 변화를 세분화된 이벤트 제공해줌. 이를 잘 이용한면 과도한 쿼리 요청이나 리렌더링의 문제를 줄여 성능 개선에 효과적일 것으로 판단함. 
- 제공되고 있는 클러스터나 로드뷰, 길찾기 등을 배슐랭 데이터에 맞게 제공한다면UX적인 측면으로 매우 뛰어난 개선이 이루어 질 것으로 예상되어 선택함. → 그러나 MVP단계에서는 미구현, 이후 개발 예정 |
| - Atomic design pattern | 사용 목적
재 사용될 컴포넌트들을 분리하여 서비스 개발의 생산성을 높이기 위함

선택지
presenter-container

선택이유
- 정보성 글이 정리되어 있는 배슐랭 서비스 특성 상 재 사용 될 UI들의 비중이 높기 때문에 초반의 패턴만 잘 확립된다면 이후 빠르고 유연한 대처로 생산성을 높일 수 있을 것으로 판단되었음

- 초반에는 예열 단계로 느린 개발 속도를 보여주었지만 중후반 부터는 반복되는 코드의 양이 줄고 뷰와 비즈니스 로직의 분리가 쉬워져 기능 개발에만 빠르게 집중할 수 있게 됨

선택지 |
| - styled component, storybook | 뷰와 비즈니스 로직을 분리하는 아토믹 디자인 패턴과 가장 잘 어울리는 스타일 라이브러리. props를 넘겨서 css에 변화를 주는 형태로 atomic design pattern의 장점을 극대화 할 수 있음. 깔끔한 코드 |
<details>
<summary>수정해주세요!</summary>
<div markdown="1">

<ul>
&nbsp; &nbsp; &nbsp; &nbsp;<li>수정해주세요!</li>
&nbsp; &nbsp; &nbsp; &nbsp;<li>수정해주세요!</li>
</ul>

</div>
</details>

<br>

<details>
<summary>수정해주세요!</summary>
<div markdown="1">

<ul>
&nbsp; &nbsp; &nbsp; &nbsp;<li>수정해주세요!</li>
&nbsp; &nbsp; &nbsp; &nbsp;<li>수정해주세요!</li>
</ul>

</div>
</details>

<br>

### Trouble Shooting

트러블 슈팅 작성해주세요!


<br>

![Line 1](https://user-images.githubusercontent.com/90380269/181489532-4bbb5041-8de1-4ac9-89b2-9400e577ddd2.png)

# Team MPNP - Frontend

<br>

팀 멍판냥판 프론트엔드 개발진들🧡


| [조예인🔰](https://github.com/ohyein00) | [장원배](https://github.com/calvin9150) |                                                                                                 
| :---------------------------------: | :----------------------------------: |
| <img src="https://user-images.githubusercontent.com/90380269/181731418-725c924f-b1c0-42cf-9a98-e3aa40e73e6c.jpeg" alt="조예인" width="200px"/> |  <img src="https://user-images.githubusercontent.com/90380269/181731474-b263b4b7-9503-4557-81a9-81bbfd3b20c6.jpeg" alt="장원배" width="200px"/> |

