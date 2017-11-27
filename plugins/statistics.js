export default ({ isClient,isDev }) => {
  if (!isClient || isDev) return
  // com站统计代码
  if (location.hostname.substring(location.hostname.lastIndexOf('.')) === '.com') {
    // 百度统计
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?7beba5fd47746c26352698ff8362276b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
    (function () {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?6ce172f5d90e0ce4cd8aa027a6ece08e";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    // 谷歌统计
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-61067690-1', 'auto');
    ga('send', 'pageview');
    // 聚合分析
    var _mvq = _mvq || [];
    _mvq.push(['$setAccount', 'm-28016-0']);
    //_mvq.push(['$setGeneral', '', '', /*用户名*/'', /*用户id*/'']); //如果不传用户名、用户id，此句可以删掉
    _mvq.push(['$logConversion']);
    (function () {
      var mvl = document.createElement('script');
      mvl.type = 'text/javascript'; mvl.async = true;
      mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(mvl, s);
    })();
    _mvq.push(['$setAccount', 'm-180581-0']);
    _mvq.push(['$logConversion']);
    (function() {
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript'; mvl.async = true;
    mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s);
    })();
    // 百度推送
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = '//zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = '//push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
    // 今日头条注册统计
    (function(root) {
      root._tt_config = true;
      var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
      ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
      ta.onerror = function () {
        var request = new XMLHttpRequest();
        var web_url = window.encodeURIComponent(window.location.href);
        var js_url  = ta.src;
        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url;
        request.open('GET', url, true);
        request.send(null);
      }
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
    })(window);
  }
  // .cn站统计代码(目前.cn站统计与.com采用相同的统计方式)
  // if (location.hostname.substring(location.hostname.lastIndexOf('.')) === '.cn') {
  //   // 百度统计
  //   var _hmt = _hmt || [];
  //   (function () {
  //       var hm = document.createElement("script");
  //       hm.src = "//hm.baidu.com/hm.js?02dd7275d2e4cb3a194fc0ec1a67fc09";
  //       var s = document.getElementsByTagName("script")[0];
  //       s.parentNode.insertBefore(hm, s);
  //   })();
  //   (function () {
  //       var hm = document.createElement("script");
  //       hm.src = "//hm.baidu.com/hm.js?ce14826a4d5558f4c120732644e9ea55";
  //       var s = document.getElementsByTagName("script")[0];
  //       s.parentNode.insertBefore(hm, s);
  //   })();
  // }
}
