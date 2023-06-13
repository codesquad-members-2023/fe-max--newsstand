import { newsStandState } from "../utils/types";

export const mockState: newsStandState = {
  date: new Date(),
  leftRoller: {
    headlineList: [
      {
        press: "연합뉴스",
        title: "[1보] 'KH 배상윤 도피 조력' 임직원 4명 구속영장",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959008",
      },
      {
        press: "연합뉴스",
        title: "로또 1등 당첨금까지 은닉…국세청, 고액체납자 557명 집중추적",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958976",
      },
      {
        press: "연합뉴스",
        title: "누리호, 하늘 향해 섰다…발사 하루전 준비 순조로워",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958370",
      },
      {
        press: "연합뉴스",
        title: "'역사는 더디지만 진보'…노 전 대통령 서거 14주기 추도식 엄수",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959129",
      },
      {
        press: "연합뉴스",
        title: "국가자격시험서 어이없는 사고…채점 안한 609명 답안지 파쇄",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958483",
      },
    ],
    headline: [
      {
        press: "연합뉴스",
        title: "[1보] 'KH 배상윤 도피 조력' 임직원 4명 구속영장",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959008",
      },
      {
        press: "연합뉴스",
        title: "로또 1등 당첨금까지 은닉…국세청, 고액체납자 557명 집중추적",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958976",
      },
    ],
    index: 0,
    isMove: true,
  },
  rightRoller: {
    headlineList: [
      {
        press: "연합뉴스",
        title: "극단 선택 시도한 신창원 의식 회복",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959085",
      },
      {
        press: "연합뉴스",
        title: "'기내서 실탄 발견' 인천공항공사·대한항공에 과태료 부과",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959092",
      },
      {
        press: "연합뉴스",
        title: "부동산 중개수수료 할인 막았나…공정위, 중개사협회 조사 착수",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958961",
      },
      {
        press: "연합뉴스",
        title: "검찰, 억대 불법정치자금 수수 혐의 하영제 국회의원 기소",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013958958",
      },
      {
        press: "연합뉴스",
        title: "김성태와 공모해 대북송금, 안부수 아태협 회장 징역 3년6월",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959011",
      },
    ],
    headline: [
      {
        press: "연합뉴스",
        title: "극단 선택 시도한 신창원 의식 회복",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959085",
      },
      {
        press: "연합뉴스",
        title: "'기내서 실탄 발견' 인천공항공사·대한항공에 과태료 부과",
        link: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0013959092",
      },
    ],
    index: 0,
    isMove: true,
  },
  rollerTick: 0,
  currentContent: "grid",
  currentType: "all",
  currentPage: 0,
  subscribedPress: [
    "조선비즈",
    "스포츠동아",
    "지디넷코리아",
    "연합뉴스TV",
    "소년한국일보",
  ],
  grid: {
    gridAllList: [
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
        alt: "JTBC",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
        alt: "톱데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
        alt: "경기신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
        alt: "이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
        alt: "국제신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
        alt: "오마이뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
        alt: "디지털타임스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
        alt: "디지털데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
        alt: "미디어제주",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
        alt: "조선일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
        alt: "YONHAPNEWS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
        alt: "스포츠서울",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
        alt: "블로터",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
        alt: "정신의학신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
        alt: "디지털투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
        alt: "중앙SUNDAY",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
        alt: "한국경제TV",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
        alt: "머니에스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
        alt: "스포탈코리아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
        alt: "스포츠경향",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
        alt: "인민망",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
        alt: "이코노미조선",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
        alt: "아주경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
        alt: "제주의소리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
        alt: "M이코노미뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png",
        alt: "전자신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png",
        alt: "지디넷코리아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
        alt: "한국경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png",
        alt: "스포티비뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png",
        alt: "MS투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png",
        alt: "중앙데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png",
        alt: "코리아헤럴드",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png",
        alt: "MBN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
        alt: "뉴데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png",
        alt: "국방일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png",
        alt: "지지통신",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
        alt: "한국일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
        alt: "데일리한국",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png",
        alt: "독서신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
        alt: "미디어오늘",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png",
        alt: "뉴시스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png",
        alt: "컴퓨터월드",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png",
        alt: "텐아시아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
        alt: "조선비즈",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
        alt: "소비자가만드는신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
        alt: "서울경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
        alt: "국민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
        alt: "머니투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
        alt: "파이낸셜뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png",
        alt: "주간경향",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png",
        alt: "이코노믹리뷰",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
        alt: "경향신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png",
        alt: "스포츠조선",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png",
        alt: "티브이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png",
        alt: "강원도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
        alt: "아시아경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
        alt: "서울신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png",
        alt: "일간스포츠",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
        alt: "문화일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
        alt: "시사위크",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png",
        alt: "약사공론",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png",
        alt: "TJB대전방송",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
        alt: "동아일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
        alt: "MBC",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png",
        alt: "OSEN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
        alt: "매일경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png",
        alt: "스포츠동아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
        alt: "세계일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png",
        alt: "SBS Biz",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
        alt: "KBS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
        alt: "아이뉴스24",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png",
        alt: "부산일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png",
        alt: "철강금속신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png",
        alt: "영남일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
        alt: "중앙일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
        alt: "헤럴드경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png",
        alt: "시사인",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
        alt: "프레시안",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
        alt: "데일리안",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png",
        alt: "충청일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
        alt: "나우뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png",
        alt: "KBS World",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
        alt: "한겨레",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
        alt: "노컷뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
        alt: "초이스경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png",
        alt: "제주도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png",
        alt: "매경헬스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png",
        alt: "전북도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png",
        alt: "마이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
        alt: "SBS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
        alt: "연합뉴스TV",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
        alt: "이투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png",
        alt: "충청투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
        alt: "뉴스타파",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
        alt: "YTN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
        alt: "이뉴스투데이",
      },
    ],
    currentTypeList: [
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
        alt: "JTBC",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
        alt: "톱데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
        alt: "경기신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
        alt: "이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
        alt: "국제신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
        alt: "오마이뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
        alt: "디지털타임스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
        alt: "디지털데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
        alt: "미디어제주",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
        alt: "조선일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
        alt: "YONHAPNEWS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
        alt: "스포츠서울",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
        alt: "블로터",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
        alt: "정신의학신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
        alt: "디지털투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
        alt: "중앙SUNDAY",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
        alt: "한국경제TV",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
        alt: "머니에스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
        alt: "스포탈코리아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
        alt: "스포츠경향",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
        alt: "인민망",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
        alt: "이코노미조선",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
        alt: "아주경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
        alt: "제주의소리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
        alt: "M이코노미뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png",
        alt: "전자신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png",
        alt: "지디넷코리아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
        alt: "한국경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png",
        alt: "스포티비뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png",
        alt: "MS투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png",
        alt: "중앙데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png",
        alt: "코리아헤럴드",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png",
        alt: "MBN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
        alt: "뉴데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png",
        alt: "국방일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png",
        alt: "지지통신",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
        alt: "한국일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
        alt: "데일리한국",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png",
        alt: "독서신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
        alt: "미디어오늘",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png",
        alt: "뉴시스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png",
        alt: "컴퓨터월드",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png",
        alt: "텐아시아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
        alt: "조선비즈",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
        alt: "소비자가만드는신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
        alt: "서울경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
        alt: "국민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
        alt: "머니투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
        alt: "파이낸셜뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png",
        alt: "주간경향",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png",
        alt: "이코노믹리뷰",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
        alt: "경향신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png",
        alt: "스포츠조선",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png",
        alt: "티브이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png",
        alt: "강원도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
        alt: "아시아경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
        alt: "서울신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png",
        alt: "일간스포츠",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
        alt: "문화일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
        alt: "시사위크",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png",
        alt: "약사공론",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png",
        alt: "TJB대전방송",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
        alt: "동아일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
        alt: "MBC",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png",
        alt: "OSEN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
        alt: "매일경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png",
        alt: "스포츠동아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
        alt: "세계일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png",
        alt: "SBS Biz",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
        alt: "KBS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
        alt: "아이뉴스24",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png",
        alt: "부산일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png",
        alt: "철강금속신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png",
        alt: "영남일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
        alt: "중앙일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
        alt: "헤럴드경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png",
        alt: "시사인",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
        alt: "프레시안",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
        alt: "데일리안",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png",
        alt: "충청일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
        alt: "나우뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png",
        alt: "KBS World",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
        alt: "한겨레",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
        alt: "노컷뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
        alt: "초이스경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png",
        alt: "제주도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png",
        alt: "매경헬스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png",
        alt: "전북도민일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png",
        alt: "마이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
        alt: "SBS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
        alt: "연합뉴스TV",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
        alt: "이투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png",
        alt: "충청투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
        alt: "뉴스타파",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
        alt: "YTN",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
        alt: "이뉴스투데이",
      },
    ],
    currentViewList: [
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
        alt: "JTBC",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
        alt: "톱데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
        alt: "경기신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
        alt: "이데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
        alt: "국제신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
        alt: "오마이뉴스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
        alt: "디지털타임스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
        alt: "디지털데일리",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
        alt: "미디어제주",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
        alt: "조선일보",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
        alt: "YONHAPNEWS",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
        alt: "스포츠서울",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
        alt: "블로터",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
        alt: "정신의학신문",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
        alt: "디지털투데이",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
        alt: "중앙SUNDAY",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
        alt: "한국경제TV",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
        alt: "머니에스",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
        alt: "스포탈코리아",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
        alt: "스포츠경향",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
        alt: "인민망",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
        alt: "이코노미조선",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
        alt: "아주경제",
      },
      {
        src: "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
        alt: "제주의소리",
      },
    ],
  },
  list: {
    currentViewIndex: 0,
    listAllList: [
      {
        title: "종합/경제",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
            pressLogoAlt: "조선비즈",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9088%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
              mainArticleTitle:
                "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
            },
            subArticles: [
              '[속보] 누리호 발사관리위 "준비 문제없어… 예정대로 내일 발사"',
              '서울 주목하는 명품업계… 佛언론 "韓 관심 끌기 위해 경쟁"',
              '尹대통령, WTO 사무총장 접견… "韓 청년에 인턴 기회 달라"',
              "하이브, 中 텐센트뮤직과 음원 유통계약… 국내와 동시 서비스",
              "분양 기피하는 건설사들… 이대로 가면 '집값 불안' 현실화",
              "회계 공시한 노조만 세제혜택 받는다… 공시시스템 9월 운영",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
            pressLogoAlt: "중앙SUNDAY",
            lastEditted: "05월 23일 09:59 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9227%2F100234_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
              mainArticleTitle:
                "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
            },
            subArticles: [
              "꿀벌 200억 마리 실종, 2000마리에 칩 달아 추적",
              "172년 '흙살림 농법'…70가지 채소로 '몸살림 밥상'",
              "김환기의 보름달 왜 푸른색일까? 그에 관한 7가지 사실",
              "강남 은마 경매가 2억 뛰고 급매 사라졌지만, 신중론도 여전",
              "삼성 '바퀴달린 스마트폰' 자율차 반도체로 활로 찾는다",
              "동아시아 '에라스무스' 프로그램 추진, 대학 위기 타개해야",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/973.png",
            pressLogoAlt: "비즈한국",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9197%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "소유의 종말이 가져온 짠테크 '중고거래'",
              mainArticleTitle: "소유의 종말이 가져온 짠테크 '중고거래'",
            },
            subArticles: [
              "전세 가구의 다음 선택에 매매·반전세·월세가 있어야 하는 이유",
              "[단독] 김인순 매일유업 명예회장, 영동공장 인접 땅 차명 보유 의혹",
              "전세 사기, 공인중개사는 과연 책임이 없을까",
              "요기요가 쏘아올린 전쟁의 서막? 배달 플랫폼 이번엔 '점유율 경쟁'",
              "영화가 아닌 '공간'에 방점…CGV·롯데시네마·메가박스의 변신",
              "달 먼지로 태양을 가려 지구 온난화를 막겠다고?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/243.png",
            pressLogoAlt: "이코노미스트",
            lastEditted: "05월 23일 17:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9163%2F172537_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
              mainArticleTitle:
                "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
            },
            subArticles: [
              "29년 동안 4000대 팔았다...기아, 27번째 ‘그랜드 마스터’ 배출",
              "“이게 무슨 일” 퇴근길에 ‘깜짝’…송파구 일대에 우박 쏟아져",
              "닻 올린 한화오션…경영 정상화 ‘속도’",
              "“손이 가요, 손이 가”…영원한 ‘국민 간식’ 52살 새우깡 [1000억 식품의 비밀]",
              "‘원조 가성비車’ 티볼리, KG 품에서 다시 태어난다",
              "英 매체 “한국 젊은 여성 자살률 증가, 모순적 기대 강요받아”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/969.png",
            pressLogoAlt: "매일노동뉴스",
            lastEditted: "05월 23일 07:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9183%2F074359_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
              mainArticleTitle:
                "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
            },
            subArticles: [
              "“파이프 끼임 사고” 원청 대표, 중대재해 ‘15번째’ 기소",
              "“분신 방조 허위 보도” 건설노조·유족 조선일보 고소·고발",
              "‘에이스손보 자회사 전적’ 일방통행에 고용불안 커져",
              "내년 공무원 보수 37만7천원 정액 인상 요구",
              "“보호외국인 법령 여러 나라 번역본 제공해야”",
              "노조법 개정안 직회부 결정 앞두고 노동사회단체 “국회 일하라”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132851977.png",
            pressLogoAlt: "여성경제신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9364%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
              mainArticleTitle:
                "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
            },
            subArticles: [
              "11조 '순매도 vs 순매수' 외국인 태세 전환‧‧‧금리 사이클이 갈랐다",
              "'믿었던 바이오헬스 너마저'···中 리오프닝에도 수출 급감 초비상",
              "英 매체, 한국 젊은 여성 자살률 1위···성차별 문화 원인 지목",
              "[김현주 더봄] 혼자 걷는 즐거움에 빠지다",
              "[성기노 칼럼] 문재인 ‘평산책방’의 정치학",
              "600만 틱톡커 '듀자매'의 도전은 어디까지?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png",
            pressLogoAlt: "쿠키뉴스",
            lastEditted: "05월 23일 22:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9155%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
              mainArticleTitle: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
            },
            subArticles: [
              "황당한 국가자격시험 사고… 채점 전 609명 답안지 파쇄",
              "노무현 전 대통령 14주기… 여야 지도부, 추도식 참석",
              "3차 발사 D-1... 우뚝 선 누리호",
              "코인원 전 간부들, 30억 받고 가상자산 ‘뒷돈 상장’",
              "‘쌍방울 대북 송금 의혹’ 안부수, 1심 징역 3년6개월 선고",
              "“휴대폰 뺏기고 체중 검사…K팝 연습생 생활은 감옥”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
            pressLogoAlt: "머니에스",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9159%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
              mainArticleTitle:
                '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
            },
            subArticles: [
              '기준금리 인상 열차 멈춘다… "5월 금통위 동결 예상"',
              "[이사람] \"프랑스 비켜\"… 이승원, '제2의 이강인' 찬사",
              '"중개보수 깎아주지마" 공정위, 공인중개사협회 담합 조사',
              "양주 총기사고… '무릎쏴→ 서서쏴', 자세 바꾸다 오발?",
              '"암치료하는 생수"… 고령층 속여 385억원 편취한 일당',
              '"묻지마 폭행 수준"… 팬 밀친 男아이돌 경호원, 결국',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png",
            pressLogoAlt: "위키트리",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9157%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'토르' 레이 스티븐슨,  갑작스럽게 전해진 사망 소식…향년 58세",
              mainArticleTitle:
                "'토르' 레이 스티븐슨, 갑작스럽게 전해진 사망 소식…향년 58세",
            },
            subArticles: [
              "활발히 활동 중인 화사, 업계 술렁일 '대형' 보도가 하나 전해졌다",
              "“케인은 맨체스터 시티로 가고, 손흥민은…” 초대형 이적설 떴다",
              "부처님오신날 앞두고 연꽃빵 맛보는 동자승들 (사진 15장)",
              "“환멸 난다”…카리나 '외모 칭찬'했다가 욕먹은 이영지, 22일 입장 밝혔다",
              "혼자 사는 할머니 집에 무단침입해 10년 넘게 가족 행세하며 눌러산 남성 검거",
              "“열정페이 아니냐…” 팬들한테 '재능기부' 강요한 김태리, 역풍 제대로 맞고 있다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
            pressLogoAlt: "데일리안",
            lastEditted: "05월 23일 22:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9090%2F223816_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
              mainArticleTitle:
                "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
            },
            subArticles: [
              "민주당, 비명계에 '욕설 문자폭탄' 보낸 강성 당원 제명…첫 사례",
              '中 발끈했던 "힘에 의한 현상변경 반대"…권영세, 北에 외쳤다',
              '조희연 항소심 "어떤 위법 지시도 안 했다"…1심 판결 안 바뀌면 교육감직 상실',
              "‘로또 1등’에도 체납 세금 안 내…국세청, 고액 체납자 557명 추적조사",
              '출산 임박한 아내 태우고, 남편 "도와주세요" 외쳤지만…경찰 "관할 아니다"',
              '중국서 네이버 접속 불능…中 외교부 "구체적 정보 없다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153942530.png",
            pressLogoAlt: "대한경제",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9185%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
              mainArticleTitle:
                "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
            },
            subArticles: [
              "김영민 회장 동생회사도 942억 블록딜 매도",
              "주가 폭락 전 손 턴 오너…수상한 서울가스",
              "여행업계, ‘브랜드 마케팅’ 잰걸음",
              "인터넷업계 “온플법, 유니콘 성장 막는 악법”",
              "현대차 노조 임단협 임박… 핵심 쟁점은 ‘정년 연장’",
              "[포토] 도심항공모빌리티(UAM)에 쏠린 관심",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
            pressLogoAlt: "헤럴드경제",
            lastEditted: "05월 23일 21:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9023%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
              mainArticleTitle:
                "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
            },
            subArticles: [
              "“장갑차도 동원, 러 본토에 최대 규모 공격”…크렘린궁도 “우려 심각”",
              "\"이재용 사는 서울이 아니라고?\"…'7만전자' 눈앞 삼전개미, '여기' 가장 많다[투자360]",
              "“로또1등 당첨” 세금 안내려 지인계좌에 숨겼다…고액체납자 최후",
              "“어? 금리 내리네?” 중고차 사업 ‘슬슬’ 재개하는 카드사들[머니뭐니]",
              "21대 국회의원 부동산 재산, 평균 3.2억원 늘었다…1위는 민주당 박정",
              "‘52주 신고가’ 삼성전자 1등 공신은 外人…‘9만전자’면 코스피 2700 넘는다 [투자360]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png",
            pressLogoAlt: "인더스트리뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9222%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
              mainArticleTitle:
                "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
            },
            subArticles: [
              "페펄앤드푹스, PRT와 MEMS 기술 결합해 고해상도 3D포인트 클라우드 지원",
              "포스코퓨처엠, 배터리소재 전문 인재 육성 위해 산학협력 강화 나서",
              "KAIST, ‘그린수소’ 저가 생산기술 실마리 찾아",
              "슈나이더일렉트릭, 세계 최초 디지털 모터스타터 ‘TeSys Island’ 제공",
              "산업부, 중소기업 기술사업화 투자 확대 나선다… 기술평가비용 전액지원",
              "토트넘, 4년 연속 영국 프리미어리그 최고의 친환경 구단 선정",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/971.png",
            pressLogoAlt: "일요시사",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9194%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
              mainArticleTitle:
                "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
            },
            subArticles: [
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ①그들은 왜 어떻게 묻혔나",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ②아빠의 멈춰버린 6년",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ③자식 앞세운 애끓는 사연들",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ④‘의심 자초’ 초동수사 한계",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑤권인숙·김민기 의원에 듣다",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑥수장 따라 바뀌는 순직 정의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/825.png",
            pressLogoAlt: "이로운넷",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9244%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "서울시, 서울계약마당 새단장...정보 접근성 향상",
              mainArticleTitle:
                "서울시, 서울계약마당 새단장...정보 접근성 향상",
            },
            subArticles: [
              "당류 함량 높은 '밀크초콜릿' 먹을 때 주의해야",
              "너무 흔해 잡초 같아 보이지만 '꿀풀'은 열일하는 약초입니다",
              "어디에나 있고 어디에도 없는 에티오피아 1",
              "광주시민 3,000여명 ‘민주평화대행진’ “기억하라 오월광주, 행동하라 헌법수록”",
              "날좀보소, 날좀보소~ 밀양강변에서 '밀양아리랑대축제'",
              "헥산, GMO, 벤조피렌...'바리의꿈'에는 없다(1)",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
            pressLogoAlt: "파이낸셜뉴스",
            lastEditted: "05월 23일 21:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9021%2F214115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"野 부천 시의원이 국민의힘 女의원 몸을..."  CCTV에 찍힌 충격적인 장면',
              mainArticleTitle:
                '"野 부천 시의원이 국민의힘 女의원 몸을..." CCTV에 찍힌 충격적인 장면',
            },
            subArticles: [
              '"하루 두 끼 먹는 남성, 세 끼 먹는 남성보다..." 놀라운 연구 결과',
              '"양주서 숨진 20대 일병, 무릎쏴 자세를..." 목격담',
              '"카드값 연체 하루 만에..." 심상치 않은 카드사들',
              '로또 1등 당첨자의 교묘한 수법 "세금 안 내려고.."',
              '"40대 백만장자, 회춘하기 위해 아들의.." 소름행각',
              '"결혼 꿈도 못 꿔"..9급 공무원 실수령액 얼마길래?',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/993.png",
            pressLogoAlt: "허프포스트코리아",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9217%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "양자경이 원하는 대본은",
              mainArticleTitle: "양자경이 원하는 대본은",
            },
            subArticles: [
              '"내가 받고 싶은 대본은.." 양자경이 동양인 최초 오스카 여우주연상 수상 후 고백한 변화는 통쾌하면서도 프로 정신이 돋보인다',
              '"열심히 운동하는 건강한 사람 그려줘" AI에게 식스팩보다 더 좋은 운동의 효과를 가르치자 일어난 변화는 눈이 휘둥그레진다 (영상)',
              '"재난은 악화될 것" 이탈리아 로마의 트레비 분수가 환경 단체에 의해 검게 물들었다',
              "\"더 이상 내 조카도 아니고..\" 전두환의 손자 전우원은 큰아버지 전재국으로부터 '절연 통보' 문자 메시지 한 통을 받았다",
              "\"스타가 탄생했다!\" 해외 매체들에 '인어공주' 할리 베일리 캐스팅 논란을 잠재울 극찬이 이어졌다",
              '"치매 걸린 아빠 위해.." 브루스 윌리스의 9살 막내딸의 행동은 사랑이 가득해 제3자인 내 마음까지 따뜻하게 녹인다(영상)',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
            pressLogoAlt: "노컷뉴스",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9028%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
              mainArticleTitle:
                "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
            },
            subArticles: [
              "[영상]목 안고 어깨 터치···부천시의원, 국힘 의원 성추행 의혹",
              "[영상]李 \"조직된 힘으로\"···추모객들 한덕수에 '야유'",
              "[단독]\"미술관 내놔\" SK, '이혼소송' 노소영 상대 소송",
              "中 다음 이어 네이버도 접속차단? 단순 접속장애?",
              '"손자 죽고 저만 살아서···" 급발진 의심사고 첫 재판',
              "검찰, 김남국 보유 논란 '위믹스' 증권성 검토",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png",
            pressLogoAlt: "UPI뉴스",
            lastEditted: "05월 23일 21:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9241%2F212834_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
              mainArticleTitle:
                '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
            },
            subArticles: [
              '내달 귀국 이낙연 "혁신 못하면 외부 충격"…이재명 체제에 경고?',
              '노무현 서거 14주기…봉화에 총집결한 여야 "盧정신 기억하자"',
              "美 연준 위원들, '추가 인상' vs '동결' 팽팽…시장 기대 무너지나",
              "PM, 자전거·보행자 뒤엉켜 '아찔'…파리처럼 퇴출 안되려면",
              "정신감정 받게 된 조양래…한국앤컴퍼니 '남매의 난' 재점화",
              "'IFRS17'로 보험사 실적 뻥튀기?…\"현재 수치 신뢰 힘들어\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
            pressLogoAlt: "국민일보",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9002%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
              mainArticleTitle:
                "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
            },
            subArticles: [
              "누리호 세워놨는데 ‘기습’ 소나기… 발사위 “24일 확정”",
              "[단독] 증권사 엉터리 ‘장부가 평가’… 당국, “원칙대로 하라” 뒷북",
              "김건희 “韓, 매력적인 나라” 이부진 “김 여사에 감명”",
              "청소하던 경비원 때린 20대 주민 “술 마셔 기억 안나”",
              "강남 주택가 화분에 양귀비 재배한 80대 할머니",
              "‘집단성폭행 가해자가 교사’ 폭로…교육청 “현재 근무 안해”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/536.png",
            pressLogoAlt: "더팩트",
            lastEditted: "05월 23일 20:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9156%2F204123_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
              mainArticleTitle:
                "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
            },
            subArticles: [
              '국민의힘 "김남국, 대선 전후 2억5000만 원 현금화...어디에 썼나"',
              "[동전주②] 큐로그룹 계열사 6곳 중 5곳 1000원 안 되는데…회사는 '나 몰라라'",
              "누리호 3차부터 '민간 참여' 강화…한화에어로스페이스·KAI 등 '구슬땀'",
              "'하루살이떼' 습격…'퇴치법 없다' 피해 확산",
              "[팩트체크] 임창정, 엔터 사업도 빨간불?…파주 사옥 직접 가보니",
              "[단독] '진성준 정치자금법 위반 혐의' 강서목민관학교 계좌 압색",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png",
            pressLogoAlt: "신아일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9225%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
              mainArticleTitle:
                '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
            },
            subArticles: [
              "‘김남국 방지법’ 통과됐지만... 징계 절차는 걸음마",
              '"끝까지 잡는다" 국세청, 고액체납자 재산 집중 추적',
              "검찰, 'SG 주가조작 의혹' 라덕연 등 은닉재산 추적에 수사력 집중",
              "'대우조선' 간판 떼고…'한화오션' 새출발",
              "현충일 연휴 'SRT 3280석' 추가 운행",
              "한미일 '확장억제' 협의체 창설하나… 동북아 정세 긴장 우려",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
            pressLogoAlt: "뉴스타파",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9144%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
              mainArticleTitle:
                "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
            },
            subArticles: [
              "의사 편드는 'K-선샤인액트' 시행규칙 꼼수",
              "[윤석열 1년 특집] ‘혼네와 진심’, 한일 지식인에게 묻다",
              "경찰, 법원 판결 뒤집고 윤 대통령 장모 '최은순 무혐의'",
              "[주간 뉴스타파] '의정'과 '사익' 사이... 김남국, 조명희, 최영희",
              "[히든머니 프로젝트] “대정부 영업 활동”... 조명희 의원의 내 회사 챙기기",
              "[히든머니 프로젝트] 최영희, 국회법 어기고 일가족 위한 법안 발의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
            pressLogoAlt: "한국경제",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9022%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
              mainArticleTitle:
                "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
            },
            subArticles: [
              "\"마술쇼 보는 줄\"…현대차·기아의 도어 '신기술'",
              "절대 강자 '네이버'마저…이대로 가다간 '초비상'",
              "'미친 가성비' 치킨 곱빼기 등장…\"오히려 좋아\"",
              '"조용한 승차감에 반했다"…5060 열광한 일본車',
              "'1000억 물려준다' 유언장이…무효된 사연은",
              '"불륜하지 맙시다"…내연녀 가게 앞 시위, 결국',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/013.png",
            pressLogoAlt: "연합인포맥스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9133%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
              mainArticleTitle:
                '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
            },
            subArticles: [
              '배런스 "부채한도 협상 실패, 양당 모두가 지는 게임"',
              '尹대통령 "디리스킹은 특정국 의존 줄이는 공급망 다변화"',
              "교보생명·카카오페이손보, 악사손보 공동인수…인수가 3천500억",
              'KB증권 "불법 자전거래 아냐…손실 덮을 목적 아닌 시장 유동성 공급"',
              "화이자, 비만 치료제 체중 절감 효과…주가 4%↑",
              '"G7 중국 고립, 불가능하고 위험…미중 경제 분리 고통"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
            pressLogoAlt: "미디어오늘",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9029%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
              mainArticleTitle:
                "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
            },
            subArticles: [
              "서울신문, 한겨레·경향과 멀어지고 조선·중앙과 가까워졌다",
              "신문·방송에 넘쳐나는 ‘흐림처리’ 문제 없나",
              "제평위 사실상 해체에 인터넷신문협회 “정치권, 정략적 이용 말라”",
              "‘호반 인수 저지’ 서울신문 조합장이 퇴사하며 남긴 말",
              "[영상] 박성중 “국정감사 위증으로 한상혁 위원장 고발하라”",
              'MBC‧방문진 "목표는 MBC 장악…독립성 침해" 감사원에 법적 대응',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
            pressLogoAlt: "인민망",
            lastEditted: "05월 23일 18:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9118%2F195235_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
              mainArticleTitle:
                "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
            },
            subArticles: [
              "中 1~4월 유럽행 화물열차 운행 5611편, 전년比 17% 증가",
              "中 외교부, ‘제76차 세계보건총회 타이완 참석 거부’ 관련 입장 발표",
              "[포토] 고도(古都) 시안의 문화 상징물, 진시황 병마용",
              "산시 윈청, ‘야간 경제’로 활력이 넘치는 도시",
              "中 저장, 풍성한 국내외 먹거리 축제 “미식의 향연”",
              "[시진핑 주석이 주고받은 외교 선물] 시진핑 주석이 받은 훈장…모두가 ‘최고의 영예’ 상징",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174430433.png",
            pressLogoAlt: "서울와이어",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9360%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
              mainArticleTitle:
                "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
            },
            subArticles: [
              '윤 대통령, 민노총 집회 정조준..."도로점거 등 불법시위 용납않겠다"',
              "명품족에도 등급… 휴무일에 문 연 롯데백화점, 'VIP 행사' 인기",
              '금융위‧금감원‧거래소‧남부지검, "주가조작 비상대응체계 가동"',
              "두 차례 탈옥, 강도살인범 신창원… 교도소서 극단선택 시도",
              "미다스의 손 '배터리아저씨' 박순혁 활동중단 선언… 왜?",
              '서울 사대문 도심개발 숨통 트나… 오세훈 "문화재옆 고층 가능"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png",
            pressLogoAlt: "데일리임팩트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9234%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
              mainArticleTitle:
                "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
            },
            subArticles: [
              "IRA 한파에 현대차그룹, 미국 영업 틀 바꾼다",
              'MZ 40% "환경 무시하는 기업 그만 둔다"-딜로이트 조사',
              "금융당국·검찰, '불공정거래 세력과 전쟁' 나선다",
              "‘요지부동’ 5%대 기업대출 금리…은행권 ‘부메랑’ 될까",
              "'주판알 튕겨본들..' 불확실성 커진 K칩",
              "'동양의 지중해' 남해안에 관광용 UAM 뜬다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
            pressLogoAlt: "문화일보",
            lastEditted: "05월 23일 22:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9004%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
              mainArticleTitle:
                "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
            },
            subArticles: [
              "[단독]‘현직 순경, 미성년자 성관계’ 보고받은 경찰청장, 성비위 첫 ‘특별경보’ 발령",
              "최태원 회장 이혼소송에 가세한 SK 계열사…‘노소영 미술관 나가라’",
              "김건희 “한국은 진실로 매력적인 나라”...이부진 “김 여사 노력에 큰 감명”",
              "[단독]심형탁, 누명 벗었다…5억 소송 ‘무죄’·사기방조 ‘무혐의’",
              "60도 독주 7병 마시는 장면 생중계 12시간만에 사망",
              "스피어스, 톱스타 불륜 폭로 왜?…“좋은 사람 없었다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
            pressLogoAlt: "소비자가만드는신문",
            lastEditted: "05월 23일 07:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9196%2F074128_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
              mainArticleTitle:
                "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
            },
            subArticles: [
              "고객센터서 ‘보험금 나온다’ 안내했는데, '지급 거절'...분쟁 다발",
              "은행 공모펀드 증가세로 반전...KB국민 14조 원 '최고'",
              "[민원평가대상-휴대전화] 삼성전자, 상담원 품질 향상 노력",
              "[민원평가대상-가구] 시몬스, '직배송 시스템' 운영 소비자 호응",
              "삼성·LG·SK그룹, 미국 IRA '수혜' 기대감...'수혜 제외' 현대차",
              "출범 2년 한화생명금융서비스 첫 흑자 내며 대형GA로 순항",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
            pressLogoAlt: "오마이뉴스",
            lastEditted: "05월 23일 21:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9030%2F214115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
              mainArticleTitle:
                "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
            },
            subArticles: [
              "정치인도, 시민도 \"그립습니다\"... 윤 대통령 조화에 '치워달라' 항의도",
              "생리대에서 점자 표기를 본 적 있나요?",
              "'오락가락' 유동규, '건강' 이유로 불출석...늘어지는 대장동 공판",
              "위령비 공동 참배한 기시다 총리의 수상한 결정",
              "사실상 해체→전국대회 첫 승, 바닷마을 농구부의 반전드라마",
              '500만원짜리 작품 깬 아이 엄마 "밤새 복원하다니, 큰 가르침"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/963.png",
            pressLogoAlt: "에너지경제",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9188%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
              mainArticleTitle: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
            },
            subArticles: [
              "미·중 갈등에 韓 '폭풍의 눈'...'제2의 사드보복' 우려",
              "美 IRA 수혜는 어디로…태양광·풍력株 지지부진",
              '모텔서 "직장동료 숨졌다" 신고, 알고보니 성매매 댓가 가로챈 20대',
              "우리 애도 혹시? ADHD 징후 ‘이 행동’ 살펴봐야",
              '"아빠도 18살 할래" 아들 피 1L씩 수혈, 美 40대 백만장자 실화',
              "故노무현 14주기에도 ‘아전인수’...여야 메시지 어땠나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
            pressLogoAlt: "매일경제",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9016%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
              mainArticleTitle:
                "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
            },
            subArticles: [
              "[속보] 누리호 발사관리위 “24일 발사 확정, 특이사항 없어”",
              "“월급 197만원 남짓…이 월급으로 결혼이라도 하면”",
              "몸값 오를거 같은데?…대학 축제에 매출 급증한 이 곳",
              "'무료 홍콩·10만원 일본﻿·반값 한국'…여행가의 유혹",
              "609명 채점전 답안지 파쇄…국가자격시험 '황당 실수'",
              "“韓서 명품백은 ‘이것’” 엔데믹 보복 소비에 외신도 주목",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
            pressLogoAlt: "경향신문",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9001%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
              mainArticleTitle:
                '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
            },
            subArticles: [
              "집값 상승기 부동산 투자로 수십억 번 국회의원들",
              "중국 “한국에 엄정 입장 표명, 중·한관계 문제점 인식해야”",
              "러시아 “벨고로드 교전 종료…반체체 단체 70명 사살” 주장",
              "한국 시찰단 오니 속내 드러낸 일본 “후쿠시마 수산물도 수입 재개를”",
              "사우디 첫 여성 우주인 탄생…빈살만의 ‘개혁 군주’ 이미지 뒤 그림자도 여전",
              "탄핵심판 나온 행안부 재난담당자 “이태원 참사 때 조치 다했다” 장관 감싸기",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/816.png",
            pressLogoAlt: "시사오늘",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9229%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
              mainArticleTitle:
                "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
            },
            subArticles: [
              "‘젊은 SUV’ 르노 XM3…1인 가구·디지털 세대 입맛 노린다",
              "신한투자증권, 초 개인화된 맞춤형 서비스로 투자자 잡기 나서…시장점유율 6% 목표",
              "‘한화오션’ 출범…권혁웅 대표 “글로벌 기업으로 육성”",
              "황교안 “국정원 보안 해킹 점검 받겠다는 선관위, 진정성 의문” [현장에서] ",
              "학교폭력 해법의 진일보, ‘학폭법’에 있다 [특별기고]",
              "딱 걸린 ‘가난 코스프레’ [만평오늘]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/972.png",
            pressLogoAlt: "PD저널",
            lastEditted: "05월 23일 19:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9199%2F191250_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
              mainArticleTitle:
                "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
            },
            subArticles: [
              '세월호 보도 권고 보고서 쓴 김성수 기자 "아픈 지적한 취지 봐줬으면"',
              '한상혁 방통위원장 면직 수순…"공영방송 장악 시나리오 빨라질 것"',
              "‘포털 때리기 부담 느꼈나’…제평위 8기 출범 앞두고 활동 중단",
              "넷플릭스 광고요금제 기대 이상 선전...국내 OTT 선택은",
              "방심위, '우울증 갤러리' 차단 않기로...'자율규제 강화' 권고",
              "요즘 예능 대세, 시즌제 아니면 스핀오프",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
            pressLogoAlt: "동아일보",
            lastEditted: "05월 23일 21:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9003%2F215944_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
              mainArticleTitle:
                "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
            },
            subArticles: [
              "尹 “정부, 기업인에 열려있어…자신있게 세계시장 뛰어들라”",
              "왜 여권에서 한동훈 불출마론이 나오는가",
              "‘싸가지 없는 보수?’…이준석, 내년 총선 넘어 대선까지?",
              "“공산주의 미화 안돼”…‘조선공산당 표석’ 절도범, 정체 알고보니",
              "“경찰대, 인재 유치위해 존속” vs “로스쿨 육성학교 오명”",
              "체납 세금 안내려고 로또 1등 당첨금까지 빼돌린 철면피들",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13728808.png",
            pressLogoAlt: "프라임경제",
            lastEditted: "05월 23일 19:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9239%2F190432_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "롯데손보·롯데카드, 연내 매각설 수면 위…",
              mainArticleTitle: "롯데손보·롯데카드, 연내 매각설 수면 위…",
            },
            subArticles: [
              "'직원 사망' LGD, 독립 대책위 꾸린다",
              '[현장] "피부과 안 부럽다" LG프라엘 더마쎄라 팝업 가보니',
              "[오늘 뭐 먹지] 일동후디스·파리바게뜨·KFC",
              "[기업해부] 엔씨소프트① 리니지에 울고 웃는 '게임 명가'",
              "KB證, 하나증권과 '불법 자전거래' 의혹 전면 부인",
              "국내은행 3월말 연체율 0.33%…전년比 0.11%p↑",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205818702.png",
            pressLogoAlt: "뉴스클레임",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9359%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
              mainArticleTitle:
                "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
            },
            subArticles: [
              "[기자수첩] 신축 아파트 ‘인분’",
              '윤관석 "檢 짜맞추기 수사에 맞서 결백·억울함 밝힐 것"',
              "어린이 프로바이오틱스인데 첨가물 함량은 성인 기준?",
              "유아인, 잘 나가던 믿고 보는 배우의 추락[영상]",
              '"5월인데 벌써 덥다"… 유통가 여름 준비 분주',
              '현업언론단체 "한상혁 방통위원장 면직 청문회 규탄" 방송장악 의혹제기[영상]',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/913.png",
            pressLogoAlt: "뉴스토마토",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9121%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "대통령의 '품격'",
              mainArticleTitle: "대통령의 '품격'",
            },
            subArticles: [
              "대결의 정치, 노무현의 교훈",
              "주담대 잔액 역대 최대…2분기 가계부채 '꿈틀'",
              "'면직 기로' 한상혁 위원장 \"헌법적 가치 침해\"…여권은 위증죄까지 꺼내",
              "산인공 황당실수에 수험생 '부글부글'…공정성 논란도 '불가피'",
              "다시 노란 물결로…내가 기억하는 대통령 노무현",
              "시간당 임금 올랐지만…정규직·비정규직 임금격차 심화",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/120.png",
            pressLogoAlt: "EBN",
            lastEditted: "05월 23일 20:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9143%2F210002_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
              mainArticleTitle:
                "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
            },
            subArticles: [
              "[르포] 시계로 출발한 스와호수의 성공신화…'엡손' 기념관을 가다",
              "iM택시·타다, 합병 임박설 '솔솔'...카카오T 위협 '시너지'",
              "[단독]‘대우조선 흔적 지우기’ 한화오션, 핵심 임원 28명 계약해지",
              '전세제도 폐지론, 갑론을박 "기존 제도 없애긴 힘들어"',
              "'수주 드라이브 건다'…한국조선해양, 올해도 200억달러 돌파한다",
              "아시아나항공, 빚만 쌓여간다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/975.png",
            pressLogoAlt: "시사저널이코노미",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9195%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
              mainArticleTitle:
                "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
            },
            subArticles: [
              "[영상] “보고 또 보자”···전세사기, 아는 만큼 피한다",
              "한국MSD 구조조정 사태, 勞使 정중동···정리해고·잔류 희망자 이슈 전망",
              "[영상] 업스테이지, 아숙업 앞세워 ‘AI 대중화’ 주도",
              "카드론 잔액, 한달 새 4000억 ‘껑충’···건전성 부담 커지는 카드업계",
              "포화상태 이른 버거, 美 시장은 롯데리아 돌파구 될까",
              "[시승기] 한층 고급스러워진 렉스턴 ‘아레나·쿨멘’···평일엔 도심, 주중엔 산천으로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/961.png",
            pressLogoAlt: "메트로신문",
            lastEditted: "05월 23일 18:53 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9186%2F190007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
              mainArticleTitle:
                "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
            },
            subArticles: [
              "김건희 \"'K-관광 협력단' 출범식 축하…韓 매력 알리는 데 최선\"",
              "고팍스 변경신고 지지부진…투자자 보호 뒷전",
              "서학불개미, 3배 추종 ETF 인기...반도체주·기술주 하락 배팅까지",
              '부동산 시장 변화? 송파구 잠실일대 "집값 상승 이어질 것"',
              "누리호 3차 발사 하루 앞으로, 오후 6시24분경 발사 예정",
              '산은, 대우조선해양 매각절차 종결…"종합 방산·에너지 기업으로 성장할 것"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
            pressLogoAlt: "이투데이",
            lastEditted: "05월 23일 21:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9114%2F220209_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
              mainArticleTitle:
                "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
            },
            subArticles: [
              "“내일 민간 우주기업 시대 열린다”…첫 실전발사 '누리호' 18분58초 카운트다운",
              "차 부품 업계의 미래차 전환에 14.3조원 투입…차·부품수출 최대 800억달러 목표",
              '尹대통령, WTO 사무총장 접견…"새 무역규범 위해 노력해야"',
              "방통위 ‘뉴스제평위’ 법정기구화 연내 입법 추진",
              "“사생활이라 확인 불가”…긍정도 부정도 아닌 요즘 열애설",
              "학습 효과 없는 치킨업계…왜 자꾸 가격 올리나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
            pressLogoAlt: "아이뉴스24",
            lastEditted: "05월 23일 22:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9025%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
              mainArticleTitle:
                '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
            },
            subArticles: [
              "韓-EU, 양자·우주 등 전략기술 협력 확대 논의",
              "'신사업 가속' 위메이드플레이, 자회사 3사와 통합 채용",
              '[현장] 벤자민 로 ASM "韓은 핵심거점…투자지속 확대"',
              "'8만전자' 갈까?…반도체 경기 바닥론에 커지는 기대감",
              '이재명 "盧 꿈꿨던 역사의 진보 후퇴"…김기현 "전 대통령 흑역사 반복 안돼"',
              "[종합] \"中에 뺏긴 디스플레이 1위 되찾자\"…삼성·LG, '초격차' 기술로 압도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
            pressLogoAlt: "M이코노미뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9184%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
              mainArticleTitle:
                "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
            },
            subArticles: [
              "‘천년왕국’의 서막인가, 암울한 미래 ‘디스토피아’의 흉조인가",
              "“470억 손배소 취하하라”···대우조선 노동자의 절박한 외침",
              '국회 진입 저지당한 전세사기 피해자들 "빚에 빚 더하기로 세입자에 책임 전가"',
              "6月 전국 4만 가구 집들이...수도권이 60%",
              "尹, 지난주 민노총 시위 언급하며 “공공질서 무너뜨려”",
              '[M포토] 무더위 속 외침 "발달장애인 지원체계 마련하라"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
            pressLogoAlt: "서울경제",
            lastEditted: "05월 23일 22:16 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9018%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
              mainArticleTitle: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
            },
            subArticles: [
              '尹 "글로벌 생태계간 경쟁…대·중기 원팀돼야"',
              "'평당 1.2억' 베일벗은 용산 유엔사부지 아파트 분양",
              '시장감시 4대 기관장 "주가조작 혐의 계좌 동결·무관용 처벌"',
              "위성 작동해야 최종 성공…첫 실전 '운명의 19분'",
              "한화 가세한 조선 '빅3' 인력확보 진검승부",
              "하이브, 中 텐센트뮤직과 유통 계약…'문화 만리장성' 넘는다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
            pressLogoAlt: "프레시안",
            lastEditted: "05월 23일 22:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9031%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
              mainArticleTitle:
                "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
            },
            subArticles: [
              "K-드라마 전세계 열풍 배경에는 '이것'이 있었다",
              '21대 국회 3년간 국회의원 재산 7.3억 증가…11명은 "부동산투기 의혹"',
              '故 노무현 14주기 추도식 …국회의장 "정치개혁 유업 이루겠다"',
              "韓시찰단 방문에 日 기대감에 '들썩'…\"후쿠시마 수산물 수입 부탁\" 노골적 요구",
              '이부진·차은우와 함께 선 김건희 "한국 관광, 경제 한단계 도약시킬 수 있다"',
              "경찰, 김건희 '쥴리설' 제기한 기자들 무더기 검찰 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
            pressLogoAlt: "데일리한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9036%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
              mainArticleTitle:
                "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
            },
            subArticles: [
              "엔데믹에 웨딩 수요 폭발…가격 올라도 예약은 '하늘의 별따기'",
              "닻 올린 한화오션, '저가수주 해소' 시동거나",
              '정부, 車 부품산업에 14조원 투입…"미래차 전환 적극 대응"',
              "경제6단체, 노조법 개정안 본회의 상정 중단 촉구…“산업현장 대혼란”",
              "현대차∙기아, 미닫이·여닫이 전환되는 트럭 적재함 도어 개발",
              "CJ대한통운 택배기사, 목욕탕서 심폐소생술로 생명 구해",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/954.png",
            pressLogoAlt: "CNB뉴스",
            lastEditted: "05월 23일 18:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9178%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
              mainArticleTitle:
                "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
            },
            subArticles: [
              "[단독] 한전도 LH도 “나몰라라”…산으로 간 ‘송주법 지원사업’",
              "[1분기 핫실적③] ‘동반부진’ 아모레·LG생건…반등은 언제쯤?",
              "[테크크] 때 이른 더위에 전기료 인상까지…가전업계 “에너지 효율을 높여라”",
              "[쿨韓정치] 박정희·노태우·YS·DJ의 아들들이 만난 이유",
              "'역사는 더디다, 그러나 진보한다’…盧 서거 14주기 추도식",
              "[기자수첩] 모두의 주의의무가 요구되는 때",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
            pressLogoAlt: "아주경제",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9124%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
              mainArticleTitle: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
            },
            subArticles: [
              "정부, 포털 뉴스 제평위 법정기구화 추진...'언론 평가 투명하게 공개'",
              "[노무현 14주기] 권양숙 여사 '독도는 대한민국 고유 영토'",
              "​샤넬, 두 달 만에 또 가격 올렸다...'클래식 플립백 라지' 1570만원",
              "대면 영업 시도한 카카오뱅크, 금융당국 움직이자 꼬리 내렸다",
              "[불법 노조와의 전쟁] 尹 '민노총 1박2일 집회 국민 용납 어려워'",
              "''중국판 보르도' 전 세계에 홍보' 6월 中닝샤 국제 와인 박람회 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
            pressLogoAlt: "뉴데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9058%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
              mainArticleTitle:
                "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
            },
            subArticles: [
              '文정부 땐 "후쿠시마 오염수 문제없다" vs 尹정부 땐 "문제많다"… 민주당 딴소리',
              '尹 "민노총 집회, 국민 자유·기본권 침해… 불법 행위 용납 못해"',
              "\"징용 배상금 받으면 20% 내라\"… 시민단체, 징용 피해자들과 '약정'",
              "선관위 간부 아빠, 경력직 채용 때 본인 자녀 '셀프 승인' 파문",
              '이복현 금감원장 "불공정 세력 척결…거취 걸겠다"',
              "\"1200조 우크라 재건시장 잡아라\"…K-건설 '원전' 승부수",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/932.png",
            pressLogoAlt: "CEO스코어데일리",
            lastEditted: "05월 23일 18:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9152%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
              mainArticleTitle:
                "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
            },
            subArticles: [
              "“MZ세대, 알뜰폰에 못 내줘”…‘청년 고객’ 잡기 나선 통신 3사",
              "증권사 MTS 개편 러시…신한투자 “초개인화 집중, MAU 업계 1위 300만 도전”",
              "[점프UP 한국 증시] ①‘주주가치 제고’ 이상과 현실…여전히 갈길 먼 배당성향",
              "카카오모빌리티, ‘독과점 논란’ 굴레 털고 해외로 간다",
              "‘60일 레이스’ 곧 마무리…임종룡과 함께할 우리은행장, ‘현장 영업력’이 명운 갈라",
              "중국, 미 마이크론 제재…삼성·SK, 반도체 추가 공급 길 열리나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
            pressLogoAlt: "세계일보",
            lastEditted: "05월 23일 20:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9006%2F204123_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
              mainArticleTitle:
                "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
            },
            subArticles: [
              "尹 “민노총 불법집회, 국민들이 용납 못해”",
              "허술한 법망에… ‘상장피’ 판치는 코인거래소",
              "아이 버리고 7년간 아동수당 챙긴 미혼모",
              "'성추행 의혹' 부천시의원 민주당 탈당…\"당 조사 계속\"",
              "봉하마을 총출동한 여야…외연 확장·통합 과시 '동상이몽'",
              "독자기술로 실용위성 수송…누리호, 첫 임무 안고 우주로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/914.png",
            pressLogoAlt: "뉴스핌",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9125%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
              mainArticleTitle:
                "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
            },
            subArticles: [
              "'생성형 AI가 여는 새로운 미래' 뉴스핌 AI포럼 개최...\"위기 아닌 기회, 경쟁력 확보가 중요\"",
              "정부·민간 자동차 부품업계 14.3조 공급…자율주행·친환경 R&D 2조 투입",
              "[속보] 나로우주센터 소나기…누리호 발사대 작업 지연 예상",
              "박주환, 이건희 이을 미술품 기증…미술관 기부 문화 정착될까",
              '[인터뷰] 서울문화재단 이창기 대표 "서울의 사계절 축제, 시민에 더 다가갈 것"',
              "[영상] '생성형 AI가 여는 새로운 미래는?'...2023 뉴스핌 AI 포럼 성료",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/801.png",
            pressLogoAlt: "위키리크스한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9218%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
              mainArticleTitle:
                '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
            },
            subArticles: [
              "하늘 향해 우뚝 솟은 누리호, 변수 체크하며 내일 발사 준비 착착",
              "국정원, 전교조 강원지부 압수수색...“北지하조직 '이사회' 혐의\"",
              "[WikiLeaks] The forever war on Julian Assange...threatening the freedom of thought globally",
              "미 중소은행 위기, 대형은행엔 기회... JP모건 '퍼스트' 인수로 이자수익 4조원 증가 기대",
              "범부처의료기기사업단 10대 과제..“플랫폼 기반 전주기 지원“",
              "청와대-백악관 X파일(143) 김대중 햇볕정책에 대한 미국의 불안한 시선… 청와대 “리처드 닉슨의 데탕트 정책 계승” 주장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
            pressLogoAlt: "머니투데이",
            lastEditted: "05월 23일 22:35 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9017%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
              mainArticleTitle:
                '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
            },
            subArticles: [
              "'세계최초' 클릭 몇 번 싼 대출로 갈아탄다…연 12조 머니무브",
              "尹대통령 \"77%, 이게 진정한 지지율\"…기업인들 '박수' 왜?",
              '韓도 당했던 日의 반도체 수출규제…"中, 美제재보다 두려워해"',
              "직장 잃은 '밧데리아저씨' 입 열었다…\"돈 벌어놓고 나만 피해\"",
              "이부진의 '특별한 요청' 수락한 김건희 여사…\"한국 매력 알리겠다\"",
              "'암 치료 생수' 속아 넘어간 노인 7200명…수백억 뜯겼다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png",
            pressLogoAlt: "비즈워치",
            lastEditted: "05월 23일 16:44 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9167%2F165153_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
              mainArticleTitle:
                "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
            },
            subArticles: [
              "삼성전자, 꿀잠 연구하는 이유는",
              "'11번째 청약이라고?' 은평뉴타운 민간임대 '깜깜이 무순위'",
              "네이버 이어 카카오도 사우디 '러브콜'…위상 높이는 'K-IT'",
              "P2E업체 잇따라 소환…마브렉스 추가 내부조사",
              "[교통시대]정부, SR에 출자 추진…민영화 논란은 왜?",
              "'급전' 수요 몰렸다…현금서비스 잔액 2달 연속 ↑",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
            pressLogoAlt: "시사위크",
            lastEditted: "05월 23일 19:03 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9180%2F191028_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
              mainArticleTitle: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
            },
            subArticles: [
              "박지만 회장의 EG ‘빨간불 실적’ 올해는?",
              "[윤석열 지지율] 부정평가, 10주 만에 50%대로 하락",
              "전세 기간 중 세입자 사망, 전세금반환 시기는?",
              "불법판매에 해킹… 대부중개플랫폼서 개인정보 줄줄 샜다",
              "G7 성과 띄우는 국민의힘",
              "민주당-국민의힘, 10주 만에 오차범위 내 접전",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
            pressLogoAlt: "서울신문",
            lastEditted: "05월 23일 18:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9005%2F183810_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
              mainArticleTitle: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
            },
            subArticles: [
              "尹 “민주노총 집회 국민 용납 어려워…엄정 법집행”",
              "심상찮은 北…동창리 새 위성발사대 완공 앞둬",
              "시찰단, K4 탱크·ALPS 점검…日은 ‘시찰’ 강조",
              "23일 누리호 3차 발사…진짜 위성 8기 싣고 첫 실전 우주택배",
              "채점도 안한 국가자격시험 답안지 파쇄…609명 재시험 본다",
              "고지서·홈피서 발견한 ‘내 얼굴’…작은 단서로 가족 찾았습니다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png",
            pressLogoAlt: "비즈니스포스트",
            lastEditted: "05월 23일 17:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9166%2F180218_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
              mainArticleTitle:
                "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
            },
            subArticles: [
              "[다시뛰는 K금융 베트남①] 그래도 베트남, ‘포스트 차이나’ 수식어는 유효하다",
              "콜레라 세계 확산 2년 만에 백신 10년치 소모, 유바이오로직스에 의존 더 커져",
              '"TSMC 2나노 파운드리 고객 줄 섰다", 대만언론 삼성전자 추격에 위기감?',
              "삼성엔지니어링 상반기 아쉬운 해외수주, 남궁홍 하반기 중동에서 승부",
              "넥슨게임즈 중화권에서 고성장 드라이브, 박용현 ‘히트2’로 실적 점프 기대",
              "신한투자 MTS 1년 만에 대폭 손질, 김상태 홀로서기 첫해 리테일도 힘준다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/809.png",
            pressLogoAlt: "미디어펜",
            lastEditted: "05월 23일 17:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9224%2F172228_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
              mainArticleTitle: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
            },
            subArticles: [
              "수출·경쟁력 8개월째 하락…한국경제 '시계제로'",
              "한미일 정상, 경제안보·대북공조 더 강화 '재확인'",
              "언론 지형 바꾼 네이버, 순기능 지속돼야",
              'KAI, FA-50M 18대 수출 최종 계약 체결…"추가 계약 기대"',
              "은행권 수신경쟁 재등장…5%대 적금 내놔",
              "전세계 6000만 명 사용 ‘삼성 헬스’, 수면 혁신 현재진행형",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
            pressLogoAlt: "나우뉴스",
            lastEditted: "05월 23일 17:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9165%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
              mainArticleTitle:
                "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
            },
            subArticles: [
              "대만 태권도 선수, 韓 대회 시상대서 中 오성기 ‘번쩍’ 논란 [대만은 지금]",
              "“18세 몸 갖겠다”며 17세 아들 ‘피’까지 수혈받은 美 억만장자의 사연",
              "[포착] 내부 붕괴 시작?…러 본토서 교전 발생, 공격 주체는 ‘러시아인’ 반전",
              "주위를 다 집어삼킬듯…역대 가장 생생한 ‘태양 흑점’ 포착 [우주를 보다]",
              "대만 마지막 위안부 할머니 별세…“일본에 사죄·배상 계속 요구할 것” [대만은 지금]",
              "“우크라에 F-16 공급 노력 우선…몇 달 내 시작” 미 국무부",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113848865.png",
            pressLogoAlt: "정책브리핑",
            lastEditted: "05월 23일 22:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9367%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
              mainArticleTitle:
                "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
            },
            subArticles: [
              "“공공질서 무너뜨린 민노총의 집회 행태, 국민이 용납하기 어려울 것”",
              "지방시대 실현 위한 분권 강화…지역 경제·산업 회복 돕는다",
              "한국형 녹색채권, 올해 3조 9000억원 발행…온실가스 373만톤 감축",
              "‘올 상반기 내 재생원료 사용한 식품용기 출시’…연간 480톤 온실가스 저감",
              "문체부, ‘경이로운 소문2’ 등 K-드라마 후반작업 지원…245억 원 투입",
              "남는 쌀로 술·사료 만든다…농식품부, 정부양곡 14만톤 특별 처분",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png",
            pressLogoAlt: "미주한국일보",
            lastEditted: "05월 23일 11:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9231%2F114336_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
              mainArticleTitle:
                "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
            },
            subArticles: [
              "신분 도용사기 추적 웹사이트 사용 권고",
              "시카고 도심 한복판 우체국서 심야에 남성 20명 떼강도짓",
              "빌 게이츠 “미래 AI 개인 비서 개발 중요”…구글·아마존 겨냥?",
              "[사고] ‘한인사회 매스터스’ 골프 왕중왕 가린다",
              "“고추장 있었던 이유는”… ‘폭설고립’ 한국인 구한 美부부 대답은",
              "틱톡, 몬태나주 전면금지법 소송… “추측 토대로 위헌적 조치”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/804.png",
            pressLogoAlt: "데이터뉴스",
            lastEditted: "05월 23일 17:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9220%2F172228_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt: "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
              mainArticleTitle:
                "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
            },
            subArticles: [
              "CU, GS25와 매출 격차 200억 원대로 좁혔다",
              "LG이노텍, 전장부문 다시 흑자…매출은 매년 새기록",
              "코스맥스, 부채비율 재상승…화장품 빅5 중 압도적 1위",
              "CJ ENM, 구창근(엔터)·윤상현(커머스) 대표 희비",
              "손지훈 체제 휴젤, 5년 만에 수익성 회복 이어 최고 실적 쓸까?",
              "카카오게임즈, 3년 만에 1분기 매출 줄었다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
            pressLogoAlt: "초이스경제",
            lastEditted: "05월 23일 17:25 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9164%2F173124_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "중국, 미국에 화해 제스처?",
              mainArticleTitle: "중국, 미국에 화해 제스처?",
            },
            subArticles: [
              "日 대기업 임금인상률, 30년 만에 '최대'",
              "기관이 코스피 '견인'...2차전지 · 바이오주 '상승', 삼성전자 '소폭 하락'",
              '"SK에코플랜트, 친환경에너지 솔루션 기업 변신 중"...SK증권',
              "싼 게 비지떡?...'중국 국민車' 훙광 미니, 판매 급감",
              "코스닥...엘앤에프 · 이브이첨단소재 · 휴마시스 '껑충', 바이오니아 '하락'",
              "DL이앤씨 '장중 주가 강세'...한국투자증권 \"플랜트사업 주목\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
            pressLogoAlt: "이뉴스투데이",
            lastEditted: "05월 23일 21:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9189%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
              mainArticleTitle:
                "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
            },
            subArticles: [
              "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
              "조양래 한국타이어 명예회장 정신감정 초읽기···‘분쟁 2막’ 열리나",
              "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
              "리플, CBDC·스테이블코인 발행 지원 풀서비스 플랫폼 출시",
              "[2023하반기전망] ②수출회복 기지개···중국 거래 정상화 될까",
              "경상북도 칠곡군 동명면 25번 국도에서 대형 교통사고 발생",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
            pressLogoAlt: "한겨레",
            lastEditted: "05월 23일 22:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9009%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
              mainArticleTitle:
                "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
            },
            subArticles: [
              "[단독] 윤 대통령, 싱가포르식 ‘외국인 가사도우미’ 검토 지시",
              "민주, 비명계에 ‘악성 문자폭탄’ 강성당원 첫 제명",
              "‘엘니뇨=폭염?’ 한반도엔 더위 아니라 비 몰고 온다",
              "주4일제, 수요일 쉬면 어떨까?…“1년에 13개월치 성과”",
              "서울 온 중국 외교부, 대만 문제 관련 ‘강한 유감’ 밝혀",
              "윤, 건설노조 때릴 때도 ‘전 정부’ 탓…“불법 집회 방치한 결과”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/968.png",
            pressLogoAlt: "한국금융신문",
            lastEditted: "05월 23일 21:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9193%2F212834_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
              mainArticleTitle:
                "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
            },
            subArticles: [
              '정유신 서강대 기술경영대학원장 "우리나라 노동경직성 등 금융허브 도약 한계 많아" [2023 한국금융미래포럼]',
              "김주현 금융위원장·김광수 은행연합회장·임종룡 우리금융 회장…금융권 CEO 디지털 대전환 논의 [2023 한국금융미래포럼]",
              "윤창현 의원 “금융·비금융 두터운 규제 얇아져…'금융서비스산업' 추진될 것”[2023 한국금융미래포럼]",
              '황보현우 하나금융지주 데이터본부장 "영업점 업무량 데이터를 통해 효율화" [2023 한국금융미래포럼]',
              "조영서 KB국민은행 디지털플랫폼 총괄 “금융사, 빅테크 대응 위해 플랫폼으로 진화” [2023 한국금융미래포럼]",
              "김주현 금융위원장 “新기술·금융상품 대응 소비자보호 장치 마련” [2023 한국금융미래포럼]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
            pressLogoAlt: "이데일리",
            lastEditted: "05월 23일 22:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9020%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
              mainArticleTitle:
                "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
            },
            subArticles: [
              '"주가조작 못 잡아낸 이유는…" 거래소, 8개 종목 분석 마쳐',
              '“한국, 美전술핵 공유 원한다면 낡은 핵 저장시설부터 고쳐라"',
              "韓시찰단 오염수 점검 첫날에 日, 후쿠시마 수산물 수입 촉구",
              "'미술관 비워달라' SK, 노소영에 부동산 인도소송 제기",
              "아파트 주민의 만취 '묻지마 폭행'…경비원 안와골절 피해",
              '심형탁, 母 5억 빚 대신 안 갚는다…법원 "배상 책임 없어"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
            pressLogoAlt: "한국일보",
            lastEditted: "05월 23일 22:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9010%2F221251_001.gif%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
              mainArticleTitle:
                "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
            },
            subArticles: [
              '기사시험 답안지 609장 파쇄… 산업인력공단 "재시험 기회 부여"',
              "러시아 본토서 허 찔린 푸틴... '우크라 지원' 반군에 공격당했다",
              "후쿠시마 시찰의 핵심... ALPS를 제대로 봐야 하는 이유",
              '노란 물결…노무현 14주기 "꺾이지 않는 마음 필요한 때"',
              "부천시의원 성추행 의혹 영상 보니...목 안고 등 부비부비",
              "\"'대전판 도가니 사건' 성폭행범, 수원서 초등학교 교사 돼\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
            pressLogoAlt: "중앙일보",
            lastEditted: "05월 23일 21:41 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9008%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
              mainArticleTitle: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
            },
            subArticles: [
              "대북송금 안부수 실형…김성태,이화영 보지도 않았다",
              "씨 또 날아왔나…강남 한복판 마약 양귀비 80주 발견",
              "회춘에 미친 백만장자, 17살 아들 피까지 수혈받았다",
              "문제집 70% 베껴 시험 출제...강남 고교 결국 재시험",
              "70% 세일에 불티나게 팔린 패딩·모피…'철없는' 장사",
              '한밤 "180마리 달라"…굽네치킨 용산역점 대박난 사연',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/920.png",
            pressLogoAlt: "아시아투데이",
            lastEditted: "05월 23일 18:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9113%2F182856_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
              mainArticleTitle:
                '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
            },
            subArticles: [
              '고성국 "네이버·카카오 제평위 활동 중단, 국민의 승리"',
              "檢, '김남국 코인' 거래내역 분석…위믹스 증권성도 검토",
              "누리호 첫 실전발사 '운명의 19분'…위성 궤도 안착 관건",
              "檢, '민주당 돈봉투' 윤관석·이성만 주중 구속영장 검토",
              "20대도 발길 돌린 은행 무인점포…고령층엔 '무용지물'",
              "'IB통' 정영채, NH證 새 먹거리 'OCIO 시장' 정조준",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/123.png",
            pressLogoAlt: "조세일보",
            lastEditted: "05월 23일 19:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9040%2F190432_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
              mainArticleTitle:
                "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
            },
            subArticles: [
              "“한은, 연내 기준금리 동결할 것…금융불안은 유동성 정책으로 대응”",
              '[여의도 이슈 브리핑]유승민 "尹 정부, 中 외교 나설 차례"',
              "[기고문] 세무사에게 종합소득세신고를 의뢰해야 하는 이유",
              "원·달러 환율, 5.4원 내린 1312.7원 마감…5거래일 연속 하락",
              "농기구로 살해 후 유기, 벼랑 끝 농촌마을 인력난",
              "②남느냐 떠나느냐…'김창기·강민수' 거취에 쏠린 눈",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/974.png",
            pressLogoAlt: "BBS NEWS",
            lastEditted: "05월 23일 21:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9198%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
              mainArticleTitle:
                '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
            },
            subArticles: [
              "검찰, '돈봉투 의혹' 송영길 캠프 지역상황실장 압수수색",
              "[단독] 서울시 ‘365열린어린이집’ 휴일 지정 '종교편향' 논란",
              "'깡통전세' 100채로 전세·대출 사기…149억 가로챈 일당 검거",
              '尹 "디지털 무역규범 노력" WTO사무총장 "한, 디지털분야 환상적"',
              "대선 기간 '김남국 코인 거래' 검찰 수사선상에",
              "[누리호발사 D-1]누리호 발사대 기립...발사준비 순조로워",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
            pressLogoAlt: "조선일보",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9007%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
              mainArticleTitle:
                "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
            },
            subArticles: [
              "'이화영 대북송금' 문건엔 \"김정은에 50억 약속 보고\"",
              "4천억 배임 배상윤, 카지노서 수백억 도박·황제 도피",
              "中 한한령 재점화? 한류스타 정용화, 예능출연 취소",
              'MBC·방문진 "감사원 감사 못 받겠다" 소송',
              "한국, 말레이와 FA-50 18대 수출 최종계약…1조2천억",
              '"文 정부는 실패…연필 미스터리 알아야 규제 푼다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
            pressLogoAlt: "아시아경제",
            lastEditted: "05월 23일 22:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9019%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
              mainArticleTitle:
                '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
            },
            subArticles: [
              '불공정거래와 전쟁…"범죄자, 시장에 발 못 붙이게 할 것"',
              '후쿠시마 시찰단, 점검 첫 날 "보려고 계획한 설비 다 봤다"',
              '빌 게이츠 "미래 AI 개인 비서 개발 중요"',
              '김건희 여사 "한국에 대한 관심, 발길로 이어져야"',
              '文 입장에 환호·韓총리에 "내려가"…노무현 14주기 추도식',
              "외교부 “中, 네이버 현지 접속 차단? 유관 기관과 확인 중”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
            pressLogoAlt: "톱데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9245%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
              mainArticleTitle: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
            },
            subArticles: [
              "[신생 LCC 운항 4년] ① 플라이강원, 경영난 장기화에 존폐 위기",
              "[금융권 수장 교체] [우리은행] 상업 Vs.한일 누가될까",
              "AI 행동분석 기업 플레이태그, 40억 투자유치",
              '넷마블 마브렉스 "누구에게도 사전 정보 제공 사실 없다"',
              "'한 달 살기' 플랫폼 리브애니웨어, 50억 투자유치",
              "백영훈 넷마블 전 부사장, 스마일게이트메가포트 수장 낙점",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/824.png",
            pressLogoAlt: "서울파이낸스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9243%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
              mainArticleTitle: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
            },
            subArticles: [
              "금통위 D-2일···3회 연속 기준금리 동결 '유력'",
              "대우조선 45년만에 '한화오션'으로 재출범···경영정상화 등 과제 산적",
              "여야, 전세사기 특별법 합의···최우선변제금 10년 무이자대출",
              "'금리 정점론'에 '변동이냐 고정이냐' 깊어지는 고민",
              "中, 美 반도체 제재에 마이크론 '판금' 맞불···韓반도체, '불똥튈라' 노심초사",
              'KB증권, 불법 자전거래 의혹 부정···"유동성 공급 위한 것일 뿐"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png",
            pressLogoAlt: "일요신문",
            lastEditted: "05월 23일 16:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9131%2F164029_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
              mainArticleTitle:
                "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
            },
            subArticles: [
              "어린이집 '괴롭힘' 사건이 노무사 vs 행정사 갈등으로 번진 까닭",
              "하락세 주춤해졌지만…부동산 반등까지는 '산 넘어 산'",
              "‘직원 사망’ LG디스플레이, 대책위원회 구성…“명확히 진단할 것”",
              "경실련 “국회의원 평균 재산, 3년 새 7.3억 증가”",
              "채권전문가 89% “이번주 금통위 기준금리 동결”",
              '유승민 "윤석열 정부, 이제는 대중 외교 나설 차례"',
            ],
          },
        ],
      },
      {
        title: "방송/통신",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
            pressLogoAlt: "연합뉴스TV",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9109%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'김남국 코인 논란' 신경전 지속…여야, 봉하마을 총집결",
              mainArticleTitle:
                "'김남국 코인 논란' 신경전 지속…여야, 봉하마을 총집결",
            },
            subArticles: [
              "누리호 우주 향해 기립…내일 발사 여부 곧 결정",
              '후쿠시마 시찰단, 오염수 현장점검…일본 "이해 깊어지길"',
              "평양 비행장에 대규모 병력대열…열병식 동향 또 포착",
              "中 \"'韓반도체업체 中수출 자제' 美요구 반대\"",
              "'마약 5종' 유아인 내일 구속심사…\"증거인멸 정황\"",
              '잠복기 넘긴 구제역 소강상태?…"아직 안심은 일러"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/980.png",
            pressLogoAlt: "KBC광주방송",
            lastEditted: "05월 23일 21:54 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9205%2F215944_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "여야 정치권 노무현 전 대통령 추도식 대거 참석..날선 장외전",
              mainArticleTitle:
                "여야 정치권 노무현 전 대통령 추도식 대거 참석..날선 장외전",
            },
            subArticles: [
              '7번째 우주로켓 발사.."로켓 보러 고흥 가자"',
              "7~8월 남부 지방 집중호우..더위는?",
              "국가자격시험서 채점도 안 한 609명 답안지 파쇄..재시험",
              "5·18 43주년인데 '갈등'과 '반목'만..시민들 \"씁쓸하다\"",
              "전남의대특별법, 21대 국회 폐기 수순",
              "\"장거리 통학전쟁에 내몰릴 판\"..전라남도교육청 '나 몰라라'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/903.png",
            pressLogoAlt: "채널에이",
            lastEditted: "05월 23일 22:16 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9108%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독]현금 받아 유류비 쓰고, 후원금으로도 주유비 ‘줄줄’",
              mainArticleTitle:
                "[단독]현금 받아 유류비 쓰고, 후원금으로도 주유비 ‘줄줄’",
            },
            subArticles: [
              "[단독]“이화영 ‘경기도 50억 지원 약속’ 김정은에게도 보고돼”",
              "“서울대 붙고 의대 준비”…지방 학원가도 ‘초등 의대반’",
              "로또 1등 되고도 “세금 못 내”…고액 체납자 550여 명 추적",
              "[단독]만취 주민 ‘묻지마 폭행’에 경비원 안와골절",
              "‘성추행 의혹’ 부천시의원, 이재명 윤리감찰 지시에 탈당",
              "[여랑야랑]이상민 활용법? / 김건희 ‘명예위원장’ / 위정현 “살해 협박 받았다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/421.png",
            pressLogoAlt: "뉴스1",
            lastEditted: "05월 23일 22:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9107%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '尹, 기업인에 "세계는 내 시장…두려워마라"',
              mainArticleTitle: '尹, 기업인에 "세계는 내 시장…두려워마라"',
            },
            subArticles: [
              "韓시찰단, 후쿠시마 방문…오염수 9시간 점검",
              '"누리호, 낙뢰 가능성 낮아…내일 시각 발표"',
              "학교도 이렇게 안 해…국가시험 답지 파쇄 황당",
              '최태원 측, 노소영에 "부동산 내놔라" 점입가경',
              "\"유재석 빈소에\"…'나훈아 사망' 가짜뉴스, 100만명 낚였다",
              "4세서 성장 멈춘 29세女 \"줄 수 있는 건 몸뿐\" 장기기증 '울컥'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/934.png",
            pressLogoAlt: "아리랑TV",
            lastEditted: "05월 23일 22:38 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9146%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Final checks complete on rocket Nuri before Wednesday's third launch",
              mainArticleTitle:
                "Final checks complete on rocket Nuri before Wednesday's third launch",
            },
            subArticles: [
              "S. Korea aims to boost auto parts industry by injecting US$ 10.9 bil.",
              "Here's the 30-year history of S. Korea's rocket science technology",
              "S. Korea's 3rd launch of Nuri rocket to boost investment in private space sector",
              "S. Korean experts begin on-site inspection of Fukushima Plant on Tuesday",
              "Fmr. S. Korean president Roh Moo-hyun remembered on 14th anniversary of death",
              "S. Korea's total hourly wage gap between regular and temporary workers widened in 2022",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
            pressLogoAlt: "JTBC",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9110%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독] 공직자 재산 전수조사…김소영, 백지신탁 '불복'",
              mainArticleTitle:
                "[단독] 공직자 재산 전수조사…김소영, 백지신탁 '불복'",
            },
            subArticles: [
              "알프스 필터링, 문제없나? '후쿠시마 오염수' 팩트체크",
              '"차 빼달라" 말에 뼈 부러지게 폭행한 전직 보디빌더',
              "노무현 추도식 날 '이재명 사퇴론' 불 지핀 친문계",
              "'강남 학원 마약' 주범은 성매매업소 갈취 '여청단' 출신",
              "채점 전에 파쇄된 답안지…내 점수는요? 수험생 '황당'",
              "\"아무것도 없다\"더니 금고엔 현금다발 두둑…'로또 당첨금'도 빼돌린 체납자",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png",
            pressLogoAlt: "뉴시스",
            lastEditted: "05월 23일 22:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9078%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '尹 "우리 기업들, 세계 속으로 민간주도 경제 작..',
              mainArticleTitle:
                '尹 "우리 기업들, 세계 속으로 민간주도 경제 작..',
            },
            subArticles: [
              '누리호 발사관리위 "준비 차질없다…내일 시각 결정"',
              "여야, 盧 추도식 집결…시민들, 與 향한 야유도",
              '與, 야간집회 금지 추진에…野 "자유 박탈" 반발',
              '尹, WTO사무총장에 "韓 디지털 인재 인턴 기회달라"',
              "LG, 단독 1위…두산 장원준, 1844일만에 승리",
              '심형탁, 母 빚 5억 대신 안 갚는다…"책임없어"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png",
            pressLogoAlt: "지지통신",
            lastEditted: "05월 23일 22:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9092%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "富士通、コンビニ交付システム停止　最長６月４日まで、不具合点検",
              mainArticleTitle:
                "富士通、コンビニ交付システム停止　最長６月４日まで、不具合点検",
            },
            subArticles: [
              "公金受取口座を誤登録　マイナンバーひも付けミス―デジタル庁、総点検実施",
              "中国、軍備増強前倒しも　反撃能力、防衛費増を明記―防衛白書案",
              "全健保組合に点検要請　マイナ保険証の誤登録問題―厚労省",
              "ムラピ山が噴火　インドネシア",
              "Ｇ７巡り垂大使に反発　「日本が内政干渉」―中国外務省",
              "１５万人規模の応援部隊　北海道７割、東北３割―日本・千島海溝地震で計画・中央防災会議",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
            pressLogoAlt: "YTN",
            lastEditted: "05월 23일 22:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9015%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "中, 한국 포털 전면 차단…인터넷 통제 강화 이유는?",
              mainArticleTitle:
                "中, 한국 포털 전면 차단…인터넷 통제 강화 이유는?",
            },
            subArticles: [
              "시찰단 집중 점검 'ALPS·K4탱크'는 오염수 처리 핵심 시설",
              '日 "한국 측 이해 깊어지길…후쿠시마산 농수산물도"',
              '[단독] 항공우주연구원에서 통화녹음 무단 청취…"경비원들이 전화 도청"',
              '尹 "노조 집회 불법행위 용납 없다…엄정한 법 집행"',
              "'숙명여대 화장실에서 살인' 예고 글 올린 남성 검거",
              '검찰 "라덕연 범죄수익 152억 원 확보"…이번 주 기소 전망',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/906.png",
            pressLogoAlt: "KNN",
            lastEditted: "05월 23일 20:58 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9135%2F210002_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성형수술이 무좀 치료로 둔갑, 병원장 등 90명 적발",
              mainArticleTitle:
                "성형수술이 무좀 치료로 둔갑, 병원장 등 90명 적발",
            },
            subArticles: [
              "학교 안도 사고 위험...시설관리는 누가?",
              "봉하마을, 다시 노란물결",
              "'한화오션' 탄생..대우조선 45년 만에 역사 속으로",
              "<앵커리포트>-BIFF 인적쇄신만이 답이다",
              "한국형 경전투기 FA-50, 말레이시아 18대 수출 계약",
              "'부산대 통합 반대' 부산교대 이틀동안 휴업",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
            pressLogoAlt: "한국경제TV",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9014%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "2차전지 담는 외국인…1조 공매도는 '걸림돌' [증시프리즘]",
              mainArticleTitle:
                "2차전지 담는 외국인…1조 공매도는 '걸림돌' [증시프리즘]",
            },
            subArticles: [
              "영수증 없는 실손 청구, 모든 병원에서 가능? [슬기로운 금융생활]",
              "내달 입주물량 폭탄…집 주인들 '망연자실'",
              '"콧대 높은 명품업계, 서울에 공들이는 이유는…"',
              'SK그룹, 노소영 관장측에 소송…"사옥에서 나가달라"',
              "'1,900원 김치볶음밥' 나왔다...CU, 가성비 '득템시리즈' 확대",
              '중국서 네이버 차단?…中 "우린 모르는 일"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
            pressLogoAlt: "MBC",
            lastEditted: "05월 23일 21:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9011%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '마지막 유서 추가 발견‥"노조 탄압 중단시켜 달라"',
              mainArticleTitle:
                '마지막 유서 추가 발견‥"노조 탄압 중단시켜 달라"',
            },
            subArticles: [
              '윤 대통령 "불법 시위 엄정 대응"‥야당 "최종 목표 시민 자유 빼앗는 것?"',
              "한국시찰단 상관없이 오염수 방류 강행하나?",
              '방문진 감사하는 감사원 "MBC 자료 내놔라"',
              "'누리호 발사 D-1'‥준비·날씨 모두 순조로워",
              "민주당 부천시의회 의원 성추행 고발‥감찰 지시하자 탈당",
              '"모든 유서 동일 필체"‥전문가들 유서대필 일축',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0803/nsd20247547.png",
            pressLogoAlt: "EBS",
            lastEditted: "05월 23일 21:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9076%2F211256_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "외국 친구와 토론·글로벌 역량 키운다…서울, '국...",
              mainArticleTitle:
                "외국 친구와 토론·글로벌 역량 키운다…서울, '국...",
            },
            subArticles: [
              '"서울 학생, 세계 시민으로…비판·논리력 키운다" [지역교육이 미래다]',
              "<뉴스브릿지> 테두리 밖 청소년들의 생존기…소설 <경우 없는 세계>",
              "첨단분야 '계약학과' 문턱 낮춘다…'계약정원제'도입",
              "교사 100명에게 듣는다…디지털 전환 위한 교육 현장 과제는?",
              "'박사'와 함께 책 읽고 토론…대학‧고교 연계 독서교육 [지역교육이 미래다]",
              "서울시교육청 '기초학력 공개' 조례안 대법원 제소",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/902.png",
            pressLogoAlt: "TV조선",
            lastEditted: "05월 23일 22:19 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9105%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '후쿠시마 원전 본격 시찰…"ALPS부터 K4탱크까지 점검"',
              mainArticleTitle:
                '후쿠시마 원전 본격 시찰…"ALPS부터 K4탱크까지 점검"',
            },
            subArticles: [
              '尹 "민노총 불법집회, 국민이 용납 하기 어려울 것"',
              "노무현 14주기 추도식에 여야 집결…고성으로 '얼룩'",
              "아태협 안부수 징역 3년 6월…쌍방울 대북사건 첫 유죄",
              'FA-50 18대, 1조2000억 말레이 수출…"2차 계약 기대"',
              "'4600억대 횡령 혐의' KH 배상윤, 수백억 '황제도피'",
              "채점도 안하고 609개 답안지 파쇄…나사 빠진 인력공단",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0420/nsd105139164.png",
            pressLogoAlt: "머니투데이방송",
            lastEditted: "05월 23일 17:45 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9112%2F175207_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "금융당국·검찰, '주가조작과의 전쟁' 선포…비상대응체계 선언",
              mainArticleTitle:
                "금융당국·검찰, '주가조작과의 전쟁' 선포…비상대응체계 선언",
            },
            subArticles: [
              "삼성 헬스 미래는 '수면'...손목 위 헬스케어 공략",
              "닻 올린 한화오션…조선업 지각 변동 시작되나",
              "빨라지는 서울 정비사업 시공사 선정…건설사 선별수주는 심화",
              "가시밭길 '1호 상장'… 왕관의 무게를 견뎌라",
              "작년 배달이륜차 보험료 224만원…가입 문턱 여전",
              "[2023 주류 트렌드]② 컬리·올영도 취했다…온라인 주류 격전 예고",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
            pressLogoAlt: "SBS",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9013%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[단독] 강승규 수석의 각별한 고향 사랑…'큰 그림'?",
              mainArticleTitle:
                "[단독] 강승규 수석의 각별한 고향 사랑…'큰 그림'?",
            },
            subArticles: [
              "[단독] '여대 살인 예고' 현장 간 경찰 \"학생이 들어가 봐\"",
              "서울대 다녀도 불만족…사라진 신입생 200여 명 어디로?",
              "[단독] 꼬인 혀로 시비 걸고 '퍽'…형사 회식 후 벌어진 일",
              '누리꾼들 "진짜야?"…뉴욕 증시까지 출렁이게 한 사진',
              "중국이 타이완 공격하면 4개 전쟁 동시발발?",
              "[사실은] 오염수 보관 'K4 탱크' IAEA 평가는?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png",
            pressLogoAlt: "TJB대전방송",
            lastEditted: "05월 23일 17:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9366%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "(R)'최저임금보다 낮아' 공무원 임금 인상하라!",
              mainArticleTitle: "(R)'최저임금보다 낮아' 공무원 임금 인상하라!",
            },
            subArticles: [
              "'탈옥수' 신창원 대전교도소에서 또 극단 선택 시도",
              "상병헌 세종시의장, 불신임안 가결에 의장직 상실",
              "(R) 목원대·배재대 '충청 사립대 첫 연합대학'.. 완전 통합도 목표",
              "대전시-국민의힘 당정협의회..내년 국비 확보 총력",
              "(R) '올해 벌써 11번째 황사'..지역 역대 여덟 번째로 많아",
              "음주운전 재판 중 또다시 음주운전한 50대 구속기소",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
            pressLogoAlt: "KBS",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9044%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘떡 본 김에 제사’까지?…日 “수산물 수입 중단 풀었으면”",
              mainArticleTitle:
                "‘떡 본 김에 제사’까지?…日 “수산물 수입 중단 풀었으면”",
            },
            subArticles: [
              "[단독] ‘10대 성착취’ 순경, 수사 도중 피해자 회유…경찰 대응 ‘도마 위’",
              "누리호 발사대 기립 완료…내일 오후 6시 24분경 우주로",
              "[단독] ‘생수’로 8200% 수익?…7천 명 울린 다단계 금융 사기",
              "특급호텔 화장실서 ‘불법 촬영’ 피해…호텔 측 “조용히 해달라”",
              "허술한 ‘비대면 카드 발급’…위조 신분증에 뚫려",
              "체납세액 100조 원…로또 1등도 안 낸다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/340.png",
            pressLogoAlt: "OBS",
            lastEditted: "05월 23일 20:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9070%2F203000_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성범죄 가담 고교생이 초등교사로…경기교육청 조사",
              mainArticleTitle:
                "성범죄 가담 고교생이 초등교사로…경기교육청 조사",
            },
            subArticles: [
              "9명이나 숨졌는데…잊혀진 수원 파장초 아동 인권",
              "'깡통전세' 100채로 사기…149억 챙긴 일당 체포",
              "'멸종 위기종 쉼터' 영종 폐염전 사라질 위기",
              "국회의원 재산 3년 새 7.3억 늘었다…60명은 임대업자",
              '노무현 전 대통령 14주기…"역사는 더디지만 진보"',
              '국내로 눈 돌린 윤 대통령…"불법 집회 엄단"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png",
            pressLogoAlt: "SBS Biz",
            lastEditted: "05월 23일 21:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9111%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "간호사가 처방 해도 되나요?…불붙은 역할 논쟁",
              mainArticleTitle: "간호사가 처방 해도 되나요?…불붙은 역할 논쟁",
            },
            subArticles: [
              "\"밥도 안 넘어가\"…산인공 파쇄에 피해자 '부글부글'",
              "'뾰로통'해진 대한항공…'난감'해진 산업은행",
              "'완공 3년' 엘시티…추가 공사비 둘러싼 법적 공방",
              "SK그룹, 노소영 미술관 상대로 부동산 인도 소송",
              "로또 잭팟에도 세금은 외면…557명 재산 추적",
              "Z세대, 알바 퇴사 이유는?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png",
            pressLogoAlt: "MBN",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9012%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '윤 대통령, 노조 엄단 카드…"용납 없을 것"',
              mainArticleTitle: '윤 대통령, 노조 엄단 카드…"용납 없을 것"',
            },
            subArticles: [
              '[속보] 누리호 발사관리위 "내일 발사 확정…특이사항 없어"',
              '"특별법, 결국 빚 더하기 빚"…국회 앞서 경찰과 몸싸움',
              "손자 잃은 할머니 절규에 재판부 수용…급발진 의혹 감정",
              '한밤중 걸려온 전화…"치킨 180마리 배달 될까요?"',
              '"곰팡이 펴서 버린다? 이 식품은 먹어도 돼"',
              "쓰레기 더미에 숨 거둔 돌고래의 '마지막 미소'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0922/nsd152336602.png",
            pressLogoAlt: "YTN사이언스",
            lastEditted: "05월 23일 22:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9168%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "날씨가 허락해야 쏜다...누리호 발사 조건은?",
              mainArticleTitle: "날씨가 허락해야 쏜다...누리호 발사 조건은?",
            },
            subArticles: [
              "누리호 3차 발사 D-1…추진제 공급 '탯줄' 연결 작업",
              '[단독] 항공우주연구원에서 통화녹음 무단 청취 사건..."녹음 잠깐 들은 걸 가지고 뭘"',
              '빌 게이츠 “미래 AI 개인 비서 개발 기업이 승자될 것"',
              "'챗GPT' 개발사 \"AI 위험 막기 위해 IAEA 같은 기구 필요\"",
              "시찰단 집중 점검 'ALPS·K4탱크'는 오염수 처리 핵심 시설",
              "[한 길 사람 속은?] 전화보다 문자…콜 포비아(Call Phobia) 혹시 나도?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/989.png",
            pressLogoAlt: "TBC",
            lastEditted: "05월 23일 09:43 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9215%2F094806_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "불안한 스쿨존...민원 급증*위반 행위 여전",
              mainArticleTitle: "불안한 스쿨존...민원 급증*위반 행위 여전",
            },
            subArticles: [
              "예술의 자유 vs 편향성 방지 안전장치",
              "팔공산 국립공원 승격 시도민 83.5% 압도적 찬성",
              "안동.영주시, 미급수 지역 지방상수도 상호 공급 협약",
              "PMC그룹,경주에 800억원 투자협약",
              "T타임- 신라 금관의 비밀...최고는 천마총",
              "군위 삼국유사테마파크 가정의 달 축제 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/981.png",
            pressLogoAlt: "TBS",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9206%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독]수동할증 미검정 택시 미터기, 왜 서울이었을까?",
              mainArticleTitle:
                "[단독]수동할증 미검정 택시 미터기, 왜 서울이었을까?",
            },
            subArticles: [
              "[밀착취재T] 멀쩡한 공원 밀고 골프장 만든다는 구청",
              "학교재정 따라 천 원의 아침밥도 '극과 극'...해법은?",
              "원전·수도권 지진 감시 촘촘하게…관측망 최대 2배 늘려",
              "#지하철요금 인상폭 줄까 #에너지취약계층에 소상공인도 #서울도 화성도 두 자녀면 다자녀",
              "공군 병사들, '계집 파일' 만들어 여군 간부 성희롱…군, 뒤늦게 대응",
              "첫 실전발사 D-1 누리호…오전중 발사대로 옮겨 기립",
            ],
          },
        ],
      },
      {
        title: "IT",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png",
            pressLogoAlt: "지디넷코리아",
            lastEditted: "05월 23일 22:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9027%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정의선 회장이 할아버지의 포니 쿠페를 복원한 이유",
              mainArticleTitle:
                "정의선 회장이 할아버지의 포니 쿠페를 복원한 이유",
            },
            subArticles: [
              "정부, 오늘 SKT 대상 28GHz 할당취소 청문 연다",
              "누리호 발사대 설치 작업 완료",
              "마이크로소프트 빌드2023 'D-1' 뭐가 나올까",
              "14조3천억원 투입해 미래 車 전장·부품산업 육성",
              '"밥솥, 구석진 곳에서 꺼내고 싶었어요"',
              "국산 서브컬처 신작, 상반기 다수 출시…흥행 시너지 낼까",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
            pressLogoAlt: "디지털타임스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9024%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[기획] `파업 쓰나미` 몰고올 노란봉투법 독소조항",
              mainArticleTitle:
                "[기획] `파업 쓰나미` 몰고올 노란봉투법 독소조항",
            },
            subArticles: [
              "‘이 턱선 실화냐’ 몰라보게 살 빠진 이준석…서울대 강연서 尹 ‘공개 저격’도",
              "[다시 부는 `바이코리아`] 반도체 부활 기대감에… 삼성전자 외인 지분 14개월來 최고",
              "盧추도식 정치권의 `동상이몽`… 산토끼 노린 與, 집토끼 잡는 野",
              "전세폐지 시사에… 임대사업자 `부글부글`",
              '구독형 IT 서비스 내세운 델… "멀티 클라우드로 혁신할 것"',
              "삼성, 6400만 잠자리 헬스케어로 공략",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
            pressLogoAlt: "디지털투데이",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9177%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘실검 부활?’ 거세지는 정치권 압박...네카오 플랫폼 확장 올스톱",
              mainArticleTitle:
                "‘실검 부활?’ 거세지는 정치권 압박...네카오 플랫폼 확장 올스톱",
            },
            subArticles: [
              "FTX 거래소 재개 가능할까?...레이 신임 CEO 행보 주목",
              "스마일게이트, 백영훈 대표 영입...“넷마블·111퍼센트 이끈 전문가”",
              "플레이태그, 40억원 규모 투자 유치…AI 행동 분석 기술로 교육·돌봄 시장 노크",
              "세일즈포스, 아인슈타인GPT·데이터 클라우드·플로우 전진배치",
              "비트코인 결제앱 스트라이크, 글로벌 확장...테더 USDT도 지원",
              "미디어·콘텐츠산업융합발전위 OTT 세액공제 논의...결론 못내",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/910.png",
            pressLogoAlt: "넥스트데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9115%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "삼성전자, 1분기 글로벌 TV 시장서 점유율 1위  수성...LG전자는 올레드 TV 1위",
              mainArticleTitle:
                "삼성전자, 1분기 글로벌 TV 시장서 점유율 1위 수성...LG전자는 올레드 TV 1위",
            },
            subArticles: [
              "KB국민은행, '2023 제1차 KB굿잡 우수기업 취업박람회' 개최",
              "욱씬욱씬 생리통, 가만 둬도 괜찮을까?",
              "현대자동차, ‘뉘르부르크링 24시 내구레이스’ 우승과 함께 8년 연속 완주 성공",
              "이랜드파크, 럭셔리 리조트 ‘그랜드켄싱턴 설악비치’ 개발 사업 본궤도 안착",
              "LG디스플레이 초대형 OLED·스트레처블 디스플레이 기술 리더십 ‘세계 학회에서 주목’",
              "이통3사, 2000년대 홍대 거리 경험할 수 있는 V컬러링 팝업 오픈",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/952.png",
            pressLogoAlt: "보안뉴스",
            lastEditted: "05월 23일 15:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9176%2F153103_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "랜섬웨어 방어를 완결짓게 해 주는 세 가지 키워드",
              mainArticleTitle:
                "랜섬웨어 방어를 완결짓게 해 주는 세 가지 키워드",
            },
            subArticles: [
              "[개인정보보호 우수사례-기획재정부] 사례 위주 맞춤형 콘텐츠 제작 및 온·오프라인 활용",
              "해병대 부사관, 불법도박 위해 장병 20여명 개인정보 넘겨 대출했다",
              "똑똑한 CCTV와 빅데이터·인공지능 기술로 국민안전을 지켜낸다",
              "인공지능이라는 기술이 우리를 위협할 때, 과연 사람은 막을 수 없게 될까?",
              "[이슈인터뷰] 보이스피싱 범죄 조직 소탕의 숨은 공신, KISA의 사이버전사들",
              "포티넷 코리아, AI 기반 SecOps 트렌드 및 네트워크 보안 현황 발표",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102040597.png",
            pressLogoAlt: "AI타임스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9353%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "오픈AI, 국제 AI규제기구 설립 제안",
              mainArticleTitle: "오픈AI, 국제 AI규제기구 설립 제안",
            },
            subArticles: [
              "메타, 오픈소스 다국어 음성 인식 모델 공개",
              "블리자드, '디아블로' 'WoW'로 학습한 이미지 생성 AI 개발",
              "인텔은 GPU, 엔비디아는 CPU 내세운 슈퍼컴퓨터 공개",
              "생성AI 기업에 초점 맞춘 상장지수펀드(ETF) 나왔다",
              "패러드로믹스, 내년 상반기 ‘뇌 임플란트’ 임상 추진",
              "오픈AI “다시 오픈!”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png",
            pressLogoAlt: "전자신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9026%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "제네시스 GV 6종으로 확대",
              mainArticleTitle: "제네시스 GV 6종으로 확대",
            },
            subArticles: [
              "LH, 용인 반도체 클러스터 조사설계·환경영향평가 착수",
              "현대차·기아 협력사, 美 공장 신설…현지 부품 조기 공급",
              "尹, “세계시장이 '내 시장'..과감히 뛰어들어야”",
              "'K-디자인 점프업 포럼' 출범...디자인 세계화 목표",
              "재택근무 바람 탄 보안산업, 시장규모·기업 수 둘다 늘었다",
              "[디지털 제조혁신 콘퍼런스]스마트공장 3만개 시대…디지털 전환과 데이터 활용으로 도약",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
            pressLogoAlt: "디지털데일리",
            lastEditted: "05월 23일 17:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9102%2F174159_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[K-웹툰과 규제下] “CP 계약 증가는 시대적 흐름” 선악 프레임에 반기든 플랫폼",
              mainArticleTitle:
                "[K-웹툰과 규제下] “CP 계약 증가는 시대적 흐름” 선악 프레임에 반기든 플랫폼",
            },
            subArticles: [
              "[르포] ② \"엡손 어디까지 봤니?\"…韓 22대 총선 용지도에 우주선·007에도 '불쑥' [DD전자상가]",
              "[DD 퇴근길] 우주강국의 꿈 다시 한 번…누리호 3차 발사 D-1",
              "[취재수첩] 지금 이 순간에도 경쟁국 AI는 무럭무럭 자란다",
              '[라이브코리아2023] "아인슈타인GPT, 영업 현장 도울 것…하반기 출시 목표"',
              "[라이브코리아2023] 생산성 플랫폼 '슬랙, AI 적용해 툴 고도화",
              "\"삼성이 저보고 두더지래요\"…삼성헬스+갤럭시워치, 수면유형 '동물표현' [DD전자상가]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/977.png",
            pressLogoAlt: "헬로디디",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9203%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '자연현상 바꾼다? 꿈의 기술 메타물질 "상용화 도전"',
              mainArticleTitle:
                '자연현상 바꾼다? 꿈의 기술 메타물질 "상용화 도전"',
            },
            subArticles: [
              "'누리호 3차' 실전 승부, 첫 탑승 주인공?",
              "[D-1]누리호 기립 완료",
              "조숙경 교수, PCST 네트워크 아시아 최초 회장 선출",
              "공격 않던 곰팡이, 남극 기온 오르자 식물 괴사시켰다",
              "연어 DNA로 그림 그리듯 위조 방지, 비전문가도 가능",
              "파멥신, 항반변성 항체 치료제 임상 추진···식약처 승인",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/917.png",
            pressLogoAlt: "IT조선",
            lastEditted: "05월 23일 19:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9142%2F193102_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘대우’ 떼고 ‘한화오션’ 출항… 새 대표는 카이스트 출신 에너지 전문가",
              mainArticleTitle:
                "‘대우’ 떼고 ‘한화오션’ 출항… 새 대표는 카이스트 출신 에너지 전문가",
            },
            subArticles: [
              "갤럭시폰 ‘MS 빙’ 아직… 구글 검색엔진 유지",
              "머스크, 또 변덕… 스타링크 韓 서비스 4분기로 연기",
              "EU “메타 개인정보유출 벌금 1.7조” 역대 최대 규모",
              "정부, 오늘 ‘SKT 28㎓ 주파수’ 취소 비공개 청문회",
              "‘직원사망’ LGD, 사외이사 중심 독립 대책위 구성",
              "‘위믹스 로비·김남국 코인 의혹’에 장현국 “몰라”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/818.png",
            pressLogoAlt: "IT동아",
            lastEditted: "05월 23일 18:54 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9230%2F190209_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "수도권 버스 색깔과 번호에 담긴 의미 살펴보니",
              mainArticleTitle: "수도권 버스 색깔과 번호에 담긴 의미 살펴보니",
            },
            subArticles: [
              "노스노비 “리울프 플랫폼과 친환경 종이 화병으로 화훼업계 ‘배민’ 노린다”",
              "구글, 인공지능으로 장애인 접근성 높인다",
              "내연기관과 다른 ‘전기차 경고등’…의미 살펴보니",
              "중국, 美 반도체 기업 '마이크론' 제재··· '기로에 선 한·미 반도체 기업들'",
              "서울과기대, 예비창업자 돕는 '2023년 메이커스페이스 제조창업교육' 실시",
              "다른 노트북 충전 어댑터를 사용하고 싶을 땐 이렇게![이럴땐 이렇게!]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
            pressLogoAlt: "블로터",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9054%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정부·녹십자 합작 BCG 백신, 빛을 볼 수 있을까 [보건의료 리포트]",
              mainArticleTitle:
                "정부·녹십자 합작 BCG 백신, 빛을 볼 수 있을까 [보건의료 리포트]",
            },
            subArticles: [
              "[단독] 포스코이앤씨, 이동식 모듈러 주택사업 본격 진출…디자인 차별화 '방점'",
              "네이버·카카오 '뉴스제평위 중단'에 뿔난 인터넷신문…\"심사 재개 일정 공개하라\"",
              "'네덜란드 반도체 장비사' ASM, 전략 생산기지로 한국 찜한 이유",
              "당장 갚을 빚 '1000억 이상' 롯데에너지머티리얼즈의 두 가지 부담 [Vault@Market]",
              "넷마블 마브렉스, '코인게이트' 내부 재조사 진행한다",
              "나라셀라, 몸값 고평가 논란 극복 못했다… 청약 경쟁률 4.8 대 1 ‘참패’ [Vault@Market]",
            ],
          },
        ],
      },
      {
        title: "영자지",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7251644.png",
            pressLogoAlt: "이코노타임즈",
            lastEditted: "05월 22일 11:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9358%2F113148_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Why the Bank of England is now more upbeat than the IMF",
              mainArticleTitle:
                "Why the Bank of England is now more upbeat than the IMF",
            },
            subArticles: [
              "America’s Roundup: US dollar drops after Fed's Powell hints at June pause , Wall Street slips, Gold gains, Oil slips as debt talks pause, Fed warns of high inflation",
              "Hyundai, Kia Paying $200M to Settle Car Thefts Suit in Us",
              "US: Democratic Senators Call on Biden to Invoke 14th Amendment to Prevent Debt Default",
              "Turkey's presidential election – how Erdoğan defied the polls to head into runoff as favorite",
              "Why rental properties are more likely to be mouldy and what's needed to stop people getting sick",
              "'Guardians of the Galaxy Vol. 3' urges us to defend real animals",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/040.png",
            pressLogoAlt: "코리아타임스",
            lastEditted: "05월 23일 22:35 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9043%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[ANALYSIS] Korea could join G7, but experts question its advantage",
              mainArticleTitle:
                "[ANALYSIS] Korea could join G7, but experts question its advantage",
            },
            subArticles: [
              "'Coalition of free world' to bring peace to Korean Peninsula: Yoon",
              "Financial regulator plans to freeze accounts of stock market manipulators",
              "Korea coach praises execution in U-20 World Cup victory over France",
              "N. Korean boat warned S. Korean cargo ship in East Sea to move out to open sea: source",
              "Nuri space rocket ready for third launch",
              "Hanwha Ocean launched amid volatile labor-management relations",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png",
            pressLogoAlt: "중앙데일리",
            lastEditted: "05월 23일 21:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9061%2F215731_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "China blocks Korea’s largest portal Naver",
              mainArticleTitle: "China blocks Korea’s largest portal Naver",
            },
            subArticles: [
              "Work moving quickly on Pyongyang's new launch facility",
              "Rival parties gather to commemorate late President Roh Moo-hyun",
              "Inflation expectations fall to 3.5 percent in May",
              "Homegrown rocket Nuri arrives at launch pad, awaiting liftoff Wednesday",
              "Hanwha's acquisition approved by DSME shareholders",
              "NCT Dream bodyguard may be prosecuted after pushing fan",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png",
            pressLogoAlt: "코리아헤럴드",
            lastEditted: "05월 23일 18:11 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9049%2F181638_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "Nuri rocket set for 3rd launch",
              mainArticleTitle: "Nuri rocket set for 3rd launch",
            },
            subArticles: [
              "Hotter, wetter summer and possible El Nino: weather agency",
              "Ex-airmen probed for making sexual comments against female superiors",
              "[Survive & Thrive] Getting around at night",
              "Man allegedly forced his way into elderly loner's home. He now asserts common-law marriage",
              "Samsung Health bets big on sleep-tracking",
              "Photos show glimpse into first steps of alliance",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
            pressLogoAlt: "YONHAPNEWS",
            lastEditted: "05월 23일 22:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9169%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Key political figures gather at memorial service of la...",
              mainArticleTitle:
                "Key political figures gather at memorial service of la...",
            },
            subArticles: [
              "Yoon slams labor union for overnight street rally",
              "Private group chief convicted in N. Korea remittance case",
              "韩外交部：韩中司局级磋商讨论彼此关切",
              "详讯：韩政府正了解门户网站NAVER是否在华被封",
              "韓国国産ロケット「ヌリ」　発射台固定完了＝２４日に３回目打ち上げ",
              "韓国の福島原発視察団　初日は「当初計画した設備確認」",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png",
            pressLogoAlt: "KBS World",
            lastEditted: "05월 23일 18:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9057%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "S. Korea's Nuri Rocket Transported to Pad for Wednesday's Launch",
              mainArticleTitle:
                "S. Korea's Nuri Rocket Transported to Pad for Wednesday's Launch",
            },
            subArticles: [
              "Yoon Blasts KCTU for Rally that Disrupted Public Order Last Week",
              "Yoon, EU Heads Stand with Ukraine, Agree to Minimize Regulation Risks",
              "韩运载火箭“世界”号第三次发射倒计时一天 已运至发射台",
              "尹锡悦强调推行基于自由和法治的外交政策",
              "国産ロケット「ヌリ号」発射台で翌日の打ち上げに備える",
              "盧武鉉元大統領没後14年 与野党が元大統領の精神に共感しつつ対立",
            ],
          },
        ],
      },
      {
        title: "스포츠/연예",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02321523.png",
            pressLogoAlt: "게임동아",
            lastEditted: "05월 23일 22:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9249%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'TL' 베타 테스트를 앞둔 엔씨 \"이용자 의견 경청해 과금 모델 정할 것\"",
              mainArticleTitle:
                "'TL' 베타 테스트를 앞둔 엔씨 \"이용자 의견 경청해 과금 모델 정할 것\"",
            },
            subArticles: [
              "웹젠, '뮤 온라인' 클래스 4종 리뉴얼과 이벤트 마련",
              "스노우파이프, 한국형 좀비 게임 '루터스'로 시장 공략",
              "규제 완화? 다시 차단? 오락가락 중국 상황에 게임사들 불안 초조",
              "넷마블, ‘마브렉스’ 정보 제공 없고, 혹시 모를 가능성까지 확인할 것",
              "컬러버스 재팬, 일본 리얼리티 XR 클라우드와 '메타버스' 사업 협력",
              "스팀 평가 압도적 부정적, 단체 보이콧… ‘워 썬더’ 이용자들 뿔났다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png",
            pressLogoAlt: "스포츠동아",
            lastEditted: "05월 23일 22:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9047%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "고현정, 이렇게 마른 모습 처음…52세의 美친 미모",
              mainArticleTitle:
                "고현정, 이렇게 마른 모습 처음…52세의 美친 미모",
            },
            subArticles: [
              "나훈아, 수백억 재산 남기고 교통사고 사망…영상 유출? 난리",
              "전현무가 또!? 박지민 아나 “전현무, 내 인생 흔들어놔”",
              "H유진 피투성이 얼굴…한일전 대참사 “경험 부족”",
              "장영란, ‘22억대’ 집 최초 공개…돈복 터지는 인테리어 눈길",
              "세븐♥이다해 “공개 후 욕밖에…결혼 전 위기”",
              "웃지 못하는 백종원, 체계 무너진 백반집→불만 속출",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png",
            pressLogoAlt: "텐아시아",
            lastEditted: "05월 23일 19:18 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9051%2F192308_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'태혜지' 이을 '도준경'…이도현·이준호·도경수, 男 버전 트로이카",
              mainArticleTitle:
                "'태혜지' 이을 '도준경'…이도현·이준호·도경수, 男 버전 트로이카",
            },
            subArticles: [
              '김나영, ♥마이큐와 동반 칸行 "잊지 못할 기억"',
              "제니·송중기보다 이선균, 정점 찍은 '칸의 남자'",
              "[TEN 포토] 이나영 '한편 한편 영화 같았다'",
              "블랙핑크 제니, '배우'로 칸 입성 \"용감해질 기회\"",
              '아오키 무네타카 "마동석 형, 유일무이 존재"',
              "적재, 김승진 '스잔' 리메이크",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png",
            pressLogoAlt: "마이데일리",
            lastEditted: "05월 23일 16:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9045%2F160515_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '이다해 "결혼 맞나 싶어" 벌써 후회?',
              mainArticleTitle: '이다해 "결혼 맞나 싶어" 벌써 후회?',
            },
            subArticles: [
              "이영지, 카리나 '외모 칭찬' 지적에 소신 밝혔다",
              '"母투자·빚보증으로 병 얻어"…심형탁, 무죄 판결',
              '고은아, 의료사고로 무너진 코 재수술 "고생 심해"',
              "'배우 데뷔' 제니, 샤넬 드레스 입고 칸 레드카펫",
              "'댄스가수 유랑단' 단장 이효리 \"재밌고 감동적 \"",
              '김태리 열정페이 요구,소속사가 사과 "팬 위해서"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png",
            pressLogoAlt: "스포티비뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9200%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'이도류' 오타니가 페드로-슈어저 기록을 넘어선다고? 지금 페이스면 역대 1위다",
              mainArticleTitle:
                "'이도류' 오타니가 페드로-슈어저 기록을 넘어선다고? 지금 페이스면 역대 1위다",
            },
            subArticles: [
              "제니, 칸에서 화려한 배우 데뷔…글로벌 스타들과 나란히[종합]",
              "어차피 MVP는 오타니라고? 작년에도 그랬지… 다시 ‘뉴욕의 거인’이 깨어난다",
              "유아인-공범A씨, 24일 구속영장 심사…마약 파문 수사 '갈림길'[종합]",
              "[포토S] 로하스, 2타점 적시타 세리머니",
              "아스널 '난감'...1순위 영입 대상에 뮌헨도 '가세'",
              "설날 장사 놓쳤던 박민교, 보은 장사에서는 한라 장사 올랐다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png",
            pressLogoAlt: "티브이데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9119%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "유아인 106일 만에 구속 갈림길, 24일 영장실질심사 [이슈&톡]",
              mainArticleTitle:
                "유아인 106일 만에 구속 갈림길, 24일 영장실질심사 [이슈&톡]",
            },
            subArticles: [
              "'성장' 거듭 피력한 엔하이픈, 이번 컴백에 이 갈았다 [종합]",
              "故설리 유작 '페르소나2', 볼 수 있을까 [이슈&톡]",
              "\"시리즈 계속 하고파\"…'범죄도시3' 마동석x이준혁, 더 강력해져서 돌아왔다 [종합]",
              "‘패밀리’ 김남희, 청부 사망 암시",
              "[TD포토+] 르세라핌 김채원 '볼수록 빠져드는 매력'",
              "[TD영상] 이나영, ‘잭 블랙 도플갱어’ 감독님과 포토타임",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1681569.png",
            pressLogoAlt: "SBS연예뉴스",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9154%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "강호동X이승기, 12년 만에 외치는 '강심장'…오늘 첫방",
              mainArticleTitle:
                "강호동X이승기, 12년 만에 외치는 '강심장'…오늘 첫방",
            },
            subArticles: [
              "또 한 편의 괴작?…영화 '보 이즈 어프레이드' 향한 궁금증",
              '발걸음 마다 "제니! 제니!"…뜨거웠던 칸 레드카펫 데뷔',
              "'미우새' 이상민, 평균 64세 '백발소년단' 깜짝 프로듀싱",
              '마동석 "연골·아킬레스건 없지만...관객이 원한다면 계속"',
              "유빈, 테니스 선수 권순우와 열애…9살 연상연하 커플 탄생",
              '권민혁 "폐교 촬영, 새벽마다 오싹한 경험했다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png",
            pressLogoAlt: "일간스포츠",
            lastEditted: "05월 23일 17:07 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9034%2F171337_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘母 빚으로 5억 소송’ 심형탁, 드디어 누명 벗었다..‘무혐의’ 판결 ",
              mainArticleTitle:
                "‘母 빚으로 5억 소송’ 심형탁, 드디어 누명 벗었다..‘무혐의’ 판결 ",
            },
            subArticles: [
              "김태리씨, 재능기부가 열정페이의 다른 말이란 걸 몰랐나요? [전형화의 직설]",
              "추성훈, 아버지 향한 그리움 “행복하게 돌아가셨다 생각”",
              "고두심 “전 남편 만나고 숨죽여 울던 子..지금도 마음 아파”",
              "이효리 “김태호PD 질려..다음엔 나영석PD와 방송하고 싶어” 폭소",
              "'배우 데뷔' 제니, 칸 레드카펫 빛냈다..파격 드레스로 시선강탈 [76th 칸]",
              "셔누, 천을 아낀 듯한 의상으로 드러낸 ‘섹시미’ [화보IS]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/802.png",
            pressLogoAlt: "스포츠Q",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9221%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "이승원 떴다!! 김은중호, 프랑스 격파 [U-20 월드컵]",
              mainArticleTitle:
                "이승원 떴다!! 김은중호, 프랑스 격파 [U-20 월드컵]",
            },
            subArticles: [
              "최정 박병호 이정후, 클래스 어디 가랴 [프로야구]",
              "'KCC 이적' 최준용, 거침 없는 입담 [프로농구]",
              "유빈♥권순우, 연상연하 '연예-스포츠' 커플은?",
              "‘이효리♥’ 이상순, 카페 논란 1년 만에 블루리본",
              "김태리, 번역 '재능기부' 요청했다 결국...",
              "'범죄도시3' 흥행 청신호, 사전예매량 14만 돌파",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/410.png",
            pressLogoAlt: "MK스포츠",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9132%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '심형탁, 5억 소송 무죄 "돈 빌린 사실 몰랐다"',
              mainArticleTitle: '심형탁, 5억 소송 무죄 "돈 빌린 사실 몰랐다"',
            },
            subArticles: [
              '김태리 측, 재능기부 논란 사과 "불편 드려 죄송"',
              "1844일 기다린 130승, 장원준·양의지가 해냈다",
              "‘김민성 그랜드슬램’ LG, SSG 잡고 단독 선두",
              '`아리랑 송구 논란` 강백호 "안일한 플레이 죄송"',
              "김경욱 전 SM 대표, H.O.T. 상표권 소송 패소",
              "팬 밀쳐 전치 5주..NCT드림 경호원, 檢 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/447.png",
            pressLogoAlt: "뉴스엔",
            lastEditted: "05월 23일 18:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9126%2F190007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김태리씨, 그건 재능기부가 아니라 노동력 착취라 불려요[이슈와치]",
              mainArticleTitle:
                "김태리씨, 그건 재능기부가 아니라 노동력 착취라 불려요[이슈와치]",
            },
            subArticles: [
              "차정숙 가수 복귀→취업사기당한 보아, 이효리 “보톡스보다 팬톡스죠”[종합]",
              "‘4년만 복귀’ 이나영, 눈물 쏙 뺐다…독특한 ‘박하경 여행기’ 어떨까 [종합]",
              "‘범죄도시3’ 마동석, 민중의 몽둥이 성능 확실하네[영화보고서:리뷰]",
              "‘母 대출 탓 활동 중단’ 심형탁, 5억 소송 무죄-사기방조 무혐의",
              "임영웅, 타일러 무차별 영어 공격에 동공지진 “제발 한국말로”",
              "제니, 카리스마 칸 레드카펫[포토엔HD]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png",
            pressLogoAlt: "OSEN",
            lastEditted: "05월 23일 17:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9055%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '브리트니 스피어스, A급 배우 2명과 불륜 폭로 "쉽지 않았다"',
              mainArticleTitle:
                '브리트니 스피어스, A급 배우 2명과 불륜 폭로 "쉽지 않았다"',
            },
            subArticles: [
              "마블 '토르' 배우, 돌연사 '충격'.. 레이 스티븐슨 향년 58세",
              "유빈♥︎권순우, 공개 열애..연상연하 스포츠∙연예 커플 계보",
              '"내년, 류필립에게 새 여자 나타나" ♥︎미나 경악',
              '박은지,성형미인 아니었네..똑닮은 母 자랑 "시니어 모델.."',
              "박보미·박요한 子, 열경기로 심정지→하늘의 별로",
              "이효리는 댄스가수 컴백, 이상순은 카페사장으로 성공",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png",
            pressLogoAlt: "스포츠조선",
            lastEditted: "05월 23일 21:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9033%2F211554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "블랙핑크 제니, 칸영화제 레드카펫 빛냈다..할리우드★ 압도한 인기 [종합]",
              mainArticleTitle:
                "블랙핑크 제니, 칸영화제 레드카펫 빛냈다..할리우드★ 압도한 인기 [종합]",
            },
            subArticles: [
              "심형탁 '5억 피소' 무죄 심경 “가족에 휘둘려 힘든 시간..억울함 풀었다”",
              "'53세' 고현정, 매일이 미모 성수기..다이어트로 되찾은 리즈",
              "추성훈 “父, 좋아하시던 골프 치다가 돌아가셨기 때문에...”",
              "방탄소년단 제이홉, 화생방→선물·편지 자제 당부…모범적인 軍생활",
              "박시은♥진태현, 다시 임신 준비하는 건강한 삶 “내눈엔 세계 최고 예쁜 러너”",
              "'박수홍♥' 김다예 “진짜 김다예? 남편 떠날 수 없는 이유는…”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223244325.png",
            pressLogoAlt: "스포츠투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9161%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"거뜬한 밀리언셀러" 하이브 아티스트, 놀라운 음반판매량 급증 [ST이슈]',
              mainArticleTitle:
                '"거뜬한 밀리언셀러" 하이브 아티스트, 놀라운 음반판매량 급증 [ST이슈]',
            },
            subArticles: [
              "'재능기부 논란' 김태리, 결국 공지 삭제 [ST이슈]",
              "마약 상습 투약 혐의 유아인, 구속심사 24일 진행…쏠리는 관심 [ST이슈]",
              '"한 풀었다" 확 달라진 에스파, 인기 고공행진 [ST이슈]',
              "'메이저 사냥꾼' 켑카, PGA 챔피언십 우승…이경훈 공동 29위",
              "\"인기 무섭기도\" 故 설리 유작 '페르소나2', 韓에서 볼까 [ST이슈]",
              "홍지은, 아이돌 미모",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0116/nsd19454239.png",
            pressLogoAlt: "스포츠춘추",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9175%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[썰띵크] 스코틀랜드행 황선홍 감독, 오현규 ‘AG 차출’ 논의 문제 있습니까",
              mainArticleTitle:
                "[썰띵크] 스코틀랜드행 황선홍 감독, 오현규 ‘AG 차출’ 논의 문제 있습니까",
            },
            subArticles: [
              "[J1리그] '스페인 월드컵 우승의 주역' 이니에스타, 올여름 축구화 벗는다",
              "[리그앙] ‘메시 없을 땐 왕’이었던 산체스, 2016-2017시즌 후 처음 ‘10골’ 넘었다",
              "[MLS] 프랑스 떠나 ‘LA로 향한’ 부앙가, 미국에선 막힘 없이 ‘골골골’",
              "‘능구렁이 품은 호랑이’ KIA 윤영철 향한 이구동성 “볼 스피드? 벌써 포기하긴 일러!” [춘추 이슈]",
              "[KBO] 장원준과의 ‘20년 인연’ 양상문 “958일 만의 선발 복귀, 팔 높이가 관건”",
              "‘팔꿈치 부상’ 텍사스 디그롬, 불펜 투구 시작…“복귀 시점은 미정” [춘추 MLB]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/311.png",
            pressLogoAlt: "엑스포츠뉴스",
            lastEditted: "05월 23일 22:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9150%2F222118_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김민성 역전 만루포+임찬규 QS…LG, SSG 9-1 대파→단독 선두+5연승 질주",
              mainArticleTitle:
                "김민성 역전 만루포+임찬규 QS…LG, SSG 9-1 대파→단독 선두+5연승 질주",
            },
            subArticles: [
              '김태리, 재능기부 논란 사과 "마음이 앞선 행동…깊이 반성한다"',
              "(여자)아이들 슈화, 물오른 섹시[엑's HD화보]",
              "'나훈아 사망설'에 소환된 유재석·임영웅...무근본 루머 확산",
              '고은아, 의료사고 피해 "예전 얼굴로 돌아가고 싶다"',
              "현빈♥손예진, 삼성동 빌라 팔아 18억 차익…그래도 부동산 수백억",
              "'정찬헌 3연패→부활의 QS→첫 승'…키움, 2연승+KT전 5연승 질주",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
            pressLogoAlt: "스포츠경향",
            lastEditted: "05월 23일 22:25 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9106%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "팬들에 재능기부 요구한 김태리, 결국 사과",
              mainArticleTitle: "팬들에 재능기부 요구한 김태리, 결국 사과",
            },
            subArticles: [
              "김태리 논란에 재소환된 김혜수 왜?",
              "“블핑 공연 왜 보러가” 中 ‘마녀사냥’ 논란",
              "미야 폭로 “K팝 아이돌 생활, 감옥같았다”",
              "‘공개열애’ 뷔-제니 ‘칸 데이트’도 이어가나",
              "이승엽 뚝심-장원준 투심···1844일 걸린 감격 130승",
              "제니, 칸 애프터 파티 ‘핫걸’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/947.png",
            pressLogoAlt: "조이뉴스24",
            lastEditted: "05월 23일 22:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9170%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[종합] \"무릉도원\"…'댄스가수유랑단', 이효리의 신드롬 욕심",
              mainArticleTitle:
                "[종합] \"무릉도원\"…'댄스가수유랑단', 이효리의 신드롬 욕심",
            },
            subArticles: [
              "[종합] '박하경 여행기' 이나영, 4년만 컴백…걷고 먹고 멍 때리는 8회차 여행",
              "'범죄도시3' 아오키 무네타카 \"부담 컸을 이준혁, 기대 멋지게 부응\"",
              "김선호 '귀공자', 청불 판정 \"폭력성·대사 수위 높아\"",
              "고현정, 이제 가녀리다 못해 앙상한 몸매…우아한 비주얼",
              "[퇴근길이슈] 제니 칸 레드카펫·이영지 카리나·오륭 결혼·손예진 빌라 매도",
              "'하하버스' 별 \"父, 의료사고로 세상 떠나...너무 그리워 엉엉 울기도\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
            pressLogoAlt: "스포탈코리아",
            lastEditted: "05월 23일 13:41 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9056%2F134554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "비키니 입고 ‘글래머+11자 복근’ 뽐낸 배구...",
              mainArticleTitle: "비키니 입고 ‘글래머+11자 복근’ 뽐낸 배구...",
            },
            subArticles: [
              "라리가 회장 맞아? “비니시우스, 너 제대로 알아라”",
              "김민재 새로운 스승? 나폴리, 스팔레티 후임으로 아르헨 감독 ...",
              "'하반신 마비 운동선수부터 소외계층까지' 추신수의 선행",
              "유아인, 마약공범 해외도피 시도 정황…검찰,...",
              "김민재-오시멘-홀란 공통점, FIFA랭킹 25위 ...",
              "김민재 맨체스터에 집 구했다며? 맨유 예상 베...",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/962.png",
            pressLogoAlt: "스포츠한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9187%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '김태리, 번역 재능기부 모집 논란 사과 "명백히 제 생각 부족했다"[전문]',
              mainArticleTitle:
                '김태리, 번역 재능기부 모집 논란 사과 "명백히 제 생각 부족했다"[전문]',
            },
            subArticles: [
              "어디로 던져… 박찬호의 악송구, KIA를 패배로 몰아넣다[스한 스틸컷]",
              "너무 깊은데… ‘항의 퇴장’ 황대인, 왜 격분했나[스한 스틸컷]",
              '박진만 감독 "오승환 돌아왔다… 이제 돌직구 아닌 노련미 갖춰"',
              "[스한:현장] '박하경 여행기' 이나영이 선사한 위로, 지친 일상에 쉼표를(종합)",
              "'안일한 송구' 논란에 사과문 남긴 강백호 \"질타받아도 마땅한 플레이\"",
              "'구미호뎐1938', 아마존프라임비디오 19개국에서 TOP10 랭크… 동남아서 돌풍",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/213.png",
            pressLogoAlt: "TV리포트",
            lastEditted: "05월 23일 18:03 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9122%2F181035_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "심형탁, 母 빚 때문에 5억 소송... “책임 없음” 무죄 판결",
              mainArticleTitle:
                "심형탁, 母 빚 때문에 5억 소송... “책임 없음” 무죄 판결",
            },
            subArticles: [
              "한고은, ♥신영수에 \"집에서 대판 싸우면 돼\".. 궁합보다 무슨 일?('신랑수업')",
              "'동상이몽', 스타부부 갈등 조장 ing...이젠 지겹다 [리폿@이슈]",
              'SM·YG 전 연습생 "금수저면 바로 데뷔"...계속되는 韓 연예계 폭로',
              "레오나르도 디카프리오, 1300억 저택에서 파티…현실 '개츠비' [할리웃통신]",
              "우쥬록스 전 대표, 어제(22일) 사임...새 대표는 '지인'이 맡는다 [공식]",
              "데프콘, 반쪽 된 근황 공개...\"7kg 감량했다\" ('컬투쇼')",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
            pressLogoAlt: "스포츠서울",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9032%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘불륜 논란’ 이소라, 소식 없더니 갑자기 ♥최동환과...",
              mainArticleTitle:
                "‘불륜 논란’ 이소라, 소식 없더니 갑자기 ♥최동환과...",
            },
            subArticles: [
              "이솔이, ♥박성광 반할 우월한 비키니 몸매",
              "이용식-이수민 부녀, KTX 무임승차 '대형 사고'",
              "‘69억 빚’ 이상민, 종기 수술도 방송 협찬?",
              "송종국 딸, 美친 춤 실력 '골프 시키는 게 맞나'",
              "H유진, TKO 패배.. 피멍 얼굴 공개 “추성훈 형님께 죄송”",
              "'열정페이 논란' 김태리 사과는없고...소속사의 이상한 ‘대리사과’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/108.png",
            pressLogoAlt: "스타뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9136%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김태리, '재능 기부' 구인 논란 \"생각 부족..깊이 반성\"[종합]",
              mainArticleTitle:
                "김태리, '재능 기부' 구인 논란 \"생각 부족..깊이 반성\"[종합]",
            },
            subArticles: [
              '빅히트 "방탄소년단 제이홉 선물 우편·현장 방문 삼가달라"[전문]',
              "H.O.T. 상표권 소송 일단락..5년 만에 지켜진 이름",
              '심형탁, 母 5억 빚 방조 누명 벗었다.."책임 없음 판결"',
              '이효리 "이제 김태호 질려..나영석 PD와 해보고파"',
              "'아리랑 송구 논란' 강백호 사과 \"저의 잘못 크다\"",
              "정용화, 中 예능 출연 불발..한한령에 막혔나 [★차이나]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/396.png",
            pressLogoAlt: "스포츠월드",
            lastEditted: "05월 23일 22:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9120%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '강백호 "질타 마땅한 플레이, 제 잘못이 커"',
              mainArticleTitle: '강백호 "질타 마땅한 플레이, 제 잘못이 커"',
            },
            subArticles: [
              '승리 부르는 나균안 "매 경기 집중할 뿐"',
              "심판 판정에 항의…KIA 황대인, 퇴장",
              '현아, 전시회 도전…"생각도 못한 기회"',
              "프랑스 낚은 김은중호… 韓 축구 미래가 움튼다",
              "심형탁, 꽃길 걷나…5억 소송 무죄 판결",
              '"공동 1위 맞대결? 솔직히 신경 쓰여"',
            ],
          },
        ],
      },
      {
        title: "매거진/전문지",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0728/nsd1110888.png",
            pressLogoAlt: "소년한국일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9060%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "NASA 새 우주복으로 본 첨단 기술의 세계",
              mainArticleTitle: "NASA 새 우주복으로 본 첨단 기술의 세계",
            },
            subArticles: [
              "‘새로운 꿈’ 바라보기···",
              "대한제국 외교 공간 ‘돈덕전’ 9월 문 연다",
              "한국인 밥상 채운 조기·명태·멸치를 만나다",
              "개학 후 일주일간 코로나 확진 학생 ‘5326명",
              "야산·길가에 핀 봄 야생화 반갑게 너의 이름을 불러본다",
              "별 탐험대 등 천문체험 프로그램 운영",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/384.png",
            pressLogoAlt: "한국대학신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9094%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "글로컬대학 마감 ‘초읽기’…일반대·전문대 통합 의사 속속 밝히는 대학가",
              mainArticleTitle:
                "글로컬대학 마감 ‘초읽기’…일반대·전문대 통합 의사 속속 밝히는 대학가",
            },
            subArticles: [
              "한균태 경희대 총장 “경희와 함께한 40년, 경희의 정신 이어받아 대학의 위상과 재정의 선순환 토대 만들 것”",
              "간호학과 졸업자 절반 1년 이내 퇴직…‘간호법’, 대학가에 필요한 이유는",
              "입학정원은 동결, 교원 채용은 감축…임용대란 ‘빨간 불’, 학생들은 ‘발 동동’",
              "위기의 한전공대, 출연금 단절·폐교까지 이어지나",
              "일반대 졸업자도 힘든 ‘네이버·삼정회계법인 입사’, 전문대졸이 이룰 수 있었던 비결은?",
              "[연중기획 ‘전문대, 지자체 협력이 답이다’] ③계명문화대-대구 달서구, 밀착 연계 기반으로 HiVE 사업 연착륙 ‘성공적’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0405/nsd15024245.png",
            pressLogoAlt: "뉴스펭귄",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9357%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "80년 전 멸종한  '신의 새'가 살아있다?",
              mainArticleTitle: "80년 전 멸종한 '신의 새'가 살아있다?",
            },
            subArticles: [
              "‘호주 멸종위기종 복원 프로젝트’ 첫 주인공, ‘워일리’",
              "[단독] 풍력단지 공사로 파괴된 정족산에 나타난 산양",
              "돌멩이가 된 플라스틱, '뉴락' 작가 장한나",
              "[우리 고장 멸종위기종 #68] 까나리맛집 백령도 찾는 점박이물범",
              "[그래픽멸종위기] 지느러미의 검정 반점이 특징인 '흑기흉상어'",
              "[펭귄의 서재] 기후'변화’가 기후'위기’가 된 이유",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/135.png",
            pressLogoAlt: "시사저널",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9151%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "응시생 꿈도 갈아버렸다…국가시험 초유의 ‘답안지 파쇄’ 사태",
              mainArticleTitle:
                "응시생 꿈도 갈아버렸다…국가시험 초유의 ‘답안지 파쇄’ 사태",
            },
            subArticles: [
              "여전히 한파인데…미·중 싸움에 시험대 오른 韓 반도체",
              "‘노란봉투법’ 직회부 임박에 발끈한 경영계…“통과되면 노사관계 파탄”",
              "‘여객기 내 실탄 발견’ 대한항공·인천공항공사 과태료 부과",
              "디폴트 열흘 남았는데…美 부채한도 세 번째 협상도 ‘불발’",
              "‘민주당 돈봉투 의혹’ 수사망 조이는 檢…宋 캠프 지역상황실장 압수수색",
              "만취 상태로 자전거와 충돌한 운전자…유명 변호사였다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/328.png",
            pressLogoAlt: "에이블뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9059%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "장애인보장구 반입 불가 ‘탑승거부’ 아시아나 인권위행",
              mainArticleTitle:
                "장애인보장구 반입 불가 ‘탑승거부’ 아시아나 인권위행",
            },
            subArticles: [
              "‘초·중등교육법 개정안’ 교사 위한 아동학대 면책법안 ‘반발’",
              "보행 장애인이 겪는 접촉 사고란",
              "코로나19 이후 독일 특수교육 변화 ‘디지털 전환’ 본격화",
              "장예총, ‘제33회 대한민국장애인문학상‧미술대전’ 작품 접수",
              "장애물 없는 포항 죽도시장공영주차장 장애인 편의 점검",
              "발달장애인들 독도에서 나라사랑과 장애인식개선 외치다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png",
            pressLogoAlt: "국방일보",
            lastEditted: "05월 23일 17:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9140%2F180017_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“한·말레이, 국방·방산협력 한 단계 격상”",
              mainArticleTitle: "“한·말레이, 국방·방산협력 한 단계 격상”",
            },
            subArticles: [
              "화려하고 절도 있게…블랙이글스, 말레이 하늘 수놓다",
              "입영 장정 검사 확대…마약 사건 수사 전담팀도 운영",
              "공군 블랙이글스, LIMA 에어쇼 현장 르포",
              "아이가 주는 기쁨 나의 원동력이죠",
              "“유관기관 협조체계 강화해 완벽한 동원태세 유지”",
              "메가시티 환경에서 도시지역작전 발전방향 모색",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/967.png",
            pressLogoAlt: "코리아쉬핑가제트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9192%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "평택항 신국제여객부두 하역시설 부족  ‘갑론을박’",
              mainArticleTitle:
                "평택항 신국제여객부두 하역시설 부족 ‘갑론을박’",
            },
            subArticles: [
              "대우조선, 45년만에 한화오션으로 간판 교체…초대대표에 권혁웅 부회장",
              'BDI 1384포인트…하락세 지속 "수급 개선 변화 없어"',
              "이스라엘 짐라인, 1분기 영업손실 180억…적자전환",
              "“화주·포워더간 소량 항공화물 정보공유 소통창구 만든다”",
              "팬오션, ‘이용자 편의성 대폭 향상’ 컨테이너 웹서비스 출범",
              "BDI 1384포인트…금주도 시황 회복 '불투명'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png",
            pressLogoAlt: "한국농어촌방송",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9236%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "서울시, 귀농·귀촌 원하는 시민 정착 지원한다…홍천군과 맞손",
              mainArticleTitle:
                "서울시, 귀농·귀촌 원하는 시민 정착 지원한다…홍천군과 맞손",
            },
            subArticles: [
              "그랜드 하얏트 제주, 라운지 38서 애플망고 빙수·애프터눈 티 선봬",
              "서울시, 불법 고금리 대출 피해 구제…7월 말까지 집중 신고 기간",
              "공릉동 옛 북부법조단지, 가족 공간·청년 창업 거점으로 탈바꿈",
              "9월 광화문광장서 오페라 '카르멘' 무료 공연…시민예술단 150명 모집",
              "[현장포토] 김진태, 강원특별자치도법 심사촉구 집회 참석",
              "\"그림과 차트로 쉽게\" 신한투자증권, '신한알파 3.0' 출시",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13325188.png",
            pressLogoAlt: "베이비뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9246%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "\"교권 무너졌다고 '아동학대' 허용하라니?\"",
              mainArticleTitle: "\"교권 무너졌다고 '아동학대' 허용하라니?\"",
            },
            subArticles: [
              "불법주정차로 또 스쿨존서 어린이 사망... 부산시, 안전대책 발표",
              "유보통합과 돌봄의 방향, 무엇을 줄이고 무엇을 장려할 것인가",
              "버드시아, 슈너글 등 아기욕조 8개 제품 안전성 등 조사했더니...",
              "세계인이 부러워하는 이것? 믿고 먹는 K 급식!",
              "근속 20년, 나홀로 4박 5일 여행",
              "아동기본법 제정... '격차'가 '결과'로 이어지지 않는 사회를 향해서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/924.png",
            pressLogoAlt: "인벤",
            lastEditted: "05월 23일 18:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9134%2F183810_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "어른이에게 찾아온 뜻밖의 선물, 레고 2K 드라이브 리뷰",
              mainArticleTitle:
                "어른이에게 찾아온 뜻밖의 선물, 레고 2K 드라이브 리뷰",
            },
            subArticles: [
              "반주년 앞둔 '아르케랜드', \"한국은 SRPG에 진심, 검증 받고자 한다\"",
              "호러, 액션에 코옵까지, 이번 주 스팀 트렌드는 '얼리 액세스' 신작",
              '신생 개발사 블랙스톰, "무한한 RPG의 가능성, 그렇기에 우리는 RPG 전문 개발사를 꿈꾼다"',
              "더 빠르고 호쾌하게, '워헤이븐'이 보여준 대대적 변화",
              "국내 서브컬쳐 게임 신작 삼파전, 아우터플레인 VS 클로저스 RT: 뉴 오더 VS 블랙클로버 모바일",
              "스테퍼 케이스: 초능력 추리 어드벤처 리뷰, '추리' 그 자체에 집중할 수 있는 웰메이드 국산 '추리물'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/356.png",
            pressLogoAlt: "게임메카",
            lastEditted: "05월 23일 17:45 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9082%2F175207_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[AI야 소녀를 그려줘] 레드폴에서 뱀파이어를 잡아보자",
              mainArticleTitle:
                "[AI야 소녀를 그려줘] 레드폴에서 뱀파이어를 잡아보자",
            },
            subArticles: [
              "공룡 액션 엑조프라이멀, 다크 소울 '침입’ 시스템 참고했다",
              "블랙클로버 모바일 개발진의 원작 애니 사랑은 진심이었다",
              "24일 시작되는 TL 테스트, 어디까지 체험 가능할까?",
              "[오늘의 스팀] 테스트 호평, 출시 앞둔 스파 6 판매 최상위권",
              "동물이 되어보는 스타듀 밸리? ‘에버드림 밸리’ 30일 출시",
              "[AI야 소녀를 그려줘] 프린세스 메이커 2, 아동노동의 현장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/354.png",
            pressLogoAlt: "엘르",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9080%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "도쿄 밖에 안 가본 사람의 도쿄 호캉스",
              mainArticleTitle: "도쿄 밖에 안 가본 사람의 도쿄 호캉스",
            },
            subArticles: [
              "메조틴트 판화 속 숨겨진 이야기",
              "제니부터 노윤서까지! 제76회 칸 영화제 속 한국 셀럽들의 빛나는 순간",
              "휴가 계획은 지금부터! 6월에 풀리는 국내 여행 할인 정보 모음.zip",
              "20대부터 70대 배우가 직접 알려준다! 모든 나이에서 빛나는 드레스 입는 법",
              "6월엔 여름꽃 구경! 보랏빛 물결 가득한 전국 라벤더 명소 3 #가볼만한곳",
              "산뜻한 월남쌈에 후식은 소프트콘! 시원한 여름을 담은 성수동 #신상맛집 3",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png",
            pressLogoAlt: "철강금속신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9182%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "포스코홀딩스, 하반기 리튬 생산…'2030년 관련 매출 10조 전망'",
              mainArticleTitle:
                "포스코홀딩스, 하반기 리튬 생산…'2030년 관련 매출 10조 전망'",
            },
            subArticles: [
              "4년 만에 열린 ‘철강 사랑 마라톤’ 친환경 홍보의 場",
              "납(Pb) 사용 규제 강화…황동시장 일대 변혁 예고",
              "세계스테인리스협회 “올해 STS 소비 증가 없을 것”...2024년 반등 기대",
              '"국내 철강산업 친환경 고부가가치 대전환, 철강포럼 앞장설 것"',
              "현대제철 H형강 저탄소 제품 인증 획득",
              "韓, 친환경 선박 시장 국제표준 선점 나서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/355.png",
            pressLogoAlt: "사이언스타임즈",
            lastEditted: "05월 23일 17:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9081%2F172537_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "누리호 3차 발사 D-1, 다시 또 우주로…",
              mainArticleTitle: "누리호 3차 발사 D-1, 다시 또 우주로…",
            },
            subArticles: [
              "새로운 알츠하이머 치매 치료제 도나네맙의 임상 3상 성공",
              "작은 배려와 친절, 전 세계에서 2분마다 한 번씩 일어나…",
              "하얗게 변한 머리카락, 모낭 속 줄기세포야 힘을 내!",
              "환경을 위해 텀블러를 쓰는 당신, ‘환경 빌런’일 수도?",
              "‘인공지능의 대부’, 이제 인공지능을 걱정하다",
              "호모 사피엔스도 ‘슬세권’ 선호했다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png",
            pressLogoAlt: "이코노믹리뷰",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9228%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "금융당국 “자본시장 불공정거래 뿌리 뽑겠다는 정부 의지 확고”",
              mainArticleTitle:
                "금융당국 “자본시장 불공정거래 뿌리 뽑겠다는 정부 의지 확고”",
            },
            subArticles: [
              "中의 마이크론 직접 제재...삼성·하이닉스엔 기회?",
              "시행사 PF 대부분은 브릿지대출…차환 ‘촉각’",
              "K배터리 미래, 앞으로 4년이 좌우한다 [중국과 진검승부 ‘K배터리 삼형제’ ③]",
              '은행 투자일임업 허용 논란… "중·소 증권및 자산운용사 보호 장치 마련 필요"',
              "한전 적자에 골병드는 발전자회사",
              "찰스 3세도 반한 '지리산 정원', 英 첼시 플라워쇼 '금상'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/345.png",
            pressLogoAlt: "디자인정글",
            lastEditted: "05월 21일 18:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0521%2Farticle_img%2Fnew_main%2F9077%2F185122_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[특별 기고] 국내 최초의 차 브랜드, 그 역사에 담긴 이야기",
              mainArticleTitle:
                "[특별 기고] 국내 최초의 차 브랜드, 그 역사에 담긴 이야기",
            },
            subArticles: [
              "[디자인 포커스] 디자인 교육의 새로운 지평, ‘2023 국제 디자인 교육 엑스포 & 컨퍼런스’",
              "[디자인 화제] 세종대왕 탄신 626돌 기념 ‘한글 이름짓기 백일장 대회’ 개최",
              "[포커스 인터뷰] 세종의 업적 알리기 위해 헌신하는 세종대왕기념사업회 최홍식 회장",
              "[포커스 인터뷰] 부산, 브랜딩으로 새롭게 변화시킨 황부영 부산 도시브랜딩 총괄 디렉터 ",
              "[포커스 인터뷰] 건강한 책문화생태계 조성하는 책문화네트워크 정윤희 대표",
              "[전시 포커스] 생동하는 풍경이 되는 건축, ‘김용관 건축 사진전’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
            pressLogoAlt: "이코노미조선",
            lastEditted: "05월 22일 11:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9208%2F111425_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '"AI, 사람보다 빠르게 고객 파악… 만능론은 금물"',
              mainArticleTitle:
                '"AI, 사람보다 빠르게 고객 파악… 만능론은 금물"',
            },
            subArticles: [
              "\"한국 저출산·고령화 해법은 '이민' 부분 허용\"",
              '"동남아 공략해 月 이용자 연내 15배 수준인 300만..',
              '"작전이 달라졌다" 주가조작, 더 쉬워진 5가지 이유',
              "美 최악의 경제 위기를 이겨낸 '인플레이션 파이터'의 ..",
              '65년 만에 왕관 쓴 英 찰스 3세 "섬김받지 않고 섬..',
              '"투자 기회는 다른 이들이 바보짓을 할 때 온다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/958.png",
            pressLogoAlt: "베리타스알파",
            lastEditted: "05월 23일 22:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9181%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘초중등 10명 중 9명 이과’ 교육부 책임론 불가피..2028까지 극단적 이과/의대 쏠림 심화 하나",
              mainArticleTitle:
                "‘초중등 10명 중 9명 이과’ 교육부 책임론 불가피..2028까지 극단적 이과/의대 쏠림 심화 하나",
            },
            subArticles: [
              "'의대 노린 반수' 올해 서울대 신입생 중 휴학생 225명.. 4년새 3배 '급증'",
              "[2024특수대학] '2년차' 5개교 875명 체제 .. 공사/육사 자연계 '확대' ",
              "[2024특수대학] 경찰대 편입생 모집 2년차.. 일반대학생/재직경찰관 50명 남녀통합",
              "2025부터 ‘학부 계약정원제’ 도입.. 일반학과 첨단인재양성 '20% 추가선발'",
              "2023 로스쿨 변시 합격률 서울대 81.5% '최고' 고대 연대 중대 서강대 톱5",
              "2024SKY 첨단학과 298명 ‘증원’.. 상위대 자연계 ‘지각변동’ 예고",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/808.png",
            pressLogoAlt: "산업일보",
            lastEditted: "05월 23일 22:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9223%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“2030년 내연기관 부품기업수 900개 사 감소”",
              mainArticleTitle: "“2030년 내연기관 부품기업수 900개 사 감소”",
            },
            subArticles: [
              "기업 비즈니스 효율 높이는 솔루션",
              "EU, AI 역습에 맞서 규제 칼 뺐지만...우려 목소리↑",
              "데이터 통합 시대, ‘데이터 분석가’에 주목",
              "인공지능(AI)+데이터+CRM 기반 고객중심 ‘커스토머 컴퍼니’로의 전환",
              "인공지능을 대하는 각기 다른 ‘온도차’",
              "[포토뉴스] 디지털 혁신 지원하는 다양한 솔루션 체험",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/938.png",
            pressLogoAlt: "그린포스트코리아",
            lastEditted: "05월 23일 18:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9158%2F180454_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "순환자원유통지원센터, 회수·재활용 노하우 베트남에 전파한다",
              mainArticleTitle:
                "순환자원유통지원센터, 회수·재활용 노하우 베트남에 전파한다",
            },
            subArticles: [
              "글로벌 스탠더드 RE100…정부·산업계 ‘CFE’ 민다",
              "삼성물산, 호주 그린수소 비즈니스 韓·日 합작",
              "LG화학, 이스라엘 대규모 해수담수 프로젝트에 역삼투막 공급",
              "매립지관리公, 탄소중립 위해 인천 지역 민·관·산·학 협력",
              "한국 코카콜라, 투명 페트병 순환경제 구축 합심",
              "BAT로스만스, 환경 문제 해결 위해 대학생 아이디어 모은다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/806.png",
            pressLogoAlt: "MONEY",
            lastEditted: "05월 03일 09:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0514%2Farticle_img%2Fnew_main%2F9226%2F010101_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[big story] AI 금융 지각변동, 주목할 신 스틸러",
              mainArticleTitle:
                "[big story] AI 금융 지각변동, 주목할 신 스틸러",
            },
            subArticles: [
              "AI 시대, 금융권 일자리는 사라질까",
              "AI 금융 ‘레벨업’, 주목할 뷰 포인트 4",
              "'K-빨간 맛', 매운 확장 어디까지",
              "가계부채, 다이어트 처방전은",
              "美 은행 위기가 남긴 5가지 교훈은",
              "AI 시대에 ‘소통의 교육’ 말하는 이유",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png",
            pressLogoAlt: "주간경향",
            lastEditted: "05월 23일 10:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9361%2F103946_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "전세 피해의 고통, 정치의 응답은",
              mainArticleTitle: "전세 피해의 고통, 정치의 응답은",
            },
            subArticles: [
              "첫 직장은 시민단체",
              "냉방비 대란 예고 서민들은 속 타고",
              "[시사 2판4판]어퍼컷 세러머니?",
              "[내 이름 걸고 추천 맛집]이윤경의 보약 같은 그곳",
              "모두가 컴퓨터에 챗봇을 설치한다면",
              "산단에 빼앗겼다, 마을도 건강도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124326426.png",
            pressLogoAlt: "법률신문",
            lastEditted: "05월 23일 22:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9039%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "SK그룹, 노소영 관장 '아트센터 나비' 상대로 부동산 인도 소송 제기",
              mainArticleTitle:
                "SK그룹, 노소영 관장 '아트센터 나비' 상대로 부동산 인도 소송 제기",
            },
            subArticles: [
              "[판결] 'H.O.T. 상표권 침해 소송' 김경욱 前 SM대표 최종 패소",
              "불법 정치자금 수수 혐의 하영제 국민의힘 의원 불구속 기소",
              "[판결] '일감 몰아주기' 하이트진로 박태영 사장, 2심도 징역형 집행유예",
              "(단독) 국내 최초 합작법무법인 '애셔스트화현', 정안나·배선혜 영입",
              "저비용항공사 '플라이강원', 23일 법인회생 신청",
              "전 여자친구를 성희롱한 남성이 살해됐다!… AI 판사는 어떻게 선고했을까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd22503109.png",
            pressLogoAlt: "뉴스앤조이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9356%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[교회를 떠나 교회가 되다] ① 사랑의교회갱신공동체(중)",
              mainArticleTitle:
                "[교회를 떠나 교회가 되다] ① 사랑의교회갱신공동체(중)",
            },
            subArticles: [
              "탄소 중립 필요성 공감하나, 예산·인력 문제에 멈칫하는 교단들",
              "칸트 선생님, 예수 믿고 교회 다니는 게 무슨 의미가 있습니까?",
              "할 말은 많은데 참기만 했던 여성 사역자들 모이세요",
              "6·25 앞두고 경계를 넘어 화해를 걷는 파주 평화 순례",
              "우리는 고난을 알고 있기 때문에 축제를 한다",
              '강남역 여성 혐오 범죄 7주기 연합 예배…"세상 만연한 차별에 저항하며 소리 지를 것"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0615/nsd10319824.png",
            pressLogoAlt: "한경잡앤조이",
            lastEditted: "05월 22일 12:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9238%2F130201_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "잘 다니던 정규직을 그만두고 계약직을 선택한 이유 [양이천의 기사회생]",
              mainArticleTitle:
                "잘 다니던 정규직을 그만두고 계약직을 선택한 이유 [양이천의 기사회생]",
            },
            subArticles: [
              "스타트업 CEO들이 꼭 봐야 할 영화 ‘조이’ [영화로 풀어보는 스타트업 이야기]",
              "[Start-up Invest] 야놀자·KT 합작사 자산 임대 관리 서비스, 30억 규모 투자 유치",
              "29CM, 테크 분야 두 자릿수 채용···합격자에 무신사·29CM 쇼핑비 400만원 지원",
              "영어 공부, ‘암기·듣기’보다 ‘이것’ 더 힘들어···영어 학습자, 설문조사보니",
              "[자기소개서 시대의 종말? : 챗GPT 등장 이후의 채용 환경 ②] 기자가 직접 챗GPT로 자기소개서 작성해보니",
              "대출을 받고, 전셋집을 구하면서 난 어른이 되었다 [인생 1회차, 낯설게 하기]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1019/nsd144531857.png",
            pressLogoAlt: "투데이신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9211%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "베트남인 어머니에게서 태어난 9년차 ‘다문화 알림이’",
              mainArticleTitle:
                "베트남인 어머니에게서 태어난 9년차 ‘다문화 알림이’",
            },
            subArticles: [
              "아카데미의 친구들“60년 된 단관극장 철거, 근시안적 시정”",
              "불황 그늘 속 ‘골드러시’",
              "[청플 Report] 꿈의 직장된 ‘네카라쿠배’MZ세대가 원하는 근로환경은",
              "CTO “특이점의 시대, 자기 성장 위해 챗GPT 써보라”",
              "경찰, ‘핵 오염수 받는 尹 포스터’ 수사…부착 단체 “정치 탄압” 반발",
              "韓, 슈퍼컴퓨터 성능 세계 8위…美 프론티어, 2년 연속 1위",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0928/nsd125033437.png",
            pressLogoAlt: "한경비즈니스",
            lastEditted: "05월 23일 16:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9038%2F163423_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "브루킹스 “상위 10%가 전체 소득 50% 차지…인공지능이 불평등 키울 것”",
              mainArticleTitle:
                "브루킹스 “상위 10%가 전체 소득 50% 차지…인공지능이 불평등 키울 것”",
            },
            subArticles: [
              "‘가즈아’ 삼성전자, 외국인 순매수와 함께 9만전자 기대감 증폭",
              "‘황금알 낳는’ DB하이텍, 부도 위기에서 세계 10대 파운드리 회사로[Case Study]",
              "먹으면 4.5kg 감량…화이자, 비만치료제 기대감에 주가 급등",
              "강남·성수도 이겼다…'50억 이상' 아파트 매수 몰린 동네",
              "\"욕심이 과하네~\" 샤넬, 2021년부터 '10번째 인상'",
              "넥스트노멀 시대의 구매 , 비용 절감 넘어 지속 가능한 성장의 핵심 열쇠로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/140.png",
            pressLogoAlt: "씨네21",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9035%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[커버] ‘박하경 여행기’ 이나영, 차곡차곡 쌓이는 이나영이란 레이어",
              mainArticleTitle:
                "[커버] ‘박하경 여행기’ 이나영, 차곡차곡 쌓이는 이나영이란 레이어",
            },
            subArticles: [
              "[현지보고] 오토봇, 비스트, 인류는 어떻게 공존하는가, '트랜스포머: 비스트의 서막'",
              "[인터뷰] ‘박하경 여행기’ 이나영, 채움보다 비움",
              "[LIST] 허광한이 말하는 요즘 빠져 있는 것들의 목록",
              "[베이징] 주목받는 신인감독의 연출 데뷔작 '창사야생활', 진가신 사단의 힘",
              "[유선주의 드라마톡] '나쁜 엄마’",
              "제 1407호 잡지 내용보기",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/819.png",
            pressLogoAlt: "바이라인네트워크",
            lastEditted: "05월 23일 16:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9240%2F164318_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김남국에 사전 정보 준 적 없다는 넷마블 “추가 내부 조사 필요”",
              mainArticleTitle:
                "김남국에 사전 정보 준 적 없다는 넷마블 “추가 내부 조사 필요”",
            },
            subArticles: [
              "‘세일즈포스 라이브 2023’에 뜨거운 관심…아인슈타인GPT 혁신 앞둬",
              "문제의 ‘K 코인’…규제 미흡이 불러온 가상자산 시장 내 혼돈",
              "카카오-사우디 관광청, 현지 관광 모바일 인프라 구축 논의",
              "틸팅포인트, 미국 서부 개척 최신작 ‘오리건 트레일 붐 타운’ 출시",
              "‘팀 네이버’ 1784, 세계무역기구(WTO) 사무총장도 방문",
              "이스트소프트, 마이크로소프트 본사 방문…AI 사업 확장 논의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png",
            pressLogoAlt: "독서신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9179%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "아이돌 ‘덕질’, 당신이 아는 건 새 발의 피",
              mainArticleTitle: "아이돌 ‘덕질’, 당신이 아는 건 새 발의 피",
            },
            subArticles: [
              "에드워드 호퍼 전시, 책과 함께 200% 즐겨요",
              "부평기적의도서관, 영유아 대상 ‘북스타트 책꾸러미’ 배포",
              "‘일잘러’ 되려면… 꼬박꼬박 ‘말대답’하라?",
              "성년의 날, 어른이 된 당신을 위한 책",
              "“박강수 마포구청장님, 책과 화해하세요” 출판인들 뿔났다",
              "“MBTI별로 좋아하는 책 달라” 첫 연구 나왔다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/024.png",
            pressLogoAlt: "매경이코노미",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9103%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "22조 투자된 해외 부동산…리스크 속속 가시화 [cover]",
              mainArticleTitle:
                "22조 투자된 해외 부동산…리스크 속속 가시화 [cover]",
            },
            subArticles: [
              "‘1분기 호실적’ 두산그룹株 어떤 종목 담을까",
              "재건축 훈풍 부는 도봉구 올해만 4687가구 안전진단 통과",
              "허언으로 끝난 통신 3사 ‘5G’ 마케팅",
              "속속 등장하는 한국형 ‘팹리스’ 작지만 ‘기술력’ 우위…..",
              "치킨 3천원 올린 ‘교촌’ 왜 비난받나 인플레 시대…가격 인..",
              "알고 보면 ‘큰손’샤이 고객을 아십니까",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png",
            pressLogoAlt: "매경헬스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9355%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "이유 없는 어지러움, 빈혈 느꼈다면 참지 마세요",
              mainArticleTitle: "이유 없는 어지러움, 빈혈 느꼈다면 참지 마세요",
            },
            subArticles: [
              '제너럴네트, "요실금 치료 도움주는 자동 케겔운동 기구 만나보세요" [건강미박람회]',
              "빨라진 무더위 건강 챙기기 나선 건기식 기업, 신제품 출시 봇물",
              "‘적자 행진’ 일동제약, 칼 빼들었나?…임원 감축·희망퇴직 받는다",
              "욱씬욱씬 생리통, 가만히 둬도 괜찮을까?",
              "심장 재생과 기능 회복 조절하는 물질 발견",
              "동아ST, 청소년 환경사랑 생명사랑 교실 참가자 모집",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/951.png",
            pressLogoAlt: "포브스코리아",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9174%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "구정회 은성의료재단 이사장, 경영은 모든 이해관계자의 마음을 얻는 일",
              mainArticleTitle:
                "구정회 은성의료재단 이사장, 경영은 모든 이해관계자의 마음을 얻는 일",
            },
            subArticles: [
              "2023 대한민국 50대 부자 | 김병주 MBK파트너스 회장 1위 등극",
              "박원재 원앤제이 갤러리 대표, 예술이 일상이 되는 세상을 꿈꾸다",
              "주형진 차지비 대표, 전기차 충전의 토털 솔루션",
              "금단의 해결책, 금본위제",
              "유명 CEO의 소셜미디어",
              "정태남의 TRAVEL & CULTURE | 헝가리/부다페스트(Budapest)",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0427277.png",
            pressLogoAlt: "식품저널 foodnews",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9247%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "K-라면 유럽 ‘수출 장벽’ 뚫었다",
              mainArticleTitle: "K-라면 유럽 ‘수출 장벽’ 뚫었다",
            },
            subArticles: [
              "K-라면 유럽 ‘수출 장벽’ 뚫었다",
              "aT, 군산시ㆍ대두식품ㆍ이성당과 업무협약",
              "투명페트병 재생원료 사용 용기 적용제품 나온다",
              "식품안전정보원, ‘WHO 세계 나트륨 섭취 저감 보고서’ 발간",
              "집단급식소 보존식서 빙과ㆍ일부 실온제품 제외",
              "국가식품클러스터 국제학술대회 24일 익산서 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/965.png",
            pressLogoAlt: "전기신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9190%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
              mainArticleTitle:
                "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
            },
            subArticles: [
              "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
              "창간 지상대담_#배전 전기공사 #안전 #노사 ‘상생의 길을 묻다’",
              "창간기획_전기공사 톱티어 벽산파워",
              "창간 59주년 인터뷰_장현우 한국전기공사협회 회장",
              "창간 59주년 인터뷰_백남길 전기공사공제조합 이사장",
              "창간기획_ 을왕변전소 & 주변전소C를 가다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/911.png",
            pressLogoAlt: "농민신문",
            lastEditted: "05월 22일 07:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9141%2F070423_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "농가소득 ‘뒷걸음질’…농업경영비는 ‘역대 최고’",
              mainArticleTitle: "농가소득 ‘뒷걸음질’…농업경영비는 ‘역대 최고’",
            },
            subArticles: [
              "[양봉산업 붕괴 위기] 널뛰는 날씨 탓 벌통 휑…‘꿀맛’ 보기 어려워진 농가들",
              "무늬만 농업회사법인, 실체는 수입업체",
              "치유농업, 인증은 ‘오리무중’…제도는 ‘탁상공론’",
              "민박·전통차 등 ‘농가부업소득’ 3000만원 초과땐 납부 대상",
              "가루쌀 가공, 성과 ‘반’ 과제 ‘반’",
              "“농업·농촌 현안 해결 방안 찾자”…농협 현장경영 돌입",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/948.png",
            pressLogoAlt: "한겨레21",
            lastEditted: "05월 23일 22:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9171%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "세상에 없지만 올리비아의 생일파티는 매년 열린다",
              mainArticleTitle:
                "세상에 없지만 올리비아의 생일파티는 매년 열린다",
            },
            subArticles: [
              "똥, 내리지 말고 흙에 양보하세요 [농사꾼들]",
              "‘해전하네’ 귀먹은 벼락 맞고도, 쌀밥 같은 꽃 피웠네 이팝나무",
              "60살 극장 ‘철거’ 결론 내고 의견수렴…“밀실 결재” 폭로",
              "취준생 울리는 부트캠프 ‘부실 성장’은 누구 책임인가",
              "‘증거물로 흥분’ 글 파문까지…검경 성인지 수준 처참",
              "못 찾겠다, 쇠·붉·멧…숨바꼭질이라도 하려는 거니?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/075.png",
            pressLogoAlt: "맥스무비",
            lastEditted: "05월 23일 09:02 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9162%2F091039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[리뷰]광수대로 간 괴물형사…판 키우고 날쌔진 맨주먹 '범죄도시3'",
              mainArticleTitle:
                "[리뷰]광수대로 간 괴물형사…판 키우고 날쌔진 맨주먹 '범죄도시3'",
            },
            subArticles: [
              '[칸 레터] "해외? 韓영화 신뢰 굳건..국내 시장 활성화해야"',
              "'거미집' 김지운 감독 \"송강호, 타의 추종 불허\"",
              "캐스팅 논란 '인어공주', 국내 관객 시험대에",
              "[칸 현지 취재] 대작 '탈출:PROJECT SILENCE' 환호 속 공개",
              "'우영우'로 대박난 ENA, '행복배틀' '마당이 있는 집'에 쏠린 기대감",
              "[칸 현지 인터뷰] '잠' 정유미+유재선 감독, 소풍과 해방 사이에서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png",
            pressLogoAlt: "시사인",
            lastEditted: "05월 23일 15:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9052%2F160211_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "후쿠시마 시찰단은 일본에서 숨바꼭질 중? [정치왜그래?]",
              mainArticleTitle:
                "후쿠시마 시찰단은 일본에서 숨바꼭질 중? [정치왜그래?]",
            },
            subArticles: [
              "6년 만에 부활한 ‘공습 대비’ 민방위 훈련 [포토IN]",
              "2023년 노동절에 건설 노동자가 분신했다",
              "다문화 갈등을 풀어가고 싶다면 [기자의 추천 책]",
              "소란했던 경복궁 ‘뒤풀이 파티’ [기자들의 시선]",
              "“당신은 그냥 나쁜 변호사를 만났다” [세상에 이런 법이]",
              "[단독] 윤석열 정부 1년, 대통령기록관 압수수색 역대급",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png",
            pressLogoAlt: "데일리NK",
            lastEditted: "05월 23일 08:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9216%2F170354_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "주민들 '새벽 장사' 규제 나선 北… \"단속조가 장사꾼보다 많다\"",
              mainArticleTitle:
                "주민들 '새벽 장사' 규제 나선 北… \"단속조가 장사꾼보다 많다\"",
            },
            subArticles: [
              "농장 주변 곳곳에 보위부 검열초소 세워져…걸리면 강제노동?",
              "서해 일가족 귀순 소식 접한 北 국경 지역 주민들 반응은?",
              "수감자에 의한 수감자 감시…정치범수용소에서 무슨 일이?",
              '北 "서포지구 건설장에 바쳐진 뜨거운 마음"…주민 지원 선동',
              "북한인권 NGO 대표 사칭 피싱 공격…北 해커 소행으로 추정",
              '권영세 "현재 경제 상황 어떤지 北 스스로 되돌아봐야"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0418/nsd124959421.png",
            pressLogoAlt: "채널예스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9084%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[임진아의 카페 생활] 커피에게로 달려가기",
              mainArticleTitle: "[임진아의 카페 생활] 커피에게로 달려가기",
            },
            subArticles: [
              "[도둑맞은 집중력] 집중력 위기의 시대, 삶의 주도권을 되찾는 법",
              "곽아람, 호퍼의 도시 '뉴욕'에서 나를 발견하다",
              "미술품의 숨결에서 느껴지는 금맥(金脈)을 찾아라!",
              "[정대건의 집돌이 소설가의 나폴리 체류기] 푸르게 물든 도시 나폴리",
              "뮤지컬 <쿠로이 저택엔 누가 살고 있을까> - 오싹한 유쾌함이 가득한 귀신의 집",
              "[김신지의 제철숙제] 먼저 건네면 무조건 좋은 것",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0418/nsd124451202.png",
            pressLogoAlt: "여성동아",
            lastEditted: "05월 23일 09:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9368%2F095213_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "5개월에 42kg 감량! 다이어트로 배운 인생",
              mainArticleTitle: "5개월에 42kg 감량! 다이어트로 배운 인생",
            },
            subArticles: [
              "명품 롱패딩 걸치고 길거리 등장한 프란치스코 교황?",
              "한학자 세계평화통일가정연합 총재 ‘참사랑 실천 외길 80년’",
              "53년 기다린 인생작, 카밀라 왕비의 대관식 스타일",
              "편견도 두려움도 없는 노출 2023 S/S MAN’S COLLECTION",
              "덜 짜고 더 맛있는 초간단 저염 레시피",
              "커피 로스팅 머신 제조 강소기업 스토롱홀드",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/363.png",
            pressLogoAlt: "동아사이언스",
            lastEditted: "05월 23일 17:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9086%2F173938_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[누리호 3차발사] 발사대 우뚝 선 누리호…성공조건은 '위성' 사출",
              mainArticleTitle:
                "[누리호 3차발사] 발사대 우뚝 선 누리호…성공조건은 '위성' 사출",
            },
            subArticles: [
              "만성통증 환자에 '희소식'...뇌에서 전기신호 최초 확인",
              "후쿠시마 오염수 시찰단, 오늘부터 현장시찰 착수",
              "황금연휴 앞두고 제주도 살인진드기 경보…“6~8월 가장 위험”",
              "코로나 확진 2만1385명…5일 연속 전주 대비 감소세",
              "[이덕환의 과학세상] 위험한 실내 분무소독 당장 중단해야",
              "한화에어로스페이스, 누리호 엠블럼·유니폼 공개",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/815.png",
            pressLogoAlt: "법률방송뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9235%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[분쟁할 결심] 돈 앞에선 가족도 없다... BYC·LG 일가 '위대한 유산' 다툼",
              mainArticleTitle:
                "[분쟁할 결심] 돈 앞에선 가족도 없다... BYC·LG 일가 '위대한 유산' 다툼",
            },
            subArticles: [
              '여야 "전세사기특별법·김남국방지법, 25일 본회의 처리"',
              '[주식시장 후진국] "주가폭락 사태 또 일어난다"... 피해구제 여부는',
              "검찰, 업비트·빗썸·카카오 압수수색... 김남국 코인 거래내역 확보",
              "\"음주운전하면 패가망신\"... 與 '시동잠금장치' 도입 실효성은",
              '"아버지 유언장에 내연녀가 상속 1순위, 무효 안되나요"',
              "국회의원, 코인 1원도 재산등록... '김남국 방지법' 가속도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/950.png",
            pressLogoAlt: "월간중앙",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9173%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "전세사기 남모씨와 송영길 측근 연루 의혹 추적기",
              mainArticleTitle:
                "전세사기 남모씨와 송영길 측근 연루 의혹 추적기",
            },
            subArticles: [
              "[2030 부산엑스포 유치 A to Z] 경쟁도시 리야드와...",
              "[MZ세대 사건리포트] 10·20대 마약 사건 해법",
              "LNG운반선 역대급 수주, 물 들어올 때 노 저어야 하는데…",
              "‘야당 안의 야당’ 이원욱 의원의 민주당 구하기",
              "‘하루 1만원 챌린지’… MZ세대 新자린고비 됐다",
              "현대차, ‘포니 쿠페 콘셉트’ 복원 모델 공개...양산 기대감 ‘업’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd10248812.png",
            pressLogoAlt: "뉴스포스트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9354%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[압구정현대 수주전] 현대건설, HDC현산에 밀리는 전통·명분 숙제",
              mainArticleTitle:
                "[압구정현대 수주전] 현대건설, HDC현산에 밀리는 전통·명분 숙제",
            },
            subArticles: [
              "[현장] “엄마 나 더워”...올여름 학교 냉방대란 우려",
              "SK E&S, 호주서 온실가스 배출 우려...민망해진 추형욱 사장 ‘탄소중립’ 공언",
              "유통업계 1Q 실적 희비…쿠팡 성장세 ‘와우’",
              "젤렌스키 만난 尹 “우크라에 지뢰제거장비 등 필요물품 신속 지원”",
              "尹 대통령, 기시다 총리와 한국인 원폭 피해자 위령비 공동참배",
              "나이 듦, 변하는 세상의 가치와 방식에 적응하는 과정",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/094.png",
            pressLogoAlt: "월간 산",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9232%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[日 기리시마 에비노고원] 화산 20여 개 도열 ‘규슈의 지붕’",
              mainArticleTitle:
                "[日 기리시마 에비노고원] 화산 20여 개 도열 ‘규슈의 지붕’",
            },
            subArticles: [
              "첫날 눈사태로 혼쭐난 동료…우린 군말없이 에어백을 샀다",
              "아웃도어 광고모델, 전문산악인 지고 인플루언서 뜬다",
              "[안나푸르나 동,남,서 루트] 3,900m 하이캠프...물 20L가 60달러",
              "[인천 섬산로드] 귀싸대기 맞아도 행복한 진달래 정글",
              "[강화도② 중부 플러스 가이드] 사악한 인플레 시대에 2,000원 짜리 짜장면!",
              "[설악의 꽃과 나무 천남성] 사약의 재료였던 ‘붉은 유혹’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14480190.png",
            pressLogoAlt: "월간노동법률",
            lastEditted: "05월 22일 17:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9237%2F173031_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "“교섭 거부에 지배ㆍ개입까지”…신일정밀 부당노동행위 모두 인정",
              mainArticleTitle:
                "“교섭 거부에 지배ㆍ개입까지”…신일정밀 부당노동행위 모두 인정",
            },
            subArticles: [
              "'산업현장 안전은 '자기규율 예방체계'로부터'...고용부 위험성평가 지침 개정 시행",
              "“대표이사가 무조건 처벌 대상은 아냐”…중처법 개선 논의 어디까지 왔나",
              "초단시간 근로자 '차별' 문제...'법부터 바꿔야'",
              "고용부 “공공부문 단체협약 37.4% 위법”...노동계 “노사 자치 침범”",
              "민주노총, '고(故) 양회동 열사 염원은 尹 정권 퇴진'",
              "노조법 개정안...“기득권 강화” vs “노동자 모두의 권리”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/905.png",
            pressLogoAlt: "더스쿠프",
            lastEditted: "05월 23일 15:50 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9139%2F155343_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "중국이 삼성에‘역공’하는그 순간",
              mainArticleTitle: "중국이 삼성에‘역공’하는그 순간",
            },
            subArticles: [
              "“추격도 견제도 어렵다” 삼성전자 앞 반도체 적신호",
              "미중 반도체 확전과 새우등 한국의 고민 [마켓톡톡]",
              "테슬라가 탑재할 때 본체만체하더니… K-배터리 뒤늦은 출발",
              "‘다음의 다음’ 끊어놓은 카카오의 전략과 혹독한 대가",
              "장사 잘 돼도 걱정 안 돼도 걱정… LCC 아이러니",
              "[재테크 Lab] 10년 만에 다시 찾아온 잔고 ‘0원짜리 부부’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/915.png",
            pressLogoAlt: "르몽드 디플로마티크",
            lastEditted: "05월 04일 16:53 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0504%2Farticle_img%2Fnew_main%2F9116%2F170054_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "사헬 지역에 머물기 위해 프랑스를 떠나다",
              mainArticleTitle: "사헬 지역에 머물기 위해 프랑스를 떠나다",
            },
            subArticles: [
              "줄리안 어산지, 그의 친구들이 있는 곳",
              "마르크스주의자 마리아테기의 유산",
              "스티븐 스필버그의 불온한 꿈에 대하여",
              "타조도 훨훨 나는 B주류의 발칙한 상상력,",
              "광한루-에펠탑 그리고 21",
              "공백과 재난, 신카이 마코토의 세카이계에 대하여",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/988.png",
            pressLogoAlt: "이웃집과학자",
            lastEditted: "04월 27일 00:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0427%2Farticle_img%2Fnew_main%2F9212%2F010144_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "M87 블랙홀 그림자와 제트 '최초 동시 포착'",
              mainArticleTitle: "M87 블랙홀 그림자와 제트 '최초 동시 포착'",
            },
            subArticles: [
              "아름다운 천체사진",
              "무선으로 심혈관 모니터링 실시간 가능",
              "기계학습로 소행성 구성 성분 알아낸다",
              "100세 시대, 자산투자·소비·은퇴의 최적 솔루션 찾는게 가능?",
              "세포 파우더 고기 기반 고단백 식품 개발",
              "단일세포 빅데이터 분석으로 질병유전자 발굴한다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/984.png",
            pressLogoAlt: "낚시춘추",
            lastEditted: "05월 09일 09:20 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0512%2Farticle_img%2Fnew_main%2F9209%2F050408_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[호황현장] 광주 대야지 벚꽃엔딩_올해는 3월부터 4짜, 5짜가 와르르",
              mainArticleTitle:
                "[호황현장] 광주 대야지 벚꽃엔딩_올해는 3월부터 4짜, 5짜가 와르르",
            },
            subArticles: [
              "[대어] 제주 영락리 큰산물 복수전_100.5cm 참돔 낚아 개인 기록 경신",
              "[WORLD NEWS] 100만분의 1 확률, 버지니아주 제임스강에서 황금색 배스 낚여 화제",
              "[FISHING NEWS] 제2회 (사)대한스포츠낚시중앙협회장배 전국민물낚시대회",
              "[연재_세상 쉬운 바다루어 27] 한 마리만 낚아도 아이스박스가 가득_대구 지깅",
              "[현장기] 호남 봄붕어 다크호스_함평천 용성보에서 4짜 돌붕어 불쑥",
              "[FISHING NEWS] 제15회 단양군수배 전국쏘가리루어낚시대회",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/346.png",
            pressLogoAlt: "헬스조선",
            lastEditted: "05월 23일 09:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9079%2F094806_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[아미랑] 가족과 의료진이 내게 준 '두 번째 인생'",
              mainArticleTitle:
                "[아미랑] 가족과 의료진이 내게 준 '두 번째 인생'",
            },
            subArticles: [
              "몇 달째 기침하던 20대 남성, 기관지에서 '이것' 발견",
              "눈을 잘 보면 '고혈압'인지 알 수 있다",
              "탄탄한 엉덩이 만들고 싶다면 '이 동작' 따라해 보세요",
              "19살에 치매 진단… 안타까운 소녀의 사연",
              "몸 안 움직여도… '이 상황' 처하면, 8시간 금식만큼 에너..",
              "아침 거르면 살 더 잘찐다는 주장, 의학적 근...",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/990.png",
            pressLogoAlt: "주간조선",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9213%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "국방부, 입영 신체검사에 마약 검사 추가 추진",
              mainArticleTitle: "국방부, 입영 신체검사에 마약 검사 추가 추진",
            },
            subArticles: [
              '이코노미스트 "韓 자살률 OECD 1위, 女자살률 급증이 원인"',
              "'노무현 14주기'... \"민주당은 '노무현의 유산' 잃어가고 있다\"",
              "40초짜리 영상으로 10만 구독자 조민...내용 뭐길래",
              "국민의힘, ‘김남국 코인 거래’ 野 대선자금 연관 의혹 제기",
              "이재명, '성추행 의혹' 부천시의원 윤리감찰 지시",
              "[단독] \"가족들 살해 협박까지 받았다\" '김남국 의혹' 제기 게임학회장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/296.png",
            pressLogoAlt: "코메디닷컴",
            lastEditted: "05월 23일 16:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9046%2F163131_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "암 위험 높이고 체중 느는 나쁜 식습관은?",
              mainArticleTitle: "암 위험 높이고 체중 느는 나쁜 식습관은?",
            },
            subArticles: [
              "커피 너무 많이 마신다면…대체 음료4",
              "집에서 할 수 있는 두드러기 대처법",
              "지긋지긋한 만성통증, 새 치료법 나올까?",
              "고구마 vs 감자, 염증에 변화가? 혈당은?",
              "“1년 내 20% 사망”…골다공증이 위험한 진짜 이유",
              "젓가락질에도 쓰는 이 관절…작년 16만명 질환 앓아",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png",
            pressLogoAlt: "약사공론",
            lastEditted: "05월 23일 13:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9204%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "약사회 공적 플랫폼 구축 완료…민간플랫폼 종속 벗어난다",
              mainArticleTitle:
                "약사회 공적 플랫폼 구축 완료…민간플랫폼 종속 벗어난다",
            },
            subArticles: [
              "비대면 시범사업 계도기간은 '플랫폼 봐주기(?)'",
              '감원…희망퇴직…위기의 일동제약 "뼈를 깎는 쇄신으로 재정비"',
              "편의점약 확대 움직임 '솔솔'…약사회 '예의주시'",
              "포시가 이어 자누비아 제네릭도 허가 시작, 경쟁 예고",
              "협회가 인증한 비대면 진료 플랫폼 업체만 살아 남는다",
              "일상회복·연휴에 공항약국 모처럼 '활기'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/364.png",
            pressLogoAlt: "PC사랑",
            lastEditted: "05월 22일 12:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9087%2F120431_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "2023 게이밍 기기 브랜드전",
              mainArticleTitle: "2023 게이밍 기기 브랜드전",
            },
            subArticles: [
              "스팀 덱에서 SSD 장착 멀티 허브로 윈도우 부팅하기",
              "2023년 5월호",
              "ASUS, 초슬림·초경량 고성능 노트북 젠북 S 13 OLED 및 젠북 15 OLED 출시",
              "SK하이닉스, 초소형&초경량 디자인 적용한 외장형 SSD ‘Beetle X31’ 선보여",
              "2023년, 전 세계 반도체 매출 11% 감소 전망…2024년, 70% 성장 반등할 것",
              "NVMe SSD에 DRAM이 필요한 이유? PCIe 3.0 DRAM vs PCIe 4.0 DRAM-Less",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png",
            pressLogoAlt: "컴퓨터월드",
            lastEditted: "04월 30일 16:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0430%2Farticle_img%2Fnew_main%2F9138%2F164305_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[커버스토리] 국내 SaaS 산업의 현황과 개선사항은?",
              mainArticleTitle:
                "[커버스토리] 국내 SaaS 산업의 현황과 개선사항은?",
            },
            subArticles: [
              "“설립 25년, 이젠 ‘꿈(인터넷상의 주인공)’을 이룰 때가 됐다”",
              "해마다 ‘최대 규모’ 경신하는 디도스 공격, 어떻게 대비해야 하나?",
              "SW 개발에 성공적으로 스며든 ‘정적분석’",
              "KB증권, VM웨어+HCI로 고성능 VDI 환경 마련",
              "“클라우드 네이티브로 비즈니스 혁신의 길을 찾아라”",
              "“세계 최고 영상인식 AI 기술 기업으로 성장하겠다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
            pressLogoAlt: "정신의학신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9191%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성격과 기질, 어떤 차이점이 있나요?",
              mainArticleTitle: "성격과 기질, 어떤 차이점이 있나요?",
            },
            subArticles: [
              "​​​​​​​[Doctor's Mail] 본인이 힘들었던 이야기만 하는 가족",
              "성인 ADHD 치료 방법, '약물 치료' 꼭 필요한 것일까? - ADHD약 종류/부작용/복용방법 [성인 ADHD 특집 2편]",
              "[카드뉴스] 긍정의 힘!!",
              "상담 현장에서 인공지능 기술 활용하는 법",
              "[중독] 니코틴 중독과 효과적인 금연 방법",
              "[알코올중독] 나도 설마 알코올중독일까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/310.png",
            pressLogoAlt: "여성신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9053%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '데이트 웹사이트 활성화가 저출산 대책? 김영선 의원 "국가가 미혼남녀 만남 주선 필요"',
              mainArticleTitle:
                '데이트 웹사이트 활성화가 저출산 대책? 김영선 의원 "국가가 미혼남녀 만남 주선 필요"',
            },
            subArticles: [
              "“2024 총선, 남녀동수로” 전현직 여성 국회의원 한자리에",
              "[단독] 공무원 시험 도중 화장실 갈 수 있다… 광주시교육청 “10월 시험서 화장실 사용 허용”",
              "[윤석열 정부 1년, 성평등은 어디로] 흔들리는 여가부, 붕괴되는 지역 성평등",
              "여군 간부 성희롱 문건 만든 공군 병사들... 공군, 경찰 수사 의뢰",
              "[윤 정부 1년 젠더정책 평가] 정전협정 70년, 여성의 삶, 그리고 평화와 안보에 대해 질문하다",
              "[전세사기] 특별법 국토위 소위 통과... 최우선변제금 최장 10년 무이자 대출",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png",
            pressLogoAlt: "미디어스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9248%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "방문진·MBC, 공동으로 감사원 감사 '법적 대응'",
              mainArticleTitle: "방문진·MBC, 공동으로 감사원 감사 '법적 대응'",
            },
            subArticles: [
              "'날리면'도 없는 외교부 'MBC 정정보도' 소장",
              "'바이든-날리면' 소송대리인, '윤석열 징계 반대' 징계위원",
              '언론현업단체 "방통위 장악되면 정부·여당 칼춤 시작될 것"',
              '이재명 "어떤 어려움 있더라도 노무현 길 따라가겠다"',
              '한상혁 "면직 절차, 무죄추정의 원칙 위반"',
              "정치권 압박에 멈춰 선 포털 자율규제기구",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/807.png",
            pressLogoAlt: "인사이트코리아",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9219%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[재계 80년대생 리더①김동관] 한화의 꿈...‘한국판 록히드마틴’ 완성한다",
              mainArticleTitle:
                "[재계 80년대생 리더①김동관] 한화의 꿈...‘한국판 록히드마틴’ 완성한다",
            },
            subArticles: [
              "일본 정부 전기차 보조금 '꼼수'...현대차도 뒤통수 맞았다",
              '삼성·SK·현대차·LG그룹, 전경련 복귀?..."한경연과 합병 총회 관건"',
              "3D프린터로 인체조직 재현 기술, 제약바이오 산업 판도 바꾼다",
              "반도체 감산‧외인 매수에…삼성전자, '9만전자’ 간다",
              "김남국발(發) 코인게이트, P2E 국내도입 논의에 ‘된서리’",
              "공정위, 편의점 CU의 납품업체 갑질 여부 현장 조사",
            ],
          },
        ],
      },
      {
        title: "지역",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
            pressLogoAlt: "국제신문",
            lastEditted: "05월 23일 21:14 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9071%2F211554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "황령산 골짜기 별천지 공동체…여긴 물만골입니다",
              mainArticleTitle: "황령산 골짜기 별천지 공동체…여긴 물만골입니다",
            },
            subArticles: [
              "“손님 끊겼다, 횟집 접어야 하나” 수산업계 오염수 직격탄",
              "올초 초등학교 예비소집 불참한 아이 7년 전 친모가 유기",
              "“부산시, 동백플러스 가맹점주 할인율 일방적 결정”",
              "“부산에 해양바이오 리서치 파크 구축, 전문기업 육성을”",
              "등굣길 참사 더는 안 돼...예서 위해 나선 영도여고 언니들",
              "부산시 재정자주도 60%대로 추락…전국 지자체 최저",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png",
            pressLogoAlt: "영남일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9095%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'영남 명산' 팔공산, 도립공원에서 드디어 국립공원으로 승격 확정",
              mainArticleTitle:
                "'영남 명산' 팔공산, 도립공원에서 드디어 국립공원으로 승격 확정",
            },
            subArticles: [
              '성과급으로 MZ공무원 달래기?···"현실성 없다"',
              '한국은행 포항본부, 폐쇄하나?…이유 보니 "황당"',
              "[단독] 계명대·영남대 '無전공' 선발 카드 꺼냈다",
              "결국 속 빈 강정…매천시장 후적지 용역 최종보고",
              "대구미술관 '이건희 컬렉션' 이번 주말 종료",
              '홍준표 "아세안 교두보 역할 확충…경제 영토 확장"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/976.png",
            pressLogoAlt: "무등일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9202%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "다시 선 누리호, 우주기술 역사 다시 쓴다",
              mainArticleTitle: "다시 선 누리호, 우주기술 역사 다시 쓴다",
            },
            subArticles: [
              '"세계 톱10 공과대학 목표, 홀로서기 위한 재정적 자구책 마련해야"',
              '인권위 "시험 중 화장실 이용금지는 권리침해"',
              "일부 5·18 공법단체, 姜 시장 또 고소",
              '오월지키기대책위 "특전사 동지회 민주묘지 참배 용인 불가"',
              "[날씨] 올여름 최악의 폭염·폭우 오나",
              "누리호 3차발사 직관 명당은 어디일까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1107/nsd1054226.png",
            pressLogoAlt: "인천투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9365%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "인천~백령 카페리 준공영제 가시화...‘결손금 지원’ 최소수익 보장",
              mainArticleTitle:
                "인천~백령 카페리 준공영제 가시화...‘결손금 지원’ 최소수익 보장",
            },
            subArticles: [
              "WHO 바이오캠퍼스 공모 경쟁... 인천 ‘K-바이오랩허브 지연’ 영향 받나",
              "'선 구제 후 환수' 대신 '10년 무이자 대출'... 전세사기 피해자들 ‘분통’",
              "롯데백화점 인천점, 정기휴업일 ‘VIP 행사’... “의무 휴업 필요”",
              "12시간 검찰 조사 받은 윤관석 “결백 밝힐 것”",
              "[대놓고PPL] 제철 황석어 튀김 맛보고 싶다면 청학동 '취중천국'",
              "인천 백령도 안전소홀 LPG 불법 운반업체 검찰 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/339.png",
            pressLogoAlt: "경기일보",
            lastEditted: "05월 23일 21:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9069%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "양평 '과수화상병' 벌목... 바싹 말라 버린 나뭇잎, 속타는 농심",
              mainArticleTitle:
                "양평 '과수화상병' 벌목... 바싹 말라 버린 나뭇잎, 속타는 농심",
            },
            subArticles: [
              "'동료 女의원 성추행 의혹' 일파만파... 부천시의원 탈당",
              "“올해는 꼭 취업하고 싶어요”…구직자 3천600명 몰려 북새통 [2023 인천 일자리 한마당]",
              "개인정보 유출 걱정 '뚝'... 경기도의회, 지역화폐 앱 '문단속'",
              "수업시간 골프연습한 시흥시 초등교사 감사 나서",
              "오갈 곳 없는 ‘장애 아동’... 경기도 전담어린이집 무한대기",
              "무늬만 ‘MADE IN KOREA’...인천세관, 라벨갈이 업체 무더기 적발",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/983.png",
            pressLogoAlt: "중부매일신문",
            lastEditted: "05월 23일 22:07 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9207%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "90도 허리 접어 모 심어도 헛일 될까 걱정 한가득",
              mainArticleTitle:
                "90도 허리 접어 모 심어도 헛일 될까 걱정 한가득",
            },
            subArticles: [
              '김영환 지사 "김용수 총장 후보자, 충북도립대 혁신 적임자"',
              "소아과 쏠림현상 심각 - 中. 야간진료병원 턱없이 부족",
              "제천서 '제2의 삶' 사는 박달재 공예가",
              "영인산휴양림 주차장이 농지… 지목변경 안하고 수십년 사용",
              "'충북도 아이돌봄광역지원센터' 청주서 개소",
              "충주 충북대병원, 정쟁거리 아니다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/336.png",
            pressLogoAlt: "전북일보",
            lastEditted: "05월 23일 19:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9066%2F193102_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "세계 청소년 모이는 새만금잼버리 준비 '엉망'",
              mainArticleTitle: "세계 청소년 모이는 새만금잼버리 준비 '엉망'",
            },
            subArticles: [
              "전주~김천선·전라선 고속화 사전타당성조사 '또 연장'",
              "부산 가덕도신공항 '급물살'⋯새만금 국제공항 '무소식'",
              "피해는 온전히 투숙객 몫⋯불법미등록숙박업소 '주의'",
              "노무현 전 대통령 14주기 추도식⋯김 지사, 봉하마을 찾아",
              "만경강 살리기 기본구상 7월 완성⋯국가계획 반영 추진",
              "국방부, 입영 신체검사에 마약 검사 추가⋯장병까지 확대",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/936.png",
            pressLogoAlt: "대구일보",
            lastEditted: "05월 23일 20:18 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9148%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "영남명산 ‘팔공산’ 국립공원 승격 확정",
              mainArticleTitle: "영남명산 ‘팔공산’ 국립공원 승격 확정",
            },
            subArticles: [
              "코로나19 기나긴 터널의 끝 〈2〉종식으로 웃고 우는 업종들",
              "김형동, 부동산재산 3년전보다 4배 증가…TK 중 최고",
              "‘수호신’ 오승환, 위닝시리즈 선사…삼성, 연장 접전 끝 NC에 2대1 승리",
              "22일 몽골발 황사로 대구 종일 뿌연 날씨 이어져",
              "대구방짜유기박물관서 열린 '헝가리에서 온 사진' 기획전…관람객 1만 명 돌파",
              "경북도, 인도 인재 유치한다…인구 2억3천만 UP주와 협약",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/935.png",
            pressLogoAlt: "경상일보",
            lastEditted: "05월 23일 00:20 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9147%2F002457_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "청정 울산항 이끌 기술, 예산에 발목",
              mainArticleTitle: "청정 울산항 이끌 기술, 예산에 발목",
            },
            subArticles: [
              "초등 예비소집 불참자, 친모가 생후 100일...",
              "들쭉날쭉 과속방지턱 “오히려 위험”",
              "현대차 러시아 현지 공장 딜레마",
              "울산지역 9개 공공기관장, 장관보다 연봉 더 받았다",
              "2년간 울산 아파트 전셋값 19%↓ ‘역전세’ 현실화",
              "구청 예산으로 상인회 단합회 지원 논란",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png",
            pressLogoAlt: "전북도민일보",
            lastEditted: "05월 23일 20:11 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9149%2F201820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "지나친 규제와 제약에 사들해 지는 고향사랑기부제 어쩌나",
              mainArticleTitle:
                "지나친 규제와 제약에 사들해 지는 고향사랑기부제 어쩌나",
            },
            subArticles: [
              "“업무 강도가 너무 심합니다” 수사부서 기피하는 경찰관",
              "‘전교조가 행정지도?’ 공문 한 장에 학교현장 ‘술렁’",
              "[기획] 전북 생산량 지속 감소…지역 소멸 가속화 우려",
              "전북도, 사회보장 안전망 손본다",
              "어린이용 해열제 일단 생산·판매 중단 조치…“아이 열 나면?” 부모들 불안",
              "[기획] 전북 건설업계, 경영난에 휘청인다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0309/nsd195548501.png",
            pressLogoAlt: "광주일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9064%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "지자체, 사활 건 인구 늘리기 정책",
              mainArticleTitle: "지자체, 사활 건 인구 늘리기 정책",
            },
            subArticles: [
              "한 눈에 보는 5월 23일 광주일보 카드뉴스",
              "“마음이 쉬는 도심 정원서 부담없이 힐링하세요”",
              "광주 테마마을 보러왔다가…실망만 안고 돌아간다",
              "24일 누리호 3차 발사…고흥군 교통 통제",
              "광주·전남 올 여름 더 덥고 7월 집중 호우 예상",
              "지역이기주의와 정치적 계산이 ‘동네공항’ 전락시켜",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/388.png",
            pressLogoAlt: "전남일보",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9098%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "차세대 위성 장착… 누리호 오늘 ‘실전 발사’",
              mainArticleTitle: "차세대 위성 장착… 누리호 오늘 ‘실전 발사’",
            },
            subArticles: [
              "“광주·전남 3년새 역대급 홍수·가뭄… 재앙 대비를”",
              "“광주시가 소송지휘권 박탈, 이해 당사자 대변” 증언",
              "정의, 4기 원내대표단 인선…원내수석에 이은주",
              "'현직 경찰'만취 상태로 차량 털다 현행범 체포",
              "한전KDN-미래전자, 수소에너지 정보통신분야 맞손",
              "[전남일보] 기아타이거즈> ‘분노의 뿡뿡이’ 황대인의 프로 첫 퇴장, 팀 위한 희생이었다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/089.png",
            pressLogoAlt: "대전일보",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9062%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'세종의사당' 더이상 정쟁에 미뤄지면 안된다",
              mainArticleTitle: "'세종의사당' 더이상 정쟁에 미뤄지면 안된다",
            },
            subArticles: [
              "누리호, 24일 3번째 지구 밖으로",
              "올 여름 찜통더위",
              '"성폭행 가해자가 교사를?"…제도 개선 여론 빗발',
              "\"월세보다 비싼 관리비\"…'꼼수' 판친다",
              "'우회전 일시정지' 시행 후 사고 대폭 감소",
              "충청 특별지방자치단체 설립 머리맞대",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
            pressLogoAlt: "미디어제주",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9233%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "제주도 추경예산안 다룰 원포인트 임시회, 6월 초 유력",
              mainArticleTitle:
                "제주도 추경예산안 다룰 원포인트 임시회, 6월 초 유력",
            },
            subArticles: [
              "ISD 거론하며 날 세우던 제주도, 이제는 ‘민생예산’ 거론",
              "“민속자연사박물관에 제대로 된 이름 붙어주세요”",
              "제주남방큰돌고래 포획 잔혹사 32년, 방류 돌고래의 현재는?",
              '"제주 제2공항 주민투표 해달라" 의견, 오영훈 "도 차원서 검토"',
              "올 1분기 제주경제동향, 서비스업·물가‘↑’ 수출입·고용률‘↓’",
              "수출 초보부터 선도기업까지… “쑥쑥 키워드립니다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0704/nsd231551300.png",
            pressLogoAlt: "중부일보",
            lastEditted: "05월 23일 21:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9117%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정부, 車부품산업 14조 투입… 경기도 가장 큰 수혜",
              mainArticleTitle:
                "정부, 車부품산업 14조 투입… 경기도 가장 큰 수혜",
            },
            subArticles: [
              "경기도 지역화폐 앱 '보이스피싱 차단' 기능 심는다",
              "[학폭 사라져야] \"'방관자 아닌 방어자' 만들어야 자율 예방\"",
              '"상의 없는 연천현충원 건립 막을 것" 인근 주민 반대집회 예고',
              '"사람 사는데 허가라니" 효성도시개발사업 승인',
              "심야·휴일 진료 '달빛어린이병원' 늘린다",
              "양평, 고급주택·별장 취득세 중과세율 적용 누락",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png",
            pressLogoAlt: "MS투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9363%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "강원특별법 24일 법안심사 확정⋯5월 입법 불씨 살려",
              mainArticleTitle:
                "강원특별법 24일 법안심사 확정⋯5월 입법 불씨 살려",
            },
            subArticles: [
              "춘천 손흥민 카페 오픈⋯직접 가보니",
              "너무 비싼 여권! 3만원 저렴하게 발급받기",
              "소양동 행정복지센터에 있는 ‘작은 가게’의 정체는?",
              "소양강댐 주변 피해 매년 수백억원⋯“취수부담금 도입해야”",
              "저항운동의 숨은 비밀",
              "국회, 강원특별자치도 개정안 조속히 처리하라",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png",
            pressLogoAlt: "충청투데이",
            lastEditted: "05월 23일 20:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9063%2F201347_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘돈내기 도박’ 즐기는 충청권 청소년들",
              mainArticleTitle: "‘돈내기 도박’ 즐기는 충청권 청소년들",
            },
            subArticles: [
              "글로컬사업 앞두고 혁신 예고 목원대·배재대, 대학 간 벽 허문다",
              "성큼 다가온 글로벌 시대 다문화 가정 아동 줄어드는 이유는",
              "구획어업 금지 뿔난 어민들 보령시에 낚시업 승인 행정소송 추진",
              "‘청년 문제’ 본질 외면한 채 ‘복지’만 앞세우는 정치권",
              "불법도박 규모 커지는데예방·치유 법정부담금 뚝",
              "저감정책 역부족… 더 짙어진 충청권 초미세먼지",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1119/nsd213345745.png",
            pressLogoAlt: "제민일보",
            lastEditted: "05월 23일 19:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9104%2F194112_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "탐나는전 혼란 반복 지역화폐 무용론",
              mainArticleTitle: "탐나는전 혼란 반복 지역화폐 무용론",
            },
            subArticles: [
              "제주도 내년도 국비 2조 확보 목표 총력",
              "종합운동장 허물고 스포츠타운 세운다",
              "발묶인 민생예산 4128억 돌파구 마련될까",
              "제주 기후변화 1번지…물에 잠기는 제주 용머리해안",
              "제주대학교 학사 구조 대대적 '개편'…\"유사 학과 통폐합\"",
              "제18회 평화와 번영 위한 제주포럼 임박",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0331/nsd155937506.png",
            pressLogoAlt: "인천일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9097%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "3년간 국회의원 재산 7억·부동산 3억 증가…전체 1등은 박정, 2등은 윤상현",
              mainArticleTitle:
                "3년간 국회의원 재산 7억·부동산 3억 증가…전체 1등은 박정, 2등은 윤상현",
            },
            subArticles: [
              "날로 커져가는 조직, 해답은 송도 GCF 콤플렉스",
              "용인 신갈 개발사업지, “부동산 담보 제공 몰랐다” vs “직접 계약서 사인”",
              "[단독] 시민 창작 공간서 '수상한 음료' 만든 회사 대표",
              "보행로 불분명·유흥업소 즐비·성범죄자 거주…불안한 초등학교 통학길 '1㎞'",
              "주민참여예산 논란 속…특위 꾸린 국힘 시당",
              "[인천 시정 특집] 아라뱃길 따라 모빌리티 새 시대 활짝",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/927.png",
            pressLogoAlt: "충북일보",
            lastEditted: "05월 23일 20:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9130%2F204853_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "충북 여야 총선체제 전환 지연…출마 예정자 곤혹",
              mainArticleTitle: "충북 여야 총선체제 전환 지연…출마 예정자 곤혹",
            },
            subArticles: [
              '김영환 충북지사 "도립대 총장 정해 놓고 밀지 않아"',
              "충북 구제역 이번 주 '고비'…내주 백신 항체 형성",
              "충북기업 돋보기 5.장부식 씨엔에이바이오텍㈜ 대표",
              "청주시, 청주병원 주차장 부지 펜스 해체",
              "'글로컬대학30' 예비지정 임박 … 충북 대학들 준비작업 박차",
              "#샵스타그램 - 청주 수곡동 카페 '소노손손'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/821.png",
            pressLogoAlt: "경남도민일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9242%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "귀를 즐겁게 만드는 노래 '소유하는 기쁨·꺼내 듣는 재미'까지",
              mainArticleTitle:
                "귀를 즐겁게 만드는 노래 '소유하는 기쁨·꺼내 듣는 재미'까지",
            },
            subArticles: [
              '"역사가 후퇴하는 요즘 노무현 대통령님 왜 제 옆에 안계십니까?"',
              "중단된 STX중공업 매각 향후 전망은",
              "한화오션, 경영 신뢰 쌓기도 전에...",
              "정점식 국회의원 재산이 3년 새 34억 불었다",
              "타선 침묵한 NC, 낙동강 더비 영봉패",
              "'조선소에서 뛰면 죽는다' 산재 끊이지 않는 죽음의 공장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png",
            pressLogoAlt: "강원도민일보",
            lastEditted: "05월 23일 07:52 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9075%2F080007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "허울뿐인 강원특자도, 허탈함 넘어 분노 터졌다",
              mainArticleTitle: "허울뿐인 강원특자도, 허탈함 넘어 분노 터졌다",
            },
            subArticles: [
              "“한국 떠나기 싫어요” 이주민 체류불안 호소 상담 늘어",
              "강원청 소속 간부급 경찰 성희롱 의혹 본청서 조사 중",
              "도의회 “불필요한 정쟁 말고 강원특별법 조속 원안통과를”",
              "강원경제 부정적 지표 연타… 건설·무역·소비자 물가 모두 하락",
              "고물가·경기침체 지속… 할인 찾아 대형마트로",
              "오늘 플라이강원 기업회생 신청…항공운항증명 유지 주력",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/909.png",
            pressLogoAlt: "기호일보",
            lastEditted: "05월 23일 21:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9127%2F215103_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "3기 신도시 교통망 확충 철도 직결…",
              mainArticleTitle: "3기 신도시 교통망 확충 철도 직결…",
            },
            subArticles: [
              "수소연료 전지 핵심부품 청라 생산기지 건설…",
              "오래된 건물 관리 부재 틈타 안전사고 꿈틀댄다",
              "인천시 공원 수목 병충해 탓에 ‘시들시들’",
              "오산시 풍농 물류센터 교통안전 대책 수립 올인",
              "점심시간 불 꺼진 법원 민원실 쉴 권리 VS 시민 불편 딜레마",
              "국힘 인천시당 민선7기 주민참여 예산 정조준",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
            pressLogoAlt: "제주의소리",
            lastEditted: "05월 23일 19:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9073%2F191553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "제주4.3중앙위원회 물갈이 코앞?‘1/3 교체설’에 후임 임명 도민사회 ‘촉각’",
              mainArticleTitle:
                "제주4.3중앙위원회 물갈이 코앞?‘1/3 교체설’에 후임 임명 도민사회 ‘촉각’",
            },
            subArticles: [
              "제2공항 주민투표 촉구 서명 1만3천명 동참공 넘겨받은 오영훈 지사 “찬반 균형있게 반영”",
              "개교 71주년 맞은 제주대학교 ‘학제개편·통폐합’ 대대적 혁신 예고",
              "오영훈 지사 공약 ‘제주역사관’ 준비 착착…“증축, 신축 모두 검토 중”",
              "55년된 제주종합경기장 허물고 스포츠센터 건립?...민자 유치까지 검토",
              "반년에 백년을 말하는 나뭇잎의 저 깊이 / 고정국",
              "시대와 국경 초월한 교육자 정신, 부룬디 마을을 구하다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
            pressLogoAlt: "경기신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9362%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "인천시, ‘상상플랫폼’ 관광공사 출자 공식화…바다열차는 언제쯤?",
              mainArticleTitle:
                "인천시, ‘상상플랫폼’ 관광공사 출자 공식화…바다열차는 언제쯤?",
            },
            subArticles: [
              "부천시 갑…민주 '수성' vs 국힘 '도전'",
              "통학로 위험한 '초등학교' 배정 받은 학부모 집단 반발",
              "소비심리 1년 만 최고…기대 인플레는 1년 만 최저",
              "‘통장 구인난에 노령화까지’…미추홀구, 통장 나이 만25→18세 완화",
              "'저금리' 내세운 인터넷은행, 주담대 시장 '메기'로 부상",
              "구리시, 민선8기 공약 '첨단순환 트램' 도입 첫발",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/978.png",
            pressLogoAlt: "경북도민일보",
            lastEditted: "05월 23일 19:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9201%2F192052_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "포항·울산 묶어 특화단지 ‘어불성설’",
              mainArticleTitle: "포항·울산 묶어 특화단지 ‘어불성설’",
            },
            subArticles: [
              "팔공산, 국립공원 되다",
              "적자난 한수원, 관광성 견학 경비지원 논란",
              "포항 오천 대형건설사 아파트 민원 속출",
              "소득 추락 경북 농가 “쓸 돈이 없어요”",
              "예천군, 비행장 소음 피해 주민 5119명에게 보상금 지급 결정",
              "포스코그룹-인도JSW사, 미래사업 협력 강화 논의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/338.png",
            pressLogoAlt: "경인일보",
            lastEditted: "05월 23일 21:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9068%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "잔 들고 춤추고, 성추행 사건까지… 부천시의회 '주정' 연수",
              mainArticleTitle:
                "잔 들고 춤추고, 성추행 사건까지… 부천시의회 '주정' 연수",
            },
            subArticles: [
              "경기도 공직기강 무너졌나?… 이번엔 '인허가 비리'",
              "블록체인 행정 활용, 정부보다 빨랐던 경기도",
              "한국만의 짝사랑 그만… 경기도서 일본 관광객으로 돌려받자",
              "\"오랜 기간 가스라이팅\"… 노인 대상 '폰지사기' 기승",
              "일본 오염수 방류, 상인들 삶도 뒤덮일 판",
              "인천 부평 미군기지 캠프마켓 '활용 접점' 시민에 묻는다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/088.png",
            pressLogoAlt: "매일신문",
            lastEditted: "05월 23일 20:44 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9041%2F205100_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹대통령 "노동·복지·원전…무너진 국가 시스템 정상화 해야"',
              mainArticleTitle:
                '尹대통령 "노동·복지·원전…무너진 국가 시스템 정상화 해야"',
            },
            subArticles: [
              "대구경북 대표 명산 팔공산 23번째 '국립공원' 승격",
              "[봉하마을] 野, 노무현 전 대통령 추도식 총집결…계파 갈등 우려 불식 하나",
              "김재원, '전광훈 목사와 신당 창당 가능성' 일축…방송 출연 집중 전망",
              "'곧 초강력' 태풍 마와르, 대만 동쪽~오키나와 군도 라인 탄다",
              "올 여름도 덥다…평년 기온보다 높을 확률↑",
              "포항 밤하늘 수놓는 천개의 불빛, ‘포항국제불빛축제’ 26일부터 축포",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png",
            pressLogoAlt: "제주도민일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9099%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "제주 최대 갈등현안 제2공항...‘주민투표’ 촉구",
              mainArticleTitle: "제주 최대 갈등현안 제2공항...‘주민투표’ 촉구",
            },
            subArticles: [
              "사상 첫 추경 심사보류...제주도 '소통부족' 도민께 송구",
              "제27회 제주국제관광마라톤축제 3,500여명 참가",
              "제주대, 단과대‧유사과 통합 등 구조조정 추진",
              "‘꼬닥꼬닥 걸어온 20년’ 제주그림책 전시회",
              "제18회 제주포럼, 정부 관심 밖 행사로 전락",
              "제주도, 내년도 국비 2조 확보...지방재정협의회 요청",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/087.png",
            pressLogoAlt: "강원일보",
            lastEditted: "05월 23일 17:58 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9074%2F180218_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "권혁열 강원도의장 국회서 '강원특별법 통과 1인시위'",
              mainArticleTitle:
                "권혁열 강원도의장 국회서 '강원특별법 통과 1인시위'",
            },
            subArticles: [
              "강원특별법 상경집회 일촉즉발… 곳곳서 충돌",
              "‘알맹이 없는 특별자치도’ 되나…이번주 법안심사 안하면 출범 전 특례 반영 무산",
              "강원특별법 법안심사 무산… 강원도민 전방위적 압박 나선다",
              "강원도교육청 새 감사관에 정오현 총무과장",
              "[속보]국정원·경찰, ‘국가보안법 위반 혐의’ 전교조 강원지부 압수수색",
              '"원주아카데미극장 즉시 철거해야"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png",
            pressLogoAlt: "충청일보",
            lastEditted: "05월 23일 22:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9101%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "충청권 U대회 조직위 설립 '가시밭길'",
              mainArticleTitle: "충청권 U대회 조직위 설립 '가시밭길'",
            },
            subArticles: [
              "올해 여름 충북 평년보다 기온 높을 듯",
              '김병국 청주시의회 의장 "내로남불 민주당…원칙대로 하겠다"',
              "청주시, 돌봄 사각지대 어르신 찾아나선다",
              "김영환 충북지사, 김용수 도립대 총장 후보 '두둔'",
              "충북도 아이돌봄광역지원센터 개소",
              "충북 소비자심리지수 4개월 연속 상승",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/337.png",
            pressLogoAlt: "경북일보",
            lastEditted: "05월 22일 23:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9067%2F232004_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "영일만대교·엑스코선…내년 국비 정부와 머리 맞댄다",
              mainArticleTitle:
                "영일만대교·엑스코선…내년 국비 정부와 머리 맞댄다",
            },
            subArticles: [
              '안전시설물 없는 스쿨존..."우리 아이 안전은 누가 지켜주나요"',
              "포항시민 고교평준화 찬반 팽팽",
              "한·미·일 정상 ‘워싱턴 3자회담’ 7월 개최 가능성",
              "[영상] 푸른 잔디서 즐기는 '나이스샷'…동호인 파크골프대회 개최",
              "제1회 영천시장배 전국승마대회 성료",
              "최우선 변제금 최장 10년 무이자 대출…보증금 5억까지 구제",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/907.png",
            pressLogoAlt: "경북매일신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9123%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "해병대 장병들 농촌일손돕기",
              mainArticleTitle: "해병대 장병들 농촌일손돕기",
            },
            subArticles: [
              "‘팔공산 국립공원’ 꿈을 이루다",
              "포스코 ‘저출산 해법’ 모범… 국회·정부·학계 뭉쳤다",
              "대구 내달 2천756가구 분양 예정 하반기 부동산 시장 기지개 켜나",
              "경북, 역점사업 국가예산 확보 화력 집중",
              "14년 기다린 포항송도해수욕장, 올해도 개장 불발?",
              "與 ‘돈봉투·코인·대장동’ 공세에 野 “노무현 길 따르겠다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png",
            pressLogoAlt: "부산일보",
            lastEditted: "05월 23일 19:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9042%2F191250_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "부산 5060 퇴직 후 ‘노년 가난’ 내몰린다",
              mainArticleTitle: "부산 5060 퇴직 후 ‘노년 가난’ 내몰린다",
            },
            subArticles: [
              "“70세 넘어도 일하고 싶지만 일자리 바늘구멍”… 재취업 막막한 ‘부산 5060’",
              "[단독] 엑스포 수소 도시 만든다더니… 부산, 수소 인프라 낙제점",
              "[PK 총선 일타강의] 전직 구청장 등 ‘중량급 신예’ 잇단 출사표에 벌써부터 ‘후끈’",
              "부산 영화단체 “BIFF 내홍 당사자 조종국부터 사퇴하라”",
              "“책임정치 충실 노 전 대통령 유업 이루겠다”",
              "다시 군불 지피는 교육국제화특구",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/301.png",
            pressLogoAlt: "광주드림",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9065%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "누리호 발사 D-1, 직관 명당은?",
              mainArticleTitle: "누리호 발사 D-1, 직관 명당은?",
            },
            subArticles: [
              "[시민기자 생각]“마약류 범죄 단속과 치료 병행해야”",
              '5.18 43주년 전야제 여야 구분 없이 "광주 정신 계승"',
              "수어는 내운명, 손짓으로 전하는 언어의 힘",
              "[딱꼬집기]교사들이 고발당하고 있습니다",
              "[기고]광주 통합돌봄과 광주의료사협",
              "“사람과 반려동물, 어울려 사는 광주 만들기”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/333.png",
            pressLogoAlt: "경남신문",
            lastEditted: "05월 23일 22:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9072%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "18세도 54세도 ‘청년’… 청년 폭 넓힌다",
              mainArticleTitle: "18세도 54세도 ‘청년’… 청년 폭 넓힌다",
            },
            subArticles: [
              "[여야 지도부 총출동, 셈법은] 국힘 ‘중도층 겨냥·외연 확장’ vs 민주 ‘지지층 결집·내분 불식’",
              "[봉하 찾은 ‘노무현의 사람들’] “역사는 더디지만 진보한다”… 시민 7000명 추모 발걸음",
              "대우조선, ‘한화오션’으로 새 출항",
              "‘누리호 발사 참여’ 경남 기업들, 사업 분야 확장 필요",
              "학폭 예방 ‘매의 눈’으로",
              "‘창원 전세사기’ 중개사·보조원, 무혐의 될라",
            ],
          },
        ],
      },
    ],
    currentTypeList: [
      {
        title: "종합/경제",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
            pressLogoAlt: "조선비즈",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9088%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
              mainArticleTitle:
                "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
            },
            subArticles: [
              '[속보] 누리호 발사관리위 "준비 문제없어… 예정대로 내일 발사"',
              '서울 주목하는 명품업계… 佛언론 "韓 관심 끌기 위해 경쟁"',
              '尹대통령, WTO 사무총장 접견… "韓 청년에 인턴 기회 달라"',
              "하이브, 中 텐센트뮤직과 음원 유통계약… 국내와 동시 서비스",
              "분양 기피하는 건설사들… 이대로 가면 '집값 불안' 현실화",
              "회계 공시한 노조만 세제혜택 받는다… 공시시스템 9월 운영",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
            pressLogoAlt: "중앙SUNDAY",
            lastEditted: "05월 23일 09:59 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9227%2F100234_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
              mainArticleTitle:
                "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
            },
            subArticles: [
              "꿀벌 200억 마리 실종, 2000마리에 칩 달아 추적",
              "172년 '흙살림 농법'…70가지 채소로 '몸살림 밥상'",
              "김환기의 보름달 왜 푸른색일까? 그에 관한 7가지 사실",
              "강남 은마 경매가 2억 뛰고 급매 사라졌지만, 신중론도 여전",
              "삼성 '바퀴달린 스마트폰' 자율차 반도체로 활로 찾는다",
              "동아시아 '에라스무스' 프로그램 추진, 대학 위기 타개해야",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/973.png",
            pressLogoAlt: "비즈한국",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9197%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "소유의 종말이 가져온 짠테크 '중고거래'",
              mainArticleTitle: "소유의 종말이 가져온 짠테크 '중고거래'",
            },
            subArticles: [
              "전세 가구의 다음 선택에 매매·반전세·월세가 있어야 하는 이유",
              "[단독] 김인순 매일유업 명예회장, 영동공장 인접 땅 차명 보유 의혹",
              "전세 사기, 공인중개사는 과연 책임이 없을까",
              "요기요가 쏘아올린 전쟁의 서막? 배달 플랫폼 이번엔 '점유율 경쟁'",
              "영화가 아닌 '공간'에 방점…CGV·롯데시네마·메가박스의 변신",
              "달 먼지로 태양을 가려 지구 온난화를 막겠다고?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/243.png",
            pressLogoAlt: "이코노미스트",
            lastEditted: "05월 23일 17:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9163%2F172537_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
              mainArticleTitle:
                "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
            },
            subArticles: [
              "29년 동안 4000대 팔았다...기아, 27번째 ‘그랜드 마스터’ 배출",
              "“이게 무슨 일” 퇴근길에 ‘깜짝’…송파구 일대에 우박 쏟아져",
              "닻 올린 한화오션…경영 정상화 ‘속도’",
              "“손이 가요, 손이 가”…영원한 ‘국민 간식’ 52살 새우깡 [1000억 식품의 비밀]",
              "‘원조 가성비車’ 티볼리, KG 품에서 다시 태어난다",
              "英 매체 “한국 젊은 여성 자살률 증가, 모순적 기대 강요받아”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/969.png",
            pressLogoAlt: "매일노동뉴스",
            lastEditted: "05월 23일 07:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9183%2F074359_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
              mainArticleTitle:
                "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
            },
            subArticles: [
              "“파이프 끼임 사고” 원청 대표, 중대재해 ‘15번째’ 기소",
              "“분신 방조 허위 보도” 건설노조·유족 조선일보 고소·고발",
              "‘에이스손보 자회사 전적’ 일방통행에 고용불안 커져",
              "내년 공무원 보수 37만7천원 정액 인상 요구",
              "“보호외국인 법령 여러 나라 번역본 제공해야”",
              "노조법 개정안 직회부 결정 앞두고 노동사회단체 “국회 일하라”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132851977.png",
            pressLogoAlt: "여성경제신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9364%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
              mainArticleTitle:
                "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
            },
            subArticles: [
              "11조 '순매도 vs 순매수' 외국인 태세 전환‧‧‧금리 사이클이 갈랐다",
              "'믿었던 바이오헬스 너마저'···中 리오프닝에도 수출 급감 초비상",
              "英 매체, 한국 젊은 여성 자살률 1위···성차별 문화 원인 지목",
              "[김현주 더봄] 혼자 걷는 즐거움에 빠지다",
              "[성기노 칼럼] 문재인 ‘평산책방’의 정치학",
              "600만 틱톡커 '듀자매'의 도전은 어디까지?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png",
            pressLogoAlt: "쿠키뉴스",
            lastEditted: "05월 23일 22:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9155%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
              mainArticleTitle: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
            },
            subArticles: [
              "황당한 국가자격시험 사고… 채점 전 609명 답안지 파쇄",
              "노무현 전 대통령 14주기… 여야 지도부, 추도식 참석",
              "3차 발사 D-1... 우뚝 선 누리호",
              "코인원 전 간부들, 30억 받고 가상자산 ‘뒷돈 상장’",
              "‘쌍방울 대북 송금 의혹’ 안부수, 1심 징역 3년6개월 선고",
              "“휴대폰 뺏기고 체중 검사…K팝 연습생 생활은 감옥”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
            pressLogoAlt: "머니에스",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9159%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
              mainArticleTitle:
                '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
            },
            subArticles: [
              '기준금리 인상 열차 멈춘다… "5월 금통위 동결 예상"',
              "[이사람] \"프랑스 비켜\"… 이승원, '제2의 이강인' 찬사",
              '"중개보수 깎아주지마" 공정위, 공인중개사협회 담합 조사',
              "양주 총기사고… '무릎쏴→ 서서쏴', 자세 바꾸다 오발?",
              '"암치료하는 생수"… 고령층 속여 385억원 편취한 일당',
              '"묻지마 폭행 수준"… 팬 밀친 男아이돌 경호원, 결국',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png",
            pressLogoAlt: "위키트리",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9157%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'토르' 레이 스티븐슨,  갑작스럽게 전해진 사망 소식…향년 58세",
              mainArticleTitle:
                "'토르' 레이 스티븐슨, 갑작스럽게 전해진 사망 소식…향년 58세",
            },
            subArticles: [
              "활발히 활동 중인 화사, 업계 술렁일 '대형' 보도가 하나 전해졌다",
              "“케인은 맨체스터 시티로 가고, 손흥민은…” 초대형 이적설 떴다",
              "부처님오신날 앞두고 연꽃빵 맛보는 동자승들 (사진 15장)",
              "“환멸 난다”…카리나 '외모 칭찬'했다가 욕먹은 이영지, 22일 입장 밝혔다",
              "혼자 사는 할머니 집에 무단침입해 10년 넘게 가족 행세하며 눌러산 남성 검거",
              "“열정페이 아니냐…” 팬들한테 '재능기부' 강요한 김태리, 역풍 제대로 맞고 있다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
            pressLogoAlt: "데일리안",
            lastEditted: "05월 23일 22:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9090%2F223816_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
              mainArticleTitle:
                "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
            },
            subArticles: [
              "민주당, 비명계에 '욕설 문자폭탄' 보낸 강성 당원 제명…첫 사례",
              '中 발끈했던 "힘에 의한 현상변경 반대"…권영세, 北에 외쳤다',
              '조희연 항소심 "어떤 위법 지시도 안 했다"…1심 판결 안 바뀌면 교육감직 상실',
              "‘로또 1등’에도 체납 세금 안 내…국세청, 고액 체납자 557명 추적조사",
              '출산 임박한 아내 태우고, 남편 "도와주세요" 외쳤지만…경찰 "관할 아니다"',
              '중국서 네이버 접속 불능…中 외교부 "구체적 정보 없다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153942530.png",
            pressLogoAlt: "대한경제",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9185%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
              mainArticleTitle:
                "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
            },
            subArticles: [
              "김영민 회장 동생회사도 942억 블록딜 매도",
              "주가 폭락 전 손 턴 오너…수상한 서울가스",
              "여행업계, ‘브랜드 마케팅’ 잰걸음",
              "인터넷업계 “온플법, 유니콘 성장 막는 악법”",
              "현대차 노조 임단협 임박… 핵심 쟁점은 ‘정년 연장’",
              "[포토] 도심항공모빌리티(UAM)에 쏠린 관심",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
            pressLogoAlt: "헤럴드경제",
            lastEditted: "05월 23일 21:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9023%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
              mainArticleTitle:
                "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
            },
            subArticles: [
              "“장갑차도 동원, 러 본토에 최대 규모 공격”…크렘린궁도 “우려 심각”",
              "\"이재용 사는 서울이 아니라고?\"…'7만전자' 눈앞 삼전개미, '여기' 가장 많다[투자360]",
              "“로또1등 당첨” 세금 안내려 지인계좌에 숨겼다…고액체납자 최후",
              "“어? 금리 내리네?” 중고차 사업 ‘슬슬’ 재개하는 카드사들[머니뭐니]",
              "21대 국회의원 부동산 재산, 평균 3.2억원 늘었다…1위는 민주당 박정",
              "‘52주 신고가’ 삼성전자 1등 공신은 外人…‘9만전자’면 코스피 2700 넘는다 [투자360]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png",
            pressLogoAlt: "인더스트리뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9222%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
              mainArticleTitle:
                "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
            },
            subArticles: [
              "페펄앤드푹스, PRT와 MEMS 기술 결합해 고해상도 3D포인트 클라우드 지원",
              "포스코퓨처엠, 배터리소재 전문 인재 육성 위해 산학협력 강화 나서",
              "KAIST, ‘그린수소’ 저가 생산기술 실마리 찾아",
              "슈나이더일렉트릭, 세계 최초 디지털 모터스타터 ‘TeSys Island’ 제공",
              "산업부, 중소기업 기술사업화 투자 확대 나선다… 기술평가비용 전액지원",
              "토트넘, 4년 연속 영국 프리미어리그 최고의 친환경 구단 선정",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/971.png",
            pressLogoAlt: "일요시사",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9194%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
              mainArticleTitle:
                "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
            },
            subArticles: [
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ①그들은 왜 어떻게 묻혔나",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ②아빠의 멈춰버린 6년",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ③자식 앞세운 애끓는 사연들",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ④‘의심 자초’ 초동수사 한계",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑤권인숙·김민기 의원에 듣다",
              "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑥수장 따라 바뀌는 순직 정의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/825.png",
            pressLogoAlt: "이로운넷",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9244%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "서울시, 서울계약마당 새단장...정보 접근성 향상",
              mainArticleTitle:
                "서울시, 서울계약마당 새단장...정보 접근성 향상",
            },
            subArticles: [
              "당류 함량 높은 '밀크초콜릿' 먹을 때 주의해야",
              "너무 흔해 잡초 같아 보이지만 '꿀풀'은 열일하는 약초입니다",
              "어디에나 있고 어디에도 없는 에티오피아 1",
              "광주시민 3,000여명 ‘민주평화대행진’ “기억하라 오월광주, 행동하라 헌법수록”",
              "날좀보소, 날좀보소~ 밀양강변에서 '밀양아리랑대축제'",
              "헥산, GMO, 벤조피렌...'바리의꿈'에는 없다(1)",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
            pressLogoAlt: "파이낸셜뉴스",
            lastEditted: "05월 23일 21:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9021%2F214115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"野 부천 시의원이 국민의힘 女의원 몸을..."  CCTV에 찍힌 충격적인 장면',
              mainArticleTitle:
                '"野 부천 시의원이 국민의힘 女의원 몸을..." CCTV에 찍힌 충격적인 장면',
            },
            subArticles: [
              '"하루 두 끼 먹는 남성, 세 끼 먹는 남성보다..." 놀라운 연구 결과',
              '"양주서 숨진 20대 일병, 무릎쏴 자세를..." 목격담',
              '"카드값 연체 하루 만에..." 심상치 않은 카드사들',
              '로또 1등 당첨자의 교묘한 수법 "세금 안 내려고.."',
              '"40대 백만장자, 회춘하기 위해 아들의.." 소름행각',
              '"결혼 꿈도 못 꿔"..9급 공무원 실수령액 얼마길래?',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/993.png",
            pressLogoAlt: "허프포스트코리아",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9217%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "양자경이 원하는 대본은",
              mainArticleTitle: "양자경이 원하는 대본은",
            },
            subArticles: [
              '"내가 받고 싶은 대본은.." 양자경이 동양인 최초 오스카 여우주연상 수상 후 고백한 변화는 통쾌하면서도 프로 정신이 돋보인다',
              '"열심히 운동하는 건강한 사람 그려줘" AI에게 식스팩보다 더 좋은 운동의 효과를 가르치자 일어난 변화는 눈이 휘둥그레진다 (영상)',
              '"재난은 악화될 것" 이탈리아 로마의 트레비 분수가 환경 단체에 의해 검게 물들었다',
              "\"더 이상 내 조카도 아니고..\" 전두환의 손자 전우원은 큰아버지 전재국으로부터 '절연 통보' 문자 메시지 한 통을 받았다",
              "\"스타가 탄생했다!\" 해외 매체들에 '인어공주' 할리 베일리 캐스팅 논란을 잠재울 극찬이 이어졌다",
              '"치매 걸린 아빠 위해.." 브루스 윌리스의 9살 막내딸의 행동은 사랑이 가득해 제3자인 내 마음까지 따뜻하게 녹인다(영상)',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
            pressLogoAlt: "노컷뉴스",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9028%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
              mainArticleTitle:
                "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
            },
            subArticles: [
              "[영상]목 안고 어깨 터치···부천시의원, 국힘 의원 성추행 의혹",
              "[영상]李 \"조직된 힘으로\"···추모객들 한덕수에 '야유'",
              "[단독]\"미술관 내놔\" SK, '이혼소송' 노소영 상대 소송",
              "中 다음 이어 네이버도 접속차단? 단순 접속장애?",
              '"손자 죽고 저만 살아서···" 급발진 의심사고 첫 재판',
              "검찰, 김남국 보유 논란 '위믹스' 증권성 검토",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png",
            pressLogoAlt: "UPI뉴스",
            lastEditted: "05월 23일 21:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9241%2F212834_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
              mainArticleTitle:
                '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
            },
            subArticles: [
              '내달 귀국 이낙연 "혁신 못하면 외부 충격"…이재명 체제에 경고?',
              '노무현 서거 14주기…봉화에 총집결한 여야 "盧정신 기억하자"',
              "美 연준 위원들, '추가 인상' vs '동결' 팽팽…시장 기대 무너지나",
              "PM, 자전거·보행자 뒤엉켜 '아찔'…파리처럼 퇴출 안되려면",
              "정신감정 받게 된 조양래…한국앤컴퍼니 '남매의 난' 재점화",
              "'IFRS17'로 보험사 실적 뻥튀기?…\"현재 수치 신뢰 힘들어\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
            pressLogoAlt: "국민일보",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9002%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
              mainArticleTitle:
                "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
            },
            subArticles: [
              "누리호 세워놨는데 ‘기습’ 소나기… 발사위 “24일 확정”",
              "[단독] 증권사 엉터리 ‘장부가 평가’… 당국, “원칙대로 하라” 뒷북",
              "김건희 “韓, 매력적인 나라” 이부진 “김 여사에 감명”",
              "청소하던 경비원 때린 20대 주민 “술 마셔 기억 안나”",
              "강남 주택가 화분에 양귀비 재배한 80대 할머니",
              "‘집단성폭행 가해자가 교사’ 폭로…교육청 “현재 근무 안해”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/536.png",
            pressLogoAlt: "더팩트",
            lastEditted: "05월 23일 20:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9156%2F204123_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
              mainArticleTitle:
                "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
            },
            subArticles: [
              '국민의힘 "김남국, 대선 전후 2억5000만 원 현금화...어디에 썼나"',
              "[동전주②] 큐로그룹 계열사 6곳 중 5곳 1000원 안 되는데…회사는 '나 몰라라'",
              "누리호 3차부터 '민간 참여' 강화…한화에어로스페이스·KAI 등 '구슬땀'",
              "'하루살이떼' 습격…'퇴치법 없다' 피해 확산",
              "[팩트체크] 임창정, 엔터 사업도 빨간불?…파주 사옥 직접 가보니",
              "[단독] '진성준 정치자금법 위반 혐의' 강서목민관학교 계좌 압색",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png",
            pressLogoAlt: "신아일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9225%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
              mainArticleTitle:
                '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
            },
            subArticles: [
              "‘김남국 방지법’ 통과됐지만... 징계 절차는 걸음마",
              '"끝까지 잡는다" 국세청, 고액체납자 재산 집중 추적',
              "검찰, 'SG 주가조작 의혹' 라덕연 등 은닉재산 추적에 수사력 집중",
              "'대우조선' 간판 떼고…'한화오션' 새출발",
              "현충일 연휴 'SRT 3280석' 추가 운행",
              "한미일 '확장억제' 협의체 창설하나… 동북아 정세 긴장 우려",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
            pressLogoAlt: "뉴스타파",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9144%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
              mainArticleTitle:
                "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
            },
            subArticles: [
              "의사 편드는 'K-선샤인액트' 시행규칙 꼼수",
              "[윤석열 1년 특집] ‘혼네와 진심’, 한일 지식인에게 묻다",
              "경찰, 법원 판결 뒤집고 윤 대통령 장모 '최은순 무혐의'",
              "[주간 뉴스타파] '의정'과 '사익' 사이... 김남국, 조명희, 최영희",
              "[히든머니 프로젝트] “대정부 영업 활동”... 조명희 의원의 내 회사 챙기기",
              "[히든머니 프로젝트] 최영희, 국회법 어기고 일가족 위한 법안 발의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
            pressLogoAlt: "한국경제",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9022%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
              mainArticleTitle:
                "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
            },
            subArticles: [
              "\"마술쇼 보는 줄\"…현대차·기아의 도어 '신기술'",
              "절대 강자 '네이버'마저…이대로 가다간 '초비상'",
              "'미친 가성비' 치킨 곱빼기 등장…\"오히려 좋아\"",
              '"조용한 승차감에 반했다"…5060 열광한 일본車',
              "'1000억 물려준다' 유언장이…무효된 사연은",
              '"불륜하지 맙시다"…내연녀 가게 앞 시위, 결국',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/013.png",
            pressLogoAlt: "연합인포맥스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9133%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
              mainArticleTitle:
                '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
            },
            subArticles: [
              '배런스 "부채한도 협상 실패, 양당 모두가 지는 게임"',
              '尹대통령 "디리스킹은 특정국 의존 줄이는 공급망 다변화"',
              "교보생명·카카오페이손보, 악사손보 공동인수…인수가 3천500억",
              'KB증권 "불법 자전거래 아냐…손실 덮을 목적 아닌 시장 유동성 공급"',
              "화이자, 비만 치료제 체중 절감 효과…주가 4%↑",
              '"G7 중국 고립, 불가능하고 위험…미중 경제 분리 고통"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
            pressLogoAlt: "미디어오늘",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9029%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
              mainArticleTitle:
                "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
            },
            subArticles: [
              "서울신문, 한겨레·경향과 멀어지고 조선·중앙과 가까워졌다",
              "신문·방송에 넘쳐나는 ‘흐림처리’ 문제 없나",
              "제평위 사실상 해체에 인터넷신문협회 “정치권, 정략적 이용 말라”",
              "‘호반 인수 저지’ 서울신문 조합장이 퇴사하며 남긴 말",
              "[영상] 박성중 “국정감사 위증으로 한상혁 위원장 고발하라”",
              'MBC‧방문진 "목표는 MBC 장악…독립성 침해" 감사원에 법적 대응',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
            pressLogoAlt: "인민망",
            lastEditted: "05월 23일 18:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9118%2F195235_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
              mainArticleTitle:
                "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
            },
            subArticles: [
              "中 1~4월 유럽행 화물열차 운행 5611편, 전년比 17% 증가",
              "中 외교부, ‘제76차 세계보건총회 타이완 참석 거부’ 관련 입장 발표",
              "[포토] 고도(古都) 시안의 문화 상징물, 진시황 병마용",
              "산시 윈청, ‘야간 경제’로 활력이 넘치는 도시",
              "中 저장, 풍성한 국내외 먹거리 축제 “미식의 향연”",
              "[시진핑 주석이 주고받은 외교 선물] 시진핑 주석이 받은 훈장…모두가 ‘최고의 영예’ 상징",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174430433.png",
            pressLogoAlt: "서울와이어",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9360%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
              mainArticleTitle:
                "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
            },
            subArticles: [
              '윤 대통령, 민노총 집회 정조준..."도로점거 등 불법시위 용납않겠다"',
              "명품족에도 등급… 휴무일에 문 연 롯데백화점, 'VIP 행사' 인기",
              '금융위‧금감원‧거래소‧남부지검, "주가조작 비상대응체계 가동"',
              "두 차례 탈옥, 강도살인범 신창원… 교도소서 극단선택 시도",
              "미다스의 손 '배터리아저씨' 박순혁 활동중단 선언… 왜?",
              '서울 사대문 도심개발 숨통 트나… 오세훈 "문화재옆 고층 가능"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png",
            pressLogoAlt: "데일리임팩트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9234%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
              mainArticleTitle:
                "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
            },
            subArticles: [
              "IRA 한파에 현대차그룹, 미국 영업 틀 바꾼다",
              'MZ 40% "환경 무시하는 기업 그만 둔다"-딜로이트 조사',
              "금융당국·검찰, '불공정거래 세력과 전쟁' 나선다",
              "‘요지부동’ 5%대 기업대출 금리…은행권 ‘부메랑’ 될까",
              "'주판알 튕겨본들..' 불확실성 커진 K칩",
              "'동양의 지중해' 남해안에 관광용 UAM 뜬다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
            pressLogoAlt: "문화일보",
            lastEditted: "05월 23일 22:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9004%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
              mainArticleTitle:
                "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
            },
            subArticles: [
              "[단독]‘현직 순경, 미성년자 성관계’ 보고받은 경찰청장, 성비위 첫 ‘특별경보’ 발령",
              "최태원 회장 이혼소송에 가세한 SK 계열사…‘노소영 미술관 나가라’",
              "김건희 “한국은 진실로 매력적인 나라”...이부진 “김 여사 노력에 큰 감명”",
              "[단독]심형탁, 누명 벗었다…5억 소송 ‘무죄’·사기방조 ‘무혐의’",
              "60도 독주 7병 마시는 장면 생중계 12시간만에 사망",
              "스피어스, 톱스타 불륜 폭로 왜?…“좋은 사람 없었다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
            pressLogoAlt: "소비자가만드는신문",
            lastEditted: "05월 23일 07:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9196%2F074128_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
              mainArticleTitle:
                "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
            },
            subArticles: [
              "고객센터서 ‘보험금 나온다’ 안내했는데, '지급 거절'...분쟁 다발",
              "은행 공모펀드 증가세로 반전...KB국민 14조 원 '최고'",
              "[민원평가대상-휴대전화] 삼성전자, 상담원 품질 향상 노력",
              "[민원평가대상-가구] 시몬스, '직배송 시스템' 운영 소비자 호응",
              "삼성·LG·SK그룹, 미국 IRA '수혜' 기대감...'수혜 제외' 현대차",
              "출범 2년 한화생명금융서비스 첫 흑자 내며 대형GA로 순항",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
            pressLogoAlt: "오마이뉴스",
            lastEditted: "05월 23일 21:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9030%2F214115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
              mainArticleTitle:
                "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
            },
            subArticles: [
              "정치인도, 시민도 \"그립습니다\"... 윤 대통령 조화에 '치워달라' 항의도",
              "생리대에서 점자 표기를 본 적 있나요?",
              "'오락가락' 유동규, '건강' 이유로 불출석...늘어지는 대장동 공판",
              "위령비 공동 참배한 기시다 총리의 수상한 결정",
              "사실상 해체→전국대회 첫 승, 바닷마을 농구부의 반전드라마",
              '500만원짜리 작품 깬 아이 엄마 "밤새 복원하다니, 큰 가르침"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/963.png",
            pressLogoAlt: "에너지경제",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9188%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
              mainArticleTitle: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
            },
            subArticles: [
              "미·중 갈등에 韓 '폭풍의 눈'...'제2의 사드보복' 우려",
              "美 IRA 수혜는 어디로…태양광·풍력株 지지부진",
              '모텔서 "직장동료 숨졌다" 신고, 알고보니 성매매 댓가 가로챈 20대',
              "우리 애도 혹시? ADHD 징후 ‘이 행동’ 살펴봐야",
              '"아빠도 18살 할래" 아들 피 1L씩 수혈, 美 40대 백만장자 실화',
              "故노무현 14주기에도 ‘아전인수’...여야 메시지 어땠나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
            pressLogoAlt: "매일경제",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9016%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
              mainArticleTitle:
                "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
            },
            subArticles: [
              "[속보] 누리호 발사관리위 “24일 발사 확정, 특이사항 없어”",
              "“월급 197만원 남짓…이 월급으로 결혼이라도 하면”",
              "몸값 오를거 같은데?…대학 축제에 매출 급증한 이 곳",
              "'무료 홍콩·10만원 일본﻿·반값 한국'…여행가의 유혹",
              "609명 채점전 답안지 파쇄…국가자격시험 '황당 실수'",
              "“韓서 명품백은 ‘이것’” 엔데믹 보복 소비에 외신도 주목",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
            pressLogoAlt: "경향신문",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9001%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
              mainArticleTitle:
                '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
            },
            subArticles: [
              "집값 상승기 부동산 투자로 수십억 번 국회의원들",
              "중국 “한국에 엄정 입장 표명, 중·한관계 문제점 인식해야”",
              "러시아 “벨고로드 교전 종료…반체체 단체 70명 사살” 주장",
              "한국 시찰단 오니 속내 드러낸 일본 “후쿠시마 수산물도 수입 재개를”",
              "사우디 첫 여성 우주인 탄생…빈살만의 ‘개혁 군주’ 이미지 뒤 그림자도 여전",
              "탄핵심판 나온 행안부 재난담당자 “이태원 참사 때 조치 다했다” 장관 감싸기",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/816.png",
            pressLogoAlt: "시사오늘",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9229%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
              mainArticleTitle:
                "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
            },
            subArticles: [
              "‘젊은 SUV’ 르노 XM3…1인 가구·디지털 세대 입맛 노린다",
              "신한투자증권, 초 개인화된 맞춤형 서비스로 투자자 잡기 나서…시장점유율 6% 목표",
              "‘한화오션’ 출범…권혁웅 대표 “글로벌 기업으로 육성”",
              "황교안 “국정원 보안 해킹 점검 받겠다는 선관위, 진정성 의문” [현장에서] ",
              "학교폭력 해법의 진일보, ‘학폭법’에 있다 [특별기고]",
              "딱 걸린 ‘가난 코스프레’ [만평오늘]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/972.png",
            pressLogoAlt: "PD저널",
            lastEditted: "05월 23일 19:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9199%2F191250_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
              mainArticleTitle:
                "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
            },
            subArticles: [
              '세월호 보도 권고 보고서 쓴 김성수 기자 "아픈 지적한 취지 봐줬으면"',
              '한상혁 방통위원장 면직 수순…"공영방송 장악 시나리오 빨라질 것"',
              "‘포털 때리기 부담 느꼈나’…제평위 8기 출범 앞두고 활동 중단",
              "넷플릭스 광고요금제 기대 이상 선전...국내 OTT 선택은",
              "방심위, '우울증 갤러리' 차단 않기로...'자율규제 강화' 권고",
              "요즘 예능 대세, 시즌제 아니면 스핀오프",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
            pressLogoAlt: "동아일보",
            lastEditted: "05월 23일 21:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9003%2F215944_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
              mainArticleTitle:
                "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
            },
            subArticles: [
              "尹 “정부, 기업인에 열려있어…자신있게 세계시장 뛰어들라”",
              "왜 여권에서 한동훈 불출마론이 나오는가",
              "‘싸가지 없는 보수?’…이준석, 내년 총선 넘어 대선까지?",
              "“공산주의 미화 안돼”…‘조선공산당 표석’ 절도범, 정체 알고보니",
              "“경찰대, 인재 유치위해 존속” vs “로스쿨 육성학교 오명”",
              "체납 세금 안내려고 로또 1등 당첨금까지 빼돌린 철면피들",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13728808.png",
            pressLogoAlt: "프라임경제",
            lastEditted: "05월 23일 19:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9239%2F190432_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "롯데손보·롯데카드, 연내 매각설 수면 위…",
              mainArticleTitle: "롯데손보·롯데카드, 연내 매각설 수면 위…",
            },
            subArticles: [
              "'직원 사망' LGD, 독립 대책위 꾸린다",
              '[현장] "피부과 안 부럽다" LG프라엘 더마쎄라 팝업 가보니',
              "[오늘 뭐 먹지] 일동후디스·파리바게뜨·KFC",
              "[기업해부] 엔씨소프트① 리니지에 울고 웃는 '게임 명가'",
              "KB證, 하나증권과 '불법 자전거래' 의혹 전면 부인",
              "국내은행 3월말 연체율 0.33%…전년比 0.11%p↑",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205818702.png",
            pressLogoAlt: "뉴스클레임",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9359%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
              mainArticleTitle:
                "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
            },
            subArticles: [
              "[기자수첩] 신축 아파트 ‘인분’",
              '윤관석 "檢 짜맞추기 수사에 맞서 결백·억울함 밝힐 것"',
              "어린이 프로바이오틱스인데 첨가물 함량은 성인 기준?",
              "유아인, 잘 나가던 믿고 보는 배우의 추락[영상]",
              '"5월인데 벌써 덥다"… 유통가 여름 준비 분주',
              '현업언론단체 "한상혁 방통위원장 면직 청문회 규탄" 방송장악 의혹제기[영상]',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/913.png",
            pressLogoAlt: "뉴스토마토",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9121%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "대통령의 '품격'",
              mainArticleTitle: "대통령의 '품격'",
            },
            subArticles: [
              "대결의 정치, 노무현의 교훈",
              "주담대 잔액 역대 최대…2분기 가계부채 '꿈틀'",
              "'면직 기로' 한상혁 위원장 \"헌법적 가치 침해\"…여권은 위증죄까지 꺼내",
              "산인공 황당실수에 수험생 '부글부글'…공정성 논란도 '불가피'",
              "다시 노란 물결로…내가 기억하는 대통령 노무현",
              "시간당 임금 올랐지만…정규직·비정규직 임금격차 심화",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/120.png",
            pressLogoAlt: "EBN",
            lastEditted: "05월 23일 20:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9143%2F210002_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
              mainArticleTitle:
                "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
            },
            subArticles: [
              "[르포] 시계로 출발한 스와호수의 성공신화…'엡손' 기념관을 가다",
              "iM택시·타다, 합병 임박설 '솔솔'...카카오T 위협 '시너지'",
              "[단독]‘대우조선 흔적 지우기’ 한화오션, 핵심 임원 28명 계약해지",
              '전세제도 폐지론, 갑론을박 "기존 제도 없애긴 힘들어"',
              "'수주 드라이브 건다'…한국조선해양, 올해도 200억달러 돌파한다",
              "아시아나항공, 빚만 쌓여간다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/975.png",
            pressLogoAlt: "시사저널이코노미",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9195%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
              mainArticleTitle:
                "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
            },
            subArticles: [
              "[영상] “보고 또 보자”···전세사기, 아는 만큼 피한다",
              "한국MSD 구조조정 사태, 勞使 정중동···정리해고·잔류 희망자 이슈 전망",
              "[영상] 업스테이지, 아숙업 앞세워 ‘AI 대중화’ 주도",
              "카드론 잔액, 한달 새 4000억 ‘껑충’···건전성 부담 커지는 카드업계",
              "포화상태 이른 버거, 美 시장은 롯데리아 돌파구 될까",
              "[시승기] 한층 고급스러워진 렉스턴 ‘아레나·쿨멘’···평일엔 도심, 주중엔 산천으로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/961.png",
            pressLogoAlt: "메트로신문",
            lastEditted: "05월 23일 18:53 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9186%2F190007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
              mainArticleTitle:
                "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
            },
            subArticles: [
              "김건희 \"'K-관광 협력단' 출범식 축하…韓 매력 알리는 데 최선\"",
              "고팍스 변경신고 지지부진…투자자 보호 뒷전",
              "서학불개미, 3배 추종 ETF 인기...반도체주·기술주 하락 배팅까지",
              '부동산 시장 변화? 송파구 잠실일대 "집값 상승 이어질 것"',
              "누리호 3차 발사 하루 앞으로, 오후 6시24분경 발사 예정",
              '산은, 대우조선해양 매각절차 종결…"종합 방산·에너지 기업으로 성장할 것"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
            pressLogoAlt: "이투데이",
            lastEditted: "05월 23일 21:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9114%2F220209_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
              mainArticleTitle:
                "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
            },
            subArticles: [
              "“내일 민간 우주기업 시대 열린다”…첫 실전발사 '누리호' 18분58초 카운트다운",
              "차 부품 업계의 미래차 전환에 14.3조원 투입…차·부품수출 최대 800억달러 목표",
              '尹대통령, WTO 사무총장 접견…"새 무역규범 위해 노력해야"',
              "방통위 ‘뉴스제평위’ 법정기구화 연내 입법 추진",
              "“사생활이라 확인 불가”…긍정도 부정도 아닌 요즘 열애설",
              "학습 효과 없는 치킨업계…왜 자꾸 가격 올리나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
            pressLogoAlt: "아이뉴스24",
            lastEditted: "05월 23일 22:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9025%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
              mainArticleTitle:
                '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
            },
            subArticles: [
              "韓-EU, 양자·우주 등 전략기술 협력 확대 논의",
              "'신사업 가속' 위메이드플레이, 자회사 3사와 통합 채용",
              '[현장] 벤자민 로 ASM "韓은 핵심거점…투자지속 확대"',
              "'8만전자' 갈까?…반도체 경기 바닥론에 커지는 기대감",
              '이재명 "盧 꿈꿨던 역사의 진보 후퇴"…김기현 "전 대통령 흑역사 반복 안돼"',
              "[종합] \"中에 뺏긴 디스플레이 1위 되찾자\"…삼성·LG, '초격차' 기술로 압도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
            pressLogoAlt: "M이코노미뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9184%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
              mainArticleTitle:
                "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
            },
            subArticles: [
              "‘천년왕국’의 서막인가, 암울한 미래 ‘디스토피아’의 흉조인가",
              "“470억 손배소 취하하라”···대우조선 노동자의 절박한 외침",
              '국회 진입 저지당한 전세사기 피해자들 "빚에 빚 더하기로 세입자에 책임 전가"',
              "6月 전국 4만 가구 집들이...수도권이 60%",
              "尹, 지난주 민노총 시위 언급하며 “공공질서 무너뜨려”",
              '[M포토] 무더위 속 외침 "발달장애인 지원체계 마련하라"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
            pressLogoAlt: "서울경제",
            lastEditted: "05월 23일 22:16 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9018%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
              mainArticleTitle: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
            },
            subArticles: [
              '尹 "글로벌 생태계간 경쟁…대·중기 원팀돼야"',
              "'평당 1.2억' 베일벗은 용산 유엔사부지 아파트 분양",
              '시장감시 4대 기관장 "주가조작 혐의 계좌 동결·무관용 처벌"',
              "위성 작동해야 최종 성공…첫 실전 '운명의 19분'",
              "한화 가세한 조선 '빅3' 인력확보 진검승부",
              "하이브, 中 텐센트뮤직과 유통 계약…'문화 만리장성' 넘는다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
            pressLogoAlt: "프레시안",
            lastEditted: "05월 23일 22:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9031%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
              mainArticleTitle:
                "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
            },
            subArticles: [
              "K-드라마 전세계 열풍 배경에는 '이것'이 있었다",
              '21대 국회 3년간 국회의원 재산 7.3억 증가…11명은 "부동산투기 의혹"',
              '故 노무현 14주기 추도식 …국회의장 "정치개혁 유업 이루겠다"',
              "韓시찰단 방문에 日 기대감에 '들썩'…\"후쿠시마 수산물 수입 부탁\" 노골적 요구",
              '이부진·차은우와 함께 선 김건희 "한국 관광, 경제 한단계 도약시킬 수 있다"',
              "경찰, 김건희 '쥴리설' 제기한 기자들 무더기 검찰 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
            pressLogoAlt: "데일리한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9036%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
              mainArticleTitle:
                "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
            },
            subArticles: [
              "엔데믹에 웨딩 수요 폭발…가격 올라도 예약은 '하늘의 별따기'",
              "닻 올린 한화오션, '저가수주 해소' 시동거나",
              '정부, 車 부품산업에 14조원 투입…"미래차 전환 적극 대응"',
              "경제6단체, 노조법 개정안 본회의 상정 중단 촉구…“산업현장 대혼란”",
              "현대차∙기아, 미닫이·여닫이 전환되는 트럭 적재함 도어 개발",
              "CJ대한통운 택배기사, 목욕탕서 심폐소생술로 생명 구해",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/954.png",
            pressLogoAlt: "CNB뉴스",
            lastEditted: "05월 23일 18:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9178%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
              mainArticleTitle:
                "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
            },
            subArticles: [
              "[단독] 한전도 LH도 “나몰라라”…산으로 간 ‘송주법 지원사업’",
              "[1분기 핫실적③] ‘동반부진’ 아모레·LG생건…반등은 언제쯤?",
              "[테크크] 때 이른 더위에 전기료 인상까지…가전업계 “에너지 효율을 높여라”",
              "[쿨韓정치] 박정희·노태우·YS·DJ의 아들들이 만난 이유",
              "'역사는 더디다, 그러나 진보한다’…盧 서거 14주기 추도식",
              "[기자수첩] 모두의 주의의무가 요구되는 때",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
            pressLogoAlt: "아주경제",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9124%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
              mainArticleTitle: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
            },
            subArticles: [
              "정부, 포털 뉴스 제평위 법정기구화 추진...'언론 평가 투명하게 공개'",
              "[노무현 14주기] 권양숙 여사 '독도는 대한민국 고유 영토'",
              "​샤넬, 두 달 만에 또 가격 올렸다...'클래식 플립백 라지' 1570만원",
              "대면 영업 시도한 카카오뱅크, 금융당국 움직이자 꼬리 내렸다",
              "[불법 노조와의 전쟁] 尹 '민노총 1박2일 집회 국민 용납 어려워'",
              "''중국판 보르도' 전 세계에 홍보' 6월 中닝샤 국제 와인 박람회 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
            pressLogoAlt: "뉴데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9058%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
              mainArticleTitle:
                "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
            },
            subArticles: [
              '文정부 땐 "후쿠시마 오염수 문제없다" vs 尹정부 땐 "문제많다"… 민주당 딴소리',
              '尹 "민노총 집회, 국민 자유·기본권 침해… 불법 행위 용납 못해"',
              "\"징용 배상금 받으면 20% 내라\"… 시민단체, 징용 피해자들과 '약정'",
              "선관위 간부 아빠, 경력직 채용 때 본인 자녀 '셀프 승인' 파문",
              '이복현 금감원장 "불공정 세력 척결…거취 걸겠다"',
              "\"1200조 우크라 재건시장 잡아라\"…K-건설 '원전' 승부수",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/932.png",
            pressLogoAlt: "CEO스코어데일리",
            lastEditted: "05월 23일 18:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9152%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
              mainArticleTitle:
                "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
            },
            subArticles: [
              "“MZ세대, 알뜰폰에 못 내줘”…‘청년 고객’ 잡기 나선 통신 3사",
              "증권사 MTS 개편 러시…신한투자 “초개인화 집중, MAU 업계 1위 300만 도전”",
              "[점프UP 한국 증시] ①‘주주가치 제고’ 이상과 현실…여전히 갈길 먼 배당성향",
              "카카오모빌리티, ‘독과점 논란’ 굴레 털고 해외로 간다",
              "‘60일 레이스’ 곧 마무리…임종룡과 함께할 우리은행장, ‘현장 영업력’이 명운 갈라",
              "중국, 미 마이크론 제재…삼성·SK, 반도체 추가 공급 길 열리나",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
            pressLogoAlt: "세계일보",
            lastEditted: "05월 23일 20:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9006%2F204123_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
              mainArticleTitle:
                "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
            },
            subArticles: [
              "尹 “민노총 불법집회, 국민들이 용납 못해”",
              "허술한 법망에… ‘상장피’ 판치는 코인거래소",
              "아이 버리고 7년간 아동수당 챙긴 미혼모",
              "'성추행 의혹' 부천시의원 민주당 탈당…\"당 조사 계속\"",
              "봉하마을 총출동한 여야…외연 확장·통합 과시 '동상이몽'",
              "독자기술로 실용위성 수송…누리호, 첫 임무 안고 우주로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/914.png",
            pressLogoAlt: "뉴스핌",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9125%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
              mainArticleTitle:
                "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
            },
            subArticles: [
              "'생성형 AI가 여는 새로운 미래' 뉴스핌 AI포럼 개최...\"위기 아닌 기회, 경쟁력 확보가 중요\"",
              "정부·민간 자동차 부품업계 14.3조 공급…자율주행·친환경 R&D 2조 투입",
              "[속보] 나로우주센터 소나기…누리호 발사대 작업 지연 예상",
              "박주환, 이건희 이을 미술품 기증…미술관 기부 문화 정착될까",
              '[인터뷰] 서울문화재단 이창기 대표 "서울의 사계절 축제, 시민에 더 다가갈 것"',
              "[영상] '생성형 AI가 여는 새로운 미래는?'...2023 뉴스핌 AI 포럼 성료",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/801.png",
            pressLogoAlt: "위키리크스한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9218%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
              mainArticleTitle:
                '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
            },
            subArticles: [
              "하늘 향해 우뚝 솟은 누리호, 변수 체크하며 내일 발사 준비 착착",
              "국정원, 전교조 강원지부 압수수색...“北지하조직 '이사회' 혐의\"",
              "[WikiLeaks] The forever war on Julian Assange...threatening the freedom of thought globally",
              "미 중소은행 위기, 대형은행엔 기회... JP모건 '퍼스트' 인수로 이자수익 4조원 증가 기대",
              "범부처의료기기사업단 10대 과제..“플랫폼 기반 전주기 지원“",
              "청와대-백악관 X파일(143) 김대중 햇볕정책에 대한 미국의 불안한 시선… 청와대 “리처드 닉슨의 데탕트 정책 계승” 주장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
            pressLogoAlt: "머니투데이",
            lastEditted: "05월 23일 22:35 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9017%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
              mainArticleTitle:
                '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
            },
            subArticles: [
              "'세계최초' 클릭 몇 번 싼 대출로 갈아탄다…연 12조 머니무브",
              "尹대통령 \"77%, 이게 진정한 지지율\"…기업인들 '박수' 왜?",
              '韓도 당했던 日의 반도체 수출규제…"中, 美제재보다 두려워해"',
              "직장 잃은 '밧데리아저씨' 입 열었다…\"돈 벌어놓고 나만 피해\"",
              "이부진의 '특별한 요청' 수락한 김건희 여사…\"한국 매력 알리겠다\"",
              "'암 치료 생수' 속아 넘어간 노인 7200명…수백억 뜯겼다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png",
            pressLogoAlt: "비즈워치",
            lastEditted: "05월 23일 16:44 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9167%2F165153_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
              mainArticleTitle:
                "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
            },
            subArticles: [
              "삼성전자, 꿀잠 연구하는 이유는",
              "'11번째 청약이라고?' 은평뉴타운 민간임대 '깜깜이 무순위'",
              "네이버 이어 카카오도 사우디 '러브콜'…위상 높이는 'K-IT'",
              "P2E업체 잇따라 소환…마브렉스 추가 내부조사",
              "[교통시대]정부, SR에 출자 추진…민영화 논란은 왜?",
              "'급전' 수요 몰렸다…현금서비스 잔액 2달 연속 ↑",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
            pressLogoAlt: "시사위크",
            lastEditted: "05월 23일 19:03 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9180%2F191028_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
              mainArticleTitle: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
            },
            subArticles: [
              "박지만 회장의 EG ‘빨간불 실적’ 올해는?",
              "[윤석열 지지율] 부정평가, 10주 만에 50%대로 하락",
              "전세 기간 중 세입자 사망, 전세금반환 시기는?",
              "불법판매에 해킹… 대부중개플랫폼서 개인정보 줄줄 샜다",
              "G7 성과 띄우는 국민의힘",
              "민주당-국민의힘, 10주 만에 오차범위 내 접전",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
            pressLogoAlt: "서울신문",
            lastEditted: "05월 23일 18:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9005%2F183810_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
              mainArticleTitle: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
            },
            subArticles: [
              "尹 “민주노총 집회 국민 용납 어려워…엄정 법집행”",
              "심상찮은 北…동창리 새 위성발사대 완공 앞둬",
              "시찰단, K4 탱크·ALPS 점검…日은 ‘시찰’ 강조",
              "23일 누리호 3차 발사…진짜 위성 8기 싣고 첫 실전 우주택배",
              "채점도 안한 국가자격시험 답안지 파쇄…609명 재시험 본다",
              "고지서·홈피서 발견한 ‘내 얼굴’…작은 단서로 가족 찾았습니다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png",
            pressLogoAlt: "비즈니스포스트",
            lastEditted: "05월 23일 17:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9166%2F180218_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
              mainArticleTitle:
                "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
            },
            subArticles: [
              "[다시뛰는 K금융 베트남①] 그래도 베트남, ‘포스트 차이나’ 수식어는 유효하다",
              "콜레라 세계 확산 2년 만에 백신 10년치 소모, 유바이오로직스에 의존 더 커져",
              '"TSMC 2나노 파운드리 고객 줄 섰다", 대만언론 삼성전자 추격에 위기감?',
              "삼성엔지니어링 상반기 아쉬운 해외수주, 남궁홍 하반기 중동에서 승부",
              "넥슨게임즈 중화권에서 고성장 드라이브, 박용현 ‘히트2’로 실적 점프 기대",
              "신한투자 MTS 1년 만에 대폭 손질, 김상태 홀로서기 첫해 리테일도 힘준다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/809.png",
            pressLogoAlt: "미디어펜",
            lastEditted: "05월 23일 17:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9224%2F172228_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
              mainArticleTitle: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
            },
            subArticles: [
              "수출·경쟁력 8개월째 하락…한국경제 '시계제로'",
              "한미일 정상, 경제안보·대북공조 더 강화 '재확인'",
              "언론 지형 바꾼 네이버, 순기능 지속돼야",
              'KAI, FA-50M 18대 수출 최종 계약 체결…"추가 계약 기대"',
              "은행권 수신경쟁 재등장…5%대 적금 내놔",
              "전세계 6000만 명 사용 ‘삼성 헬스’, 수면 혁신 현재진행형",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
            pressLogoAlt: "나우뉴스",
            lastEditted: "05월 23일 17:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9165%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
              mainArticleTitle:
                "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
            },
            subArticles: [
              "대만 태권도 선수, 韓 대회 시상대서 中 오성기 ‘번쩍’ 논란 [대만은 지금]",
              "“18세 몸 갖겠다”며 17세 아들 ‘피’까지 수혈받은 美 억만장자의 사연",
              "[포착] 내부 붕괴 시작?…러 본토서 교전 발생, 공격 주체는 ‘러시아인’ 반전",
              "주위를 다 집어삼킬듯…역대 가장 생생한 ‘태양 흑점’ 포착 [우주를 보다]",
              "대만 마지막 위안부 할머니 별세…“일본에 사죄·배상 계속 요구할 것” [대만은 지금]",
              "“우크라에 F-16 공급 노력 우선…몇 달 내 시작” 미 국무부",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113848865.png",
            pressLogoAlt: "정책브리핑",
            lastEditted: "05월 23일 22:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9367%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
              mainArticleTitle:
                "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
            },
            subArticles: [
              "“공공질서 무너뜨린 민노총의 집회 행태, 국민이 용납하기 어려울 것”",
              "지방시대 실현 위한 분권 강화…지역 경제·산업 회복 돕는다",
              "한국형 녹색채권, 올해 3조 9000억원 발행…온실가스 373만톤 감축",
              "‘올 상반기 내 재생원료 사용한 식품용기 출시’…연간 480톤 온실가스 저감",
              "문체부, ‘경이로운 소문2’ 등 K-드라마 후반작업 지원…245억 원 투입",
              "남는 쌀로 술·사료 만든다…농식품부, 정부양곡 14만톤 특별 처분",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png",
            pressLogoAlt: "미주한국일보",
            lastEditted: "05월 23일 11:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9231%2F114336_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
              mainArticleTitle:
                "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
            },
            subArticles: [
              "신분 도용사기 추적 웹사이트 사용 권고",
              "시카고 도심 한복판 우체국서 심야에 남성 20명 떼강도짓",
              "빌 게이츠 “미래 AI 개인 비서 개발 중요”…구글·아마존 겨냥?",
              "[사고] ‘한인사회 매스터스’ 골프 왕중왕 가린다",
              "“고추장 있었던 이유는”… ‘폭설고립’ 한국인 구한 美부부 대답은",
              "틱톡, 몬태나주 전면금지법 소송… “추측 토대로 위헌적 조치”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/804.png",
            pressLogoAlt: "데이터뉴스",
            lastEditted: "05월 23일 17:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9220%2F172228_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt: "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
              mainArticleTitle:
                "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
            },
            subArticles: [
              "CU, GS25와 매출 격차 200억 원대로 좁혔다",
              "LG이노텍, 전장부문 다시 흑자…매출은 매년 새기록",
              "코스맥스, 부채비율 재상승…화장품 빅5 중 압도적 1위",
              "CJ ENM, 구창근(엔터)·윤상현(커머스) 대표 희비",
              "손지훈 체제 휴젤, 5년 만에 수익성 회복 이어 최고 실적 쓸까?",
              "카카오게임즈, 3년 만에 1분기 매출 줄었다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
            pressLogoAlt: "초이스경제",
            lastEditted: "05월 23일 17:25 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9164%2F173124_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "중국, 미국에 화해 제스처?",
              mainArticleTitle: "중국, 미국에 화해 제스처?",
            },
            subArticles: [
              "日 대기업 임금인상률, 30년 만에 '최대'",
              "기관이 코스피 '견인'...2차전지 · 바이오주 '상승', 삼성전자 '소폭 하락'",
              '"SK에코플랜트, 친환경에너지 솔루션 기업 변신 중"...SK증권',
              "싼 게 비지떡?...'중국 국민車' 훙광 미니, 판매 급감",
              "코스닥...엘앤에프 · 이브이첨단소재 · 휴마시스 '껑충', 바이오니아 '하락'",
              "DL이앤씨 '장중 주가 강세'...한국투자증권 \"플랜트사업 주목\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
            pressLogoAlt: "이뉴스투데이",
            lastEditted: "05월 23일 21:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9189%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
              mainArticleTitle:
                "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
            },
            subArticles: [
              "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
              "조양래 한국타이어 명예회장 정신감정 초읽기···‘분쟁 2막’ 열리나",
              "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
              "리플, CBDC·스테이블코인 발행 지원 풀서비스 플랫폼 출시",
              "[2023하반기전망] ②수출회복 기지개···중국 거래 정상화 될까",
              "경상북도 칠곡군 동명면 25번 국도에서 대형 교통사고 발생",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
            pressLogoAlt: "한겨레",
            lastEditted: "05월 23일 22:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9009%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
              mainArticleTitle:
                "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
            },
            subArticles: [
              "[단독] 윤 대통령, 싱가포르식 ‘외국인 가사도우미’ 검토 지시",
              "민주, 비명계에 ‘악성 문자폭탄’ 강성당원 첫 제명",
              "‘엘니뇨=폭염?’ 한반도엔 더위 아니라 비 몰고 온다",
              "주4일제, 수요일 쉬면 어떨까?…“1년에 13개월치 성과”",
              "서울 온 중국 외교부, 대만 문제 관련 ‘강한 유감’ 밝혀",
              "윤, 건설노조 때릴 때도 ‘전 정부’ 탓…“불법 집회 방치한 결과”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/968.png",
            pressLogoAlt: "한국금융신문",
            lastEditted: "05월 23일 21:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9193%2F212834_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
              mainArticleTitle:
                "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
            },
            subArticles: [
              '정유신 서강대 기술경영대학원장 "우리나라 노동경직성 등 금융허브 도약 한계 많아" [2023 한국금융미래포럼]',
              "김주현 금융위원장·김광수 은행연합회장·임종룡 우리금융 회장…금융권 CEO 디지털 대전환 논의 [2023 한국금융미래포럼]",
              "윤창현 의원 “금융·비금융 두터운 규제 얇아져…'금융서비스산업' 추진될 것”[2023 한국금융미래포럼]",
              '황보현우 하나금융지주 데이터본부장 "영업점 업무량 데이터를 통해 효율화" [2023 한국금융미래포럼]',
              "조영서 KB국민은행 디지털플랫폼 총괄 “금융사, 빅테크 대응 위해 플랫폼으로 진화” [2023 한국금융미래포럼]",
              "김주현 금융위원장 “新기술·금융상품 대응 소비자보호 장치 마련” [2023 한국금융미래포럼]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
            pressLogoAlt: "이데일리",
            lastEditted: "05월 23일 22:05 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9020%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
              mainArticleTitle:
                "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
            },
            subArticles: [
              '"주가조작 못 잡아낸 이유는…" 거래소, 8개 종목 분석 마쳐',
              '“한국, 美전술핵 공유 원한다면 낡은 핵 저장시설부터 고쳐라"',
              "韓시찰단 오염수 점검 첫날에 日, 후쿠시마 수산물 수입 촉구",
              "'미술관 비워달라' SK, 노소영에 부동산 인도소송 제기",
              "아파트 주민의 만취 '묻지마 폭행'…경비원 안와골절 피해",
              '심형탁, 母 5억 빚 대신 안 갚는다…법원 "배상 책임 없어"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
            pressLogoAlt: "한국일보",
            lastEditted: "05월 23일 22:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9010%2F221251_001.gif%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
              mainArticleTitle:
                "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
            },
            subArticles: [
              '기사시험 답안지 609장 파쇄… 산업인력공단 "재시험 기회 부여"',
              "러시아 본토서 허 찔린 푸틴... '우크라 지원' 반군에 공격당했다",
              "후쿠시마 시찰의 핵심... ALPS를 제대로 봐야 하는 이유",
              '노란 물결…노무현 14주기 "꺾이지 않는 마음 필요한 때"',
              "부천시의원 성추행 의혹 영상 보니...목 안고 등 부비부비",
              "\"'대전판 도가니 사건' 성폭행범, 수원서 초등학교 교사 돼\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
            pressLogoAlt: "중앙일보",
            lastEditted: "05월 23일 21:41 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9008%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
              mainArticleTitle: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
            },
            subArticles: [
              "대북송금 안부수 실형…김성태,이화영 보지도 않았다",
              "씨 또 날아왔나…강남 한복판 마약 양귀비 80주 발견",
              "회춘에 미친 백만장자, 17살 아들 피까지 수혈받았다",
              "문제집 70% 베껴 시험 출제...강남 고교 결국 재시험",
              "70% 세일에 불티나게 팔린 패딩·모피…'철없는' 장사",
              '한밤 "180마리 달라"…굽네치킨 용산역점 대박난 사연',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/920.png",
            pressLogoAlt: "아시아투데이",
            lastEditted: "05월 23일 18:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9113%2F182856_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
              mainArticleTitle:
                '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
            },
            subArticles: [
              '고성국 "네이버·카카오 제평위 활동 중단, 국민의 승리"',
              "檢, '김남국 코인' 거래내역 분석…위믹스 증권성도 검토",
              "누리호 첫 실전발사 '운명의 19분'…위성 궤도 안착 관건",
              "檢, '민주당 돈봉투' 윤관석·이성만 주중 구속영장 검토",
              "20대도 발길 돌린 은행 무인점포…고령층엔 '무용지물'",
              "'IB통' 정영채, NH證 새 먹거리 'OCIO 시장' 정조준",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/123.png",
            pressLogoAlt: "조세일보",
            lastEditted: "05월 23일 19:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9040%2F190432_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
              mainArticleTitle:
                "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
            },
            subArticles: [
              "“한은, 연내 기준금리 동결할 것…금융불안은 유동성 정책으로 대응”",
              '[여의도 이슈 브리핑]유승민 "尹 정부, 中 외교 나설 차례"',
              "[기고문] 세무사에게 종합소득세신고를 의뢰해야 하는 이유",
              "원·달러 환율, 5.4원 내린 1312.7원 마감…5거래일 연속 하락",
              "농기구로 살해 후 유기, 벼랑 끝 농촌마을 인력난",
              "②남느냐 떠나느냐…'김창기·강민수' 거취에 쏠린 눈",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/974.png",
            pressLogoAlt: "BBS NEWS",
            lastEditted: "05월 23일 21:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9198%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
              mainArticleTitle:
                '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
            },
            subArticles: [
              "검찰, '돈봉투 의혹' 송영길 캠프 지역상황실장 압수수색",
              "[단독] 서울시 ‘365열린어린이집’ 휴일 지정 '종교편향' 논란",
              "'깡통전세' 100채로 전세·대출 사기…149억 가로챈 일당 검거",
              '尹 "디지털 무역규범 노력" WTO사무총장 "한, 디지털분야 환상적"',
              "대선 기간 '김남국 코인 거래' 검찰 수사선상에",
              "[누리호발사 D-1]누리호 발사대 기립...발사준비 순조로워",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
            pressLogoAlt: "조선일보",
            lastEditted: "05월 23일 22:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9007%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
              mainArticleTitle:
                "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
            },
            subArticles: [
              "'이화영 대북송금' 문건엔 \"김정은에 50억 약속 보고\"",
              "4천억 배임 배상윤, 카지노서 수백억 도박·황제 도피",
              "中 한한령 재점화? 한류스타 정용화, 예능출연 취소",
              'MBC·방문진 "감사원 감사 못 받겠다" 소송',
              "한국, 말레이와 FA-50 18대 수출 최종계약…1조2천억",
              '"文 정부는 실패…연필 미스터리 알아야 규제 푼다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
            pressLogoAlt: "아시아경제",
            lastEditted: "05월 23일 22:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9019%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
              mainArticleTitle:
                '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
            },
            subArticles: [
              '불공정거래와 전쟁…"범죄자, 시장에 발 못 붙이게 할 것"',
              '후쿠시마 시찰단, 점검 첫 날 "보려고 계획한 설비 다 봤다"',
              '빌 게이츠 "미래 AI 개인 비서 개발 중요"',
              '김건희 여사 "한국에 대한 관심, 발길로 이어져야"',
              '文 입장에 환호·韓총리에 "내려가"…노무현 14주기 추도식',
              "외교부 “中, 네이버 현지 접속 차단? 유관 기관과 확인 중”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
            pressLogoAlt: "톱데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9245%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
              mainArticleTitle: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
            },
            subArticles: [
              "[신생 LCC 운항 4년] ① 플라이강원, 경영난 장기화에 존폐 위기",
              "[금융권 수장 교체] [우리은행] 상업 Vs.한일 누가될까",
              "AI 행동분석 기업 플레이태그, 40억 투자유치",
              '넷마블 마브렉스 "누구에게도 사전 정보 제공 사실 없다"',
              "'한 달 살기' 플랫폼 리브애니웨어, 50억 투자유치",
              "백영훈 넷마블 전 부사장, 스마일게이트메가포트 수장 낙점",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/824.png",
            pressLogoAlt: "서울파이낸스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9243%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
              mainArticleTitle: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
            },
            subArticles: [
              "금통위 D-2일···3회 연속 기준금리 동결 '유력'",
              "대우조선 45년만에 '한화오션'으로 재출범···경영정상화 등 과제 산적",
              "여야, 전세사기 특별법 합의···최우선변제금 10년 무이자대출",
              "'금리 정점론'에 '변동이냐 고정이냐' 깊어지는 고민",
              "中, 美 반도체 제재에 마이크론 '판금' 맞불···韓반도체, '불똥튈라' 노심초사",
              'KB증권, 불법 자전거래 의혹 부정···"유동성 공급 위한 것일 뿐"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png",
            pressLogoAlt: "일요신문",
            lastEditted: "05월 23일 16:33 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9131%2F164029_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
              mainArticleTitle:
                "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
            },
            subArticles: [
              "어린이집 '괴롭힘' 사건이 노무사 vs 행정사 갈등으로 번진 까닭",
              "하락세 주춤해졌지만…부동산 반등까지는 '산 넘어 산'",
              "‘직원 사망’ LG디스플레이, 대책위원회 구성…“명확히 진단할 것”",
              "경실련 “국회의원 평균 재산, 3년 새 7.3억 증가”",
              "채권전문가 89% “이번주 금통위 기준금리 동결”",
              '유승민 "윤석열 정부, 이제는 대중 외교 나설 차례"',
            ],
          },
        ],
      },
      {
        title: "방송/통신",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
            pressLogoAlt: "연합뉴스TV",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9109%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'김남국 코인 논란' 신경전 지속…여야, 봉하마을 총집결",
              mainArticleTitle:
                "'김남국 코인 논란' 신경전 지속…여야, 봉하마을 총집결",
            },
            subArticles: [
              "누리호 우주 향해 기립…내일 발사 여부 곧 결정",
              '후쿠시마 시찰단, 오염수 현장점검…일본 "이해 깊어지길"',
              "평양 비행장에 대규모 병력대열…열병식 동향 또 포착",
              "中 \"'韓반도체업체 中수출 자제' 美요구 반대\"",
              "'마약 5종' 유아인 내일 구속심사…\"증거인멸 정황\"",
              '잠복기 넘긴 구제역 소강상태?…"아직 안심은 일러"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/980.png",
            pressLogoAlt: "KBC광주방송",
            lastEditted: "05월 23일 21:54 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9205%2F215944_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "여야 정치권 노무현 전 대통령 추도식 대거 참석..날선 장외전",
              mainArticleTitle:
                "여야 정치권 노무현 전 대통령 추도식 대거 참석..날선 장외전",
            },
            subArticles: [
              '7번째 우주로켓 발사.."로켓 보러 고흥 가자"',
              "7~8월 남부 지방 집중호우..더위는?",
              "국가자격시험서 채점도 안 한 609명 답안지 파쇄..재시험",
              "5·18 43주년인데 '갈등'과 '반목'만..시민들 \"씁쓸하다\"",
              "전남의대특별법, 21대 국회 폐기 수순",
              "\"장거리 통학전쟁에 내몰릴 판\"..전라남도교육청 '나 몰라라'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/903.png",
            pressLogoAlt: "채널에이",
            lastEditted: "05월 23일 22:16 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9108%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독]현금 받아 유류비 쓰고, 후원금으로도 주유비 ‘줄줄’",
              mainArticleTitle:
                "[단독]현금 받아 유류비 쓰고, 후원금으로도 주유비 ‘줄줄’",
            },
            subArticles: [
              "[단독]“이화영 ‘경기도 50억 지원 약속’ 김정은에게도 보고돼”",
              "“서울대 붙고 의대 준비”…지방 학원가도 ‘초등 의대반’",
              "로또 1등 되고도 “세금 못 내”…고액 체납자 550여 명 추적",
              "[단독]만취 주민 ‘묻지마 폭행’에 경비원 안와골절",
              "‘성추행 의혹’ 부천시의원, 이재명 윤리감찰 지시에 탈당",
              "[여랑야랑]이상민 활용법? / 김건희 ‘명예위원장’ / 위정현 “살해 협박 받았다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/421.png",
            pressLogoAlt: "뉴스1",
            lastEditted: "05월 23일 22:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9107%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '尹, 기업인에 "세계는 내 시장…두려워마라"',
              mainArticleTitle: '尹, 기업인에 "세계는 내 시장…두려워마라"',
            },
            subArticles: [
              "韓시찰단, 후쿠시마 방문…오염수 9시간 점검",
              '"누리호, 낙뢰 가능성 낮아…내일 시각 발표"',
              "학교도 이렇게 안 해…국가시험 답지 파쇄 황당",
              '최태원 측, 노소영에 "부동산 내놔라" 점입가경',
              "\"유재석 빈소에\"…'나훈아 사망' 가짜뉴스, 100만명 낚였다",
              "4세서 성장 멈춘 29세女 \"줄 수 있는 건 몸뿐\" 장기기증 '울컥'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/934.png",
            pressLogoAlt: "아리랑TV",
            lastEditted: "05월 23일 22:38 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9146%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Final checks complete on rocket Nuri before Wednesday's third launch",
              mainArticleTitle:
                "Final checks complete on rocket Nuri before Wednesday's third launch",
            },
            subArticles: [
              "S. Korea aims to boost auto parts industry by injecting US$ 10.9 bil.",
              "Here's the 30-year history of S. Korea's rocket science technology",
              "S. Korea's 3rd launch of Nuri rocket to boost investment in private space sector",
              "S. Korean experts begin on-site inspection of Fukushima Plant on Tuesday",
              "Fmr. S. Korean president Roh Moo-hyun remembered on 14th anniversary of death",
              "S. Korea's total hourly wage gap between regular and temporary workers widened in 2022",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
            pressLogoAlt: "JTBC",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9110%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독] 공직자 재산 전수조사…김소영, 백지신탁 '불복'",
              mainArticleTitle:
                "[단독] 공직자 재산 전수조사…김소영, 백지신탁 '불복'",
            },
            subArticles: [
              "알프스 필터링, 문제없나? '후쿠시마 오염수' 팩트체크",
              '"차 빼달라" 말에 뼈 부러지게 폭행한 전직 보디빌더',
              "노무현 추도식 날 '이재명 사퇴론' 불 지핀 친문계",
              "'강남 학원 마약' 주범은 성매매업소 갈취 '여청단' 출신",
              "채점 전에 파쇄된 답안지…내 점수는요? 수험생 '황당'",
              "\"아무것도 없다\"더니 금고엔 현금다발 두둑…'로또 당첨금'도 빼돌린 체납자",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png",
            pressLogoAlt: "뉴시스",
            lastEditted: "05월 23일 22:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9078%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '尹 "우리 기업들, 세계 속으로 민간주도 경제 작..',
              mainArticleTitle:
                '尹 "우리 기업들, 세계 속으로 민간주도 경제 작..',
            },
            subArticles: [
              '누리호 발사관리위 "준비 차질없다…내일 시각 결정"',
              "여야, 盧 추도식 집결…시민들, 與 향한 야유도",
              '與, 야간집회 금지 추진에…野 "자유 박탈" 반발',
              '尹, WTO사무총장에 "韓 디지털 인재 인턴 기회달라"',
              "LG, 단독 1위…두산 장원준, 1844일만에 승리",
              '심형탁, 母 빚 5억 대신 안 갚는다…"책임없어"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png",
            pressLogoAlt: "지지통신",
            lastEditted: "05월 23일 22:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9092%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "富士通、コンビニ交付システム停止　最長６月４日まで、不具合点検",
              mainArticleTitle:
                "富士通、コンビニ交付システム停止　最長６月４日まで、不具合点検",
            },
            subArticles: [
              "公金受取口座を誤登録　マイナンバーひも付けミス―デジタル庁、総点検実施",
              "中国、軍備増強前倒しも　反撃能力、防衛費増を明記―防衛白書案",
              "全健保組合に点検要請　マイナ保険証の誤登録問題―厚労省",
              "ムラピ山が噴火　インドネシア",
              "Ｇ７巡り垂大使に反発　「日本が内政干渉」―中国外務省",
              "１５万人規模の応援部隊　北海道７割、東北３割―日本・千島海溝地震で計画・中央防災会議",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
            pressLogoAlt: "YTN",
            lastEditted: "05월 23일 22:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9015%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "中, 한국 포털 전면 차단…인터넷 통제 강화 이유는?",
              mainArticleTitle:
                "中, 한국 포털 전면 차단…인터넷 통제 강화 이유는?",
            },
            subArticles: [
              "시찰단 집중 점검 'ALPS·K4탱크'는 오염수 처리 핵심 시설",
              '日 "한국 측 이해 깊어지길…후쿠시마산 농수산물도"',
              '[단독] 항공우주연구원에서 통화녹음 무단 청취…"경비원들이 전화 도청"',
              '尹 "노조 집회 불법행위 용납 없다…엄정한 법 집행"',
              "'숙명여대 화장실에서 살인' 예고 글 올린 남성 검거",
              '검찰 "라덕연 범죄수익 152억 원 확보"…이번 주 기소 전망',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/906.png",
            pressLogoAlt: "KNN",
            lastEditted: "05월 23일 20:58 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9135%2F210002_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성형수술이 무좀 치료로 둔갑, 병원장 등 90명 적발",
              mainArticleTitle:
                "성형수술이 무좀 치료로 둔갑, 병원장 등 90명 적발",
            },
            subArticles: [
              "학교 안도 사고 위험...시설관리는 누가?",
              "봉하마을, 다시 노란물결",
              "'한화오션' 탄생..대우조선 45년 만에 역사 속으로",
              "<앵커리포트>-BIFF 인적쇄신만이 답이다",
              "한국형 경전투기 FA-50, 말레이시아 18대 수출 계약",
              "'부산대 통합 반대' 부산교대 이틀동안 휴업",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
            pressLogoAlt: "한국경제TV",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9014%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "2차전지 담는 외국인…1조 공매도는 '걸림돌' [증시프리즘]",
              mainArticleTitle:
                "2차전지 담는 외국인…1조 공매도는 '걸림돌' [증시프리즘]",
            },
            subArticles: [
              "영수증 없는 실손 청구, 모든 병원에서 가능? [슬기로운 금융생활]",
              "내달 입주물량 폭탄…집 주인들 '망연자실'",
              '"콧대 높은 명품업계, 서울에 공들이는 이유는…"',
              'SK그룹, 노소영 관장측에 소송…"사옥에서 나가달라"',
              "'1,900원 김치볶음밥' 나왔다...CU, 가성비 '득템시리즈' 확대",
              '중국서 네이버 차단?…中 "우린 모르는 일"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
            pressLogoAlt: "MBC",
            lastEditted: "05월 23일 21:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9011%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '마지막 유서 추가 발견‥"노조 탄압 중단시켜 달라"',
              mainArticleTitle:
                '마지막 유서 추가 발견‥"노조 탄압 중단시켜 달라"',
            },
            subArticles: [
              '윤 대통령 "불법 시위 엄정 대응"‥야당 "최종 목표 시민 자유 빼앗는 것?"',
              "한국시찰단 상관없이 오염수 방류 강행하나?",
              '방문진 감사하는 감사원 "MBC 자료 내놔라"',
              "'누리호 발사 D-1'‥준비·날씨 모두 순조로워",
              "민주당 부천시의회 의원 성추행 고발‥감찰 지시하자 탈당",
              '"모든 유서 동일 필체"‥전문가들 유서대필 일축',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0803/nsd20247547.png",
            pressLogoAlt: "EBS",
            lastEditted: "05월 23일 21:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9076%2F211256_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "외국 친구와 토론·글로벌 역량 키운다…서울, '국...",
              mainArticleTitle:
                "외국 친구와 토론·글로벌 역량 키운다…서울, '국...",
            },
            subArticles: [
              '"서울 학생, 세계 시민으로…비판·논리력 키운다" [지역교육이 미래다]',
              "<뉴스브릿지> 테두리 밖 청소년들의 생존기…소설 <경우 없는 세계>",
              "첨단분야 '계약학과' 문턱 낮춘다…'계약정원제'도입",
              "교사 100명에게 듣는다…디지털 전환 위한 교육 현장 과제는?",
              "'박사'와 함께 책 읽고 토론…대학‧고교 연계 독서교육 [지역교육이 미래다]",
              "서울시교육청 '기초학력 공개' 조례안 대법원 제소",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/902.png",
            pressLogoAlt: "TV조선",
            lastEditted: "05월 23일 22:19 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9105%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '후쿠시마 원전 본격 시찰…"ALPS부터 K4탱크까지 점검"',
              mainArticleTitle:
                '후쿠시마 원전 본격 시찰…"ALPS부터 K4탱크까지 점검"',
            },
            subArticles: [
              '尹 "민노총 불법집회, 국민이 용납 하기 어려울 것"',
              "노무현 14주기 추도식에 여야 집결…고성으로 '얼룩'",
              "아태협 안부수 징역 3년 6월…쌍방울 대북사건 첫 유죄",
              'FA-50 18대, 1조2000억 말레이 수출…"2차 계약 기대"',
              "'4600억대 횡령 혐의' KH 배상윤, 수백억 '황제도피'",
              "채점도 안하고 609개 답안지 파쇄…나사 빠진 인력공단",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0420/nsd105139164.png",
            pressLogoAlt: "머니투데이방송",
            lastEditted: "05월 23일 17:45 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9112%2F175207_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "금융당국·검찰, '주가조작과의 전쟁' 선포…비상대응체계 선언",
              mainArticleTitle:
                "금융당국·검찰, '주가조작과의 전쟁' 선포…비상대응체계 선언",
            },
            subArticles: [
              "삼성 헬스 미래는 '수면'...손목 위 헬스케어 공략",
              "닻 올린 한화오션…조선업 지각 변동 시작되나",
              "빨라지는 서울 정비사업 시공사 선정…건설사 선별수주는 심화",
              "가시밭길 '1호 상장'… 왕관의 무게를 견뎌라",
              "작년 배달이륜차 보험료 224만원…가입 문턱 여전",
              "[2023 주류 트렌드]② 컬리·올영도 취했다…온라인 주류 격전 예고",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
            pressLogoAlt: "SBS",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9013%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[단독] 강승규 수석의 각별한 고향 사랑…'큰 그림'?",
              mainArticleTitle:
                "[단독] 강승규 수석의 각별한 고향 사랑…'큰 그림'?",
            },
            subArticles: [
              "[단독] '여대 살인 예고' 현장 간 경찰 \"학생이 들어가 봐\"",
              "서울대 다녀도 불만족…사라진 신입생 200여 명 어디로?",
              "[단독] 꼬인 혀로 시비 걸고 '퍽'…형사 회식 후 벌어진 일",
              '누리꾼들 "진짜야?"…뉴욕 증시까지 출렁이게 한 사진',
              "중국이 타이완 공격하면 4개 전쟁 동시발발?",
              "[사실은] 오염수 보관 'K4 탱크' IAEA 평가는?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png",
            pressLogoAlt: "TJB대전방송",
            lastEditted: "05월 23일 17:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9366%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "(R)'최저임금보다 낮아' 공무원 임금 인상하라!",
              mainArticleTitle: "(R)'최저임금보다 낮아' 공무원 임금 인상하라!",
            },
            subArticles: [
              "'탈옥수' 신창원 대전교도소에서 또 극단 선택 시도",
              "상병헌 세종시의장, 불신임안 가결에 의장직 상실",
              "(R) 목원대·배재대 '충청 사립대 첫 연합대학'.. 완전 통합도 목표",
              "대전시-국민의힘 당정협의회..내년 국비 확보 총력",
              "(R) '올해 벌써 11번째 황사'..지역 역대 여덟 번째로 많아",
              "음주운전 재판 중 또다시 음주운전한 50대 구속기소",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
            pressLogoAlt: "KBS",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9044%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘떡 본 김에 제사’까지?…日 “수산물 수입 중단 풀었으면”",
              mainArticleTitle:
                "‘떡 본 김에 제사’까지?…日 “수산물 수입 중단 풀었으면”",
            },
            subArticles: [
              "[단독] ‘10대 성착취’ 순경, 수사 도중 피해자 회유…경찰 대응 ‘도마 위’",
              "누리호 발사대 기립 완료…내일 오후 6시 24분경 우주로",
              "[단독] ‘생수’로 8200% 수익?…7천 명 울린 다단계 금융 사기",
              "특급호텔 화장실서 ‘불법 촬영’ 피해…호텔 측 “조용히 해달라”",
              "허술한 ‘비대면 카드 발급’…위조 신분증에 뚫려",
              "체납세액 100조 원…로또 1등도 안 낸다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/340.png",
            pressLogoAlt: "OBS",
            lastEditted: "05월 23일 20:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9070%2F203000_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성범죄 가담 고교생이 초등교사로…경기교육청 조사",
              mainArticleTitle:
                "성범죄 가담 고교생이 초등교사로…경기교육청 조사",
            },
            subArticles: [
              "9명이나 숨졌는데…잊혀진 수원 파장초 아동 인권",
              "'깡통전세' 100채로 사기…149억 챙긴 일당 체포",
              "'멸종 위기종 쉼터' 영종 폐염전 사라질 위기",
              "국회의원 재산 3년 새 7.3억 늘었다…60명은 임대업자",
              '노무현 전 대통령 14주기…"역사는 더디지만 진보"',
              '국내로 눈 돌린 윤 대통령…"불법 집회 엄단"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png",
            pressLogoAlt: "SBS Biz",
            lastEditted: "05월 23일 21:28 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9111%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "간호사가 처방 해도 되나요?…불붙은 역할 논쟁",
              mainArticleTitle: "간호사가 처방 해도 되나요?…불붙은 역할 논쟁",
            },
            subArticles: [
              "\"밥도 안 넘어가\"…산인공 파쇄에 피해자 '부글부글'",
              "'뾰로통'해진 대한항공…'난감'해진 산업은행",
              "'완공 3년' 엘시티…추가 공사비 둘러싼 법적 공방",
              "SK그룹, 노소영 미술관 상대로 부동산 인도 소송",
              "로또 잭팟에도 세금은 외면…557명 재산 추적",
              "Z세대, 알바 퇴사 이유는?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png",
            pressLogoAlt: "MBN",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9012%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '윤 대통령, 노조 엄단 카드…"용납 없을 것"',
              mainArticleTitle: '윤 대통령, 노조 엄단 카드…"용납 없을 것"',
            },
            subArticles: [
              '[속보] 누리호 발사관리위 "내일 발사 확정…특이사항 없어"',
              '"특별법, 결국 빚 더하기 빚"…국회 앞서 경찰과 몸싸움',
              "손자 잃은 할머니 절규에 재판부 수용…급발진 의혹 감정",
              '한밤중 걸려온 전화…"치킨 180마리 배달 될까요?"',
              '"곰팡이 펴서 버린다? 이 식품은 먹어도 돼"',
              "쓰레기 더미에 숨 거둔 돌고래의 '마지막 미소'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0922/nsd152336602.png",
            pressLogoAlt: "YTN사이언스",
            lastEditted: "05월 23일 22:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9168%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "날씨가 허락해야 쏜다...누리호 발사 조건은?",
              mainArticleTitle: "날씨가 허락해야 쏜다...누리호 발사 조건은?",
            },
            subArticles: [
              "누리호 3차 발사 D-1…추진제 공급 '탯줄' 연결 작업",
              '[단독] 항공우주연구원에서 통화녹음 무단 청취 사건..."녹음 잠깐 들은 걸 가지고 뭘"',
              '빌 게이츠 “미래 AI 개인 비서 개발 기업이 승자될 것"',
              "'챗GPT' 개발사 \"AI 위험 막기 위해 IAEA 같은 기구 필요\"",
              "시찰단 집중 점검 'ALPS·K4탱크'는 오염수 처리 핵심 시설",
              "[한 길 사람 속은?] 전화보다 문자…콜 포비아(Call Phobia) 혹시 나도?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/989.png",
            pressLogoAlt: "TBC",
            lastEditted: "05월 23일 09:43 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9215%2F094806_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "불안한 스쿨존...민원 급증*위반 행위 여전",
              mainArticleTitle: "불안한 스쿨존...민원 급증*위반 행위 여전",
            },
            subArticles: [
              "예술의 자유 vs 편향성 방지 안전장치",
              "팔공산 국립공원 승격 시도민 83.5% 압도적 찬성",
              "안동.영주시, 미급수 지역 지방상수도 상호 공급 협약",
              "PMC그룹,경주에 800억원 투자협약",
              "T타임- 신라 금관의 비밀...최고는 천마총",
              "군위 삼국유사테마파크 가정의 달 축제 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/981.png",
            pressLogoAlt: "TBS",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9206%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[단독]수동할증 미검정 택시 미터기, 왜 서울이었을까?",
              mainArticleTitle:
                "[단독]수동할증 미검정 택시 미터기, 왜 서울이었을까?",
            },
            subArticles: [
              "[밀착취재T] 멀쩡한 공원 밀고 골프장 만든다는 구청",
              "학교재정 따라 천 원의 아침밥도 '극과 극'...해법은?",
              "원전·수도권 지진 감시 촘촘하게…관측망 최대 2배 늘려",
              "#지하철요금 인상폭 줄까 #에너지취약계층에 소상공인도 #서울도 화성도 두 자녀면 다자녀",
              "공군 병사들, '계집 파일' 만들어 여군 간부 성희롱…군, 뒤늦게 대응",
              "첫 실전발사 D-1 누리호…오전중 발사대로 옮겨 기립",
            ],
          },
        ],
      },
      {
        title: "IT",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png",
            pressLogoAlt: "지디넷코리아",
            lastEditted: "05월 23일 22:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9027%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정의선 회장이 할아버지의 포니 쿠페를 복원한 이유",
              mainArticleTitle:
                "정의선 회장이 할아버지의 포니 쿠페를 복원한 이유",
            },
            subArticles: [
              "정부, 오늘 SKT 대상 28GHz 할당취소 청문 연다",
              "누리호 발사대 설치 작업 완료",
              "마이크로소프트 빌드2023 'D-1' 뭐가 나올까",
              "14조3천억원 투입해 미래 車 전장·부품산업 육성",
              '"밥솥, 구석진 곳에서 꺼내고 싶었어요"',
              "국산 서브컬처 신작, 상반기 다수 출시…흥행 시너지 낼까",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
            pressLogoAlt: "디지털타임스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9024%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[기획] `파업 쓰나미` 몰고올 노란봉투법 독소조항",
              mainArticleTitle:
                "[기획] `파업 쓰나미` 몰고올 노란봉투법 독소조항",
            },
            subArticles: [
              "‘이 턱선 실화냐’ 몰라보게 살 빠진 이준석…서울대 강연서 尹 ‘공개 저격’도",
              "[다시 부는 `바이코리아`] 반도체 부활 기대감에… 삼성전자 외인 지분 14개월來 최고",
              "盧추도식 정치권의 `동상이몽`… 산토끼 노린 與, 집토끼 잡는 野",
              "전세폐지 시사에… 임대사업자 `부글부글`",
              '구독형 IT 서비스 내세운 델… "멀티 클라우드로 혁신할 것"',
              "삼성, 6400만 잠자리 헬스케어로 공략",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
            pressLogoAlt: "디지털투데이",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9177%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘실검 부활?’ 거세지는 정치권 압박...네카오 플랫폼 확장 올스톱",
              mainArticleTitle:
                "‘실검 부활?’ 거세지는 정치권 압박...네카오 플랫폼 확장 올스톱",
            },
            subArticles: [
              "FTX 거래소 재개 가능할까?...레이 신임 CEO 행보 주목",
              "스마일게이트, 백영훈 대표 영입...“넷마블·111퍼센트 이끈 전문가”",
              "플레이태그, 40억원 규모 투자 유치…AI 행동 분석 기술로 교육·돌봄 시장 노크",
              "세일즈포스, 아인슈타인GPT·데이터 클라우드·플로우 전진배치",
              "비트코인 결제앱 스트라이크, 글로벌 확장...테더 USDT도 지원",
              "미디어·콘텐츠산업융합발전위 OTT 세액공제 논의...결론 못내",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/910.png",
            pressLogoAlt: "넥스트데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9115%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "삼성전자, 1분기 글로벌 TV 시장서 점유율 1위  수성...LG전자는 올레드 TV 1위",
              mainArticleTitle:
                "삼성전자, 1분기 글로벌 TV 시장서 점유율 1위 수성...LG전자는 올레드 TV 1위",
            },
            subArticles: [
              "KB국민은행, '2023 제1차 KB굿잡 우수기업 취업박람회' 개최",
              "욱씬욱씬 생리통, 가만 둬도 괜찮을까?",
              "현대자동차, ‘뉘르부르크링 24시 내구레이스’ 우승과 함께 8년 연속 완주 성공",
              "이랜드파크, 럭셔리 리조트 ‘그랜드켄싱턴 설악비치’ 개발 사업 본궤도 안착",
              "LG디스플레이 초대형 OLED·스트레처블 디스플레이 기술 리더십 ‘세계 학회에서 주목’",
              "이통3사, 2000년대 홍대 거리 경험할 수 있는 V컬러링 팝업 오픈",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/952.png",
            pressLogoAlt: "보안뉴스",
            lastEditted: "05월 23일 15:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9176%2F153103_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "랜섬웨어 방어를 완결짓게 해 주는 세 가지 키워드",
              mainArticleTitle:
                "랜섬웨어 방어를 완결짓게 해 주는 세 가지 키워드",
            },
            subArticles: [
              "[개인정보보호 우수사례-기획재정부] 사례 위주 맞춤형 콘텐츠 제작 및 온·오프라인 활용",
              "해병대 부사관, 불법도박 위해 장병 20여명 개인정보 넘겨 대출했다",
              "똑똑한 CCTV와 빅데이터·인공지능 기술로 국민안전을 지켜낸다",
              "인공지능이라는 기술이 우리를 위협할 때, 과연 사람은 막을 수 없게 될까?",
              "[이슈인터뷰] 보이스피싱 범죄 조직 소탕의 숨은 공신, KISA의 사이버전사들",
              "포티넷 코리아, AI 기반 SecOps 트렌드 및 네트워크 보안 현황 발표",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102040597.png",
            pressLogoAlt: "AI타임스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9353%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "오픈AI, 국제 AI규제기구 설립 제안",
              mainArticleTitle: "오픈AI, 국제 AI규제기구 설립 제안",
            },
            subArticles: [
              "메타, 오픈소스 다국어 음성 인식 모델 공개",
              "블리자드, '디아블로' 'WoW'로 학습한 이미지 생성 AI 개발",
              "인텔은 GPU, 엔비디아는 CPU 내세운 슈퍼컴퓨터 공개",
              "생성AI 기업에 초점 맞춘 상장지수펀드(ETF) 나왔다",
              "패러드로믹스, 내년 상반기 ‘뇌 임플란트’ 임상 추진",
              "오픈AI “다시 오픈!”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png",
            pressLogoAlt: "전자신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9026%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "제네시스 GV 6종으로 확대",
              mainArticleTitle: "제네시스 GV 6종으로 확대",
            },
            subArticles: [
              "LH, 용인 반도체 클러스터 조사설계·환경영향평가 착수",
              "현대차·기아 협력사, 美 공장 신설…현지 부품 조기 공급",
              "尹, “세계시장이 '내 시장'..과감히 뛰어들어야”",
              "'K-디자인 점프업 포럼' 출범...디자인 세계화 목표",
              "재택근무 바람 탄 보안산업, 시장규모·기업 수 둘다 늘었다",
              "[디지털 제조혁신 콘퍼런스]스마트공장 3만개 시대…디지털 전환과 데이터 활용으로 도약",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
            pressLogoAlt: "디지털데일리",
            lastEditted: "05월 23일 17:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9102%2F174159_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[K-웹툰과 규제下] “CP 계약 증가는 시대적 흐름” 선악 프레임에 반기든 플랫폼",
              mainArticleTitle:
                "[K-웹툰과 규제下] “CP 계약 증가는 시대적 흐름” 선악 프레임에 반기든 플랫폼",
            },
            subArticles: [
              "[르포] ② \"엡손 어디까지 봤니?\"…韓 22대 총선 용지도에 우주선·007에도 '불쑥' [DD전자상가]",
              "[DD 퇴근길] 우주강국의 꿈 다시 한 번…누리호 3차 발사 D-1",
              "[취재수첩] 지금 이 순간에도 경쟁국 AI는 무럭무럭 자란다",
              '[라이브코리아2023] "아인슈타인GPT, 영업 현장 도울 것…하반기 출시 목표"',
              "[라이브코리아2023] 생산성 플랫폼 '슬랙, AI 적용해 툴 고도화",
              "\"삼성이 저보고 두더지래요\"…삼성헬스+갤럭시워치, 수면유형 '동물표현' [DD전자상가]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/977.png",
            pressLogoAlt: "헬로디디",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9203%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '자연현상 바꾼다? 꿈의 기술 메타물질 "상용화 도전"',
              mainArticleTitle:
                '자연현상 바꾼다? 꿈의 기술 메타물질 "상용화 도전"',
            },
            subArticles: [
              "'누리호 3차' 실전 승부, 첫 탑승 주인공?",
              "[D-1]누리호 기립 완료",
              "조숙경 교수, PCST 네트워크 아시아 최초 회장 선출",
              "공격 않던 곰팡이, 남극 기온 오르자 식물 괴사시켰다",
              "연어 DNA로 그림 그리듯 위조 방지, 비전문가도 가능",
              "파멥신, 항반변성 항체 치료제 임상 추진···식약처 승인",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/917.png",
            pressLogoAlt: "IT조선",
            lastEditted: "05월 23일 19:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9142%2F193102_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘대우’ 떼고 ‘한화오션’ 출항… 새 대표는 카이스트 출신 에너지 전문가",
              mainArticleTitle:
                "‘대우’ 떼고 ‘한화오션’ 출항… 새 대표는 카이스트 출신 에너지 전문가",
            },
            subArticles: [
              "갤럭시폰 ‘MS 빙’ 아직… 구글 검색엔진 유지",
              "머스크, 또 변덕… 스타링크 韓 서비스 4분기로 연기",
              "EU “메타 개인정보유출 벌금 1.7조” 역대 최대 규모",
              "정부, 오늘 ‘SKT 28㎓ 주파수’ 취소 비공개 청문회",
              "‘직원사망’ LGD, 사외이사 중심 독립 대책위 구성",
              "‘위믹스 로비·김남국 코인 의혹’에 장현국 “몰라”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/818.png",
            pressLogoAlt: "IT동아",
            lastEditted: "05월 23일 18:54 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9230%2F190209_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "수도권 버스 색깔과 번호에 담긴 의미 살펴보니",
              mainArticleTitle: "수도권 버스 색깔과 번호에 담긴 의미 살펴보니",
            },
            subArticles: [
              "노스노비 “리울프 플랫폼과 친환경 종이 화병으로 화훼업계 ‘배민’ 노린다”",
              "구글, 인공지능으로 장애인 접근성 높인다",
              "내연기관과 다른 ‘전기차 경고등’…의미 살펴보니",
              "중국, 美 반도체 기업 '마이크론' 제재··· '기로에 선 한·미 반도체 기업들'",
              "서울과기대, 예비창업자 돕는 '2023년 메이커스페이스 제조창업교육' 실시",
              "다른 노트북 충전 어댑터를 사용하고 싶을 땐 이렇게![이럴땐 이렇게!]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
            pressLogoAlt: "블로터",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9054%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정부·녹십자 합작 BCG 백신, 빛을 볼 수 있을까 [보건의료 리포트]",
              mainArticleTitle:
                "정부·녹십자 합작 BCG 백신, 빛을 볼 수 있을까 [보건의료 리포트]",
            },
            subArticles: [
              "[단독] 포스코이앤씨, 이동식 모듈러 주택사업 본격 진출…디자인 차별화 '방점'",
              "네이버·카카오 '뉴스제평위 중단'에 뿔난 인터넷신문…\"심사 재개 일정 공개하라\"",
              "'네덜란드 반도체 장비사' ASM, 전략 생산기지로 한국 찜한 이유",
              "당장 갚을 빚 '1000억 이상' 롯데에너지머티리얼즈의 두 가지 부담 [Vault@Market]",
              "넷마블 마브렉스, '코인게이트' 내부 재조사 진행한다",
              "나라셀라, 몸값 고평가 논란 극복 못했다… 청약 경쟁률 4.8 대 1 ‘참패’ [Vault@Market]",
            ],
          },
        ],
      },
      {
        title: "영자지",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7251644.png",
            pressLogoAlt: "이코노타임즈",
            lastEditted: "05월 22일 11:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9358%2F113148_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Why the Bank of England is now more upbeat than the IMF",
              mainArticleTitle:
                "Why the Bank of England is now more upbeat than the IMF",
            },
            subArticles: [
              "America’s Roundup: US dollar drops after Fed's Powell hints at June pause , Wall Street slips, Gold gains, Oil slips as debt talks pause, Fed warns of high inflation",
              "Hyundai, Kia Paying $200M to Settle Car Thefts Suit in Us",
              "US: Democratic Senators Call on Biden to Invoke 14th Amendment to Prevent Debt Default",
              "Turkey's presidential election – how Erdoğan defied the polls to head into runoff as favorite",
              "Why rental properties are more likely to be mouldy and what's needed to stop people getting sick",
              "'Guardians of the Galaxy Vol. 3' urges us to defend real animals",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/040.png",
            pressLogoAlt: "코리아타임스",
            lastEditted: "05월 23일 22:35 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9043%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[ANALYSIS] Korea could join G7, but experts question its advantage",
              mainArticleTitle:
                "[ANALYSIS] Korea could join G7, but experts question its advantage",
            },
            subArticles: [
              "'Coalition of free world' to bring peace to Korean Peninsula: Yoon",
              "Financial regulator plans to freeze accounts of stock market manipulators",
              "Korea coach praises execution in U-20 World Cup victory over France",
              "N. Korean boat warned S. Korean cargo ship in East Sea to move out to open sea: source",
              "Nuri space rocket ready for third launch",
              "Hanwha Ocean launched amid volatile labor-management relations",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png",
            pressLogoAlt: "중앙데일리",
            lastEditted: "05월 23일 21:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9061%2F215731_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "China blocks Korea’s largest portal Naver",
              mainArticleTitle: "China blocks Korea’s largest portal Naver",
            },
            subArticles: [
              "Work moving quickly on Pyongyang's new launch facility",
              "Rival parties gather to commemorate late President Roh Moo-hyun",
              "Inflation expectations fall to 3.5 percent in May",
              "Homegrown rocket Nuri arrives at launch pad, awaiting liftoff Wednesday",
              "Hanwha's acquisition approved by DSME shareholders",
              "NCT Dream bodyguard may be prosecuted after pushing fan",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png",
            pressLogoAlt: "코리아헤럴드",
            lastEditted: "05월 23일 18:11 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9049%2F181638_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "Nuri rocket set for 3rd launch",
              mainArticleTitle: "Nuri rocket set for 3rd launch",
            },
            subArticles: [
              "Hotter, wetter summer and possible El Nino: weather agency",
              "Ex-airmen probed for making sexual comments against female superiors",
              "[Survive & Thrive] Getting around at night",
              "Man allegedly forced his way into elderly loner's home. He now asserts common-law marriage",
              "Samsung Health bets big on sleep-tracking",
              "Photos show glimpse into first steps of alliance",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
            pressLogoAlt: "YONHAPNEWS",
            lastEditted: "05월 23일 22:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9169%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "Key political figures gather at memorial service of la...",
              mainArticleTitle:
                "Key political figures gather at memorial service of la...",
            },
            subArticles: [
              "Yoon slams labor union for overnight street rally",
              "Private group chief convicted in N. Korea remittance case",
              "韩外交部：韩中司局级磋商讨论彼此关切",
              "详讯：韩政府正了解门户网站NAVER是否在华被封",
              "韓国国産ロケット「ヌリ」　発射台固定完了＝２４日に３回目打ち上げ",
              "韓国の福島原発視察団　初日は「当初計画した設備確認」",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png",
            pressLogoAlt: "KBS World",
            lastEditted: "05월 23일 18:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9057%2F181252_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "S. Korea's Nuri Rocket Transported to Pad for Wednesday's Launch",
              mainArticleTitle:
                "S. Korea's Nuri Rocket Transported to Pad for Wednesday's Launch",
            },
            subArticles: [
              "Yoon Blasts KCTU for Rally that Disrupted Public Order Last Week",
              "Yoon, EU Heads Stand with Ukraine, Agree to Minimize Regulation Risks",
              "韩运载火箭“世界”号第三次发射倒计时一天 已运至发射台",
              "尹锡悦强调推行基于自由和法治的外交政策",
              "国産ロケット「ヌリ号」発射台で翌日の打ち上げに備える",
              "盧武鉉元大統領没後14年 与野党が元大統領の精神に共感しつつ対立",
            ],
          },
        ],
      },
      {
        title: "스포츠/연예",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02321523.png",
            pressLogoAlt: "게임동아",
            lastEditted: "05월 23일 22:09 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9249%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'TL' 베타 테스트를 앞둔 엔씨 \"이용자 의견 경청해 과금 모델 정할 것\"",
              mainArticleTitle:
                "'TL' 베타 테스트를 앞둔 엔씨 \"이용자 의견 경청해 과금 모델 정할 것\"",
            },
            subArticles: [
              "웹젠, '뮤 온라인' 클래스 4종 리뉴얼과 이벤트 마련",
              "스노우파이프, 한국형 좀비 게임 '루터스'로 시장 공략",
              "규제 완화? 다시 차단? 오락가락 중국 상황에 게임사들 불안 초조",
              "넷마블, ‘마브렉스’ 정보 제공 없고, 혹시 모를 가능성까지 확인할 것",
              "컬러버스 재팬, 일본 리얼리티 XR 클라우드와 '메타버스' 사업 협력",
              "스팀 평가 압도적 부정적, 단체 보이콧… ‘워 썬더’ 이용자들 뿔났다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png",
            pressLogoAlt: "스포츠동아",
            lastEditted: "05월 23일 22:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9047%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "고현정, 이렇게 마른 모습 처음…52세의 美친 미모",
              mainArticleTitle:
                "고현정, 이렇게 마른 모습 처음…52세의 美친 미모",
            },
            subArticles: [
              "나훈아, 수백억 재산 남기고 교통사고 사망…영상 유출? 난리",
              "전현무가 또!? 박지민 아나 “전현무, 내 인생 흔들어놔”",
              "H유진 피투성이 얼굴…한일전 대참사 “경험 부족”",
              "장영란, ‘22억대’ 집 최초 공개…돈복 터지는 인테리어 눈길",
              "세븐♥이다해 “공개 후 욕밖에…결혼 전 위기”",
              "웃지 못하는 백종원, 체계 무너진 백반집→불만 속출",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png",
            pressLogoAlt: "텐아시아",
            lastEditted: "05월 23일 19:18 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9051%2F192308_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'태혜지' 이을 '도준경'…이도현·이준호·도경수, 男 버전 트로이카",
              mainArticleTitle:
                "'태혜지' 이을 '도준경'…이도현·이준호·도경수, 男 버전 트로이카",
            },
            subArticles: [
              '김나영, ♥마이큐와 동반 칸行 "잊지 못할 기억"',
              "제니·송중기보다 이선균, 정점 찍은 '칸의 남자'",
              "[TEN 포토] 이나영 '한편 한편 영화 같았다'",
              "블랙핑크 제니, '배우'로 칸 입성 \"용감해질 기회\"",
              '아오키 무네타카 "마동석 형, 유일무이 존재"',
              "적재, 김승진 '스잔' 리메이크",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png",
            pressLogoAlt: "마이데일리",
            lastEditted: "05월 23일 16:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9045%2F160515_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '이다해 "결혼 맞나 싶어" 벌써 후회?',
              mainArticleTitle: '이다해 "결혼 맞나 싶어" 벌써 후회?',
            },
            subArticles: [
              "이영지, 카리나 '외모 칭찬' 지적에 소신 밝혔다",
              '"母투자·빚보증으로 병 얻어"…심형탁, 무죄 판결',
              '고은아, 의료사고로 무너진 코 재수술 "고생 심해"',
              "'배우 데뷔' 제니, 샤넬 드레스 입고 칸 레드카펫",
              "'댄스가수 유랑단' 단장 이효리 \"재밌고 감동적 \"",
              '김태리 열정페이 요구,소속사가 사과 "팬 위해서"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png",
            pressLogoAlt: "스포티비뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9200%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'이도류' 오타니가 페드로-슈어저 기록을 넘어선다고? 지금 페이스면 역대 1위다",
              mainArticleTitle:
                "'이도류' 오타니가 페드로-슈어저 기록을 넘어선다고? 지금 페이스면 역대 1위다",
            },
            subArticles: [
              "제니, 칸에서 화려한 배우 데뷔…글로벌 스타들과 나란히[종합]",
              "어차피 MVP는 오타니라고? 작년에도 그랬지… 다시 ‘뉴욕의 거인’이 깨어난다",
              "유아인-공범A씨, 24일 구속영장 심사…마약 파문 수사 '갈림길'[종합]",
              "[포토S] 로하스, 2타점 적시타 세리머니",
              "아스널 '난감'...1순위 영입 대상에 뮌헨도 '가세'",
              "설날 장사 놓쳤던 박민교, 보은 장사에서는 한라 장사 올랐다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png",
            pressLogoAlt: "티브이데일리",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9119%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "유아인 106일 만에 구속 갈림길, 24일 영장실질심사 [이슈&톡]",
              mainArticleTitle:
                "유아인 106일 만에 구속 갈림길, 24일 영장실질심사 [이슈&톡]",
            },
            subArticles: [
              "'성장' 거듭 피력한 엔하이픈, 이번 컴백에 이 갈았다 [종합]",
              "故설리 유작 '페르소나2', 볼 수 있을까 [이슈&톡]",
              "\"시리즈 계속 하고파\"…'범죄도시3' 마동석x이준혁, 더 강력해져서 돌아왔다 [종합]",
              "‘패밀리’ 김남희, 청부 사망 암시",
              "[TD포토+] 르세라핌 김채원 '볼수록 빠져드는 매력'",
              "[TD영상] 이나영, ‘잭 블랙 도플갱어’ 감독님과 포토타임",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1681569.png",
            pressLogoAlt: "SBS연예뉴스",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9154%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "강호동X이승기, 12년 만에 외치는 '강심장'…오늘 첫방",
              mainArticleTitle:
                "강호동X이승기, 12년 만에 외치는 '강심장'…오늘 첫방",
            },
            subArticles: [
              "또 한 편의 괴작?…영화 '보 이즈 어프레이드' 향한 궁금증",
              '발걸음 마다 "제니! 제니!"…뜨거웠던 칸 레드카펫 데뷔',
              "'미우새' 이상민, 평균 64세 '백발소년단' 깜짝 프로듀싱",
              '마동석 "연골·아킬레스건 없지만...관객이 원한다면 계속"',
              "유빈, 테니스 선수 권순우와 열애…9살 연상연하 커플 탄생",
              '권민혁 "폐교 촬영, 새벽마다 오싹한 경험했다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png",
            pressLogoAlt: "일간스포츠",
            lastEditted: "05월 23일 17:07 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9034%2F171337_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘母 빚으로 5억 소송’ 심형탁, 드디어 누명 벗었다..‘무혐의’ 판결 ",
              mainArticleTitle:
                "‘母 빚으로 5억 소송’ 심형탁, 드디어 누명 벗었다..‘무혐의’ 판결 ",
            },
            subArticles: [
              "김태리씨, 재능기부가 열정페이의 다른 말이란 걸 몰랐나요? [전형화의 직설]",
              "추성훈, 아버지 향한 그리움 “행복하게 돌아가셨다 생각”",
              "고두심 “전 남편 만나고 숨죽여 울던 子..지금도 마음 아파”",
              "이효리 “김태호PD 질려..다음엔 나영석PD와 방송하고 싶어” 폭소",
              "'배우 데뷔' 제니, 칸 레드카펫 빛냈다..파격 드레스로 시선강탈 [76th 칸]",
              "셔누, 천을 아낀 듯한 의상으로 드러낸 ‘섹시미’ [화보IS]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/802.png",
            pressLogoAlt: "스포츠Q",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9221%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "이승원 떴다!! 김은중호, 프랑스 격파 [U-20 월드컵]",
              mainArticleTitle:
                "이승원 떴다!! 김은중호, 프랑스 격파 [U-20 월드컵]",
            },
            subArticles: [
              "최정 박병호 이정후, 클래스 어디 가랴 [프로야구]",
              "'KCC 이적' 최준용, 거침 없는 입담 [프로농구]",
              "유빈♥권순우, 연상연하 '연예-스포츠' 커플은?",
              "‘이효리♥’ 이상순, 카페 논란 1년 만에 블루리본",
              "김태리, 번역 '재능기부' 요청했다 결국...",
              "'범죄도시3' 흥행 청신호, 사전예매량 14만 돌파",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/410.png",
            pressLogoAlt: "MK스포츠",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9132%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '심형탁, 5억 소송 무죄 "돈 빌린 사실 몰랐다"',
              mainArticleTitle: '심형탁, 5억 소송 무죄 "돈 빌린 사실 몰랐다"',
            },
            subArticles: [
              '김태리 측, 재능기부 논란 사과 "불편 드려 죄송"',
              "1844일 기다린 130승, 장원준·양의지가 해냈다",
              "‘김민성 그랜드슬램’ LG, SSG 잡고 단독 선두",
              '`아리랑 송구 논란` 강백호 "안일한 플레이 죄송"',
              "김경욱 전 SM 대표, H.O.T. 상표권 소송 패소",
              "팬 밀쳐 전치 5주..NCT드림 경호원, 檢 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/447.png",
            pressLogoAlt: "뉴스엔",
            lastEditted: "05월 23일 18:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9126%2F190007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김태리씨, 그건 재능기부가 아니라 노동력 착취라 불려요[이슈와치]",
              mainArticleTitle:
                "김태리씨, 그건 재능기부가 아니라 노동력 착취라 불려요[이슈와치]",
            },
            subArticles: [
              "차정숙 가수 복귀→취업사기당한 보아, 이효리 “보톡스보다 팬톡스죠”[종합]",
              "‘4년만 복귀’ 이나영, 눈물 쏙 뺐다…독특한 ‘박하경 여행기’ 어떨까 [종합]",
              "‘범죄도시3’ 마동석, 민중의 몽둥이 성능 확실하네[영화보고서:리뷰]",
              "‘母 대출 탓 활동 중단’ 심형탁, 5억 소송 무죄-사기방조 무혐의",
              "임영웅, 타일러 무차별 영어 공격에 동공지진 “제발 한국말로”",
              "제니, 카리스마 칸 레드카펫[포토엔HD]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png",
            pressLogoAlt: "OSEN",
            lastEditted: "05월 23일 17:08 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9055%2F171039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '브리트니 스피어스, A급 배우 2명과 불륜 폭로 "쉽지 않았다"',
              mainArticleTitle:
                '브리트니 스피어스, A급 배우 2명과 불륜 폭로 "쉽지 않았다"',
            },
            subArticles: [
              "마블 '토르' 배우, 돌연사 '충격'.. 레이 스티븐슨 향년 58세",
              "유빈♥︎권순우, 공개 열애..연상연하 스포츠∙연예 커플 계보",
              '"내년, 류필립에게 새 여자 나타나" ♥︎미나 경악',
              '박은지,성형미인 아니었네..똑닮은 母 자랑 "시니어 모델.."',
              "박보미·박요한 子, 열경기로 심정지→하늘의 별로",
              "이효리는 댄스가수 컴백, 이상순은 카페사장으로 성공",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png",
            pressLogoAlt: "스포츠조선",
            lastEditted: "05월 23일 21:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9033%2F211554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "블랙핑크 제니, 칸영화제 레드카펫 빛냈다..할리우드★ 압도한 인기 [종합]",
              mainArticleTitle:
                "블랙핑크 제니, 칸영화제 레드카펫 빛냈다..할리우드★ 압도한 인기 [종합]",
            },
            subArticles: [
              "심형탁 '5억 피소' 무죄 심경 “가족에 휘둘려 힘든 시간..억울함 풀었다”",
              "'53세' 고현정, 매일이 미모 성수기..다이어트로 되찾은 리즈",
              "추성훈 “父, 좋아하시던 골프 치다가 돌아가셨기 때문에...”",
              "방탄소년단 제이홉, 화생방→선물·편지 자제 당부…모범적인 軍생활",
              "박시은♥진태현, 다시 임신 준비하는 건강한 삶 “내눈엔 세계 최고 예쁜 러너”",
              "'박수홍♥' 김다예 “진짜 김다예? 남편 떠날 수 없는 이유는…”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223244325.png",
            pressLogoAlt: "스포츠투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9161%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '"거뜬한 밀리언셀러" 하이브 아티스트, 놀라운 음반판매량 급증 [ST이슈]',
              mainArticleTitle:
                '"거뜬한 밀리언셀러" 하이브 아티스트, 놀라운 음반판매량 급증 [ST이슈]',
            },
            subArticles: [
              "'재능기부 논란' 김태리, 결국 공지 삭제 [ST이슈]",
              "마약 상습 투약 혐의 유아인, 구속심사 24일 진행…쏠리는 관심 [ST이슈]",
              '"한 풀었다" 확 달라진 에스파, 인기 고공행진 [ST이슈]',
              "'메이저 사냥꾼' 켑카, PGA 챔피언십 우승…이경훈 공동 29위",
              "\"인기 무섭기도\" 故 설리 유작 '페르소나2', 韓에서 볼까 [ST이슈]",
              "홍지은, 아이돌 미모",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0116/nsd19454239.png",
            pressLogoAlt: "스포츠춘추",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9175%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[썰띵크] 스코틀랜드행 황선홍 감독, 오현규 ‘AG 차출’ 논의 문제 있습니까",
              mainArticleTitle:
                "[썰띵크] 스코틀랜드행 황선홍 감독, 오현규 ‘AG 차출’ 논의 문제 있습니까",
            },
            subArticles: [
              "[J1리그] '스페인 월드컵 우승의 주역' 이니에스타, 올여름 축구화 벗는다",
              "[리그앙] ‘메시 없을 땐 왕’이었던 산체스, 2016-2017시즌 후 처음 ‘10골’ 넘었다",
              "[MLS] 프랑스 떠나 ‘LA로 향한’ 부앙가, 미국에선 막힘 없이 ‘골골골’",
              "‘능구렁이 품은 호랑이’ KIA 윤영철 향한 이구동성 “볼 스피드? 벌써 포기하긴 일러!” [춘추 이슈]",
              "[KBO] 장원준과의 ‘20년 인연’ 양상문 “958일 만의 선발 복귀, 팔 높이가 관건”",
              "‘팔꿈치 부상’ 텍사스 디그롬, 불펜 투구 시작…“복귀 시점은 미정” [춘추 MLB]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/311.png",
            pressLogoAlt: "엑스포츠뉴스",
            lastEditted: "05월 23일 22:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9150%2F222118_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김민성 역전 만루포+임찬규 QS…LG, SSG 9-1 대파→단독 선두+5연승 질주",
              mainArticleTitle:
                "김민성 역전 만루포+임찬규 QS…LG, SSG 9-1 대파→단독 선두+5연승 질주",
            },
            subArticles: [
              '김태리, 재능기부 논란 사과 "마음이 앞선 행동…깊이 반성한다"',
              "(여자)아이들 슈화, 물오른 섹시[엑's HD화보]",
              "'나훈아 사망설'에 소환된 유재석·임영웅...무근본 루머 확산",
              '고은아, 의료사고 피해 "예전 얼굴로 돌아가고 싶다"',
              "현빈♥손예진, 삼성동 빌라 팔아 18억 차익…그래도 부동산 수백억",
              "'정찬헌 3연패→부활의 QS→첫 승'…키움, 2연승+KT전 5연승 질주",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
            pressLogoAlt: "스포츠경향",
            lastEditted: "05월 23일 22:25 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9106%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "팬들에 재능기부 요구한 김태리, 결국 사과",
              mainArticleTitle: "팬들에 재능기부 요구한 김태리, 결국 사과",
            },
            subArticles: [
              "김태리 논란에 재소환된 김혜수 왜?",
              "“블핑 공연 왜 보러가” 中 ‘마녀사냥’ 논란",
              "미야 폭로 “K팝 아이돌 생활, 감옥같았다”",
              "‘공개열애’ 뷔-제니 ‘칸 데이트’도 이어가나",
              "이승엽 뚝심-장원준 투심···1844일 걸린 감격 130승",
              "제니, 칸 애프터 파티 ‘핫걸’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/947.png",
            pressLogoAlt: "조이뉴스24",
            lastEditted: "05월 23일 22:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9170%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[종합] \"무릉도원\"…'댄스가수유랑단', 이효리의 신드롬 욕심",
              mainArticleTitle:
                "[종합] \"무릉도원\"…'댄스가수유랑단', 이효리의 신드롬 욕심",
            },
            subArticles: [
              "[종합] '박하경 여행기' 이나영, 4년만 컴백…걷고 먹고 멍 때리는 8회차 여행",
              "'범죄도시3' 아오키 무네타카 \"부담 컸을 이준혁, 기대 멋지게 부응\"",
              "김선호 '귀공자', 청불 판정 \"폭력성·대사 수위 높아\"",
              "고현정, 이제 가녀리다 못해 앙상한 몸매…우아한 비주얼",
              "[퇴근길이슈] 제니 칸 레드카펫·이영지 카리나·오륭 결혼·손예진 빌라 매도",
              "'하하버스' 별 \"父, 의료사고로 세상 떠나...너무 그리워 엉엉 울기도\"",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
            pressLogoAlt: "스포탈코리아",
            lastEditted: "05월 23일 13:41 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9056%2F134554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "비키니 입고 ‘글래머+11자 복근’ 뽐낸 배구...",
              mainArticleTitle: "비키니 입고 ‘글래머+11자 복근’ 뽐낸 배구...",
            },
            subArticles: [
              "라리가 회장 맞아? “비니시우스, 너 제대로 알아라”",
              "김민재 새로운 스승? 나폴리, 스팔레티 후임으로 아르헨 감독 ...",
              "'하반신 마비 운동선수부터 소외계층까지' 추신수의 선행",
              "유아인, 마약공범 해외도피 시도 정황…검찰,...",
              "김민재-오시멘-홀란 공통점, FIFA랭킹 25위 ...",
              "김민재 맨체스터에 집 구했다며? 맨유 예상 베...",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/962.png",
            pressLogoAlt: "스포츠한국",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9187%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '김태리, 번역 재능기부 모집 논란 사과 "명백히 제 생각 부족했다"[전문]',
              mainArticleTitle:
                '김태리, 번역 재능기부 모집 논란 사과 "명백히 제 생각 부족했다"[전문]',
            },
            subArticles: [
              "어디로 던져… 박찬호의 악송구, KIA를 패배로 몰아넣다[스한 스틸컷]",
              "너무 깊은데… ‘항의 퇴장’ 황대인, 왜 격분했나[스한 스틸컷]",
              '박진만 감독 "오승환 돌아왔다… 이제 돌직구 아닌 노련미 갖춰"',
              "[스한:현장] '박하경 여행기' 이나영이 선사한 위로, 지친 일상에 쉼표를(종합)",
              "'안일한 송구' 논란에 사과문 남긴 강백호 \"질타받아도 마땅한 플레이\"",
              "'구미호뎐1938', 아마존프라임비디오 19개국에서 TOP10 랭크… 동남아서 돌풍",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/213.png",
            pressLogoAlt: "TV리포트",
            lastEditted: "05월 23일 18:03 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9122%2F181035_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "심형탁, 母 빚 때문에 5억 소송... “책임 없음” 무죄 판결",
              mainArticleTitle:
                "심형탁, 母 빚 때문에 5억 소송... “책임 없음” 무죄 판결",
            },
            subArticles: [
              "한고은, ♥신영수에 \"집에서 대판 싸우면 돼\".. 궁합보다 무슨 일?('신랑수업')",
              "'동상이몽', 스타부부 갈등 조장 ing...이젠 지겹다 [리폿@이슈]",
              'SM·YG 전 연습생 "금수저면 바로 데뷔"...계속되는 韓 연예계 폭로',
              "레오나르도 디카프리오, 1300억 저택에서 파티…현실 '개츠비' [할리웃통신]",
              "우쥬록스 전 대표, 어제(22일) 사임...새 대표는 '지인'이 맡는다 [공식]",
              "데프콘, 반쪽 된 근황 공개...\"7kg 감량했다\" ('컬투쇼')",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
            pressLogoAlt: "스포츠서울",
            lastEditted: "05월 23일 22:37 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9032%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘불륜 논란’ 이소라, 소식 없더니 갑자기 ♥최동환과...",
              mainArticleTitle:
                "‘불륜 논란’ 이소라, 소식 없더니 갑자기 ♥최동환과...",
            },
            subArticles: [
              "이솔이, ♥박성광 반할 우월한 비키니 몸매",
              "이용식-이수민 부녀, KTX 무임승차 '대형 사고'",
              "‘69억 빚’ 이상민, 종기 수술도 방송 협찬?",
              "송종국 딸, 美친 춤 실력 '골프 시키는 게 맞나'",
              "H유진, TKO 패배.. 피멍 얼굴 공개 “추성훈 형님께 죄송”",
              "'열정페이 논란' 김태리 사과는없고...소속사의 이상한 ‘대리사과’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/108.png",
            pressLogoAlt: "스타뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9136%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김태리, '재능 기부' 구인 논란 \"생각 부족..깊이 반성\"[종합]",
              mainArticleTitle:
                "김태리, '재능 기부' 구인 논란 \"생각 부족..깊이 반성\"[종합]",
            },
            subArticles: [
              '빅히트 "방탄소년단 제이홉 선물 우편·현장 방문 삼가달라"[전문]',
              "H.O.T. 상표권 소송 일단락..5년 만에 지켜진 이름",
              '심형탁, 母 5억 빚 방조 누명 벗었다.."책임 없음 판결"',
              '이효리 "이제 김태호 질려..나영석 PD와 해보고파"',
              "'아리랑 송구 논란' 강백호 사과 \"저의 잘못 크다\"",
              "정용화, 中 예능 출연 불발..한한령에 막혔나 [★차이나]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/396.png",
            pressLogoAlt: "스포츠월드",
            lastEditted: "05월 23일 22:21 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9120%2F222845_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '강백호 "질타 마땅한 플레이, 제 잘못이 커"',
              mainArticleTitle: '강백호 "질타 마땅한 플레이, 제 잘못이 커"',
            },
            subArticles: [
              '승리 부르는 나균안 "매 경기 집중할 뿐"',
              "심판 판정에 항의…KIA 황대인, 퇴장",
              '현아, 전시회 도전…"생각도 못한 기회"',
              "프랑스 낚은 김은중호… 韓 축구 미래가 움튼다",
              "심형탁, 꽃길 걷나…5억 소송 무죄 판결",
              '"공동 1위 맞대결? 솔직히 신경 쓰여"',
            ],
          },
        ],
      },
      {
        title: "매거진/전문지",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0728/nsd1110888.png",
            pressLogoAlt: "소년한국일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9060%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "NASA 새 우주복으로 본 첨단 기술의 세계",
              mainArticleTitle: "NASA 새 우주복으로 본 첨단 기술의 세계",
            },
            subArticles: [
              "‘새로운 꿈’ 바라보기···",
              "대한제국 외교 공간 ‘돈덕전’ 9월 문 연다",
              "한국인 밥상 채운 조기·명태·멸치를 만나다",
              "개학 후 일주일간 코로나 확진 학생 ‘5326명",
              "야산·길가에 핀 봄 야생화 반갑게 너의 이름을 불러본다",
              "별 탐험대 등 천문체험 프로그램 운영",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/384.png",
            pressLogoAlt: "한국대학신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9094%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "글로컬대학 마감 ‘초읽기’…일반대·전문대 통합 의사 속속 밝히는 대학가",
              mainArticleTitle:
                "글로컬대학 마감 ‘초읽기’…일반대·전문대 통합 의사 속속 밝히는 대학가",
            },
            subArticles: [
              "한균태 경희대 총장 “경희와 함께한 40년, 경희의 정신 이어받아 대학의 위상과 재정의 선순환 토대 만들 것”",
              "간호학과 졸업자 절반 1년 이내 퇴직…‘간호법’, 대학가에 필요한 이유는",
              "입학정원은 동결, 교원 채용은 감축…임용대란 ‘빨간 불’, 학생들은 ‘발 동동’",
              "위기의 한전공대, 출연금 단절·폐교까지 이어지나",
              "일반대 졸업자도 힘든 ‘네이버·삼정회계법인 입사’, 전문대졸이 이룰 수 있었던 비결은?",
              "[연중기획 ‘전문대, 지자체 협력이 답이다’] ③계명문화대-대구 달서구, 밀착 연계 기반으로 HiVE 사업 연착륙 ‘성공적’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0405/nsd15024245.png",
            pressLogoAlt: "뉴스펭귄",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9357%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "80년 전 멸종한  '신의 새'가 살아있다?",
              mainArticleTitle: "80년 전 멸종한 '신의 새'가 살아있다?",
            },
            subArticles: [
              "‘호주 멸종위기종 복원 프로젝트’ 첫 주인공, ‘워일리’",
              "[단독] 풍력단지 공사로 파괴된 정족산에 나타난 산양",
              "돌멩이가 된 플라스틱, '뉴락' 작가 장한나",
              "[우리 고장 멸종위기종 #68] 까나리맛집 백령도 찾는 점박이물범",
              "[그래픽멸종위기] 지느러미의 검정 반점이 특징인 '흑기흉상어'",
              "[펭귄의 서재] 기후'변화’가 기후'위기’가 된 이유",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/135.png",
            pressLogoAlt: "시사저널",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9151%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "응시생 꿈도 갈아버렸다…국가시험 초유의 ‘답안지 파쇄’ 사태",
              mainArticleTitle:
                "응시생 꿈도 갈아버렸다…국가시험 초유의 ‘답안지 파쇄’ 사태",
            },
            subArticles: [
              "여전히 한파인데…미·중 싸움에 시험대 오른 韓 반도체",
              "‘노란봉투법’ 직회부 임박에 발끈한 경영계…“통과되면 노사관계 파탄”",
              "‘여객기 내 실탄 발견’ 대한항공·인천공항공사 과태료 부과",
              "디폴트 열흘 남았는데…美 부채한도 세 번째 협상도 ‘불발’",
              "‘민주당 돈봉투 의혹’ 수사망 조이는 檢…宋 캠프 지역상황실장 압수수색",
              "만취 상태로 자전거와 충돌한 운전자…유명 변호사였다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/328.png",
            pressLogoAlt: "에이블뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9059%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "장애인보장구 반입 불가 ‘탑승거부’ 아시아나 인권위행",
              mainArticleTitle:
                "장애인보장구 반입 불가 ‘탑승거부’ 아시아나 인권위행",
            },
            subArticles: [
              "‘초·중등교육법 개정안’ 교사 위한 아동학대 면책법안 ‘반발’",
              "보행 장애인이 겪는 접촉 사고란",
              "코로나19 이후 독일 특수교육 변화 ‘디지털 전환’ 본격화",
              "장예총, ‘제33회 대한민국장애인문학상‧미술대전’ 작품 접수",
              "장애물 없는 포항 죽도시장공영주차장 장애인 편의 점검",
              "발달장애인들 독도에서 나라사랑과 장애인식개선 외치다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png",
            pressLogoAlt: "국방일보",
            lastEditted: "05월 23일 17:51 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9140%2F180017_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“한·말레이, 국방·방산협력 한 단계 격상”",
              mainArticleTitle: "“한·말레이, 국방·방산협력 한 단계 격상”",
            },
            subArticles: [
              "화려하고 절도 있게…블랙이글스, 말레이 하늘 수놓다",
              "입영 장정 검사 확대…마약 사건 수사 전담팀도 운영",
              "공군 블랙이글스, LIMA 에어쇼 현장 르포",
              "아이가 주는 기쁨 나의 원동력이죠",
              "“유관기관 협조체계 강화해 완벽한 동원태세 유지”",
              "메가시티 환경에서 도시지역작전 발전방향 모색",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/967.png",
            pressLogoAlt: "코리아쉬핑가제트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9192%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "평택항 신국제여객부두 하역시설 부족  ‘갑론을박’",
              mainArticleTitle:
                "평택항 신국제여객부두 하역시설 부족 ‘갑론을박’",
            },
            subArticles: [
              "대우조선, 45년만에 한화오션으로 간판 교체…초대대표에 권혁웅 부회장",
              'BDI 1384포인트…하락세 지속 "수급 개선 변화 없어"',
              "이스라엘 짐라인, 1분기 영업손실 180억…적자전환",
              "“화주·포워더간 소량 항공화물 정보공유 소통창구 만든다”",
              "팬오션, ‘이용자 편의성 대폭 향상’ 컨테이너 웹서비스 출범",
              "BDI 1384포인트…금주도 시황 회복 '불투명'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png",
            pressLogoAlt: "한국농어촌방송",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9236%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "서울시, 귀농·귀촌 원하는 시민 정착 지원한다…홍천군과 맞손",
              mainArticleTitle:
                "서울시, 귀농·귀촌 원하는 시민 정착 지원한다…홍천군과 맞손",
            },
            subArticles: [
              "그랜드 하얏트 제주, 라운지 38서 애플망고 빙수·애프터눈 티 선봬",
              "서울시, 불법 고금리 대출 피해 구제…7월 말까지 집중 신고 기간",
              "공릉동 옛 북부법조단지, 가족 공간·청년 창업 거점으로 탈바꿈",
              "9월 광화문광장서 오페라 '카르멘' 무료 공연…시민예술단 150명 모집",
              "[현장포토] 김진태, 강원특별자치도법 심사촉구 집회 참석",
              "\"그림과 차트로 쉽게\" 신한투자증권, '신한알파 3.0' 출시",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13325188.png",
            pressLogoAlt: "베이비뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9246%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "\"교권 무너졌다고 '아동학대' 허용하라니?\"",
              mainArticleTitle: "\"교권 무너졌다고 '아동학대' 허용하라니?\"",
            },
            subArticles: [
              "불법주정차로 또 스쿨존서 어린이 사망... 부산시, 안전대책 발표",
              "유보통합과 돌봄의 방향, 무엇을 줄이고 무엇을 장려할 것인가",
              "버드시아, 슈너글 등 아기욕조 8개 제품 안전성 등 조사했더니...",
              "세계인이 부러워하는 이것? 믿고 먹는 K 급식!",
              "근속 20년, 나홀로 4박 5일 여행",
              "아동기본법 제정... '격차'가 '결과'로 이어지지 않는 사회를 향해서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/924.png",
            pressLogoAlt: "인벤",
            lastEditted: "05월 23일 18:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9134%2F183810_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "어른이에게 찾아온 뜻밖의 선물, 레고 2K 드라이브 리뷰",
              mainArticleTitle:
                "어른이에게 찾아온 뜻밖의 선물, 레고 2K 드라이브 리뷰",
            },
            subArticles: [
              "반주년 앞둔 '아르케랜드', \"한국은 SRPG에 진심, 검증 받고자 한다\"",
              "호러, 액션에 코옵까지, 이번 주 스팀 트렌드는 '얼리 액세스' 신작",
              '신생 개발사 블랙스톰, "무한한 RPG의 가능성, 그렇기에 우리는 RPG 전문 개발사를 꿈꾼다"',
              "더 빠르고 호쾌하게, '워헤이븐'이 보여준 대대적 변화",
              "국내 서브컬쳐 게임 신작 삼파전, 아우터플레인 VS 클로저스 RT: 뉴 오더 VS 블랙클로버 모바일",
              "스테퍼 케이스: 초능력 추리 어드벤처 리뷰, '추리' 그 자체에 집중할 수 있는 웰메이드 국산 '추리물'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/356.png",
            pressLogoAlt: "게임메카",
            lastEditted: "05월 23일 17:45 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9082%2F175207_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[AI야 소녀를 그려줘] 레드폴에서 뱀파이어를 잡아보자",
              mainArticleTitle:
                "[AI야 소녀를 그려줘] 레드폴에서 뱀파이어를 잡아보자",
            },
            subArticles: [
              "공룡 액션 엑조프라이멀, 다크 소울 '침입’ 시스템 참고했다",
              "블랙클로버 모바일 개발진의 원작 애니 사랑은 진심이었다",
              "24일 시작되는 TL 테스트, 어디까지 체험 가능할까?",
              "[오늘의 스팀] 테스트 호평, 출시 앞둔 스파 6 판매 최상위권",
              "동물이 되어보는 스타듀 밸리? ‘에버드림 밸리’ 30일 출시",
              "[AI야 소녀를 그려줘] 프린세스 메이커 2, 아동노동의 현장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/354.png",
            pressLogoAlt: "엘르",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9080%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "도쿄 밖에 안 가본 사람의 도쿄 호캉스",
              mainArticleTitle: "도쿄 밖에 안 가본 사람의 도쿄 호캉스",
            },
            subArticles: [
              "메조틴트 판화 속 숨겨진 이야기",
              "제니부터 노윤서까지! 제76회 칸 영화제 속 한국 셀럽들의 빛나는 순간",
              "휴가 계획은 지금부터! 6월에 풀리는 국내 여행 할인 정보 모음.zip",
              "20대부터 70대 배우가 직접 알려준다! 모든 나이에서 빛나는 드레스 입는 법",
              "6월엔 여름꽃 구경! 보랏빛 물결 가득한 전국 라벤더 명소 3 #가볼만한곳",
              "산뜻한 월남쌈에 후식은 소프트콘! 시원한 여름을 담은 성수동 #신상맛집 3",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png",
            pressLogoAlt: "철강금속신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9182%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "포스코홀딩스, 하반기 리튬 생산…'2030년 관련 매출 10조 전망'",
              mainArticleTitle:
                "포스코홀딩스, 하반기 리튬 생산…'2030년 관련 매출 10조 전망'",
            },
            subArticles: [
              "4년 만에 열린 ‘철강 사랑 마라톤’ 친환경 홍보의 場",
              "납(Pb) 사용 규제 강화…황동시장 일대 변혁 예고",
              "세계스테인리스협회 “올해 STS 소비 증가 없을 것”...2024년 반등 기대",
              '"국내 철강산업 친환경 고부가가치 대전환, 철강포럼 앞장설 것"',
              "현대제철 H형강 저탄소 제품 인증 획득",
              "韓, 친환경 선박 시장 국제표준 선점 나서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/355.png",
            pressLogoAlt: "사이언스타임즈",
            lastEditted: "05월 23일 17:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9081%2F172537_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "누리호 3차 발사 D-1, 다시 또 우주로…",
              mainArticleTitle: "누리호 3차 발사 D-1, 다시 또 우주로…",
            },
            subArticles: [
              "새로운 알츠하이머 치매 치료제 도나네맙의 임상 3상 성공",
              "작은 배려와 친절, 전 세계에서 2분마다 한 번씩 일어나…",
              "하얗게 변한 머리카락, 모낭 속 줄기세포야 힘을 내!",
              "환경을 위해 텀블러를 쓰는 당신, ‘환경 빌런’일 수도?",
              "‘인공지능의 대부’, 이제 인공지능을 걱정하다",
              "호모 사피엔스도 ‘슬세권’ 선호했다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png",
            pressLogoAlt: "이코노믹리뷰",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9228%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "금융당국 “자본시장 불공정거래 뿌리 뽑겠다는 정부 의지 확고”",
              mainArticleTitle:
                "금융당국 “자본시장 불공정거래 뿌리 뽑겠다는 정부 의지 확고”",
            },
            subArticles: [
              "中의 마이크론 직접 제재...삼성·하이닉스엔 기회?",
              "시행사 PF 대부분은 브릿지대출…차환 ‘촉각’",
              "K배터리 미래, 앞으로 4년이 좌우한다 [중국과 진검승부 ‘K배터리 삼형제’ ③]",
              '은행 투자일임업 허용 논란… "중·소 증권및 자산운용사 보호 장치 마련 필요"',
              "한전 적자에 골병드는 발전자회사",
              "찰스 3세도 반한 '지리산 정원', 英 첼시 플라워쇼 '금상'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/345.png",
            pressLogoAlt: "디자인정글",
            lastEditted: "05월 21일 18:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0521%2Farticle_img%2Fnew_main%2F9077%2F185122_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[특별 기고] 국내 최초의 차 브랜드, 그 역사에 담긴 이야기",
              mainArticleTitle:
                "[특별 기고] 국내 최초의 차 브랜드, 그 역사에 담긴 이야기",
            },
            subArticles: [
              "[디자인 포커스] 디자인 교육의 새로운 지평, ‘2023 국제 디자인 교육 엑스포 & 컨퍼런스’",
              "[디자인 화제] 세종대왕 탄신 626돌 기념 ‘한글 이름짓기 백일장 대회’ 개최",
              "[포커스 인터뷰] 세종의 업적 알리기 위해 헌신하는 세종대왕기념사업회 최홍식 회장",
              "[포커스 인터뷰] 부산, 브랜딩으로 새롭게 변화시킨 황부영 부산 도시브랜딩 총괄 디렉터 ",
              "[포커스 인터뷰] 건강한 책문화생태계 조성하는 책문화네트워크 정윤희 대표",
              "[전시 포커스] 생동하는 풍경이 되는 건축, ‘김용관 건축 사진전’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
            pressLogoAlt: "이코노미조선",
            lastEditted: "05월 22일 11:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9208%2F111425_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: '"AI, 사람보다 빠르게 고객 파악… 만능론은 금물"',
              mainArticleTitle:
                '"AI, 사람보다 빠르게 고객 파악… 만능론은 금물"',
            },
            subArticles: [
              "\"한국 저출산·고령화 해법은 '이민' 부분 허용\"",
              '"동남아 공략해 月 이용자 연내 15배 수준인 300만..',
              '"작전이 달라졌다" 주가조작, 더 쉬워진 5가지 이유',
              "美 최악의 경제 위기를 이겨낸 '인플레이션 파이터'의 ..",
              '65년 만에 왕관 쓴 英 찰스 3세 "섬김받지 않고 섬..',
              '"투자 기회는 다른 이들이 바보짓을 할 때 온다"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/958.png",
            pressLogoAlt: "베리타스알파",
            lastEditted: "05월 23일 22:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9181%2F223056_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "‘초중등 10명 중 9명 이과’ 교육부 책임론 불가피..2028까지 극단적 이과/의대 쏠림 심화 하나",
              mainArticleTitle:
                "‘초중등 10명 중 9명 이과’ 교육부 책임론 불가피..2028까지 극단적 이과/의대 쏠림 심화 하나",
            },
            subArticles: [
              "'의대 노린 반수' 올해 서울대 신입생 중 휴학생 225명.. 4년새 3배 '급증'",
              "[2024특수대학] '2년차' 5개교 875명 체제 .. 공사/육사 자연계 '확대' ",
              "[2024특수대학] 경찰대 편입생 모집 2년차.. 일반대학생/재직경찰관 50명 남녀통합",
              "2025부터 ‘학부 계약정원제’ 도입.. 일반학과 첨단인재양성 '20% 추가선발'",
              "2023 로스쿨 변시 합격률 서울대 81.5% '최고' 고대 연대 중대 서강대 톱5",
              "2024SKY 첨단학과 298명 ‘증원’.. 상위대 자연계 ‘지각변동’ 예고",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/808.png",
            pressLogoAlt: "산업일보",
            lastEditted: "05월 23일 22:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9223%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "“2030년 내연기관 부품기업수 900개 사 감소”",
              mainArticleTitle: "“2030년 내연기관 부품기업수 900개 사 감소”",
            },
            subArticles: [
              "기업 비즈니스 효율 높이는 솔루션",
              "EU, AI 역습에 맞서 규제 칼 뺐지만...우려 목소리↑",
              "데이터 통합 시대, ‘데이터 분석가’에 주목",
              "인공지능(AI)+데이터+CRM 기반 고객중심 ‘커스토머 컴퍼니’로의 전환",
              "인공지능을 대하는 각기 다른 ‘온도차’",
              "[포토뉴스] 디지털 혁신 지원하는 다양한 솔루션 체험",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/938.png",
            pressLogoAlt: "그린포스트코리아",
            lastEditted: "05월 23일 18:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9158%2F180454_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "순환자원유통지원센터, 회수·재활용 노하우 베트남에 전파한다",
              mainArticleTitle:
                "순환자원유통지원센터, 회수·재활용 노하우 베트남에 전파한다",
            },
            subArticles: [
              "글로벌 스탠더드 RE100…정부·산업계 ‘CFE’ 민다",
              "삼성물산, 호주 그린수소 비즈니스 韓·日 합작",
              "LG화학, 이스라엘 대규모 해수담수 프로젝트에 역삼투막 공급",
              "매립지관리公, 탄소중립 위해 인천 지역 민·관·산·학 협력",
              "한국 코카콜라, 투명 페트병 순환경제 구축 합심",
              "BAT로스만스, 환경 문제 해결 위해 대학생 아이디어 모은다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/806.png",
            pressLogoAlt: "MONEY",
            lastEditted: "05월 03일 09:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0514%2Farticle_img%2Fnew_main%2F9226%2F010101_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[big story] AI 금융 지각변동, 주목할 신 스틸러",
              mainArticleTitle:
                "[big story] AI 금융 지각변동, 주목할 신 스틸러",
            },
            subArticles: [
              "AI 시대, 금융권 일자리는 사라질까",
              "AI 금융 ‘레벨업’, 주목할 뷰 포인트 4",
              "'K-빨간 맛', 매운 확장 어디까지",
              "가계부채, 다이어트 처방전은",
              "美 은행 위기가 남긴 5가지 교훈은",
              "AI 시대에 ‘소통의 교육’ 말하는 이유",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png",
            pressLogoAlt: "주간경향",
            lastEditted: "05월 23일 10:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9361%2F103946_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "전세 피해의 고통, 정치의 응답은",
              mainArticleTitle: "전세 피해의 고통, 정치의 응답은",
            },
            subArticles: [
              "첫 직장은 시민단체",
              "냉방비 대란 예고 서민들은 속 타고",
              "[시사 2판4판]어퍼컷 세러머니?",
              "[내 이름 걸고 추천 맛집]이윤경의 보약 같은 그곳",
              "모두가 컴퓨터에 챗봇을 설치한다면",
              "산단에 빼앗겼다, 마을도 건강도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124326426.png",
            pressLogoAlt: "법률신문",
            lastEditted: "05월 23일 22:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9039%2F221553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "SK그룹, 노소영 관장 '아트센터 나비' 상대로 부동산 인도 소송 제기",
              mainArticleTitle:
                "SK그룹, 노소영 관장 '아트센터 나비' 상대로 부동산 인도 소송 제기",
            },
            subArticles: [
              "[판결] 'H.O.T. 상표권 침해 소송' 김경욱 前 SM대표 최종 패소",
              "불법 정치자금 수수 혐의 하영제 국민의힘 의원 불구속 기소",
              "[판결] '일감 몰아주기' 하이트진로 박태영 사장, 2심도 징역형 집행유예",
              "(단독) 국내 최초 합작법무법인 '애셔스트화현', 정안나·배선혜 영입",
              "저비용항공사 '플라이강원', 23일 법인회생 신청",
              "전 여자친구를 성희롱한 남성이 살해됐다!… AI 판사는 어떻게 선고했을까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd22503109.png",
            pressLogoAlt: "뉴스앤조이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9356%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[교회를 떠나 교회가 되다] ① 사랑의교회갱신공동체(중)",
              mainArticleTitle:
                "[교회를 떠나 교회가 되다] ① 사랑의교회갱신공동체(중)",
            },
            subArticles: [
              "탄소 중립 필요성 공감하나, 예산·인력 문제에 멈칫하는 교단들",
              "칸트 선생님, 예수 믿고 교회 다니는 게 무슨 의미가 있습니까?",
              "할 말은 많은데 참기만 했던 여성 사역자들 모이세요",
              "6·25 앞두고 경계를 넘어 화해를 걷는 파주 평화 순례",
              "우리는 고난을 알고 있기 때문에 축제를 한다",
              '강남역 여성 혐오 범죄 7주기 연합 예배…"세상 만연한 차별에 저항하며 소리 지를 것"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0615/nsd10319824.png",
            pressLogoAlt: "한경잡앤조이",
            lastEditted: "05월 22일 12:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9238%2F130201_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "잘 다니던 정규직을 그만두고 계약직을 선택한 이유 [양이천의 기사회생]",
              mainArticleTitle:
                "잘 다니던 정규직을 그만두고 계약직을 선택한 이유 [양이천의 기사회생]",
            },
            subArticles: [
              "스타트업 CEO들이 꼭 봐야 할 영화 ‘조이’ [영화로 풀어보는 스타트업 이야기]",
              "[Start-up Invest] 야놀자·KT 합작사 자산 임대 관리 서비스, 30억 규모 투자 유치",
              "29CM, 테크 분야 두 자릿수 채용···합격자에 무신사·29CM 쇼핑비 400만원 지원",
              "영어 공부, ‘암기·듣기’보다 ‘이것’ 더 힘들어···영어 학습자, 설문조사보니",
              "[자기소개서 시대의 종말? : 챗GPT 등장 이후의 채용 환경 ②] 기자가 직접 챗GPT로 자기소개서 작성해보니",
              "대출을 받고, 전셋집을 구하면서 난 어른이 되었다 [인생 1회차, 낯설게 하기]",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1019/nsd144531857.png",
            pressLogoAlt: "투데이신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9211%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "베트남인 어머니에게서 태어난 9년차 ‘다문화 알림이’",
              mainArticleTitle:
                "베트남인 어머니에게서 태어난 9년차 ‘다문화 알림이’",
            },
            subArticles: [
              "아카데미의 친구들“60년 된 단관극장 철거, 근시안적 시정”",
              "불황 그늘 속 ‘골드러시’",
              "[청플 Report] 꿈의 직장된 ‘네카라쿠배’MZ세대가 원하는 근로환경은",
              "CTO “특이점의 시대, 자기 성장 위해 챗GPT 써보라”",
              "경찰, ‘핵 오염수 받는 尹 포스터’ 수사…부착 단체 “정치 탄압” 반발",
              "韓, 슈퍼컴퓨터 성능 세계 8위…美 프론티어, 2년 연속 1위",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/0928/nsd125033437.png",
            pressLogoAlt: "한경비즈니스",
            lastEditted: "05월 23일 16:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9038%2F163423_001.png%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "브루킹스 “상위 10%가 전체 소득 50% 차지…인공지능이 불평등 키울 것”",
              mainArticleTitle:
                "브루킹스 “상위 10%가 전체 소득 50% 차지…인공지능이 불평등 키울 것”",
            },
            subArticles: [
              "‘가즈아’ 삼성전자, 외국인 순매수와 함께 9만전자 기대감 증폭",
              "‘황금알 낳는’ DB하이텍, 부도 위기에서 세계 10대 파운드리 회사로[Case Study]",
              "먹으면 4.5kg 감량…화이자, 비만치료제 기대감에 주가 급등",
              "강남·성수도 이겼다…'50억 이상' 아파트 매수 몰린 동네",
              "\"욕심이 과하네~\" 샤넬, 2021년부터 '10번째 인상'",
              "넥스트노멀 시대의 구매 , 비용 절감 넘어 지속 가능한 성장의 핵심 열쇠로",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/140.png",
            pressLogoAlt: "씨네21",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9035%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[커버] ‘박하경 여행기’ 이나영, 차곡차곡 쌓이는 이나영이란 레이어",
              mainArticleTitle:
                "[커버] ‘박하경 여행기’ 이나영, 차곡차곡 쌓이는 이나영이란 레이어",
            },
            subArticles: [
              "[현지보고] 오토봇, 비스트, 인류는 어떻게 공존하는가, '트랜스포머: 비스트의 서막'",
              "[인터뷰] ‘박하경 여행기’ 이나영, 채움보다 비움",
              "[LIST] 허광한이 말하는 요즘 빠져 있는 것들의 목록",
              "[베이징] 주목받는 신인감독의 연출 데뷔작 '창사야생활', 진가신 사단의 힘",
              "[유선주의 드라마톡] '나쁜 엄마’",
              "제 1407호 잡지 내용보기",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/819.png",
            pressLogoAlt: "바이라인네트워크",
            lastEditted: "05월 23일 16:36 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9240%2F164318_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "김남국에 사전 정보 준 적 없다는 넷마블 “추가 내부 조사 필요”",
              mainArticleTitle:
                "김남국에 사전 정보 준 적 없다는 넷마블 “추가 내부 조사 필요”",
            },
            subArticles: [
              "‘세일즈포스 라이브 2023’에 뜨거운 관심…아인슈타인GPT 혁신 앞둬",
              "문제의 ‘K 코인’…규제 미흡이 불러온 가상자산 시장 내 혼돈",
              "카카오-사우디 관광청, 현지 관광 모바일 인프라 구축 논의",
              "틸팅포인트, 미국 서부 개척 최신작 ‘오리건 트레일 붐 타운’ 출시",
              "‘팀 네이버’ 1784, 세계무역기구(WTO) 사무총장도 방문",
              "이스트소프트, 마이크로소프트 본사 방문…AI 사업 확장 논의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png",
            pressLogoAlt: "독서신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9179%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "아이돌 ‘덕질’, 당신이 아는 건 새 발의 피",
              mainArticleTitle: "아이돌 ‘덕질’, 당신이 아는 건 새 발의 피",
            },
            subArticles: [
              "에드워드 호퍼 전시, 책과 함께 200% 즐겨요",
              "부평기적의도서관, 영유아 대상 ‘북스타트 책꾸러미’ 배포",
              "‘일잘러’ 되려면… 꼬박꼬박 ‘말대답’하라?",
              "성년의 날, 어른이 된 당신을 위한 책",
              "“박강수 마포구청장님, 책과 화해하세요” 출판인들 뿔났다",
              "“MBTI별로 좋아하는 책 달라” 첫 연구 나왔다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/024.png",
            pressLogoAlt: "매경이코노미",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9103%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "22조 투자된 해외 부동산…리스크 속속 가시화 [cover]",
              mainArticleTitle:
                "22조 투자된 해외 부동산…리스크 속속 가시화 [cover]",
            },
            subArticles: [
              "‘1분기 호실적’ 두산그룹株 어떤 종목 담을까",
              "재건축 훈풍 부는 도봉구 올해만 4687가구 안전진단 통과",
              "허언으로 끝난 통신 3사 ‘5G’ 마케팅",
              "속속 등장하는 한국형 ‘팹리스’ 작지만 ‘기술력’ 우위…..",
              "치킨 3천원 올린 ‘교촌’ 왜 비난받나 인플레 시대…가격 인..",
              "알고 보면 ‘큰손’샤이 고객을 아십니까",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png",
            pressLogoAlt: "매경헬스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9355%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "이유 없는 어지러움, 빈혈 느꼈다면 참지 마세요",
              mainArticleTitle: "이유 없는 어지러움, 빈혈 느꼈다면 참지 마세요",
            },
            subArticles: [
              '제너럴네트, "요실금 치료 도움주는 자동 케겔운동 기구 만나보세요" [건강미박람회]',
              "빨라진 무더위 건강 챙기기 나선 건기식 기업, 신제품 출시 봇물",
              "‘적자 행진’ 일동제약, 칼 빼들었나?…임원 감축·희망퇴직 받는다",
              "욱씬욱씬 생리통, 가만히 둬도 괜찮을까?",
              "심장 재생과 기능 회복 조절하는 물질 발견",
              "동아ST, 청소년 환경사랑 생명사랑 교실 참가자 모집",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/951.png",
            pressLogoAlt: "포브스코리아",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9174%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "구정회 은성의료재단 이사장, 경영은 모든 이해관계자의 마음을 얻는 일",
              mainArticleTitle:
                "구정회 은성의료재단 이사장, 경영은 모든 이해관계자의 마음을 얻는 일",
            },
            subArticles: [
              "2023 대한민국 50대 부자 | 김병주 MBK파트너스 회장 1위 등극",
              "박원재 원앤제이 갤러리 대표, 예술이 일상이 되는 세상을 꿈꾸다",
              "주형진 차지비 대표, 전기차 충전의 토털 솔루션",
              "금단의 해결책, 금본위제",
              "유명 CEO의 소셜미디어",
              "정태남의 TRAVEL & CULTURE | 헝가리/부다페스트(Budapest)",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0427277.png",
            pressLogoAlt: "식품저널 foodnews",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9247%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "K-라면 유럽 ‘수출 장벽’ 뚫었다",
              mainArticleTitle: "K-라면 유럽 ‘수출 장벽’ 뚫었다",
            },
            subArticles: [
              "K-라면 유럽 ‘수출 장벽’ 뚫었다",
              "aT, 군산시ㆍ대두식품ㆍ이성당과 업무협약",
              "투명페트병 재생원료 사용 용기 적용제품 나온다",
              "식품안전정보원, ‘WHO 세계 나트륨 섭취 저감 보고서’ 발간",
              "집단급식소 보존식서 빙과ㆍ일부 실온제품 제외",
              "국가식품클러스터 국제학술대회 24일 익산서 개최",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/965.png",
            pressLogoAlt: "전기신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9190%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
              mainArticleTitle:
                "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
            },
            subArticles: [
              "정부 후쿠시마 시찰단 일정 시작…“현장 시찰은 이틀뿐” 지적도",
              "창간 지상대담_#배전 전기공사 #안전 #노사 ‘상생의 길을 묻다’",
              "창간기획_전기공사 톱티어 벽산파워",
              "창간 59주년 인터뷰_장현우 한국전기공사협회 회장",
              "창간 59주년 인터뷰_백남길 전기공사공제조합 이사장",
              "창간기획_ 을왕변전소 & 주변전소C를 가다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/911.png",
            pressLogoAlt: "농민신문",
            lastEditted: "05월 22일 07:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9141%2F070423_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "농가소득 ‘뒷걸음질’…농업경영비는 ‘역대 최고’",
              mainArticleTitle: "농가소득 ‘뒷걸음질’…농업경영비는 ‘역대 최고’",
            },
            subArticles: [
              "[양봉산업 붕괴 위기] 널뛰는 날씨 탓 벌통 휑…‘꿀맛’ 보기 어려워진 농가들",
              "무늬만 농업회사법인, 실체는 수입업체",
              "치유농업, 인증은 ‘오리무중’…제도는 ‘탁상공론’",
              "민박·전통차 등 ‘농가부업소득’ 3000만원 초과땐 납부 대상",
              "가루쌀 가공, 성과 ‘반’ 과제 ‘반’",
              "“농업·농촌 현안 해결 방안 찾자”…농협 현장경영 돌입",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/948.png",
            pressLogoAlt: "한겨레21",
            lastEditted: "05월 23일 22:17 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9171%2F222326_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "세상에 없지만 올리비아의 생일파티는 매년 열린다",
              mainArticleTitle:
                "세상에 없지만 올리비아의 생일파티는 매년 열린다",
            },
            subArticles: [
              "똥, 내리지 말고 흙에 양보하세요 [농사꾼들]",
              "‘해전하네’ 귀먹은 벼락 맞고도, 쌀밥 같은 꽃 피웠네 이팝나무",
              "60살 극장 ‘철거’ 결론 내고 의견수렴…“밀실 결재” 폭로",
              "취준생 울리는 부트캠프 ‘부실 성장’은 누구 책임인가",
              "‘증거물로 흥분’ 글 파문까지…검경 성인지 수준 처참",
              "못 찾겠다, 쇠·붉·멧…숨바꼭질이라도 하려는 거니?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/075.png",
            pressLogoAlt: "맥스무비",
            lastEditted: "05월 23일 09:02 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9162%2F091039_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[리뷰]광수대로 간 괴물형사…판 키우고 날쌔진 맨주먹 '범죄도시3'",
              mainArticleTitle:
                "[리뷰]광수대로 간 괴물형사…판 키우고 날쌔진 맨주먹 '범죄도시3'",
            },
            subArticles: [
              '[칸 레터] "해외? 韓영화 신뢰 굳건..국내 시장 활성화해야"',
              "'거미집' 김지운 감독 \"송강호, 타의 추종 불허\"",
              "캐스팅 논란 '인어공주', 국내 관객 시험대에",
              "[칸 현지 취재] 대작 '탈출:PROJECT SILENCE' 환호 속 공개",
              "'우영우'로 대박난 ENA, '행복배틀' '마당이 있는 집'에 쏠린 기대감",
              "[칸 현지 인터뷰] '잠' 정유미+유재선 감독, 소풍과 해방 사이에서",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png",
            pressLogoAlt: "시사인",
            lastEditted: "05월 23일 15:57 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9052%2F160211_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "후쿠시마 시찰단은 일본에서 숨바꼭질 중? [정치왜그래?]",
              mainArticleTitle:
                "후쿠시마 시찰단은 일본에서 숨바꼭질 중? [정치왜그래?]",
            },
            subArticles: [
              "6년 만에 부활한 ‘공습 대비’ 민방위 훈련 [포토IN]",
              "2023년 노동절에 건설 노동자가 분신했다",
              "다문화 갈등을 풀어가고 싶다면 [기자의 추천 책]",
              "소란했던 경복궁 ‘뒤풀이 파티’ [기자들의 시선]",
              "“당신은 그냥 나쁜 변호사를 만났다” [세상에 이런 법이]",
              "[단독] 윤석열 정부 1년, 대통령기록관 압수수색 역대급",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png",
            pressLogoAlt: "데일리NK",
            lastEditted: "05월 23일 08:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9216%2F170354_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "주민들 '새벽 장사' 규제 나선 北… \"단속조가 장사꾼보다 많다\"",
              mainArticleTitle:
                "주민들 '새벽 장사' 규제 나선 北… \"단속조가 장사꾼보다 많다\"",
            },
            subArticles: [
              "농장 주변 곳곳에 보위부 검열초소 세워져…걸리면 강제노동?",
              "서해 일가족 귀순 소식 접한 北 국경 지역 주민들 반응은?",
              "수감자에 의한 수감자 감시…정치범수용소에서 무슨 일이?",
              '北 "서포지구 건설장에 바쳐진 뜨거운 마음"…주민 지원 선동',
              "북한인권 NGO 대표 사칭 피싱 공격…北 해커 소행으로 추정",
              '권영세 "현재 경제 상황 어떤지 北 스스로 되돌아봐야"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0418/nsd124959421.png",
            pressLogoAlt: "채널예스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9084%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[임진아의 카페 생활] 커피에게로 달려가기",
              mainArticleTitle: "[임진아의 카페 생활] 커피에게로 달려가기",
            },
            subArticles: [
              "[도둑맞은 집중력] 집중력 위기의 시대, 삶의 주도권을 되찾는 법",
              "곽아람, 호퍼의 도시 '뉴욕'에서 나를 발견하다",
              "미술품의 숨결에서 느껴지는 금맥(金脈)을 찾아라!",
              "[정대건의 집돌이 소설가의 나폴리 체류기] 푸르게 물든 도시 나폴리",
              "뮤지컬 <쿠로이 저택엔 누가 살고 있을까> - 오싹한 유쾌함이 가득한 귀신의 집",
              "[김신지의 제철숙제] 먼저 건네면 무조건 좋은 것",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0418/nsd124451202.png",
            pressLogoAlt: "여성동아",
            lastEditted: "05월 23일 09:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9368%2F095213_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "5개월에 42kg 감량! 다이어트로 배운 인생",
              mainArticleTitle: "5개월에 42kg 감량! 다이어트로 배운 인생",
            },
            subArticles: [
              "명품 롱패딩 걸치고 길거리 등장한 프란치스코 교황?",
              "한학자 세계평화통일가정연합 총재 ‘참사랑 실천 외길 80년’",
              "53년 기다린 인생작, 카밀라 왕비의 대관식 스타일",
              "편견도 두려움도 없는 노출 2023 S/S MAN’S COLLECTION",
              "덜 짜고 더 맛있는 초간단 저염 레시피",
              "커피 로스팅 머신 제조 강소기업 스토롱홀드",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/363.png",
            pressLogoAlt: "동아사이언스",
            lastEditted: "05월 23일 17:31 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9086%2F173938_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[누리호 3차발사] 발사대 우뚝 선 누리호…성공조건은 '위성' 사출",
              mainArticleTitle:
                "[누리호 3차발사] 발사대 우뚝 선 누리호…성공조건은 '위성' 사출",
            },
            subArticles: [
              "만성통증 환자에 '희소식'...뇌에서 전기신호 최초 확인",
              "후쿠시마 오염수 시찰단, 오늘부터 현장시찰 착수",
              "황금연휴 앞두고 제주도 살인진드기 경보…“6~8월 가장 위험”",
              "코로나 확진 2만1385명…5일 연속 전주 대비 감소세",
              "[이덕환의 과학세상] 위험한 실내 분무소독 당장 중단해야",
              "한화에어로스페이스, 누리호 엠블럼·유니폼 공개",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/815.png",
            pressLogoAlt: "법률방송뉴스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9235%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[분쟁할 결심] 돈 앞에선 가족도 없다... BYC·LG 일가 '위대한 유산' 다툼",
              mainArticleTitle:
                "[분쟁할 결심] 돈 앞에선 가족도 없다... BYC·LG 일가 '위대한 유산' 다툼",
            },
            subArticles: [
              '여야 "전세사기특별법·김남국방지법, 25일 본회의 처리"',
              '[주식시장 후진국] "주가폭락 사태 또 일어난다"... 피해구제 여부는',
              "검찰, 업비트·빗썸·카카오 압수수색... 김남국 코인 거래내역 확보",
              "\"음주운전하면 패가망신\"... 與 '시동잠금장치' 도입 실효성은",
              '"아버지 유언장에 내연녀가 상속 1순위, 무효 안되나요"',
              "국회의원, 코인 1원도 재산등록... '김남국 방지법' 가속도",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/950.png",
            pressLogoAlt: "월간중앙",
            lastEditted: "05월 23일 22:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9173%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "전세사기 남모씨와 송영길 측근 연루 의혹 추적기",
              mainArticleTitle:
                "전세사기 남모씨와 송영길 측근 연루 의혹 추적기",
            },
            subArticles: [
              "[2030 부산엑스포 유치 A to Z] 경쟁도시 리야드와...",
              "[MZ세대 사건리포트] 10·20대 마약 사건 해법",
              "LNG운반선 역대급 수주, 물 들어올 때 노 저어야 하는데…",
              "‘야당 안의 야당’ 이원욱 의원의 민주당 구하기",
              "‘하루 1만원 챌린지’… MZ세대 新자린고비 됐다",
              "현대차, ‘포니 쿠페 콘셉트’ 복원 모델 공개...양산 기대감 ‘업’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd10248812.png",
            pressLogoAlt: "뉴스포스트",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9354%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[압구정현대 수주전] 현대건설, HDC현산에 밀리는 전통·명분 숙제",
              mainArticleTitle:
                "[압구정현대 수주전] 현대건설, HDC현산에 밀리는 전통·명분 숙제",
            },
            subArticles: [
              "[현장] “엄마 나 더워”...올여름 학교 냉방대란 우려",
              "SK E&S, 호주서 온실가스 배출 우려...민망해진 추형욱 사장 ‘탄소중립’ 공언",
              "유통업계 1Q 실적 희비…쿠팡 성장세 ‘와우’",
              "젤렌스키 만난 尹 “우크라에 지뢰제거장비 등 필요물품 신속 지원”",
              "尹 대통령, 기시다 총리와 한국인 원폭 피해자 위령비 공동참배",
              "나이 듦, 변하는 세상의 가치와 방식에 적응하는 과정",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/094.png",
            pressLogoAlt: "월간 산",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9232%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[日 기리시마 에비노고원] 화산 20여 개 도열 ‘규슈의 지붕’",
              mainArticleTitle:
                "[日 기리시마 에비노고원] 화산 20여 개 도열 ‘규슈의 지붕’",
            },
            subArticles: [
              "첫날 눈사태로 혼쭐난 동료…우린 군말없이 에어백을 샀다",
              "아웃도어 광고모델, 전문산악인 지고 인플루언서 뜬다",
              "[안나푸르나 동,남,서 루트] 3,900m 하이캠프...물 20L가 60달러",
              "[인천 섬산로드] 귀싸대기 맞아도 행복한 진달래 정글",
              "[강화도② 중부 플러스 가이드] 사악한 인플레 시대에 2,000원 짜리 짜장면!",
              "[설악의 꽃과 나무 천남성] 사약의 재료였던 ‘붉은 유혹’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14480190.png",
            pressLogoAlt: "월간노동법률",
            lastEditted: "05월 22일 17:22 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9237%2F173031_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "“교섭 거부에 지배ㆍ개입까지”…신일정밀 부당노동행위 모두 인정",
              mainArticleTitle:
                "“교섭 거부에 지배ㆍ개입까지”…신일정밀 부당노동행위 모두 인정",
            },
            subArticles: [
              "'산업현장 안전은 '자기규율 예방체계'로부터'...고용부 위험성평가 지침 개정 시행",
              "“대표이사가 무조건 처벌 대상은 아냐”…중처법 개선 논의 어디까지 왔나",
              "초단시간 근로자 '차별' 문제...'법부터 바꿔야'",
              "고용부 “공공부문 단체협약 37.4% 위법”...노동계 “노사 자치 침범”",
              "민주노총, '고(故) 양회동 열사 염원은 尹 정권 퇴진'",
              "노조법 개정안...“기득권 강화” vs “노동자 모두의 권리”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/905.png",
            pressLogoAlt: "더스쿠프",
            lastEditted: "05월 23일 15:50 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9139%2F155343_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "중국이 삼성에‘역공’하는그 순간",
              mainArticleTitle: "중국이 삼성에‘역공’하는그 순간",
            },
            subArticles: [
              "“추격도 견제도 어렵다” 삼성전자 앞 반도체 적신호",
              "미중 반도체 확전과 새우등 한국의 고민 [마켓톡톡]",
              "테슬라가 탑재할 때 본체만체하더니… K-배터리 뒤늦은 출발",
              "‘다음의 다음’ 끊어놓은 카카오의 전략과 혹독한 대가",
              "장사 잘 돼도 걱정 안 돼도 걱정… LCC 아이러니",
              "[재테크 Lab] 10년 만에 다시 찾아온 잔고 ‘0원짜리 부부’",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/915.png",
            pressLogoAlt: "르몽드 디플로마티크",
            lastEditted: "05월 04일 16:53 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0504%2Farticle_img%2Fnew_main%2F9116%2F170054_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "사헬 지역에 머물기 위해 프랑스를 떠나다",
              mainArticleTitle: "사헬 지역에 머물기 위해 프랑스를 떠나다",
            },
            subArticles: [
              "줄리안 어산지, 그의 친구들이 있는 곳",
              "마르크스주의자 마리아테기의 유산",
              "스티븐 스필버그의 불온한 꿈에 대하여",
              "타조도 훨훨 나는 B주류의 발칙한 상상력,",
              "광한루-에펠탑 그리고 21",
              "공백과 재난, 신카이 마코토의 세카이계에 대하여",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/988.png",
            pressLogoAlt: "이웃집과학자",
            lastEditted: "04월 27일 00:56 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0427%2Farticle_img%2Fnew_main%2F9212%2F010144_001.jpeg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "M87 블랙홀 그림자와 제트 '최초 동시 포착'",
              mainArticleTitle: "M87 블랙홀 그림자와 제트 '최초 동시 포착'",
            },
            subArticles: [
              "아름다운 천체사진",
              "무선으로 심혈관 모니터링 실시간 가능",
              "기계학습로 소행성 구성 성분 알아낸다",
              "100세 시대, 자산투자·소비·은퇴의 최적 솔루션 찾는게 가능?",
              "세포 파우더 고기 기반 고단백 식품 개발",
              "단일세포 빅데이터 분석으로 질병유전자 발굴한다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/984.png",
            pressLogoAlt: "낚시춘추",
            lastEditted: "05월 09일 09:20 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0512%2Farticle_img%2Fnew_main%2F9209%2F050408_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[호황현장] 광주 대야지 벚꽃엔딩_올해는 3월부터 4짜, 5짜가 와르르",
              mainArticleTitle:
                "[호황현장] 광주 대야지 벚꽃엔딩_올해는 3월부터 4짜, 5짜가 와르르",
            },
            subArticles: [
              "[대어] 제주 영락리 큰산물 복수전_100.5cm 참돔 낚아 개인 기록 경신",
              "[WORLD NEWS] 100만분의 1 확률, 버지니아주 제임스강에서 황금색 배스 낚여 화제",
              "[FISHING NEWS] 제2회 (사)대한스포츠낚시중앙협회장배 전국민물낚시대회",
              "[연재_세상 쉬운 바다루어 27] 한 마리만 낚아도 아이스박스가 가득_대구 지깅",
              "[현장기] 호남 봄붕어 다크호스_함평천 용성보에서 4짜 돌붕어 불쑥",
              "[FISHING NEWS] 제15회 단양군수배 전국쏘가리루어낚시대회",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/346.png",
            pressLogoAlt: "헬스조선",
            lastEditted: "05월 23일 09:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9079%2F094806_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[아미랑] 가족과 의료진이 내게 준 '두 번째 인생'",
              mainArticleTitle:
                "[아미랑] 가족과 의료진이 내게 준 '두 번째 인생'",
            },
            subArticles: [
              "몇 달째 기침하던 20대 남성, 기관지에서 '이것' 발견",
              "눈을 잘 보면 '고혈압'인지 알 수 있다",
              "탄탄한 엉덩이 만들고 싶다면 '이 동작' 따라해 보세요",
              "19살에 치매 진단… 안타까운 소녀의 사연",
              "몸 안 움직여도… '이 상황' 처하면, 8시간 금식만큼 에너..",
              "아침 거르면 살 더 잘찐다는 주장, 의학적 근...",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/990.png",
            pressLogoAlt: "주간조선",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9213%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "국방부, 입영 신체검사에 마약 검사 추가 추진",
              mainArticleTitle: "국방부, 입영 신체검사에 마약 검사 추가 추진",
            },
            subArticles: [
              '이코노미스트 "韓 자살률 OECD 1위, 女자살률 급증이 원인"',
              "'노무현 14주기'... \"민주당은 '노무현의 유산' 잃어가고 있다\"",
              "40초짜리 영상으로 10만 구독자 조민...내용 뭐길래",
              "국민의힘, ‘김남국 코인 거래’ 野 대선자금 연관 의혹 제기",
              "이재명, '성추행 의혹' 부천시의원 윤리감찰 지시",
              "[단독] \"가족들 살해 협박까지 받았다\" '김남국 의혹' 제기 게임학회장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/296.png",
            pressLogoAlt: "코메디닷컴",
            lastEditted: "05월 23일 16:26 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9046%2F163131_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "암 위험 높이고 체중 느는 나쁜 식습관은?",
              mainArticleTitle: "암 위험 높이고 체중 느는 나쁜 식습관은?",
            },
            subArticles: [
              "커피 너무 많이 마신다면…대체 음료4",
              "집에서 할 수 있는 두드러기 대처법",
              "지긋지긋한 만성통증, 새 치료법 나올까?",
              "고구마 vs 감자, 염증에 변화가? 혈당은?",
              "“1년 내 20% 사망”…골다공증이 위험한 진짜 이유",
              "젓가락질에도 쓰는 이 관절…작년 16만명 질환 앓아",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png",
            pressLogoAlt: "약사공론",
            lastEditted: "05월 23일 13:27 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9204%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "약사회 공적 플랫폼 구축 완료…민간플랫폼 종속 벗어난다",
              mainArticleTitle:
                "약사회 공적 플랫폼 구축 완료…민간플랫폼 종속 벗어난다",
            },
            subArticles: [
              "비대면 시범사업 계도기간은 '플랫폼 봐주기(?)'",
              '감원…희망퇴직…위기의 일동제약 "뼈를 깎는 쇄신으로 재정비"',
              "편의점약 확대 움직임 '솔솔'…약사회 '예의주시'",
              "포시가 이어 자누비아 제네릭도 허가 시작, 경쟁 예고",
              "협회가 인증한 비대면 진료 플랫폼 업체만 살아 남는다",
              "일상회복·연휴에 공항약국 모처럼 '활기'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/364.png",
            pressLogoAlt: "PC사랑",
            lastEditted: "05월 22일 12:00 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9087%2F120431_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "2023 게이밍 기기 브랜드전",
              mainArticleTitle: "2023 게이밍 기기 브랜드전",
            },
            subArticles: [
              "스팀 덱에서 SSD 장착 멀티 허브로 윈도우 부팅하기",
              "2023년 5월호",
              "ASUS, 초슬림·초경량 고성능 노트북 젠북 S 13 OLED 및 젠북 15 OLED 출시",
              "SK하이닉스, 초소형&초경량 디자인 적용한 외장형 SSD ‘Beetle X31’ 선보여",
              "2023년, 전 세계 반도체 매출 11% 감소 전망…2024년, 70% 성장 반등할 것",
              "NVMe SSD에 DRAM이 필요한 이유? PCIe 3.0 DRAM vs PCIe 4.0 DRAM-Less",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png",
            pressLogoAlt: "컴퓨터월드",
            lastEditted: "04월 30일 16:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0430%2Farticle_img%2Fnew_main%2F9138%2F164305_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "[커버스토리] 국내 SaaS 산업의 현황과 개선사항은?",
              mainArticleTitle:
                "[커버스토리] 국내 SaaS 산업의 현황과 개선사항은?",
            },
            subArticles: [
              "“설립 25년, 이젠 ‘꿈(인터넷상의 주인공)’을 이룰 때가 됐다”",
              "해마다 ‘최대 규모’ 경신하는 디도스 공격, 어떻게 대비해야 하나?",
              "SW 개발에 성공적으로 스며든 ‘정적분석’",
              "KB증권, VM웨어+HCI로 고성능 VDI 환경 마련",
              "“클라우드 네이티브로 비즈니스 혁신의 길을 찾아라”",
              "“세계 최고 영상인식 AI 기술 기업으로 성장하겠다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
            pressLogoAlt: "정신의학신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9191%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "성격과 기질, 어떤 차이점이 있나요?",
              mainArticleTitle: "성격과 기질, 어떤 차이점이 있나요?",
            },
            subArticles: [
              "​​​​​​​[Doctor's Mail] 본인이 힘들었던 이야기만 하는 가족",
              "성인 ADHD 치료 방법, '약물 치료' 꼭 필요한 것일까? - ADHD약 종류/부작용/복용방법 [성인 ADHD 특집 2편]",
              "[카드뉴스] 긍정의 힘!!",
              "상담 현장에서 인공지능 기술 활용하는 법",
              "[중독] 니코틴 중독과 효과적인 금연 방법",
              "[알코올중독] 나도 설마 알코올중독일까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/310.png",
            pressLogoAlt: "여성신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9053%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '데이트 웹사이트 활성화가 저출산 대책? 김영선 의원 "국가가 미혼남녀 만남 주선 필요"',
              mainArticleTitle:
                '데이트 웹사이트 활성화가 저출산 대책? 김영선 의원 "국가가 미혼남녀 만남 주선 필요"',
            },
            subArticles: [
              "“2024 총선, 남녀동수로” 전현직 여성 국회의원 한자리에",
              "[단독] 공무원 시험 도중 화장실 갈 수 있다… 광주시교육청 “10월 시험서 화장실 사용 허용”",
              "[윤석열 정부 1년, 성평등은 어디로] 흔들리는 여가부, 붕괴되는 지역 성평등",
              "여군 간부 성희롱 문건 만든 공군 병사들... 공군, 경찰 수사 의뢰",
              "[윤 정부 1년 젠더정책 평가] 정전협정 70년, 여성의 삶, 그리고 평화와 안보에 대해 질문하다",
              "[전세사기] 특별법 국토위 소위 통과... 최우선변제금 최장 10년 무이자 대출",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png",
            pressLogoAlt: "미디어스",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9248%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "방문진·MBC, 공동으로 감사원 감사 '법적 대응'",
              mainArticleTitle: "방문진·MBC, 공동으로 감사원 감사 '법적 대응'",
            },
            subArticles: [
              "'날리면'도 없는 외교부 'MBC 정정보도' 소장",
              "'바이든-날리면' 소송대리인, '윤석열 징계 반대' 징계위원",
              '언론현업단체 "방통위 장악되면 정부·여당 칼춤 시작될 것"',
              '이재명 "어떤 어려움 있더라도 노무현 길 따라가겠다"',
              '한상혁 "면직 절차, 무죄추정의 원칙 위반"',
              "정치권 압박에 멈춰 선 포털 자율규제기구",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/807.png",
            pressLogoAlt: "인사이트코리아",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9219%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "[재계 80년대생 리더①김동관] 한화의 꿈...‘한국판 록히드마틴’ 완성한다",
              mainArticleTitle:
                "[재계 80년대생 리더①김동관] 한화의 꿈...‘한국판 록히드마틴’ 완성한다",
            },
            subArticles: [
              "일본 정부 전기차 보조금 '꼼수'...현대차도 뒤통수 맞았다",
              '삼성·SK·현대차·LG그룹, 전경련 복귀?..."한경연과 합병 총회 관건"',
              "3D프린터로 인체조직 재현 기술, 제약바이오 산업 판도 바꾼다",
              "반도체 감산‧외인 매수에…삼성전자, '9만전자’ 간다",
              "김남국발(發) 코인게이트, P2E 국내도입 논의에 ‘된서리’",
              "공정위, 편의점 CU의 납품업체 갑질 여부 현장 조사",
            ],
          },
        ],
      },
      {
        title: "지역",
        pressList: [
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
            pressLogoAlt: "국제신문",
            lastEditted: "05월 23일 21:14 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9071%2F211554_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "황령산 골짜기 별천지 공동체…여긴 물만골입니다",
              mainArticleTitle: "황령산 골짜기 별천지 공동체…여긴 물만골입니다",
            },
            subArticles: [
              "“손님 끊겼다, 횟집 접어야 하나” 수산업계 오염수 직격탄",
              "올초 초등학교 예비소집 불참한 아이 7년 전 친모가 유기",
              "“부산시, 동백플러스 가맹점주 할인율 일방적 결정”",
              "“부산에 해양바이오 리서치 파크 구축, 전문기업 육성을”",
              "등굣길 참사 더는 안 돼...예서 위해 나선 영도여고 언니들",
              "부산시 재정자주도 60%대로 추락…전국 지자체 최저",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png",
            pressLogoAlt: "영남일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9095%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "'영남 명산' 팔공산, 도립공원에서 드디어 국립공원으로 승격 확정",
              mainArticleTitle:
                "'영남 명산' 팔공산, 도립공원에서 드디어 국립공원으로 승격 확정",
            },
            subArticles: [
              '성과급으로 MZ공무원 달래기?···"현실성 없다"',
              '한국은행 포항본부, 폐쇄하나?…이유 보니 "황당"',
              "[단독] 계명대·영남대 '無전공' 선발 카드 꺼냈다",
              "결국 속 빈 강정…매천시장 후적지 용역 최종보고",
              "대구미술관 '이건희 컬렉션' 이번 주말 종료",
              '홍준표 "아세안 교두보 역할 확충…경제 영토 확장"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/976.png",
            pressLogoAlt: "무등일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9202%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "다시 선 누리호, 우주기술 역사 다시 쓴다",
              mainArticleTitle: "다시 선 누리호, 우주기술 역사 다시 쓴다",
            },
            subArticles: [
              '"세계 톱10 공과대학 목표, 홀로서기 위한 재정적 자구책 마련해야"',
              '인권위 "시험 중 화장실 이용금지는 권리침해"',
              "일부 5·18 공법단체, 姜 시장 또 고소",
              '오월지키기대책위 "특전사 동지회 민주묘지 참배 용인 불가"',
              "[날씨] 올여름 최악의 폭염·폭우 오나",
              "누리호 3차발사 직관 명당은 어디일까?",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1107/nsd1054226.png",
            pressLogoAlt: "인천투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9365%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "인천~백령 카페리 준공영제 가시화...‘결손금 지원’ 최소수익 보장",
              mainArticleTitle:
                "인천~백령 카페리 준공영제 가시화...‘결손금 지원’ 최소수익 보장",
            },
            subArticles: [
              "WHO 바이오캠퍼스 공모 경쟁... 인천 ‘K-바이오랩허브 지연’ 영향 받나",
              "'선 구제 후 환수' 대신 '10년 무이자 대출'... 전세사기 피해자들 ‘분통’",
              "롯데백화점 인천점, 정기휴업일 ‘VIP 행사’... “의무 휴업 필요”",
              "12시간 검찰 조사 받은 윤관석 “결백 밝힐 것”",
              "[대놓고PPL] 제철 황석어 튀김 맛보고 싶다면 청학동 '취중천국'",
              "인천 백령도 안전소홀 LPG 불법 운반업체 검찰 송치",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/339.png",
            pressLogoAlt: "경기일보",
            lastEditted: "05월 23일 21:29 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9069%2F213356_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "양평 '과수화상병' 벌목... 바싹 말라 버린 나뭇잎, 속타는 농심",
              mainArticleTitle:
                "양평 '과수화상병' 벌목... 바싹 말라 버린 나뭇잎, 속타는 농심",
            },
            subArticles: [
              "'동료 女의원 성추행 의혹' 일파만파... 부천시의원 탈당",
              "“올해는 꼭 취업하고 싶어요”…구직자 3천600명 몰려 북새통 [2023 인천 일자리 한마당]",
              "개인정보 유출 걱정 '뚝'... 경기도의회, 지역화폐 앱 '문단속'",
              "수업시간 골프연습한 시흥시 초등교사 감사 나서",
              "오갈 곳 없는 ‘장애 아동’... 경기도 전담어린이집 무한대기",
              "무늬만 ‘MADE IN KOREA’...인천세관, 라벨갈이 업체 무더기 적발",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/983.png",
            pressLogoAlt: "중부매일신문",
            lastEditted: "05월 23일 22:07 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9207%2F221251_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "90도 허리 접어 모 심어도 헛일 될까 걱정 한가득",
              mainArticleTitle:
                "90도 허리 접어 모 심어도 헛일 될까 걱정 한가득",
            },
            subArticles: [
              '김영환 지사 "김용수 총장 후보자, 충북도립대 혁신 적임자"',
              "소아과 쏠림현상 심각 - 中. 야간진료병원 턱없이 부족",
              "제천서 '제2의 삶' 사는 박달재 공예가",
              "영인산휴양림 주차장이 농지… 지목변경 안하고 수십년 사용",
              "'충북도 아이돌봄광역지원센터' 청주서 개소",
              "충주 충북대병원, 정쟁거리 아니다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/336.png",
            pressLogoAlt: "전북일보",
            lastEditted: "05월 23일 19:23 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9066%2F193102_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "세계 청소년 모이는 새만금잼버리 준비 '엉망'",
              mainArticleTitle: "세계 청소년 모이는 새만금잼버리 준비 '엉망'",
            },
            subArticles: [
              "전주~김천선·전라선 고속화 사전타당성조사 '또 연장'",
              "부산 가덕도신공항 '급물살'⋯새만금 국제공항 '무소식'",
              "피해는 온전히 투숙객 몫⋯불법미등록숙박업소 '주의'",
              "노무현 전 대통령 14주기 추도식⋯김 지사, 봉하마을 찾아",
              "만경강 살리기 기본구상 7월 완성⋯국가계획 반영 추진",
              "국방부, 입영 신체검사에 마약 검사 추가⋯장병까지 확대",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/936.png",
            pressLogoAlt: "대구일보",
            lastEditted: "05월 23일 20:18 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9148%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "영남명산 ‘팔공산’ 국립공원 승격 확정",
              mainArticleTitle: "영남명산 ‘팔공산’ 국립공원 승격 확정",
            },
            subArticles: [
              "코로나19 기나긴 터널의 끝 〈2〉종식으로 웃고 우는 업종들",
              "김형동, 부동산재산 3년전보다 4배 증가…TK 중 최고",
              "‘수호신’ 오승환, 위닝시리즈 선사…삼성, 연장 접전 끝 NC에 2대1 승리",
              "22일 몽골발 황사로 대구 종일 뿌연 날씨 이어져",
              "대구방짜유기박물관서 열린 '헝가리에서 온 사진' 기획전…관람객 1만 명 돌파",
              "경북도, 인도 인재 유치한다…인구 2억3천만 UP주와 협약",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/935.png",
            pressLogoAlt: "경상일보",
            lastEditted: "05월 23일 00:20 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9147%2F002457_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "청정 울산항 이끌 기술, 예산에 발목",
              mainArticleTitle: "청정 울산항 이끌 기술, 예산에 발목",
            },
            subArticles: [
              "초등 예비소집 불참자, 친모가 생후 100일...",
              "들쭉날쭉 과속방지턱 “오히려 위험”",
              "현대차 러시아 현지 공장 딜레마",
              "울산지역 9개 공공기관장, 장관보다 연봉 더 받았다",
              "2년간 울산 아파트 전셋값 19%↓ ‘역전세’ 현실화",
              "구청 예산으로 상인회 단합회 지원 논란",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png",
            pressLogoAlt: "전북도민일보",
            lastEditted: "05월 23일 20:11 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9149%2F201820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "지나친 규제와 제약에 사들해 지는 고향사랑기부제 어쩌나",
              mainArticleTitle:
                "지나친 규제와 제약에 사들해 지는 고향사랑기부제 어쩌나",
            },
            subArticles: [
              "“업무 강도가 너무 심합니다” 수사부서 기피하는 경찰관",
              "‘전교조가 행정지도?’ 공문 한 장에 학교현장 ‘술렁’",
              "[기획] 전북 생산량 지속 감소…지역 소멸 가속화 우려",
              "전북도, 사회보장 안전망 손본다",
              "어린이용 해열제 일단 생산·판매 중단 조치…“아이 열 나면?” 부모들 불안",
              "[기획] 전북 건설업계, 경영난에 휘청인다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2023/0309/nsd195548501.png",
            pressLogoAlt: "광주일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9064%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "지자체, 사활 건 인구 늘리기 정책",
              mainArticleTitle: "지자체, 사활 건 인구 늘리기 정책",
            },
            subArticles: [
              "한 눈에 보는 5월 23일 광주일보 카드뉴스",
              "“마음이 쉬는 도심 정원서 부담없이 힐링하세요”",
              "광주 테마마을 보러왔다가…실망만 안고 돌아간다",
              "24일 누리호 3차 발사…고흥군 교통 통제",
              "광주·전남 올 여름 더 덥고 7월 집중 호우 예상",
              "지역이기주의와 정치적 계산이 ‘동네공항’ 전락시켜",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/388.png",
            pressLogoAlt: "전남일보",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9098%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "차세대 위성 장착… 누리호 오늘 ‘실전 발사’",
              mainArticleTitle: "차세대 위성 장착… 누리호 오늘 ‘실전 발사’",
            },
            subArticles: [
              "“광주·전남 3년새 역대급 홍수·가뭄… 재앙 대비를”",
              "“광주시가 소송지휘권 박탈, 이해 당사자 대변” 증언",
              "정의, 4기 원내대표단 인선…원내수석에 이은주",
              "'현직 경찰'만취 상태로 차량 털다 현행범 체포",
              "한전KDN-미래전자, 수소에너지 정보통신분야 맞손",
              "[전남일보] 기아타이거즈> ‘분노의 뿡뿡이’ 황대인의 프로 첫 퇴장, 팀 위한 희생이었다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/089.png",
            pressLogoAlt: "대전일보",
            lastEditted: "05월 23일 22:40 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9062%2F224115_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "'세종의사당' 더이상 정쟁에 미뤄지면 안된다",
              mainArticleTitle: "'세종의사당' 더이상 정쟁에 미뤄지면 안된다",
            },
            subArticles: [
              "누리호, 24일 3번째 지구 밖으로",
              "올 여름 찜통더위",
              '"성폭행 가해자가 교사를?"…제도 개선 여론 빗발',
              "\"월세보다 비싼 관리비\"…'꼼수' 판친다",
              "'우회전 일시정지' 시행 후 사고 대폭 감소",
              "충청 특별지방자치단체 설립 머리맞대",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
            pressLogoAlt: "미디어제주",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9233%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "제주도 추경예산안 다룰 원포인트 임시회, 6월 초 유력",
              mainArticleTitle:
                "제주도 추경예산안 다룰 원포인트 임시회, 6월 초 유력",
            },
            subArticles: [
              "ISD 거론하며 날 세우던 제주도, 이제는 ‘민생예산’ 거론",
              "“민속자연사박물관에 제대로 된 이름 붙어주세요”",
              "제주남방큰돌고래 포획 잔혹사 32년, 방류 돌고래의 현재는?",
              '"제주 제2공항 주민투표 해달라" 의견, 오영훈 "도 차원서 검토"',
              "올 1분기 제주경제동향, 서비스업·물가‘↑’ 수출입·고용률‘↓’",
              "수출 초보부터 선도기업까지… “쑥쑥 키워드립니다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0704/nsd231551300.png",
            pressLogoAlt: "중부일보",
            lastEditted: "05월 23일 21:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9117%2F214835_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "정부, 車부품산업 14조 투입… 경기도 가장 큰 수혜",
              mainArticleTitle:
                "정부, 車부품산업 14조 투입… 경기도 가장 큰 수혜",
            },
            subArticles: [
              "경기도 지역화폐 앱 '보이스피싱 차단' 기능 심는다",
              "[학폭 사라져야] \"'방관자 아닌 방어자' 만들어야 자율 예방\"",
              '"상의 없는 연천현충원 건립 막을 것" 인근 주민 반대집회 예고',
              '"사람 사는데 허가라니" 효성도시개발사업 승인',
              "심야·휴일 진료 '달빛어린이병원' 늘린다",
              "양평, 고급주택·별장 취득세 중과세율 적용 누락",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png",
            pressLogoAlt: "MS투데이",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9363%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "강원특별법 24일 법안심사 확정⋯5월 입법 불씨 살려",
              mainArticleTitle:
                "강원특별법 24일 법안심사 확정⋯5월 입법 불씨 살려",
            },
            subArticles: [
              "춘천 손흥민 카페 오픈⋯직접 가보니",
              "너무 비싼 여권! 3만원 저렴하게 발급받기",
              "소양동 행정복지센터에 있는 ‘작은 가게’의 정체는?",
              "소양강댐 주변 피해 매년 수백억원⋯“취수부담금 도입해야”",
              "저항운동의 숨은 비밀",
              "국회, 강원특별자치도 개정안 조속히 처리하라",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png",
            pressLogoAlt: "충청투데이",
            lastEditted: "05월 23일 20:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9063%2F201347_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "‘돈내기 도박’ 즐기는 충청권 청소년들",
              mainArticleTitle: "‘돈내기 도박’ 즐기는 충청권 청소년들",
            },
            subArticles: [
              "글로컬사업 앞두고 혁신 예고 목원대·배재대, 대학 간 벽 허문다",
              "성큼 다가온 글로벌 시대 다문화 가정 아동 줄어드는 이유는",
              "구획어업 금지 뿔난 어민들 보령시에 낚시업 승인 행정소송 추진",
              "‘청년 문제’ 본질 외면한 채 ‘복지’만 앞세우는 정치권",
              "불법도박 규모 커지는데예방·치유 법정부담금 뚝",
              "저감정책 역부족… 더 짙어진 충청권 초미세먼지",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2020/1119/nsd213345745.png",
            pressLogoAlt: "제민일보",
            lastEditted: "05월 23일 19:39 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9104%2F194112_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "탐나는전 혼란 반복 지역화폐 무용론",
              mainArticleTitle: "탐나는전 혼란 반복 지역화폐 무용론",
            },
            subArticles: [
              "제주도 내년도 국비 2조 확보 목표 총력",
              "종합운동장 허물고 스포츠타운 세운다",
              "발묶인 민생예산 4128억 돌파구 마련될까",
              "제주 기후변화 1번지…물에 잠기는 제주 용머리해안",
              "제주대학교 학사 구조 대대적 '개편'…\"유사 학과 통폐합\"",
              "제18회 평화와 번영 위한 제주포럼 임박",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/0331/nsd155937506.png",
            pressLogoAlt: "인천일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9097%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "3년간 국회의원 재산 7억·부동산 3억 증가…전체 1등은 박정, 2등은 윤상현",
              mainArticleTitle:
                "3년간 국회의원 재산 7억·부동산 3억 증가…전체 1등은 박정, 2등은 윤상현",
            },
            subArticles: [
              "날로 커져가는 조직, 해답은 송도 GCF 콤플렉스",
              "용인 신갈 개발사업지, “부동산 담보 제공 몰랐다” vs “직접 계약서 사인”",
              "[단독] 시민 창작 공간서 '수상한 음료' 만든 회사 대표",
              "보행로 불분명·유흥업소 즐비·성범죄자 거주…불안한 초등학교 통학길 '1㎞'",
              "주민참여예산 논란 속…특위 꾸린 국힘 시당",
              "[인천 시정 특집] 아라뱃길 따라 모빌리티 새 시대 활짝",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/927.png",
            pressLogoAlt: "충북일보",
            lastEditted: "05월 23일 20:42 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9130%2F204853_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "충북 여야 총선체제 전환 지연…출마 예정자 곤혹",
              mainArticleTitle: "충북 여야 총선체제 전환 지연…출마 예정자 곤혹",
            },
            subArticles: [
              '김영환 충북지사 "도립대 총장 정해 놓고 밀지 않아"',
              "충북 구제역 이번 주 '고비'…내주 백신 항체 형성",
              "충북기업 돋보기 5.장부식 씨엔에이바이오텍㈜ 대표",
              "청주시, 청주병원 주차장 부지 펜스 해체",
              "'글로컬대학30' 예비지정 임박 … 충북 대학들 준비작업 박차",
              "#샵스타그램 - 청주 수곡동 카페 '소노손손'",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/821.png",
            pressLogoAlt: "경남도민일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9242%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "귀를 즐겁게 만드는 노래 '소유하는 기쁨·꺼내 듣는 재미'까지",
              mainArticleTitle:
                "귀를 즐겁게 만드는 노래 '소유하는 기쁨·꺼내 듣는 재미'까지",
            },
            subArticles: [
              '"역사가 후퇴하는 요즘 노무현 대통령님 왜 제 옆에 안계십니까?"',
              "중단된 STX중공업 매각 향후 전망은",
              "한화오션, 경영 신뢰 쌓기도 전에...",
              "정점식 국회의원 재산이 3년 새 34억 불었다",
              "타선 침묵한 NC, 낙동강 더비 영봉패",
              "'조선소에서 뛰면 죽는다' 산재 끊이지 않는 죽음의 공장",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png",
            pressLogoAlt: "강원도민일보",
            lastEditted: "05월 23일 07:52 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9075%2F080007_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "허울뿐인 강원특자도, 허탈함 넘어 분노 터졌다",
              mainArticleTitle: "허울뿐인 강원특자도, 허탈함 넘어 분노 터졌다",
            },
            subArticles: [
              "“한국 떠나기 싫어요” 이주민 체류불안 호소 상담 늘어",
              "강원청 소속 간부급 경찰 성희롱 의혹 본청서 조사 중",
              "도의회 “불필요한 정쟁 말고 강원특별법 조속 원안통과를”",
              "강원경제 부정적 지표 연타… 건설·무역·소비자 물가 모두 하락",
              "고물가·경기침체 지속… 할인 찾아 대형마트로",
              "오늘 플라이강원 기업회생 신청…항공운항증명 유지 주력",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/909.png",
            pressLogoAlt: "기호일보",
            lastEditted: "05월 23일 21:46 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9127%2F215103_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "3기 신도시 교통망 확충 철도 직결…",
              mainArticleTitle: "3기 신도시 교통망 확충 철도 직결…",
            },
            subArticles: [
              "수소연료 전지 핵심부품 청라 생산기지 건설…",
              "오래된 건물 관리 부재 틈타 안전사고 꿈틀댄다",
              "인천시 공원 수목 병충해 탓에 ‘시들시들’",
              "오산시 풍농 물류센터 교통안전 대책 수립 올인",
              "점심시간 불 꺼진 법원 민원실 쉴 권리 VS 시민 불편 딜레마",
              "국힘 인천시당 민선7기 주민참여 예산 정조준",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
            pressLogoAlt: "제주의소리",
            lastEditted: "05월 23일 19:10 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9073%2F191553_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "제주4.3중앙위원회 물갈이 코앞?‘1/3 교체설’에 후임 임명 도민사회 ‘촉각’",
              mainArticleTitle:
                "제주4.3중앙위원회 물갈이 코앞?‘1/3 교체설’에 후임 임명 도민사회 ‘촉각’",
            },
            subArticles: [
              "제2공항 주민투표 촉구 서명 1만3천명 동참공 넘겨받은 오영훈 지사 “찬반 균형있게 반영”",
              "개교 71주년 맞은 제주대학교 ‘학제개편·통폐합’ 대대적 혁신 예고",
              "오영훈 지사 공약 ‘제주역사관’ 준비 착착…“증축, 신축 모두 검토 중”",
              "55년된 제주종합경기장 허물고 스포츠센터 건립?...민자 유치까지 검토",
              "반년에 백년을 말하는 나뭇잎의 저 깊이 / 고정국",
              "시대와 국경 초월한 교육자 정신, 부룬디 마을을 구하다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
            pressLogoAlt: "경기신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9362%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "인천시, ‘상상플랫폼’ 관광공사 출자 공식화…바다열차는 언제쯤?",
              mainArticleTitle:
                "인천시, ‘상상플랫폼’ 관광공사 출자 공식화…바다열차는 언제쯤?",
            },
            subArticles: [
              "부천시 갑…민주 '수성' vs 국힘 '도전'",
              "통학로 위험한 '초등학교' 배정 받은 학부모 집단 반발",
              "소비심리 1년 만 최고…기대 인플레는 1년 만 최저",
              "‘통장 구인난에 노령화까지’…미추홀구, 통장 나이 만25→18세 완화",
              "'저금리' 내세운 인터넷은행, 주담대 시장 '메기'로 부상",
              "구리시, 민선8기 공약 '첨단순환 트램' 도입 첫발",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/978.png",
            pressLogoAlt: "경북도민일보",
            lastEditted: "05월 23일 19:12 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9201%2F192052_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "포항·울산 묶어 특화단지 ‘어불성설’",
              mainArticleTitle: "포항·울산 묶어 특화단지 ‘어불성설’",
            },
            subArticles: [
              "팔공산, 국립공원 되다",
              "적자난 한수원, 관광성 견학 경비지원 논란",
              "포항 오천 대형건설사 아파트 민원 속출",
              "소득 추락 경북 농가 “쓸 돈이 없어요”",
              "예천군, 비행장 소음 피해 주민 5119명에게 보상금 지급 결정",
              "포스코그룹-인도JSW사, 미래사업 협력 강화 논의",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/338.png",
            pressLogoAlt: "경인일보",
            lastEditted: "05월 23일 21:34 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9068%2F213820_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "잔 들고 춤추고, 성추행 사건까지… 부천시의회 '주정' 연수",
              mainArticleTitle:
                "잔 들고 춤추고, 성추행 사건까지… 부천시의회 '주정' 연수",
            },
            subArticles: [
              "경기도 공직기강 무너졌나?… 이번엔 '인허가 비리'",
              "블록체인 행정 활용, 정부보다 빨랐던 경기도",
              "한국만의 짝사랑 그만… 경기도서 일본 관광객으로 돌려받자",
              "\"오랜 기간 가스라이팅\"… 노인 대상 '폰지사기' 기승",
              "일본 오염수 방류, 상인들 삶도 뒤덮일 판",
              "인천 부평 미군기지 캠프마켓 '활용 접점' 시민에 묻는다",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/088.png",
            pressLogoAlt: "매일신문",
            lastEditted: "05월 23일 20:44 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9041%2F205100_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                '尹대통령 "노동·복지·원전…무너진 국가 시스템 정상화 해야"',
              mainArticleTitle:
                '尹대통령 "노동·복지·원전…무너진 국가 시스템 정상화 해야"',
            },
            subArticles: [
              "대구경북 대표 명산 팔공산 23번째 '국립공원' 승격",
              "[봉하마을] 野, 노무현 전 대통령 추도식 총집결…계파 갈등 우려 불식 하나",
              "김재원, '전광훈 목사와 신당 창당 가능성' 일축…방송 출연 집중 전망",
              "'곧 초강력' 태풍 마와르, 대만 동쪽~오키나와 군도 라인 탄다",
              "올 여름도 덥다…평년 기온보다 높을 확률↑",
              "포항 밤하늘 수놓는 천개의 불빛, ‘포항국제불빛축제’ 26일부터 축포",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png",
            pressLogoAlt: "제주도민일보",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9099%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "제주 최대 갈등현안 제2공항...‘주민투표’ 촉구",
              mainArticleTitle: "제주 최대 갈등현안 제2공항...‘주민투표’ 촉구",
            },
            subArticles: [
              "사상 첫 추경 심사보류...제주도 '소통부족' 도민께 송구",
              "제27회 제주국제관광마라톤축제 3,500여명 참가",
              "제주대, 단과대‧유사과 통합 등 구조조정 추진",
              "‘꼬닥꼬닥 걸어온 20년’ 제주그림책 전시회",
              "제18회 제주포럼, 정부 관심 밖 행사로 전락",
              "제주도, 내년도 국비 2조 확보...지방재정협의회 요청",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/087.png",
            pressLogoAlt: "강원일보",
            lastEditted: "05월 23일 17:58 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9074%2F180218_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt:
                "권혁열 강원도의장 국회서 '강원특별법 통과 1인시위'",
              mainArticleTitle:
                "권혁열 강원도의장 국회서 '강원특별법 통과 1인시위'",
            },
            subArticles: [
              "강원특별법 상경집회 일촉즉발… 곳곳서 충돌",
              "‘알맹이 없는 특별자치도’ 되나…이번주 법안심사 안하면 출범 전 특례 반영 무산",
              "강원특별법 법안심사 무산… 강원도민 전방위적 압박 나선다",
              "강원도교육청 새 감사관에 정오현 총무과장",
              "[속보]국정원·경찰, ‘국가보안법 위반 혐의’ 전교조 강원지부 압수수색",
              '"원주아카데미극장 즉시 철거해야"',
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png",
            pressLogoAlt: "충청일보",
            lastEditted: "05월 23일 22:32 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9101%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "충청권 U대회 조직위 설립 '가시밭길'",
              mainArticleTitle: "충청권 U대회 조직위 설립 '가시밭길'",
            },
            subArticles: [
              "올해 여름 충북 평년보다 기온 높을 듯",
              '김병국 청주시의회 의장 "내로남불 민주당…원칙대로 하겠다"',
              "청주시, 돌봄 사각지대 어르신 찾아나선다",
              "김영환 충북지사, 김용수 도립대 총장 후보 '두둔'",
              "충북도 아이돌봄광역지원센터 개소",
              "충북 소비자심리지수 4개월 연속 상승",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/337.png",
            pressLogoAlt: "경북일보",
            lastEditted: "05월 22일 23:15 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0522%2Farticle_img%2Fnew_main%2F9067%2F232004_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "영일만대교·엑스코선…내년 국비 정부와 머리 맞댄다",
              mainArticleTitle:
                "영일만대교·엑스코선…내년 국비 정부와 머리 맞댄다",
            },
            subArticles: [
              '안전시설물 없는 스쿨존..."우리 아이 안전은 누가 지켜주나요"',
              "포항시민 고교평준화 찬반 팽팽",
              "한·미·일 정상 ‘워싱턴 3자회담’ 7월 개최 가능성",
              "[영상] 푸른 잔디서 즐기는 '나이스샷'…동호인 파크골프대회 개최",
              "제1회 영천시장배 전국승마대회 성료",
              "최우선 변제금 최장 10년 무이자 대출…보증금 5억까지 구제",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/907.png",
            pressLogoAlt: "경북매일신문",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9123%2F223400_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "해병대 장병들 농촌일손돕기",
              mainArticleTitle: "해병대 장병들 농촌일손돕기",
            },
            subArticles: [
              "‘팔공산 국립공원’ 꿈을 이루다",
              "포스코 ‘저출산 해법’ 모범… 국회·정부·학계 뭉쳤다",
              "대구 내달 2천756가구 분양 예정 하반기 부동산 시장 기지개 켜나",
              "경북, 역점사업 국가예산 확보 화력 집중",
              "14년 기다린 포항송도해수욕장, 올해도 개장 불발?",
              "與 ‘돈봉투·코인·대장동’ 공세에 野 “노무현 길 따르겠다”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png",
            pressLogoAlt: "부산일보",
            lastEditted: "05월 23일 19:04 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9042%2F191250_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "부산 5060 퇴직 후 ‘노년 가난’ 내몰린다",
              mainArticleTitle: "부산 5060 퇴직 후 ‘노년 가난’ 내몰린다",
            },
            subArticles: [
              "“70세 넘어도 일하고 싶지만 일자리 바늘구멍”… 재취업 막막한 ‘부산 5060’",
              "[단독] 엑스포 수소 도시 만든다더니… 부산, 수소 인프라 낙제점",
              "[PK 총선 일타강의] 전직 구청장 등 ‘중량급 신예’ 잇단 출사표에 벌써부터 ‘후끈’",
              "부산 영화단체 “BIFF 내홍 당사자 조종국부터 사퇴하라”",
              "“책임정치 충실 노 전 대통령 유업 이루겠다”",
              "다시 군불 지피는 교육국제화특구",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/301.png",
            pressLogoAlt: "광주드림",
            lastEditted: "05월 23일 22:30 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9065%2F223816_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "누리호 발사 D-1, 직관 명당은?",
              mainArticleTitle: "누리호 발사 D-1, 직관 명당은?",
            },
            subArticles: [
              "[시민기자 생각]“마약류 범죄 단속과 치료 병행해야”",
              '5.18 43주년 전야제 여야 구분 없이 "광주 정신 계승"',
              "수어는 내운명, 손짓으로 전하는 언어의 힘",
              "[딱꼬집기]교사들이 고발당하고 있습니다",
              "[기고]광주 통합돌봄과 광주의료사협",
              "“사람과 반려동물, 어울려 사는 광주 만들기”",
            ],
          },
          {
            pressLogoSrc:
              "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/333.png",
            pressLogoAlt: "경남신문",
            lastEditted: "05월 23일 22:01 직접 편집",
            mainArticle: {
              thumbnailSrc:
                "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9072%2F220353_001.jpg%22&type=nf312_208&service=navermain",
              thumbnailAlt: "18세도 54세도 ‘청년’… 청년 폭 넓힌다",
              mainArticleTitle: "18세도 54세도 ‘청년’… 청년 폭 넓힌다",
            },
            subArticles: [
              "[여야 지도부 총출동, 셈법은] 국힘 ‘중도층 겨냥·외연 확장’ vs 민주 ‘지지층 결집·내분 불식’",
              "[봉하 찾은 ‘노무현의 사람들’] “역사는 더디지만 진보한다”… 시민 7000명 추모 발걸음",
              "대우조선, ‘한화오션’으로 새 출항",
              "‘누리호 발사 참여’ 경남 기업들, 사업 분야 확장 필요",
              "학폭 예방 ‘매의 눈’으로",
              "‘창원 전세사기’ 중개사·보조원, 무혐의 될라",
            ],
          },
        ],
      },
    ],
    currentViewList: {
      title: "종합/경제",
      pressList: [
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
          pressLogoAlt: "조선비즈",
          lastEditted: "05월 23일 22:29 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9088%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
            mainArticleTitle:
              "中 해군력에 긴장한 태평양… 너도나도 韓 조선 '러브콜'",
          },
          subArticles: [
            '[속보] 누리호 발사관리위 "준비 문제없어… 예정대로 내일 발사"',
            '서울 주목하는 명품업계… 佛언론 "韓 관심 끌기 위해 경쟁"',
            '尹대통령, WTO 사무총장 접견… "韓 청년에 인턴 기회 달라"',
            "하이브, 中 텐센트뮤직과 음원 유통계약… 국내와 동시 서비스",
            "분양 기피하는 건설사들… 이대로 가면 '집값 불안' 현실화",
            "회계 공시한 노조만 세제혜택 받는다… 공시시스템 9월 운영",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
          pressLogoAlt: "중앙SUNDAY",
          lastEditted: "05월 23일 09:59 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9227%2F100234_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
            mainArticleTitle:
              "미 디폴트 갈림길, FOMC 회의록 공개…금융시장 긴장",
          },
          subArticles: [
            "꿀벌 200억 마리 실종, 2000마리에 칩 달아 추적",
            "172년 '흙살림 농법'…70가지 채소로 '몸살림 밥상'",
            "김환기의 보름달 왜 푸른색일까? 그에 관한 7가지 사실",
            "강남 은마 경매가 2억 뛰고 급매 사라졌지만, 신중론도 여전",
            "삼성 '바퀴달린 스마트폰' 자율차 반도체로 활로 찾는다",
            "동아시아 '에라스무스' 프로그램 추진, 대학 위기 타개해야",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/973.png",
          pressLogoAlt: "비즈한국",
          lastEditted: "05월 23일 22:37 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9197%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "소유의 종말이 가져온 짠테크 '중고거래'",
            mainArticleTitle: "소유의 종말이 가져온 짠테크 '중고거래'",
          },
          subArticles: [
            "전세 가구의 다음 선택에 매매·반전세·월세가 있어야 하는 이유",
            "[단독] 김인순 매일유업 명예회장, 영동공장 인접 땅 차명 보유 의혹",
            "전세 사기, 공인중개사는 과연 책임이 없을까",
            "요기요가 쏘아올린 전쟁의 서막? 배달 플랫폼 이번엔 '점유율 경쟁'",
            "영화가 아닌 '공간'에 방점…CGV·롯데시네마·메가박스의 변신",
            "달 먼지로 태양을 가려 지구 온난화를 막겠다고?",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/243.png",
          pressLogoAlt: "이코노미스트",
          lastEditted: "05월 23일 17:21 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9163%2F172537_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
            mainArticleTitle:
              "‘아침햇살’로 대박 낸 그녀, 이번엔 ‘건기식 음료’로 승부수 [이코노 인터뷰]",
          },
          subArticles: [
            "29년 동안 4000대 팔았다...기아, 27번째 ‘그랜드 마스터’ 배출",
            "“이게 무슨 일” 퇴근길에 ‘깜짝’…송파구 일대에 우박 쏟아져",
            "닻 올린 한화오션…경영 정상화 ‘속도’",
            "“손이 가요, 손이 가”…영원한 ‘국민 간식’ 52살 새우깡 [1000억 식품의 비밀]",
            "‘원조 가성비車’ 티볼리, KG 품에서 다시 태어난다",
            "英 매체 “한국 젊은 여성 자살률 증가, 모순적 기대 강요받아”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/969.png",
          pressLogoAlt: "매일노동뉴스",
          lastEditted: "05월 23일 07:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9183%2F074359_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
            mainArticleTitle:
              "[노사정 대표자 간담회 연다지만] ‘노조 적대’ 윤석열 정권에서 사회적 대화 가능할까",
          },
          subArticles: [
            "“파이프 끼임 사고” 원청 대표, 중대재해 ‘15번째’ 기소",
            "“분신 방조 허위 보도” 건설노조·유족 조선일보 고소·고발",
            "‘에이스손보 자회사 전적’ 일방통행에 고용불안 커져",
            "내년 공무원 보수 37만7천원 정액 인상 요구",
            "“보호외국인 법령 여러 나라 번역본 제공해야”",
            "노조법 개정안 직회부 결정 앞두고 노동사회단체 “국회 일하라”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132851977.png",
          pressLogoAlt: "여성경제신문",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9364%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
            mainArticleTitle:
              "[깐팩] 18년 동안 시도된 단독 의료행위가 의사 반발 불러",
          },
          subArticles: [
            "11조 '순매도 vs 순매수' 외국인 태세 전환‧‧‧금리 사이클이 갈랐다",
            "'믿었던 바이오헬스 너마저'···中 리오프닝에도 수출 급감 초비상",
            "英 매체, 한국 젊은 여성 자살률 1위···성차별 문화 원인 지목",
            "[김현주 더봄] 혼자 걷는 즐거움에 빠지다",
            "[성기노 칼럼] 문재인 ‘평산책방’의 정치학",
            "600만 틱톡커 '듀자매'의 도전은 어디까지?",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png",
          pressLogoAlt: "쿠키뉴스",
          lastEditted: "05월 23일 22:23 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9155%2F223056_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
            mainArticleTitle: "5·18이 쉬는 날?… 아무도 모르는 ‘지방공휴일’",
          },
          subArticles: [
            "황당한 국가자격시험 사고… 채점 전 609명 답안지 파쇄",
            "노무현 전 대통령 14주기… 여야 지도부, 추도식 참석",
            "3차 발사 D-1... 우뚝 선 누리호",
            "코인원 전 간부들, 30억 받고 가상자산 ‘뒷돈 상장’",
            "‘쌍방울 대북 송금 의혹’ 안부수, 1심 징역 3년6개월 선고",
            "“휴대폰 뺏기고 체중 검사…K팝 연습생 생활은 감옥”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
          pressLogoAlt: "머니에스",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9159%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
            mainArticleTitle:
              '"무심코 그린 이모티콘의 반전"… 취미가 돈이 되는 세상',
          },
          subArticles: [
            '기준금리 인상 열차 멈춘다… "5월 금통위 동결 예상"',
            "[이사람] \"프랑스 비켜\"… 이승원, '제2의 이강인' 찬사",
            '"중개보수 깎아주지마" 공정위, 공인중개사협회 담합 조사',
            "양주 총기사고… '무릎쏴→ 서서쏴', 자세 바꾸다 오발?",
            '"암치료하는 생수"… 고령층 속여 385억원 편취한 일당',
            '"묻지마 폭행 수준"… 팬 밀친 男아이돌 경호원, 결국',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png",
          pressLogoAlt: "위키트리",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9157%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'토르' 레이 스티븐슨,  갑작스럽게 전해진 사망 소식…향년 58세",
            mainArticleTitle:
              "'토르' 레이 스티븐슨, 갑작스럽게 전해진 사망 소식…향년 58세",
          },
          subArticles: [
            "활발히 활동 중인 화사, 업계 술렁일 '대형' 보도가 하나 전해졌다",
            "“케인은 맨체스터 시티로 가고, 손흥민은…” 초대형 이적설 떴다",
            "부처님오신날 앞두고 연꽃빵 맛보는 동자승들 (사진 15장)",
            "“환멸 난다”…카리나 '외모 칭찬'했다가 욕먹은 이영지, 22일 입장 밝혔다",
            "혼자 사는 할머니 집에 무단침입해 10년 넘게 가족 행세하며 눌러산 남성 검거",
            "“열정페이 아니냐…” 팬들한테 '재능기부' 강요한 김태리, 역풍 제대로 맞고 있다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
          pressLogoAlt: "데일리안",
          lastEditted: "05월 23일 22:31 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9090%2F223816_001.jpeg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
            mainArticleTitle:
              "검찰, 송영길 캠프 '지지 의원단' 활동 포착…돈봉투 수수자 특정 '속도전'",
          },
          subArticles: [
            "민주당, 비명계에 '욕설 문자폭탄' 보낸 강성 당원 제명…첫 사례",
            '中 발끈했던 "힘에 의한 현상변경 반대"…권영세, 北에 외쳤다',
            '조희연 항소심 "어떤 위법 지시도 안 했다"…1심 판결 안 바뀌면 교육감직 상실',
            "‘로또 1등’에도 체납 세금 안 내…국세청, 고액 체납자 557명 추적조사",
            '출산 임박한 아내 태우고, 남편 "도와주세요" 외쳤지만…경찰 "관할 아니다"',
            '중국서 네이버 접속 불능…中 외교부 "구체적 정보 없다"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153942530.png",
          pressLogoAlt: "대한경제",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9185%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
            mainArticleTitle: "건설업계, 2024년 SOC 예산 ‘31兆’ 이상 편성 건의",
          },
          subArticles: [
            "김영민 회장 동생회사도 942억 블록딜 매도",
            "주가 폭락 전 손 턴 오너…수상한 서울가스",
            "여행업계, ‘브랜드 마케팅’ 잰걸음",
            "인터넷업계 “온플법, 유니콘 성장 막는 악법”",
            "현대차 노조 임단협 임박… 핵심 쟁점은 ‘정년 연장’",
            "[포토] 도심항공모빌리티(UAM)에 쏠린 관심",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
          pressLogoAlt: "헤럴드경제",
          lastEditted: "05월 23일 21:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9023%2F214835_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
            mainArticleTitle:
              "尹대통령, 대·중소기업인들과 ‘치맥’…“과감히 세계시장 뛰어들어야”",
          },
          subArticles: [
            "“장갑차도 동원, 러 본토에 최대 규모 공격”…크렘린궁도 “우려 심각”",
            "\"이재용 사는 서울이 아니라고?\"…'7만전자' 눈앞 삼전개미, '여기' 가장 많다[투자360]",
            "“로또1등 당첨” 세금 안내려 지인계좌에 숨겼다…고액체납자 최후",
            "“어? 금리 내리네?” 중고차 사업 ‘슬슬’ 재개하는 카드사들[머니뭐니]",
            "21대 국회의원 부동산 재산, 평균 3.2억원 늘었다…1위는 민주당 박정",
            "‘52주 신고가’ 삼성전자 1등 공신은 外人…‘9만전자’면 코스피 2700 넘는다 [투자360]",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png",
          pressLogoAlt: "인더스트리뉴스",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9222%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
            mainArticleTitle:
              "‘초고효율 태양전지’ 등 한국형 탄소중립 100대 핵심기술 확정",
          },
          subArticles: [
            "페펄앤드푹스, PRT와 MEMS 기술 결합해 고해상도 3D포인트 클라우드 지원",
            "포스코퓨처엠, 배터리소재 전문 인재 육성 위해 산학협력 강화 나서",
            "KAIST, ‘그린수소’ 저가 생산기술 실마리 찾아",
            "슈나이더일렉트릭, 세계 최초 디지털 모터스타터 ‘TeSys Island’ 제공",
            "산업부, 중소기업 기술사업화 투자 확대 나선다… 기술평가비용 전액지원",
            "토트넘, 4년 연속 영국 프리미어리그 최고의 친환경 구단 선정",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/971.png",
          pressLogoAlt: "일요시사",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9194%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
            mainArticleTitle:
              "TV 선호도 프로 2위에 TV조선 <미스터트롯2>…1위는?",
          },
          subArticles: [
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ①그들은 왜 어떻게 묻혔나",
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ②아빠의 멈춰버린 6년",
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ③자식 앞세운 애끓는 사연들",
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ④‘의심 자초’ 초동수사 한계",
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑤권인숙·김민기 의원에 듣다",
            "[창간특집 탐사기획] 나라가 버린 34용사의 죽음 ⑥수장 따라 바뀌는 순직 정의",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/825.png",
          pressLogoAlt: "이로운넷",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9244%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "서울시, 서울계약마당 새단장...정보 접근성 향상",
            mainArticleTitle: "서울시, 서울계약마당 새단장...정보 접근성 향상",
          },
          subArticles: [
            "당류 함량 높은 '밀크초콜릿' 먹을 때 주의해야",
            "너무 흔해 잡초 같아 보이지만 '꿀풀'은 열일하는 약초입니다",
            "어디에나 있고 어디에도 없는 에티오피아 1",
            "광주시민 3,000여명 ‘민주평화대행진’ “기억하라 오월광주, 행동하라 헌법수록”",
            "날좀보소, 날좀보소~ 밀양강변에서 '밀양아리랑대축제'",
            "헥산, GMO, 벤조피렌...'바리의꿈'에는 없다(1)",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
          pressLogoAlt: "파이낸셜뉴스",
          lastEditted: "05월 23일 21:36 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9021%2F214115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '"野 부천 시의원이 국민의힘 女의원 몸을..."  CCTV에 찍힌 충격적인 장면',
            mainArticleTitle:
              '"野 부천 시의원이 국민의힘 女의원 몸을..." CCTV에 찍힌 충격적인 장면',
          },
          subArticles: [
            '"하루 두 끼 먹는 남성, 세 끼 먹는 남성보다..." 놀라운 연구 결과',
            '"양주서 숨진 20대 일병, 무릎쏴 자세를..." 목격담',
            '"카드값 연체 하루 만에..." 심상치 않은 카드사들',
            '로또 1등 당첨자의 교묘한 수법 "세금 안 내려고.."',
            '"40대 백만장자, 회춘하기 위해 아들의.." 소름행각',
            '"결혼 꿈도 못 꿔"..9급 공무원 실수령액 얼마길래?',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/993.png",
          pressLogoAlt: "허프포스트코리아",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9217%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "양자경이 원하는 대본은",
            mainArticleTitle: "양자경이 원하는 대본은",
          },
          subArticles: [
            '"내가 받고 싶은 대본은.." 양자경이 동양인 최초 오스카 여우주연상 수상 후 고백한 변화는 통쾌하면서도 프로 정신이 돋보인다',
            '"열심히 운동하는 건강한 사람 그려줘" AI에게 식스팩보다 더 좋은 운동의 효과를 가르치자 일어난 변화는 눈이 휘둥그레진다 (영상)',
            '"재난은 악화될 것" 이탈리아 로마의 트레비 분수가 환경 단체에 의해 검게 물들었다',
            "\"더 이상 내 조카도 아니고..\" 전두환의 손자 전우원은 큰아버지 전재국으로부터 '절연 통보' 문자 메시지 한 통을 받았다",
            "\"스타가 탄생했다!\" 해외 매체들에 '인어공주' 할리 베일리 캐스팅 논란을 잠재울 극찬이 이어졌다",
            '"치매 걸린 아빠 위해.." 브루스 윌리스의 9살 막내딸의 행동은 사랑이 가득해 제3자인 내 마음까지 따뜻하게 녹인다(영상)',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
          pressLogoAlt: "노컷뉴스",
          lastEditted: "05월 23일 22:00 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9028%2F220353_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
            mainArticleTitle:
              "[영상]日, 시찰단에 '정중히' 설명? 문제는 비밀주의",
          },
          subArticles: [
            "[영상]목 안고 어깨 터치···부천시의원, 국힘 의원 성추행 의혹",
            "[영상]李 \"조직된 힘으로\"···추모객들 한덕수에 '야유'",
            "[단독]\"미술관 내놔\" SK, '이혼소송' 노소영 상대 소송",
            "中 다음 이어 네이버도 접속차단? 단순 접속장애?",
            '"손자 죽고 저만 살아서···" 급발진 의심사고 첫 재판',
            "검찰, 김남국 보유 논란 '위믹스' 증권성 검토",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png",
          pressLogoAlt: "UPI뉴스",
          lastEditted: "05월 23일 21:21 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9241%2F212834_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
            mainArticleTitle:
              '尹 대통령·청년기업가·대기업 총수 치맥 들며 "우리는 하나"',
          },
          subArticles: [
            '내달 귀국 이낙연 "혁신 못하면 외부 충격"…이재명 체제에 경고?',
            '노무현 서거 14주기…봉화에 총집결한 여야 "盧정신 기억하자"',
            "美 연준 위원들, '추가 인상' vs '동결' 팽팽…시장 기대 무너지나",
            "PM, 자전거·보행자 뒤엉켜 '아찔'…파리처럼 퇴출 안되려면",
            "정신감정 받게 된 조양래…한국앤컴퍼니 '남매의 난' 재점화",
            "'IFRS17'로 보험사 실적 뻥튀기?…\"현재 수치 신뢰 힘들어\"",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
          pressLogoAlt: "국민일보",
          lastEditted: "05월 23일 22:29 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9002%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
            mainArticleTitle:
              "안전고리도 없이… 25살 청년, 강남 재건축 현장 추락사",
          },
          subArticles: [
            "누리호 세워놨는데 ‘기습’ 소나기… 발사위 “24일 확정”",
            "[단독] 증권사 엉터리 ‘장부가 평가’… 당국, “원칙대로 하라” 뒷북",
            "김건희 “韓, 매력적인 나라” 이부진 “김 여사에 감명”",
            "청소하던 경비원 때린 20대 주민 “술 마셔 기억 안나”",
            "강남 주택가 화분에 양귀비 재배한 80대 할머니",
            "‘집단성폭행 가해자가 교사’ 폭로…교육청 “현재 근무 안해”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/536.png",
          pressLogoAlt: "더팩트",
          lastEditted: "05월 23일 20:34 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9156%2F204123_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
            mainArticleTitle:
              "'역사는 더디다. 그러나 진보한다'...'노무현 정신' 기린 추도식 [TF사진관]",
          },
          subArticles: [
            '국민의힘 "김남국, 대선 전후 2억5000만 원 현금화...어디에 썼나"',
            "[동전주②] 큐로그룹 계열사 6곳 중 5곳 1000원 안 되는데…회사는 '나 몰라라'",
            "누리호 3차부터 '민간 참여' 강화…한화에어로스페이스·KAI 등 '구슬땀'",
            "'하루살이떼' 습격…'퇴치법 없다' 피해 확산",
            "[팩트체크] 임창정, 엔터 사업도 빨간불?…파주 사옥 직접 가보니",
            "[단독] '진성준 정치자금법 위반 혐의' 강서목민관학교 계좌 압색",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png",
          pressLogoAlt: "신아일보",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9225%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
            mainArticleTitle: '윤대통령 "민노총 집회 행태, 국민 용납 어려울것"',
          },
          subArticles: [
            "‘김남국 방지법’ 통과됐지만... 징계 절차는 걸음마",
            '"끝까지 잡는다" 국세청, 고액체납자 재산 집중 추적',
            "검찰, 'SG 주가조작 의혹' 라덕연 등 은닉재산 추적에 수사력 집중",
            "'대우조선' 간판 떼고…'한화오션' 새출발",
            "현충일 연휴 'SRT 3280석' 추가 운행",
            "한미일 '확장억제' 협의체 창설하나… 동북아 정세 긴장 우려",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
          pressLogoAlt: "뉴스타파",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9144%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
            mainArticleTitle:
              "[이예람 중사 사건 재판 지상 중계] ⑨ 전익수 측, “국방부의 부당한 수사에 대응하려 포렌식 거부”",
          },
          subArticles: [
            "의사 편드는 'K-선샤인액트' 시행규칙 꼼수",
            "[윤석열 1년 특집] ‘혼네와 진심’, 한일 지식인에게 묻다",
            "경찰, 법원 판결 뒤집고 윤 대통령 장모 '최은순 무혐의'",
            "[주간 뉴스타파] '의정'과 '사익' 사이... 김남국, 조명희, 최영희",
            "[히든머니 프로젝트] “대정부 영업 활동”... 조명희 의원의 내 회사 챙기기",
            "[히든머니 프로젝트] 최영희, 국회법 어기고 일가족 위한 법안 발의",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
          pressLogoAlt: "한국경제",
          lastEditted: "05월 23일 22:37 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9022%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
            mainArticleTitle:
              "\"삼성·현대차 품은 유일한 도시\"…성남 제친 '화성'",
          },
          subArticles: [
            "\"마술쇼 보는 줄\"…현대차·기아의 도어 '신기술'",
            "절대 강자 '네이버'마저…이대로 가다간 '초비상'",
            "'미친 가성비' 치킨 곱빼기 등장…\"오히려 좋아\"",
            '"조용한 승차감에 반했다"…5060 열광한 일본車',
            "'1000억 물려준다' 유언장이…무효된 사연은",
            '"불륜하지 맙시다"…내연녀 가게 앞 시위, 결국',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/013.png",
          pressLogoAlt: "연합인포맥스",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9133%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
            mainArticleTitle:
              '尹대통령, WTO 사무총장 접견…"함께 디지털 무역규범 정립"',
          },
          subArticles: [
            '배런스 "부채한도 협상 실패, 양당 모두가 지는 게임"',
            '尹대통령 "디리스킹은 특정국 의존 줄이는 공급망 다변화"',
            "교보생명·카카오페이손보, 악사손보 공동인수…인수가 3천500억",
            'KB증권 "불법 자전거래 아냐…손실 덮을 목적 아닌 시장 유동성 공급"',
            "화이자, 비만 치료제 체중 절감 효과…주가 4%↑",
            '"G7 중국 고립, 불가능하고 위험…미중 경제 분리 고통"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
          pressLogoAlt: "미디어오늘",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9029%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
            mainArticleTitle:
              "고 양회동 유서 감정 결과 ‘같은 필적’…“조선일보 오보 인정하고 사과해야”",
          },
          subArticles: [
            "서울신문, 한겨레·경향과 멀어지고 조선·중앙과 가까워졌다",
            "신문·방송에 넘쳐나는 ‘흐림처리’ 문제 없나",
            "제평위 사실상 해체에 인터넷신문협회 “정치권, 정략적 이용 말라”",
            "‘호반 인수 저지’ 서울신문 조합장이 퇴사하며 남긴 말",
            "[영상] 박성중 “국정감사 위증으로 한상혁 위원장 고발하라”",
            'MBC‧방문진 "목표는 MBC 장악…독립성 침해" 감사원에 법적 대응',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
          pressLogoAlt: "인민망",
          lastEditted: "05월 23일 18:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9118%2F195235_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
            mainArticleTitle:
              "시진핑 주석, 중앙아 5개국 정상과 함께 6그루 석류나무 심어",
          },
          subArticles: [
            "中 1~4월 유럽행 화물열차 운행 5611편, 전년比 17% 증가",
            "中 외교부, ‘제76차 세계보건총회 타이완 참석 거부’ 관련 입장 발표",
            "[포토] 고도(古都) 시안의 문화 상징물, 진시황 병마용",
            "산시 윈청, ‘야간 경제’로 활력이 넘치는 도시",
            "中 저장, 풍성한 국내외 먹거리 축제 “미식의 향연”",
            "[시진핑 주석이 주고받은 외교 선물] 시진핑 주석이 받은 훈장…모두가 ‘최고의 영예’ 상징",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174430433.png",
          pressLogoAlt: "서울와이어",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9360%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
            mainArticleTitle:
              "원재료값 내렸는데, 올린 가격은 그대로… 식품사 상술에 소비자만 '독박'",
          },
          subArticles: [
            '윤 대통령, 민노총 집회 정조준..."도로점거 등 불법시위 용납않겠다"',
            "명품족에도 등급… 휴무일에 문 연 롯데백화점, 'VIP 행사' 인기",
            '금융위‧금감원‧거래소‧남부지검, "주가조작 비상대응체계 가동"',
            "두 차례 탈옥, 강도살인범 신창원… 교도소서 극단선택 시도",
            "미다스의 손 '배터리아저씨' 박순혁 활동중단 선언… 왜?",
            '서울 사대문 도심개발 숨통 트나… 오세훈 "문화재옆 고층 가능"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png",
          pressLogoAlt: "데일리임팩트",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9234%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
            mainArticleTitle:
              "사회공헌 인색? 인뱅이 달라졌다...취약계층 위한 행보 ‘눈길‘",
          },
          subArticles: [
            "IRA 한파에 현대차그룹, 미국 영업 틀 바꾼다",
            'MZ 40% "환경 무시하는 기업 그만 둔다"-딜로이트 조사',
            "금융당국·검찰, '불공정거래 세력과 전쟁' 나선다",
            "‘요지부동’ 5%대 기업대출 금리…은행권 ‘부메랑’ 될까",
            "'주판알 튕겨본들..' 불확실성 커진 K칩",
            "'동양의 지중해' 남해안에 관광용 UAM 뜬다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
          pressLogoAlt: "문화일보",
          lastEditted: "05월 23일 22:34 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9004%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
            mainArticleTitle:
              "민주당 또 성비위…‘동료 女의원 성추행 의혹’ 부천시의원 탈당",
          },
          subArticles: [
            "[단독]‘현직 순경, 미성년자 성관계’ 보고받은 경찰청장, 성비위 첫 ‘특별경보’ 발령",
            "최태원 회장 이혼소송에 가세한 SK 계열사…‘노소영 미술관 나가라’",
            "김건희 “한국은 진실로 매력적인 나라”...이부진 “김 여사 노력에 큰 감명”",
            "[단독]심형탁, 누명 벗었다…5억 소송 ‘무죄’·사기방조 ‘무혐의’",
            "60도 독주 7병 마시는 장면 생중계 12시간만에 사망",
            "스피어스, 톱스타 불륜 폭로 왜?…“좋은 사람 없었다”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
          pressLogoAlt: "소비자가만드는신문",
          lastEditted: "05월 23일 07:37 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9196%2F074128_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
            mainArticleTitle:
              "하수구 역류해 들이치고, 비오면 천장 누수...아파트 하자 너무해",
          },
          subArticles: [
            "고객센터서 ‘보험금 나온다’ 안내했는데, '지급 거절'...분쟁 다발",
            "은행 공모펀드 증가세로 반전...KB국민 14조 원 '최고'",
            "[민원평가대상-휴대전화] 삼성전자, 상담원 품질 향상 노력",
            "[민원평가대상-가구] 시몬스, '직배송 시스템' 운영 소비자 호응",
            "삼성·LG·SK그룹, 미국 IRA '수혜' 기대감...'수혜 제외' 현대차",
            "출범 2년 한화생명금융서비스 첫 흑자 내며 대형GA로 순항",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
          pressLogoAlt: "오마이뉴스",
          lastEditted: "05월 23일 21:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9030%2F214115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
            mainArticleTitle:
              "'오염수 방류'가 믿기지 않는 울산 어민들 \"설마 그러겠냐\"",
          },
          subArticles: [
            "정치인도, 시민도 \"그립습니다\"... 윤 대통령 조화에 '치워달라' 항의도",
            "생리대에서 점자 표기를 본 적 있나요?",
            "'오락가락' 유동규, '건강' 이유로 불출석...늘어지는 대장동 공판",
            "위령비 공동 참배한 기시다 총리의 수상한 결정",
            "사실상 해체→전국대회 첫 승, 바닷마을 농구부의 반전드라마",
            '500만원짜리 작품 깬 아이 엄마 "밤새 복원하다니, 큰 가르침"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/963.png",
          pressLogoAlt: "에너지경제",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9188%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
            mainArticleTitle: "‘태풍’ 송·이·김, 野 180→167 사이 무슨 일이",
          },
          subArticles: [
            "미·중 갈등에 韓 '폭풍의 눈'...'제2의 사드보복' 우려",
            "美 IRA 수혜는 어디로…태양광·풍력株 지지부진",
            '모텔서 "직장동료 숨졌다" 신고, 알고보니 성매매 댓가 가로챈 20대',
            "우리 애도 혹시? ADHD 징후 ‘이 행동’ 살펴봐야",
            '"아빠도 18살 할래" 아들 피 1L씩 수혈, 美 40대 백만장자 실화',
            "故노무현 14주기에도 ‘아전인수’...여야 메시지 어땠나",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
          pressLogoAlt: "매일경제",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9016%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
            mainArticleTitle:
              "美 펜타곤이 쾅쾅쾅…'가짜 사진' 한장에 멀미난 증시",
          },
          subArticles: [
            "[속보] 누리호 발사관리위 “24일 발사 확정, 특이사항 없어”",
            "“월급 197만원 남짓…이 월급으로 결혼이라도 하면”",
            "몸값 오를거 같은데?…대학 축제에 매출 급증한 이 곳",
            "'무료 홍콩·10만원 일본﻿·반값 한국'…여행가의 유혹",
            "609명 채점전 답안지 파쇄…국가자격시험 '황당 실수'",
            "“韓서 명품백은 ‘이것’” 엔데믹 보복 소비에 외신도 주목",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
          pressLogoAlt: "경향신문",
          lastEditted: "05월 23일 22:29 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9001%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
            mainArticleTitle:
              '"6개월 차 사무직 내 아들, 왜 지게차를 몰다 숨져야 했나"',
          },
          subArticles: [
            "집값 상승기 부동산 투자로 수십억 번 국회의원들",
            "중국 “한국에 엄정 입장 표명, 중·한관계 문제점 인식해야”",
            "러시아 “벨고로드 교전 종료…반체체 단체 70명 사살” 주장",
            "한국 시찰단 오니 속내 드러낸 일본 “후쿠시마 수산물도 수입 재개를”",
            "사우디 첫 여성 우주인 탄생…빈살만의 ‘개혁 군주’ 이미지 뒤 그림자도 여전",
            "탄핵심판 나온 행안부 재난담당자 “이태원 참사 때 조치 다했다” 장관 감싸기",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/816.png",
          pressLogoAlt: "시사오늘",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9229%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
            mainArticleTitle:
              "네이버, 웹툰 작가 그림 ‘AI 학습’ 활용…법 사각지대 놓인 ‘저작권’",
          },
          subArticles: [
            "‘젊은 SUV’ 르노 XM3…1인 가구·디지털 세대 입맛 노린다",
            "신한투자증권, 초 개인화된 맞춤형 서비스로 투자자 잡기 나서…시장점유율 6% 목표",
            "‘한화오션’ 출범…권혁웅 대표 “글로벌 기업으로 육성”",
            "황교안 “국정원 보안 해킹 점검 받겠다는 선관위, 진정성 의문” [현장에서] ",
            "학교폭력 해법의 진일보, ‘학폭법’에 있다 [특별기고]",
            "딱 걸린 ‘가난 코스프레’ [만평오늘]",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/972.png",
          pressLogoAlt: "PD저널",
          lastEditted: "05월 23일 19:09 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9199%2F191250_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
            mainArticleTitle:
              "방문진 국민감사에 MBC 사장 특별감사 자료까지 요청한 감사원",
          },
          subArticles: [
            '세월호 보도 권고 보고서 쓴 김성수 기자 "아픈 지적한 취지 봐줬으면"',
            '한상혁 방통위원장 면직 수순…"공영방송 장악 시나리오 빨라질 것"',
            "‘포털 때리기 부담 느꼈나’…제평위 8기 출범 앞두고 활동 중단",
            "넷플릭스 광고요금제 기대 이상 선전...국내 OTT 선택은",
            "방심위, '우울증 갤러리' 차단 않기로...'자율규제 강화' 권고",
            "요즘 예능 대세, 시즌제 아니면 스핀오프",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
          pressLogoAlt: "동아일보",
          lastEditted: "05월 23일 21:56 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9003%2F215944_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
            mainArticleTitle:
              "오염수 시찰단 “보려 한 설비 다 봤다”…日 “검증 아냐” 선긋기",
          },
          subArticles: [
            "尹 “정부, 기업인에 열려있어…자신있게 세계시장 뛰어들라”",
            "왜 여권에서 한동훈 불출마론이 나오는가",
            "‘싸가지 없는 보수?’…이준석, 내년 총선 넘어 대선까지?",
            "“공산주의 미화 안돼”…‘조선공산당 표석’ 절도범, 정체 알고보니",
            "“경찰대, 인재 유치위해 존속” vs “로스쿨 육성학교 오명”",
            "체납 세금 안내려고 로또 1등 당첨금까지 빼돌린 철면피들",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13728808.png",
          pressLogoAlt: "프라임경제",
          lastEditted: "05월 23일 19:00 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9239%2F190432_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "롯데손보·롯데카드, 연내 매각설 수면 위…",
            mainArticleTitle: "롯데손보·롯데카드, 연내 매각설 수면 위…",
          },
          subArticles: [
            "'직원 사망' LGD, 독립 대책위 꾸린다",
            '[현장] "피부과 안 부럽다" LG프라엘 더마쎄라 팝업 가보니',
            "[오늘 뭐 먹지] 일동후디스·파리바게뜨·KFC",
            "[기업해부] 엔씨소프트① 리니지에 울고 웃는 '게임 명가'",
            "KB證, 하나증권과 '불법 자전거래' 의혹 전면 부인",
            "국내은행 3월말 연체율 0.33%…전년比 0.11%p↑",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205818702.png",
          pressLogoAlt: "뉴스클레임",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9359%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
            mainArticleTitle:
              "의사 구인난에 연봉 4억대 제시… 중소병의원 노동자 임금은",
          },
          subArticles: [
            "[기자수첩] 신축 아파트 ‘인분’",
            '윤관석 "檢 짜맞추기 수사에 맞서 결백·억울함 밝힐 것"',
            "어린이 프로바이오틱스인데 첨가물 함량은 성인 기준?",
            "유아인, 잘 나가던 믿고 보는 배우의 추락[영상]",
            '"5월인데 벌써 덥다"… 유통가 여름 준비 분주',
            '현업언론단체 "한상혁 방통위원장 면직 청문회 규탄" 방송장악 의혹제기[영상]',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/913.png",
          pressLogoAlt: "뉴스토마토",
          lastEditted: "05월 23일 22:37 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9121%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "대통령의 '품격'",
            mainArticleTitle: "대통령의 '품격'",
          },
          subArticles: [
            "대결의 정치, 노무현의 교훈",
            "주담대 잔액 역대 최대…2분기 가계부채 '꿈틀'",
            "'면직 기로' 한상혁 위원장 \"헌법적 가치 침해\"…여권은 위증죄까지 꺼내",
            "산인공 황당실수에 수험생 '부글부글'…공정성 논란도 '불가피'",
            "다시 노란 물결로…내가 기억하는 대통령 노무현",
            "시간당 임금 올랐지만…정규직·비정규직 임금격차 심화",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/120.png",
          pressLogoAlt: "EBN",
          lastEditted: "05월 23일 20:56 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9143%2F210002_001.jpeg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
            mainArticleTitle:
              "포스코, 정비 자회사 '양질의 일자리' 창출…지역 상생 박차",
          },
          subArticles: [
            "[르포] 시계로 출발한 스와호수의 성공신화…'엡손' 기념관을 가다",
            "iM택시·타다, 합병 임박설 '솔솔'...카카오T 위협 '시너지'",
            "[단독]‘대우조선 흔적 지우기’ 한화오션, 핵심 임원 28명 계약해지",
            '전세제도 폐지론, 갑론을박 "기존 제도 없애긴 힘들어"',
            "'수주 드라이브 건다'…한국조선해양, 올해도 200억달러 돌파한다",
            "아시아나항공, 빚만 쌓여간다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/975.png",
          pressLogoAlt: "시사저널이코노미",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9195%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
            mainArticleTitle:
              "CJ바이오사이언스 650억 유상증자···밑 빠진 독에 물 붓기 우려 ‘시끌’",
          },
          subArticles: [
            "[영상] “보고 또 보자”···전세사기, 아는 만큼 피한다",
            "한국MSD 구조조정 사태, 勞使 정중동···정리해고·잔류 희망자 이슈 전망",
            "[영상] 업스테이지, 아숙업 앞세워 ‘AI 대중화’ 주도",
            "카드론 잔액, 한달 새 4000억 ‘껑충’···건전성 부담 커지는 카드업계",
            "포화상태 이른 버거, 美 시장은 롯데리아 돌파구 될까",
            "[시승기] 한층 고급스러워진 렉스턴 ‘아레나·쿨멘’···평일엔 도심, 주중엔 산천으로",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/961.png",
          pressLogoAlt: "메트로신문",
          lastEditted: "05월 23일 18:53 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9186%2F190007_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
            mainArticleTitle:
              "채점 안한 국가자격시험 609명 답안지 파기...산업인력공단 '황당 사고'",
          },
          subArticles: [
            "김건희 \"'K-관광 협력단' 출범식 축하…韓 매력 알리는 데 최선\"",
            "고팍스 변경신고 지지부진…투자자 보호 뒷전",
            "서학불개미, 3배 추종 ETF 인기...반도체주·기술주 하락 배팅까지",
            '부동산 시장 변화? 송파구 잠실일대 "집값 상승 이어질 것"',
            "누리호 3차 발사 하루 앞으로, 오후 6시24분경 발사 예정",
            '산은, 대우조선해양 매각절차 종결…"종합 방산·에너지 기업으로 성장할 것"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
          pressLogoAlt: "이투데이",
          lastEditted: "05월 23일 21:56 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9114%2F220209_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
            mainArticleTitle:
              "尹 “정부가 중기·소상공인 뒷받침…정의로운 1차 분배”",
          },
          subArticles: [
            "“내일 민간 우주기업 시대 열린다”…첫 실전발사 '누리호' 18분58초 카운트다운",
            "차 부품 업계의 미래차 전환에 14.3조원 투입…차·부품수출 최대 800억달러 목표",
            '尹대통령, WTO 사무총장 접견…"새 무역규범 위해 노력해야"',
            "방통위 ‘뉴스제평위’ 법정기구화 연내 입법 추진",
            "“사생활이라 확인 불가”…긍정도 부정도 아닌 요즘 열애설",
            "학습 효과 없는 치킨업계…왜 자꾸 가격 올리나",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
          pressLogoAlt: "아이뉴스24",
          lastEditted: "05월 23일 22:33 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9025%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
            mainArticleTitle:
              '누리호, 발사대 설치 작업 종료…"24일 오후 6시 24분 발사"',
          },
          subArticles: [
            "韓-EU, 양자·우주 등 전략기술 협력 확대 논의",
            "'신사업 가속' 위메이드플레이, 자회사 3사와 통합 채용",
            '[현장] 벤자민 로 ASM "韓은 핵심거점…투자지속 확대"',
            "'8만전자' 갈까?…반도체 경기 바닥론에 커지는 기대감",
            '이재명 "盧 꿈꿨던 역사의 진보 후퇴"…김기현 "전 대통령 흑역사 반복 안돼"',
            "[종합] \"中에 뺏긴 디스플레이 1위 되찾자\"…삼성·LG, '초격차' 기술로 압도",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
          pressLogoAlt: "M이코노미뉴스",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9184%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
            mainArticleTitle:
              "화물연대 “합의파기 규탄”···한일시멘트 “그런사실 없어”",
          },
          subArticles: [
            "‘천년왕국’의 서막인가, 암울한 미래 ‘디스토피아’의 흉조인가",
            "“470억 손배소 취하하라”···대우조선 노동자의 절박한 외침",
            '국회 진입 저지당한 전세사기 피해자들 "빚에 빚 더하기로 세입자에 책임 전가"',
            "6月 전국 4만 가구 집들이...수도권이 60%",
            "尹, 지난주 민노총 시위 언급하며 “공공질서 무너뜨려”",
            '[M포토] 무더위 속 외침 "발달장애인 지원체계 마련하라"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
          pressLogoAlt: "서울경제",
          lastEditted: "05월 23일 22:16 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9018%2F222326_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
            mainArticleTitle: "'대기업 쏠림' 노조, 임금 격차 더 키웠다",
          },
          subArticles: [
            '尹 "글로벌 생태계간 경쟁…대·중기 원팀돼야"',
            "'평당 1.2억' 베일벗은 용산 유엔사부지 아파트 분양",
            '시장감시 4대 기관장 "주가조작 혐의 계좌 동결·무관용 처벌"',
            "위성 작동해야 최종 성공…첫 실전 '운명의 19분'",
            "한화 가세한 조선 '빅3' 인력확보 진검승부",
            "하이브, 中 텐센트뮤직과 유통 계약…'문화 만리장성' 넘는다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
          pressLogoAlt: "프레시안",
          lastEditted: "05월 23일 22:17 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9031%2F222326_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
            mainArticleTitle:
              "계속되는 무차별 여성폭행 … 여성은 '때리고 싶고, 때릴 수 있는' 존재?",
          },
          subArticles: [
            "K-드라마 전세계 열풍 배경에는 '이것'이 있었다",
            '21대 국회 3년간 국회의원 재산 7.3억 증가…11명은 "부동산투기 의혹"',
            '故 노무현 14주기 추도식 …국회의장 "정치개혁 유업 이루겠다"',
            "韓시찰단 방문에 日 기대감에 '들썩'…\"후쿠시마 수산물 수입 부탁\" 노골적 요구",
            '이부진·차은우와 함께 선 김건희 "한국 관광, 경제 한단계 도약시킬 수 있다"',
            "경찰, 김건희 '쥴리설' 제기한 기자들 무더기 검찰 송치",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
          pressLogoAlt: "데일리한국",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9036%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
            mainArticleTitle:
              "尹, “기업들 과감하게 세계시장 뛰어들어야…정부가 지원”",
          },
          subArticles: [
            "엔데믹에 웨딩 수요 폭발…가격 올라도 예약은 '하늘의 별따기'",
            "닻 올린 한화오션, '저가수주 해소' 시동거나",
            '정부, 車 부품산업에 14조원 투입…"미래차 전환 적극 대응"',
            "경제6단체, 노조법 개정안 본회의 상정 중단 촉구…“산업현장 대혼란”",
            "현대차∙기아, 미닫이·여닫이 전환되는 트럭 적재함 도어 개발",
            "CJ대한통운 택배기사, 목욕탕서 심폐소생술로 생명 구해",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/954.png",
          pressLogoAlt: "CNB뉴스",
          lastEditted: "05월 23일 18:05 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9178%2F181252_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
            mainArticleTitle:
              "[연중기획-기업과나눔(94)] 생명존중 한길로…GC녹십자의 56년 ‘동행’",
          },
          subArticles: [
            "[단독] 한전도 LH도 “나몰라라”…산으로 간 ‘송주법 지원사업’",
            "[1분기 핫실적③] ‘동반부진’ 아모레·LG생건…반등은 언제쯤?",
            "[테크크] 때 이른 더위에 전기료 인상까지…가전업계 “에너지 효율을 높여라”",
            "[쿨韓정치] 박정희·노태우·YS·DJ의 아들들이 만난 이유",
            "'역사는 더디다, 그러나 진보한다’…盧 서거 14주기 추도식",
            "[기자수첩] 모두의 주의의무가 요구되는 때",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
          pressLogoAlt: "아주경제",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9124%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
            mainArticleTitle: "尹, 10대 그룹 총수‧MZ기업인과 '치맥 소통'",
          },
          subArticles: [
            "정부, 포털 뉴스 제평위 법정기구화 추진...'언론 평가 투명하게 공개'",
            "[노무현 14주기] 권양숙 여사 '독도는 대한민국 고유 영토'",
            "​샤넬, 두 달 만에 또 가격 올렸다...'클래식 플립백 라지' 1570만원",
            "대면 영업 시도한 카카오뱅크, 금융당국 움직이자 꼬리 내렸다",
            "[불법 노조와의 전쟁] 尹 '민노총 1박2일 집회 국민 용납 어려워'",
            "''중국판 보르도' 전 세계에 홍보' 6월 中닝샤 국제 와인 박람회 개최",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
          pressLogoAlt: "뉴데일리",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9058%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
            mainArticleTitle:
              "진보당에도, 전교조에도 간첩이 있었다… 진보당 前대표·전교조 간부 압수수색",
          },
          subArticles: [
            '文정부 땐 "후쿠시마 오염수 문제없다" vs 尹정부 땐 "문제많다"… 민주당 딴소리',
            '尹 "민노총 집회, 국민 자유·기본권 침해… 불법 행위 용납 못해"',
            "\"징용 배상금 받으면 20% 내라\"… 시민단체, 징용 피해자들과 '약정'",
            "선관위 간부 아빠, 경력직 채용 때 본인 자녀 '셀프 승인' 파문",
            '이복현 금감원장 "불공정 세력 척결…거취 걸겠다"',
            "\"1200조 우크라 재건시장 잡아라\"…K-건설 '원전' 승부수",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/932.png",
          pressLogoAlt: "CEO스코어데일리",
          lastEditted: "05월 23일 18:05 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9152%2F181252_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
            mainArticleTitle:
              "현대차, 고성능 ‘N’ 6년간 10만대 팔았다…‘아이오닉5 N’ 출격",
          },
          subArticles: [
            "“MZ세대, 알뜰폰에 못 내줘”…‘청년 고객’ 잡기 나선 통신 3사",
            "증권사 MTS 개편 러시…신한투자 “초개인화 집중, MAU 업계 1위 300만 도전”",
            "[점프UP 한국 증시] ①‘주주가치 제고’ 이상과 현실…여전히 갈길 먼 배당성향",
            "카카오모빌리티, ‘독과점 논란’ 굴레 털고 해외로 간다",
            "‘60일 레이스’ 곧 마무리…임종룡과 함께할 우리은행장, ‘현장 영업력’이 명운 갈라",
            "중국, 미 마이크론 제재…삼성·SK, 반도체 추가 공급 길 열리나",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
          pressLogoAlt: "세계일보",
          lastEditted: "05월 23일 20:37 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9006%2F204123_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
            mainArticleTitle:
              "609명 답안지 금고 아닌 창고에… 공단은 30일간 몰랐다",
          },
          subArticles: [
            "尹 “민노총 불법집회, 국민들이 용납 못해”",
            "허술한 법망에… ‘상장피’ 판치는 코인거래소",
            "아이 버리고 7년간 아동수당 챙긴 미혼모",
            "'성추행 의혹' 부천시의원 민주당 탈당…\"당 조사 계속\"",
            "봉하마을 총출동한 여야…외연 확장·통합 과시 '동상이몽'",
            "독자기술로 실용위성 수송…누리호, 첫 임무 안고 우주로",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/914.png",
          pressLogoAlt: "뉴스핌",
          lastEditted: "05월 23일 22:40 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9125%2F224115_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
            mainArticleTitle:
              "[현장+] '노란 물결' 봉하마을...14주기 추도식에 울린 노무현 정신",
          },
          subArticles: [
            "'생성형 AI가 여는 새로운 미래' 뉴스핌 AI포럼 개최...\"위기 아닌 기회, 경쟁력 확보가 중요\"",
            "정부·민간 자동차 부품업계 14.3조 공급…자율주행·친환경 R&D 2조 투입",
            "[속보] 나로우주센터 소나기…누리호 발사대 작업 지연 예상",
            "박주환, 이건희 이을 미술품 기증…미술관 기부 문화 정착될까",
            '[인터뷰] 서울문화재단 이창기 대표 "서울의 사계절 축제, 시민에 더 다가갈 것"',
            "[영상] '생성형 AI가 여는 새로운 미래는?'...2023 뉴스핌 AI 포럼 성료",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/801.png",
          pressLogoAlt: "위키리크스한국",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9218%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
            mainArticleTitle:
              '윤 대통령 "민노총, 1박2일 도심마비 집회...국민이 용납 어려워“',
          },
          subArticles: [
            "하늘 향해 우뚝 솟은 누리호, 변수 체크하며 내일 발사 준비 착착",
            "국정원, 전교조 강원지부 압수수색...“北지하조직 '이사회' 혐의\"",
            "[WikiLeaks] The forever war on Julian Assange...threatening the freedom of thought globally",
            "미 중소은행 위기, 대형은행엔 기회... JP모건 '퍼스트' 인수로 이자수익 4조원 증가 기대",
            "범부처의료기기사업단 10대 과제..“플랫폼 기반 전주기 지원“",
            "청와대-백악관 X파일(143) 김대중 햇볕정책에 대한 미국의 불안한 시선… 청와대 “리처드 닉슨의 데탕트 정책 계승” 주장",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
          pressLogoAlt: "머니투데이",
          lastEditted: "05월 23일 22:35 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9017%2F223816_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
            mainArticleTitle:
              '"한 달 한 번, 7년째 수혈" 고약한 질병 고통 줄여줄 약 나왔는데...',
          },
          subArticles: [
            "'세계최초' 클릭 몇 번 싼 대출로 갈아탄다…연 12조 머니무브",
            "尹대통령 \"77%, 이게 진정한 지지율\"…기업인들 '박수' 왜?",
            '韓도 당했던 日의 반도체 수출규제…"中, 美제재보다 두려워해"',
            "직장 잃은 '밧데리아저씨' 입 열었다…\"돈 벌어놓고 나만 피해\"",
            "이부진의 '특별한 요청' 수락한 김건희 여사…\"한국 매력 알리겠다\"",
            "'암 치료 생수' 속아 넘어간 노인 7200명…수백억 뜯겼다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png",
          pressLogoAlt: "비즈워치",
          lastEditted: "05월 23일 16:44 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9167%2F165153_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
            mainArticleTitle:
              "'에너지효율 1등급+초고효율' 전기료 악재 만난 가전 마케팅",
          },
          subArticles: [
            "삼성전자, 꿀잠 연구하는 이유는",
            "'11번째 청약이라고?' 은평뉴타운 민간임대 '깜깜이 무순위'",
            "네이버 이어 카카오도 사우디 '러브콜'…위상 높이는 'K-IT'",
            "P2E업체 잇따라 소환…마브렉스 추가 내부조사",
            "[교통시대]정부, SR에 출자 추진…민영화 논란은 왜?",
            "'급전' 수요 몰렸다…현금서비스 잔액 2달 연속 ↑",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
          pressLogoAlt: "시사위크",
          lastEditted: "05월 23일 19:03 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9180%2F191028_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
            mainArticleTitle: "‘팬덤 정치 결별’ 요구로 쪼개진 민주당",
          },
          subArticles: [
            "박지만 회장의 EG ‘빨간불 실적’ 올해는?",
            "[윤석열 지지율] 부정평가, 10주 만에 50%대로 하락",
            "전세 기간 중 세입자 사망, 전세금반환 시기는?",
            "불법판매에 해킹… 대부중개플랫폼서 개인정보 줄줄 샜다",
            "G7 성과 띄우는 국민의힘",
            "민주당-국민의힘, 10주 만에 오차범위 내 접전",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
          pressLogoAlt: "서울신문",
          lastEditted: "05월 23일 18:33 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9005%2F183810_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
            mainArticleTitle: "“범인 찍혀도 못 찾아요”…화질 불량 지하철 CCTV",
          },
          subArticles: [
            "尹 “민주노총 집회 국민 용납 어려워…엄정 법집행”",
            "심상찮은 北…동창리 새 위성발사대 완공 앞둬",
            "시찰단, K4 탱크·ALPS 점검…日은 ‘시찰’ 강조",
            "23일 누리호 3차 발사…진짜 위성 8기 싣고 첫 실전 우주택배",
            "채점도 안한 국가자격시험 답안지 파쇄…609명 재시험 본다",
            "고지서·홈피서 발견한 ‘내 얼굴’…작은 단서로 가족 찾았습니다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png",
          pressLogoAlt: "비즈니스포스트",
          lastEditted: "05월 23일 17:57 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9166%2F180218_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
            mainArticleTitle:
              "'스타트업 발굴' 롯데벤처스재팬 1년, 신동빈 일본서 '제과기업' 한계 벗는다",
          },
          subArticles: [
            "[다시뛰는 K금융 베트남①] 그래도 베트남, ‘포스트 차이나’ 수식어는 유효하다",
            "콜레라 세계 확산 2년 만에 백신 10년치 소모, 유바이오로직스에 의존 더 커져",
            '"TSMC 2나노 파운드리 고객 줄 섰다", 대만언론 삼성전자 추격에 위기감?',
            "삼성엔지니어링 상반기 아쉬운 해외수주, 남궁홍 하반기 중동에서 승부",
            "넥슨게임즈 중화권에서 고성장 드라이브, 박용현 ‘히트2’로 실적 점프 기대",
            "신한투자 MTS 1년 만에 대폭 손질, 김상태 홀로서기 첫해 리테일도 힘준다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/809.png",
          pressLogoAlt: "미디어펜",
          lastEditted: "05월 23일 17:21 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9224%2F172228_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
            mainArticleTitle: "예대금리차 줄고 연체 늘고…은행권 위기 고조",
          },
          subArticles: [
            "수출·경쟁력 8개월째 하락…한국경제 '시계제로'",
            "한미일 정상, 경제안보·대북공조 더 강화 '재확인'",
            "언론 지형 바꾼 네이버, 순기능 지속돼야",
            'KAI, FA-50M 18대 수출 최종 계약 체결…"추가 계약 기대"',
            "은행권 수신경쟁 재등장…5%대 적금 내놔",
            "전세계 6000만 명 사용 ‘삼성 헬스’, 수면 혁신 현재진행형",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
          pressLogoAlt: "나우뉴스",
          lastEditted: "05월 23일 17:01 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9165%2F171039_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
            mainArticleTitle:
              "美 ‘최후의 병기’도 피한다…이란 새 ‘지하 핵시설’ 위성으로 확인",
          },
          subArticles: [
            "대만 태권도 선수, 韓 대회 시상대서 中 오성기 ‘번쩍’ 논란 [대만은 지금]",
            "“18세 몸 갖겠다”며 17세 아들 ‘피’까지 수혈받은 美 억만장자의 사연",
            "[포착] 내부 붕괴 시작?…러 본토서 교전 발생, 공격 주체는 ‘러시아인’ 반전",
            "주위를 다 집어삼킬듯…역대 가장 생생한 ‘태양 흑점’ 포착 [우주를 보다]",
            "대만 마지막 위안부 할머니 별세…“일본에 사죄·배상 계속 요구할 것” [대만은 지금]",
            "“우크라에 F-16 공급 노력 우선…몇 달 내 시작” 미 국무부",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113848865.png",
          pressLogoAlt: "정책브리핑",
          lastEditted: "05월 23일 22:12 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9367%2F221553_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
            mainArticleTitle:
              "민·관, 자동차 부품산업에 14조 지원…“올해 수출 800억 달러 달성 추진”",
          },
          subArticles: [
            "“공공질서 무너뜨린 민노총의 집회 행태, 국민이 용납하기 어려울 것”",
            "지방시대 실현 위한 분권 강화…지역 경제·산업 회복 돕는다",
            "한국형 녹색채권, 올해 3조 9000억원 발행…온실가스 373만톤 감축",
            "‘올 상반기 내 재생원료 사용한 식품용기 출시’…연간 480톤 온실가스 저감",
            "문체부, ‘경이로운 소문2’ 등 K-드라마 후반작업 지원…245억 원 투입",
            "남는 쌀로 술·사료 만든다…농식품부, 정부양곡 14만톤 특별 처분",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png",
          pressLogoAlt: "미주한국일보",
          lastEditted: "05월 23일 11:39 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9231%2F114336_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
            mainArticleTitle: "부채한도 세번째 협상 불발…공화당 “생산적 논의”",
          },
          subArticles: [
            "신분 도용사기 추적 웹사이트 사용 권고",
            "시카고 도심 한복판 우체국서 심야에 남성 20명 떼강도짓",
            "빌 게이츠 “미래 AI 개인 비서 개발 중요”…구글·아마존 겨냥?",
            "[사고] ‘한인사회 매스터스’ 골프 왕중왕 가린다",
            "“고추장 있었던 이유는”… ‘폭설고립’ 한국인 구한 美부부 대답은",
            "틱톡, 몬태나주 전면금지법 소송… “추측 토대로 위헌적 조치”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/804.png",
          pressLogoAlt: "데이터뉴스",
          lastEditted: "05월 23일 17:15 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9220%2F172228_001.png%22&type=nf312_208&service=navermain",
            thumbnailAlt: "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
            mainArticleTitle: "NH농협금융지주, 비은행 부문 '대박'…순익 58.8%↑",
          },
          subArticles: [
            "CU, GS25와 매출 격차 200억 원대로 좁혔다",
            "LG이노텍, 전장부문 다시 흑자…매출은 매년 새기록",
            "코스맥스, 부채비율 재상승…화장품 빅5 중 압도적 1위",
            "CJ ENM, 구창근(엔터)·윤상현(커머스) 대표 희비",
            "손지훈 체제 휴젤, 5년 만에 수익성 회복 이어 최고 실적 쓸까?",
            "카카오게임즈, 3년 만에 1분기 매출 줄었다",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
          pressLogoAlt: "초이스경제",
          lastEditted: "05월 23일 17:25 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9164%2F173124_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "중국, 미국에 화해 제스처?",
            mainArticleTitle: "중국, 미국에 화해 제스처?",
          },
          subArticles: [
            "日 대기업 임금인상률, 30년 만에 '최대'",
            "기관이 코스피 '견인'...2차전지 · 바이오주 '상승', 삼성전자 '소폭 하락'",
            '"SK에코플랜트, 친환경에너지 솔루션 기업 변신 중"...SK증권',
            "싼 게 비지떡?...'중국 국민車' 훙광 미니, 판매 급감",
            "코스닥...엘앤에프 · 이브이첨단소재 · 휴마시스 '껑충', 바이오니아 '하락'",
            "DL이앤씨 '장중 주가 강세'...한국투자증권 \"플랜트사업 주목\"",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
          pressLogoAlt: "이뉴스투데이",
          lastEditted: "05월 23일 21:32 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9189%2F213820_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
            mainArticleTitle:
              "[단독] 곳간 말라가는 두산건설, 미분양 여파에 ‘자본잠식’ 비상",
          },
          subArticles: [
            "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
            "조양래 한국타이어 명예회장 정신감정 초읽기···‘분쟁 2막’ 열리나",
            "[2023하반기전망] ③부동산 회복은 글쎄…미분양·고금리 부담 털어야",
            "리플, CBDC·스테이블코인 발행 지원 풀서비스 플랫폼 출시",
            "[2023하반기전망] ②수출회복 기지개···중국 거래 정상화 될까",
            "경상북도 칠곡군 동명면 25번 국도에서 대형 교통사고 발생",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
          pressLogoAlt: "한겨레",
          lastEditted: "05월 23일 22:05 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9009%2F221251_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
            mainArticleTitle: "정규직-비정규직 임금 격차, 4년 만에 다시 커졌다",
          },
          subArticles: [
            "[단독] 윤 대통령, 싱가포르식 ‘외국인 가사도우미’ 검토 지시",
            "민주, 비명계에 ‘악성 문자폭탄’ 강성당원 첫 제명",
            "‘엘니뇨=폭염?’ 한반도엔 더위 아니라 비 몰고 온다",
            "주4일제, 수요일 쉬면 어떨까?…“1년에 13개월치 성과”",
            "서울 온 중국 외교부, 대만 문제 관련 ‘강한 유감’ 밝혀",
            "윤, 건설노조 때릴 때도 ‘전 정부’ 탓…“불법 집회 방치한 결과”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/968.png",
          pressLogoAlt: "한국금융신문",
          lastEditted: "05월 23일 21:22 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9193%2F212834_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
            mainArticleTitle:
              "정유신 서강대 기술경영대학원장 “디지털 금융허브 추진 필요…규제자유특구 지정해야” [2023 한국금융미래포럼]",
          },
          subArticles: [
            '정유신 서강대 기술경영대학원장 "우리나라 노동경직성 등 금융허브 도약 한계 많아" [2023 한국금융미래포럼]',
            "김주현 금융위원장·김광수 은행연합회장·임종룡 우리금융 회장…금융권 CEO 디지털 대전환 논의 [2023 한국금융미래포럼]",
            "윤창현 의원 “금융·비금융 두터운 규제 얇아져…'금융서비스산업' 추진될 것”[2023 한국금융미래포럼]",
            '황보현우 하나금융지주 데이터본부장 "영업점 업무량 데이터를 통해 효율화" [2023 한국금융미래포럼]',
            "조영서 KB국민은행 디지털플랫폼 총괄 “금융사, 빅테크 대응 위해 플랫폼으로 진화” [2023 한국금융미래포럼]",
            "김주현 금융위원장 “新기술·금융상품 대응 소비자보호 장치 마련” [2023 한국금융미래포럼]",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
          pressLogoAlt: "이데일리",
          lastEditted: "05월 23일 22:05 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9020%2F221251_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
            mainArticleTitle:
              "프랑스 제치고 한국 '1위'…대기업도 실패한 日시장 뚫은 비결은?",
          },
          subArticles: [
            '"주가조작 못 잡아낸 이유는…" 거래소, 8개 종목 분석 마쳐',
            '“한국, 美전술핵 공유 원한다면 낡은 핵 저장시설부터 고쳐라"',
            "韓시찰단 오염수 점검 첫날에 日, 후쿠시마 수산물 수입 촉구",
            "'미술관 비워달라' SK, 노소영에 부동산 인도소송 제기",
            "아파트 주민의 만취 '묻지마 폭행'…경비원 안와골절 피해",
            '심형탁, 母 5억 빚 대신 안 갚는다…법원 "배상 책임 없어"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
          pressLogoAlt: "한국일보",
          lastEditted: "05월 23일 22:04 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9010%2F221251_001.gif%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
            mainArticleTitle:
              "'돈봉투 의혹' 의원 10여명 추가설 민주당 쇄신 시험대 오른다",
          },
          subArticles: [
            '기사시험 답안지 609장 파쇄… 산업인력공단 "재시험 기회 부여"',
            "러시아 본토서 허 찔린 푸틴... '우크라 지원' 반군에 공격당했다",
            "후쿠시마 시찰의 핵심... ALPS를 제대로 봐야 하는 이유",
            '노란 물결…노무현 14주기 "꺾이지 않는 마음 필요한 때"',
            "부천시의원 성추행 의혹 영상 보니...목 안고 등 부비부비",
            "\"'대전판 도가니 사건' 성폭행범, 수원서 초등학교 교사 돼\"",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
          pressLogoAlt: "중앙일보",
          lastEditted: "05월 23일 21:41 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9008%2F214835_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
            mainArticleTitle: "대기업·중기 500명 즐겼다…식탁 오른 맥주 정체",
          },
          subArticles: [
            "대북송금 안부수 실형…김성태,이화영 보지도 않았다",
            "씨 또 날아왔나…강남 한복판 마약 양귀비 80주 발견",
            "회춘에 미친 백만장자, 17살 아들 피까지 수혈받았다",
            "문제집 70% 베껴 시험 출제...강남 고교 결국 재시험",
            "70% 세일에 불티나게 팔린 패딩·모피…'철없는' 장사",
            '한밤 "180마리 달라"…굽네치킨 용산역점 대박난 사연',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/920.png",
          pressLogoAlt: "아시아투데이",
          lastEditted: "05월 23일 18:27 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9113%2F182856_001.jpeg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
            mainArticleTitle:
              '尹 "한미일 안보공조 업그레이드…첨단기술로 협력 확대”',
          },
          subArticles: [
            '고성국 "네이버·카카오 제평위 활동 중단, 국민의 승리"',
            "檢, '김남국 코인' 거래내역 분석…위믹스 증권성도 검토",
            "누리호 첫 실전발사 '운명의 19분'…위성 궤도 안착 관건",
            "檢, '민주당 돈봉투' 윤관석·이성만 주중 구속영장 검토",
            "20대도 발길 돌린 은행 무인점포…고령층엔 '무용지물'",
            "'IB통' 정영채, NH證 새 먹거리 'OCIO 시장' 정조준",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/123.png",
          pressLogoAlt: "조세일보",
          lastEditted: "05월 23일 19:01 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9040%2F190432_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
            mainArticleTitle:
              "로또 1등 되고도, 稅안내려 돈은 가족 계좌에…체납자 추적조사",
          },
          subArticles: [
            "“한은, 연내 기준금리 동결할 것…금융불안은 유동성 정책으로 대응”",
            '[여의도 이슈 브리핑]유승민 "尹 정부, 中 외교 나설 차례"',
            "[기고문] 세무사에게 종합소득세신고를 의뢰해야 하는 이유",
            "원·달러 환율, 5.4원 내린 1312.7원 마감…5거래일 연속 하락",
            "농기구로 살해 후 유기, 벼랑 끝 농촌마을 인력난",
            "②남느냐 떠나느냐…'김창기·강민수' 거취에 쏠린 눈",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/974.png",
          pressLogoAlt: "BBS NEWS",
          lastEditted: "05월 23일 21:28 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9198%2F213356_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
            mainArticleTitle:
              '시찰단, 후쿠시마 현장 점검...일본 "오염수 방류 이해 깊어지도록"',
          },
          subArticles: [
            "검찰, '돈봉투 의혹' 송영길 캠프 지역상황실장 압수수색",
            "[단독] 서울시 ‘365열린어린이집’ 휴일 지정 '종교편향' 논란",
            "'깡통전세' 100채로 전세·대출 사기…149억 가로챈 일당 검거",
            '尹 "디지털 무역규범 노력" WTO사무총장 "한, 디지털분야 환상적"',
            "대선 기간 '김남국 코인 거래' 검찰 수사선상에",
            "[누리호발사 D-1]누리호 발사대 기립...발사준비 순조로워",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
          pressLogoAlt: "조선일보",
          lastEditted: "05월 23일 22:29 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9007%2F223056_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
            mainArticleTitle: "원팀 외친 尹대통령, 58개 테이블 빠짐없이 돌았다",
          },
          subArticles: [
            "'이화영 대북송금' 문건엔 \"김정은에 50억 약속 보고\"",
            "4천억 배임 배상윤, 카지노서 수백억 도박·황제 도피",
            "中 한한령 재점화? 한류스타 정용화, 예능출연 취소",
            'MBC·방문진 "감사원 감사 못 받겠다" 소송',
            "한국, 말레이와 FA-50 18대 수출 최종계약…1조2천억",
            '"文 정부는 실패…연필 미스터리 알아야 규제 푼다"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
          pressLogoAlt: "아시아경제",
          lastEditted: "05월 23일 22:08 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9019%2F221251_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
            mainArticleTitle:
              '尹 "경제, 수출·투자유치에 달려…대·중소·벤처 원팀 중요"',
          },
          subArticles: [
            '불공정거래와 전쟁…"범죄자, 시장에 발 못 붙이게 할 것"',
            '후쿠시마 시찰단, 점검 첫 날 "보려고 계획한 설비 다 봤다"',
            '빌 게이츠 "미래 AI 개인 비서 개발 중요"',
            '김건희 여사 "한국에 대한 관심, 발길로 이어져야"',
            '文 입장에 환호·韓총리에 "내려가"…노무현 14주기 추도식',
            "외교부 “中, 네이버 현지 접속 차단? 유관 기관과 확인 중”",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
          pressLogoAlt: "톱데일리",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9245%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
            mainArticleTitle: "'흑자 전환' 이완신號 호텔롯데, IPO 완주할까",
          },
          subArticles: [
            "[신생 LCC 운항 4년] ① 플라이강원, 경영난 장기화에 존폐 위기",
            "[금융권 수장 교체] [우리은행] 상업 Vs.한일 누가될까",
            "AI 행동분석 기업 플레이태그, 40억 투자유치",
            '넷마블 마브렉스 "누구에게도 사전 정보 제공 사실 없다"',
            "'한 달 살기' 플랫폼 리브애니웨어, 50억 투자유치",
            "백영훈 넷마블 전 부사장, 스마일게이트메가포트 수장 낙점",
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/824.png",
          pressLogoAlt: "서울파이낸스",
          lastEditted: "05월 23일 22:30 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9243%2F223400_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
            mainArticleTitle: "가계대출 감소·고금리에···은행도 빚부터 갚는다",
          },
          subArticles: [
            "금통위 D-2일···3회 연속 기준금리 동결 '유력'",
            "대우조선 45년만에 '한화오션'으로 재출범···경영정상화 등 과제 산적",
            "여야, 전세사기 특별법 합의···최우선변제금 10년 무이자대출",
            "'금리 정점론'에 '변동이냐 고정이냐' 깊어지는 고민",
            "中, 美 반도체 제재에 마이크론 '판금' 맞불···韓반도체, '불똥튈라' 노심초사",
            'KB증권, 불법 자전거래 의혹 부정···"유동성 공급 위한 것일 뿐"',
          ],
        },
        {
          pressLogoSrc:
            "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png",
          pressLogoAlt: "일요신문",
          lastEditted: "05월 23일 16:33 직접 편집",
          mainArticle: {
            thumbnailSrc:
              "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2023%2F0523%2Farticle_img%2Fnew_main%2F9131%2F164029_001.jpg%22&type=nf312_208&service=navermain",
            thumbnailAlt:
              "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
            mainArticleTitle:
              "[전두환 비자금 단독추적⑤] 평사원 패스한 전두환 2세들 '천억대 사장님'",
          },
          subArticles: [
            "어린이집 '괴롭힘' 사건이 노무사 vs 행정사 갈등으로 번진 까닭",
            "하락세 주춤해졌지만…부동산 반등까지는 '산 넘어 산'",
            "‘직원 사망’ LG디스플레이, 대책위원회 구성…“명확히 진단할 것”",
            "경실련 “국회의원 평균 재산, 3년 새 7.3억 증가”",
            "채권전문가 89% “이번주 금통위 기준금리 동결”",
            '유승민 "윤석열 정부, 이제는 대중 외교 나설 차례"',
          ],
        },
      ],
    },
  },
};

