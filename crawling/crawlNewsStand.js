// 네이버 메인 화면에서 개발자도구 콘솔창에 아래 코드 전체를 입력 후 실행
// 결과값을 copy해서 json 파일로 만들어서 사용한다.

const newsStand = window['EAGER-DATA']['PC-MEDIA-WRAPPER'].blocks[0].blocks[0];

const categoryLists = newsStand.catePidList;
const newsStandBlocks = newsStand.blocks;

function getCategory(pid) {
  for (let key in categoryLists) {
    const cateList = categoryLists[key];

    if (cateList.includes(pid)) {
      switch (key) {
        case 'ct2':
          return '종합/경제';
        case 'ct3':
          return '방송/통신';
        case 'ct4':
          return 'IT';
        case 'ct5':
          return '영자지';
        case 'ct6':
          return '스포츠/연예';
        case 'ct7':
          return '매거진/전문지';
        case 'ct8':
          return '지역';
        default:
          console.log('해당하는 카테고리가 없습니다.');
      }
    }
  }
}

const newsStandData = [];

newsStandBlocks.forEach(block => {
  const pressBlock = {};
  const pressMaterials = block.materials;

  pressBlock.type = 'NEWSSTAND-PRESS-BLOCK';
  pressBlock.category = getCategory(block.pid);
  pressBlock.name = block.name;
  pressBlock.pid = block.pid;
  pressBlock.logoURL = block.logoLight.url;
  pressBlock.regDate = block.regDate;

  pressBlock.materials = [];

  pressMaterials.forEach(material => {
    const type = 'MATERIAL-NEWSSTAND-HEADLINE';
    const title = material.title;
    const imgURL = material.image ? material.image.url : null;
    const url = material.url;

    pressBlock.materials.push({ type: type, title: title, imgURL: imgURL, url: url });
  });

  newsStandData.push(pressBlock);
});

console.log(JSON.stringify(newsStandData));
