<h1>react.js, gradle, springboot 연동 방법</h1>

0. node js 설치

1. SpringProjectName/src/main/ 경로로 접근 후 react 설치
```batch
cd src/main
npx create-react-app frontend	# npx create-reeact {프로젝트명}
```

2. 만든 리액트 프로젝트 폴더로 이동하여 npm 실행
```batch
cd frontend	# cd {프로젝트명}
npm start
```
3. 새 터미널 창 열고 작업하던 경로로 이동 후 아래 명령어 실행
```batch
npm install
npm run-script build
npm run eject   # 에러 발생 시 데이터를 전부 git push한 상태인지 확인
```

4. [리액트 PROJECT NAME]/config/paths.js 파일에서 buildPath 변수 build -> build/static

5. [리액트 PROJECT NAME] 폴더에서 axios를 설치
```batch
npm install axios --save
npm install http-proxy-middleware --save
```

6. [리액트 PROJECT NAME]/src/App.js에 해당 코드 추가
```javascript
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default App;
```

7. [리액트 PROJECT NAME]/pakage.json에 "proxy": "http://localhost:8080" 추가

8. src/main/java/com.[springboot 프로젝트]에서 패키지 생성 후 HelloWorldController.java 파일을 생성
```java
package com.demogroup.demoweb.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
```

여기까지 진행시 localhost:3000에서는 "백엔드에서 가져온 데이터입니다 : hello world!"가,
localhost:8080에서는 "hello world!"가 출력되어야 한다.
(spring boot는 project run 이후 react는 npm start)


이제 localhost:8080에서 리액트 화면이 나올 수 있도록 스크립트 작성
---

9. SpringBoot 프로젝트의 build.gradle로 이동해서 dependencies{ ... }와 test{ ... } 사이에 아래 소스 첨부
```batch
def webappDir = "$projectDir/src/main/[PROJECTNAME]"

 sourceSets {
     main {
         resources {
         srcDirs = ["$webappDir/build", "$projectDir/src/main/resources"]
         }
    }
 }

 processResources {
    dependsOn "buildReact"
 }

 task buildReact(type: Exec) {
     dependsOn "installReact"
     workingDir "$webappDir"
     inputs.dir "$webappDir"
     group = BasePlugin.BUILD_GROUP
     if (System.getProperty('os.name').toLowerCase(Locale.ROOT).contains('windows')) {
        commandLine "npm.cmd", "run-script", "build"
     } else {
        commandLine "npm", "run-script", "build"
     }
 }

 task installReact(type: Exec) {
     workingDir "$webappDir"
     inputs.dir "$webappDir"
     group = BasePlugin.BUILD_GROUP
     if (System.getProperty('os.name').toLowerCase(Locale.ROOT).contains('windows')) {
         commandLine "npm.cmd", "audit", "fix"
         commandLine 'npm.cmd', 'install'
     } else {
         commandLine "npm", "audit", "fix"
         commandLine 'npm', 'install'
     }
 }

 task copyReactBuildFiles(type: Copy) {
	dependsOn "buildReact"
	from "$frontendDir/build"
	into "$projectDir/src/main/resources/static"
}
```

10. 홈 디렉토리로 빠져나와 빌드를 실행(한 번 실행 이후 다시 실행 한다면 [리액트 PROJECT NAME]/build 폴더와 [SpringProjectName]/src/main/resources/static 폴더 삭제 후 재실행)
```batch
./gradlew build
```

11. 빌드 완료 후 [SpringProjectName]/build/libs로 이동

12. 폴더 안에 있는 jar 파일 실행(java -jar FILENAME)

13. Localhost:8080 접속해서 React화면 출력되면 성공!

---
<h1>프론트앤드 코드로 교체 위해 참고</h1>

1. package.json, package-lock.json, src 폴더 덮어쓰면 됨

2. package.json, package-lock.json의 name 부분을 자신의 리액트 프로젝트 이름으로 변경

3. [리액트 PROJECT NAME]/build 폴더와 [SpringProjectName]/src/main/resources/static 폴더 삭제 후 ./gradlew build 실행

4. 빌드 완료 후 [SpringProjectName]/build/libs로 이동

5. 폴더 안에 있는 jar 파일 실행(java -jar FILENAME)

6. 이후 필요한 모듈이 있다는 에러 발생시 아래 형식으로 다운로드
```batch
npm install [모듈이름] --save
```

7. ERESOLVE could not resolve 에러 발생시 [리액트 PROJECT NAME] 폴더 이동 후 아래 명령어 실행 후 다시 3번 반복
```batch
npm config set legacy-peer-deps true
npm i
```

+ 한 번 성공한 이후에는 그냥 application.class run 하면 변동사항 자동 반영됨


<h1>gradlew build시 오류 발생 해결</h1>
---

build.gradle 파일에 아래 코드 추가

```javascript
tasks {
	processResources {
		duplicatesStrategy = org.gradle.api.file.DuplicatesStrategy.INCLUDE
	}
}
```