let n = 1
getPage.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open("GET", `/page${n+1}.json`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response)
        array.forEach(item=>{
          const li = document.createElement('li')
          li.textContent = item.id
          document.querySelector('#nextpage').appendChild(li)
        })
        n += 1
      }
    }
    request.send()
  }

getJSON.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open("GET", "/5.json")
  request.onreadystatechange = () =>{
    if (request.readyState === 4) {
      if (request.status >=200 && request.status <300) {
        const object = JSON.parse(request.response) //把符合JSON语法的字符串变成对应的对象或其他东西
        myName.textContent = object.name
      }
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        // DOM对象
        const dom = request.responseXML
        // dom.getElementsByTagName()获取的是一个数组，要加[0]
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim()) //.trim()去掉回车
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      //创建div标签
      const div = document.createElement("div");
      //填写div内容
      div.innerHTML = request.response;
      //插入body里面
      document.body.appendChild(div);
      console.log("成功了");
    }
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
      //创建script标签
      const script = document.createElement("script");
      //填写script内容
      script.innerHTML = request.response;
      //插入到body里面
      document.body.appendChild(script);
      console.log("成功了");
    }
  }
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyState = 1
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功（2xx） 还是失败（4xx，5xx）
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插入head里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};
