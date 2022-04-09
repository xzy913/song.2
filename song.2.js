// 封装AJAX
const Ajax = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          let res = JSON.parse(xhr.response);
          resolve(res);
        } else {
          reject("请求失败");
        }
      }
    };
  });
};
// 使用promise then方法处理异步请求
Ajax("get", "http://music.eleuu.com/personalized?limit=10").then(
  (res) => {
    const { result } = res;
    // 获取页面dom元素
    for (var i = 0; i < 10; i++) {
      var body = document.getElementsByTagName("body")[0];
      var div = document.createElement("div");
      var node = document.createTextNode("");

      div.appendChild(node);
      body.appendChild(div);

      var array = res.result;
      var img = document.createElement("img");
      img.src = array[i].picUrl;

      div.appendChild(img);

      var name = document.createElement("p");
      node = document.createTextNode(array[i].name);
      name.appendChild(node);
      div.appendChild(name);

      var id = array[i].id;
      // console.log(id);
      const data2 = document.getElementById("data");
      [0];
      data2.data_id = id;
      console.log(data2.data_id);

      // 绑定点击事件
      const ID = data.data_id;
      name.onclick = function () {
        console.log(ID);
        Ajax("get", `http://music.eleuu.com/playlist/detail?id=${ID}`).then(
          (res) => {
            const result = res;
            console.log(result);

            //    for(j=0;j<11;j++){
            let Array = result.playlist.tracks;
            // console.log(Array);
            Array.forEach(function (Array) {
              var body = document.getElementsByTagName("body")[0];
              var div = document.createElement("div");
              var node = document.createTextNode("");

              div.appendChild(node);
              body.appendChild(div);

              // // let Array = resul.playlist.tracks;
              let name = document.createElement("p");
              node = document.createTextNode(Array.name);
              name.appendChild(node);
              div.appendChild(name);

              const data = Array.id;
              console.log(data);

              var num = Array.id;
              const id = document.getElementById("id");
              id.id_data = num;
              // 绑定点击事件
              const Num = id.id_data;
              name.onclick = function () {
                console.log(Num);
                Ajax("get", `http://music.eleuu.com/lyric?id=${Num}`).then(
                  (res) => {
                    const result = res;
                    console.log(result);

                    const body = document.getElementsByTagName("body")[0];
                    const div = document.createElement("div");
                    const node = document.createElement("node");
                    // div.appendChild(node);
                    body.appendChild(div);
                    div.appendChild(node);

                    let array = res.lrc;
                    console.log(array);

                    let name = document.createElement("p");
                    // name.href='file:///C:/Users/x/Documents/web/web/web1/assets/song.3/song.3.html';
                    node.innerText = array.lyric;
                    name.appendChild(node);
                    div.appendChild(name);
                  }
                );
              };

              //
            });
          },
          (err) => {
            console.log(err);
          }
        );
      };

      //
    }
  },
  (err) => {
    console.log(err);
  }
);
