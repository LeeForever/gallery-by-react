require('normalize.css/normalize.css');
require('styles/App.css');
//获取图片相关的数据
var imagesDatas=require('../data/imageDatas.json');

import React from 'react';


//let yeomanImage = require('../images/yeoman.png');
//利用自执行函数，将图片名信息转成图片url路径信息
imagesDatas = (function genImageURL(imagesDatasArr){
   for (var i = 0,j=imagesDatasArr.length; i <j; i++) {
   	 var singleImageDta=imagesDatasArr[i];

   	 singleImageDta.genImageURL=require('../images'+singleImageDta.filwName);

   	 imagesDatasArr[i]=singleImageDta;
   }
   return imagesDatasArr;
})(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
         <section className="img-sec">

         </section>
         <nav className="controller-nav">
         </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {	
};

export default AppComponent;
