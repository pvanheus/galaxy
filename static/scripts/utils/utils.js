define([],function(){function a(a){return'<iframe src="'+a+'" frameborder="0" style="width: 100%; height: 100%;"/>'}function b(a,c){for(var d in a){var e=a[d];if(_.isObject(e)){var f=c(e);f&&(a[d]=f),b(e,c)}}}function c(a){return/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))}function d(a){return $("<div/>").text(a).html()}function e(a){if(a instanceof Array||(a=[a]),0===a.length)return!0;for(var b in a)if(["__null__","__undefined__",null,void 0].indexOf(a[b])>-1)return!0;return!1}function f(a){if($.isArray(a)){var a=a.toString().replace(/,/g,", "),b=a.lastIndexOf(", ");return-1!=b&&(a=a.substr(0,b)+" or "+a.substr(b+2)),a}return""}function g(a){top.__utils__get__=top.__utils__get__||{},a.cache&&top.__utils__get__[a.url]?(a.success&&a.success(top.__utils__get__[a.url]),console.debug("utils.js::get() - Fetching from cache ["+a.url+"].")):h({url:a.url,data:a.data,success:function(b){top.__utils__get__[a.url]=b,a.success&&a.success(b)},error:function(b){a.error&&a.error(b)}})}function h(a){var b={contentType:"application/json",type:a.type||"GET",data:a.data||{},url:a.url};"GET"==b.type||"DELETE"==b.type?($.isEmptyObject(b.data)||(b.url+=-1==b.url.indexOf("?")?"?":"&",b.url+=$.param(b.data,!0)),b.data=null):(b.dataType="json",b.url=b.url,b.data=JSON.stringify(b.data)),$.ajax(b).done(function(b){if("string"==typeof b)try{b=b.replace("Infinity,",'"Infinity",'),b=jQuery.parseJSON(b)}catch(c){console.debug(c)}a.success&&a.success(b)}).fail(function(b){var c=null;try{c=jQuery.parseJSON(b.responseText)}catch(d){c=b.responseText}a.error&&a.error(c,b)}).always(function(){a.complete&&a.complete()})}function i(a,b){var c=$('<div class="'+a+'"></div>');c.appendTo(":eq(0)");var d=c.css(b);return c.remove(),d}function j(a){$('link[href^="'+a+'"]').length||$('<link href="'+Galaxy.root+a+'" rel="stylesheet">').appendTo("head")}function k(a,b){return a?_.defaults(a,b):b}function l(a,b){for(var c=1,d=0;b>d;d++)c*=10;return Math.round(a*c)/c}function m(a,b,c){c=void 0!==c?c:1;var d="";if(a>=s)a/=s,d="TB";else if(a>=r)a/=r,d="GB";else if(a>=q)a/=q,d="MB";else if(a>=p)a/=p,d="KB";else{if(!(a>0))return b?"0 b":"<strong>-</strong>";d="b"}var e="b"==d?a:l(a,c);return b?e+" "+d:"<strong>"+e+"</strong> "+d}function n(){return top.__utils__uid__=top.__utils__uid__||0,"uid-"+top.__utils__uid__++}function o(){var a=new Date,b=(a.getHours()<10?"0":"")+a.getHours(),c=(a.getMinutes()<10?"0":"")+a.getMinutes();return datetime=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+", "+b+":"+c}var p=1024,q=p*p,r=q*p,s=r*p;return{cssLoadFile:j,cssGetAttribute:i,get:g,merge:k,iframe:a,bytesToString:m,uid:n,time:o,request:h,sanitize:d,textify:f,isEmpty:e,deepeach:b,isJSON:c}});
//# sourceMappingURL=../../maps/utils/utils.js.map