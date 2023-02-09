
import img1 from './image/first.jpg';
import img2 from './image/2.jpg';


const img = [
    {   id : 1, 
        image :  [img1] , 
        title : '사진1', 
        desc:  ['1번 사진입니다.' ]
    },
    {   id : 2, 
        image :  [img2] , 
        title : '사진2', 
        desc: [ '2번 사진입니다.' ]
    },
    {   id : 3, 
        image :  [img1, img2] , 
        title : '사진 모음', 
        desc: [ '1번 사진입니다.', '2번 사진입니다.' ]
    },
    {   id : 4, 
        image :  [null] , 
        title : '...', 
        desc: ['내용 추가!']
    }
]

export default img;