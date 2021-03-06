/*!js/page/db.main.js*/
;define('js/page/db.main', function(require, exports, module) {

  require('js/base/db');
  
  console.log('db.main.js');

});
/*!js/page/modal.js*/
;define('js/page/modal', function(require, exports, module) {

  console.log('modal');

});

/*!js/page/jquery.upload.js*/
;define('js/page/jquery.upload', function(require, exports, module) {

  require('js/base/jquery');
  console.log('jquery.upload');

});
/*!js/page/mod.main.js*/
;define('js/page/mod.main', function(require, exports, module) {

  
  // mod.main.js  依赖 db.main,modal,jquery.upload
  require('js/page/db.main');
  require('js/page/modal');
  require('js/page/jquery.upload');
  
  console.log('mod.main');
  
  require(['js/page/ckeditor','js/page/ckeditor.jquery'],function(){
      console.log('async ckeditor');
  });

});
/*!js/base/db.js*/
;define('js/base/db', function(require, exports, module) {

  console.log('db');

});
/*!js/base/base.js*/
;define('js/base/base', function(require, exports, module) {

  // base.js 依赖jquery,badjs,db
  require('js/base/jquery');
  require('js/base/badjs');
  require('js/base/db');
  
  console.log('base');
  
  require('http://qq.com/tvp.js');
  require('https://qq.com/httpssss.js');
  require('http://qzs.qq.com/tencentvideo_v1/tvu/js/ftnh5/tvu.uploader.js');

});
define('tvp', function(require, exports, module) {

  console.log('tvp.js');
  
  require('http://qq.com/player.js');

});

