(function(){var l,m=function(a){this.opt=a},n,o,p,q,h;m.prototype.search=function(a){var b;b=new $.Deferred;$.ajax({url:"http://query.yahooapis.com/v1/public/yql?callback=?",data:{q:q.apply(this,[a]),format:"json"},dataType:"jsonp",cache:!1,success:function(a){return b.resolve(a.query.results.responce.result)},fail:function(){return b.reject({title:"\u30a8\u30e9\u30fc",message:""})}});return b.promise()};q=function(a){var b,d,c,e;d={site:"DMM.co.jp",version:"1.00",operation:"ItemList",timestamp:p(),api_id:this.opt.api_id,affiliate_id:this.opt.affiliate_id};c=0;for(e=a.length;c<e;c++)b=a[c],d[b.name]=b.value;return"select * from xml where url = 'http://affiliate-api.dmm.com/?"+o(d)+"'"};o=function(a){var b,d,c;d=[];for(b in a)c=a[b],d.push([EscapeEUCJP(b),EscapeEUCJP(c)].join("="));return d.join("&")};p=function(){return n(new Date,"yyyy-MM-dd HH:mm:ss")};n=function(a,b){var d,c;c=b;-1<c.indexOf("yyyy")&&(d=a.getFullYear(),c=c.replace(/yyyy/,d));-1<c.indexOf("MM")&&(d=h(a.getMonth()+1,2),c=c.replace(/MM/,d));-1<c.indexOf("dd")&&(d=h(a.getDate(),2),c=c.replace(/dd/,d));-1<c.indexOf("HH")&&(d=h(a.getHours(),2),c=c.replace(/HH/,d));-1<c.indexOf("mm")&&(d=h(a.getMinutes(),2),c=c.replace(/mm/,d));-1<c.indexOf("ss")&&(d=h(a.getSeconds(),2),c=c.replace(/ss/,d));return c};h=function(a,b){return Array(b-(""+a).length+1).join("0")+a};var s=function(a){this.opt=a;this.opt.dmm&&(this.opt.table&&this.opt.template)&&(r.apply(this),this.opt.dmm.opt.form.submit())},t,u,i,r;i={"DMM.com":{label:"DMM.com \u5168\u4f53",lod:{label:"AKB48/SKE48",akb48:"AKB48",ske48:"SKE48"},digital:{label:"\u52d5\u753b",bandai:"\u30d0\u30f3\u30c0\u30a4ch",anime:"\u30a2\u30cb\u30e1",video:"\u30d0\u30e9\u30a8\u30c6\u30a3",idol:"\u30a2\u30a4\u30c9\u30eb",cinema:"\u6620\u753b\u30fb\u30c9\u30e9\u30de",fight:"\u683c\u95d8\u6280"},monthly:{label:"\u6708\u984d\u52d5\u753b",toei:"\u6771\u6620",animate:"\u30a2\u30cb\u30e1",shochikugeino:"\u677e\u7af9\u82b8\u80fd",idol:"\u30a2\u30a4\u30c9\u30eb",cinepara:"\u30b7\u30cd\u30de\u30d1\u30e9\u30c0\u30a4\u30b9",dgc:"\u30ae\u30e3\u30eb\u30b3\u30ec",fleague:"F\u30ea\u30fc\u30b0"},digital_book:{label:"\u96fb\u5b50\u66f8\u7c4d",comic:"\u30b3\u30df\u30c3\u30af",novel:"\u5c0f\u8aac",magazine:"\u96d1\u8a8c",photo:"\u5199\u771f\u96c6",audio:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af",movie:"\u52d5\u753b"},pcsoft:{label:"PC\u30b2\u30fc\u30e0/\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2",pcgame:"PC\u30b2\u30fc\u30e0",pcsoft:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"},mono:{label:"\u901a\u8ca9",dvd:"DVD",cd:"CD",book:"\u672c\u30fb\u30b3\u30df\u30c3\u30af",game:"\u30b2\u30fc\u30e0",hobby:"\u30db\u30d3\u30fc",kaden:"\u5bb6\u96fb\u30fb\u30d1\u30bd\u30b3\u30f3",houseware:"\u751f\u6d3b\u30fb\u65e5\u7528\u54c1",gourmet:"\u98df\u54c1\u30fb\u98f2\u6599"},rental:{label:"DVD/CD\u30ec\u30f3\u30bf\u30eb",rental_dvd:"\u6708\u984dDVD\u30ec\u30f3\u30bf\u30eb",ppr_dvd:"\u5358\u54c1DVD\u30ec\u30f3\u30bf\u30eb",rental_cd:"\u6708\u984dDVD\u30ec\u30f3\u30bf\u30eb",ppr_cd:"\u5358\u54c1DVD\u30ec\u30f3\u30bf\u30eb",set_dvd:"\u30bb\u30c3\u30c8\u30ec\u30f3\u30bf\u30ebDVD",set_cd:"\u30bb\u30c3\u30c8\u30ec\u30f3\u30bf\u30ebCD",comic:"\u30b3\u30df\u30c3\u30af"},nandemo:{label:"\u3044\u308d\u3044\u308d\u30ec\u30f3\u30bf\u30eb",fashion_ladies:"\u30ec\u30c7\u30a3\u30fc\u30b9",fashion_mens:"\u30e1\u30f3\u30ba",rental_iroiro:"\u3044\u308d\u3044\u308d\u30ec\u30f3\u30bf\u30eb"}},"DMM.co.jp":{label:"DMM.R18 \u5168\u4f53",digital:{label:"\u52d5\u753b",videoa:"\u30d3\u30c7\u30aa",videoc:"\u7d20\u4eba",nikkatsu:"\u6210\u4eba\u6620\u753b",anime:"\u30a2\u30cb\u30e1",photo:"\u96fb\u5b50\u5199\u771f\u96c6"},monthly:{label:"\u6708\u984d\u52d5\u753b",shirouto:"\u7d20\u4eba\u30ac\u30fc\u30eb\u30ba\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",nikkatsu:"\u30d4\u30f3\u30af\u6620\u753b",paradisetv:"\u30d1\u30e9\u30c0\u30a4\u30b9\u30c6\u30ec\u30d3",animech:"\u30a2\u30c0\u30eb\u30c8\u30a2\u30cb\u30e1",dream:"\u30c9\u30ea\u30fc\u30e0",avstation:"AV\u30b9\u30c6\u30fc\u30b7\u30e7\u30f3",playgirl:"\u30d7\u30ec\u30a4\u30ac\u30fc\u30eb",alice:"\u30a2\u30ea\u30b9",crystal:"\u30af\u30ea\u30b9\u30bf\u30eb",hmp:"h.m.p",waap:"Waap",momotarobb:"\u6843\u592a\u90ceBB",moodyz:"MOODYZ",prestige:"\u30d7\u30ec\u30b9\u30c6\u30fc\u30b8",jukujo:"\u719f\u5973\u30c1\u30e3\u30f3\u30cd\u30eb",sod:"\u30bd\u30d5\u30c8\u30fb\u30aa\u30f3\u30fb\u30c7\u30de\u30f3\u30c9",mania:"\u30de\u30cb\u30a2",s1:"\u30a8\u30b9\u30ef\u30f3 \u30ca\u30f3\u30d0\u30fc\u30ef\u30f3\u30b9\u30bf\u30a4\u30eb",kmp:"KMP"},ppm:{label:"1\u5186\u52d5\u753b",video:"\u30d3\u30c7\u30aa",videoc:"\u7d20\u4eba"},pcgame:"\u7f8e\u5c11\u5973\u30b2\u30fc\u30e0",doujin:"\u540c\u4eba",book:"\u96fb\u5b50\u30b3\u30df\u30c3\u30af",mono:{label:"\u901a\u8ca9",dvd:"DVD",goods:"\u5927\u4eba\u306e\u304a\u3082\u3061\u3083",anime:"\u30a2\u30cb\u30e1",pcgame:"\u7f8e\u5c11\u5973\u30b2\u30fc\u30e0",book:"\u30d6\u30c3\u30af",doujin:"\u540c\u4eba"},rental:{label:"DVD\u30ec\u30f3\u30bf\u30eb",rental_dvd:"\u6708\u984d\u30ec\u30f3\u30bf\u30eb",ppr_dvd:"\u5358\u54c1\u30ec\u30f3\u30bf\u30eb",set_dvd:"\u30bb\u30c3\u30c8\u30ec\u30f3\u30bf\u30eb"}}};r=function(){var a,b,d,c,e,g,f,h,j,k;f=this;b=this.opt.dmm.opt.form;a=$("select[name=floor]",b);k=$("select[name=stock]",b);e=$("input[name=offset]",b);j=$("input[name=site]",b);d=$("select[name=hits]",b);h=$("select[name=service]",b);g=$(".pagination");c=$("#loading");b.on("submit",function(a){a.preventDefault();setTimeout(function(){return f.opt.table.empty()},200);f.opt.table.removeClass("in");f.opt.alert.hide().removeClass("in");g.removeClass("in");c.show().addClass("in");return f.opt.dmm.search($(this).find(":input").serializeArray()).then($.proxy(t,f),$.proxy(f.alert,f))});$(".btn-group[data-toggle-name]",b).each(function(){var a,d,c;a=$(this);c=a.data("toggle-name");d=$('input[name="'+c+'"]',b);return $("button",a).each(function(){var a;a=$(this);a.on("click",function(b){b.preventDefault();if(!a.hasClass("active"))return d.val(a.val()),d.trigger("change")});if(a.val()===d.val())return a.addClass("active")})});h.on("change",function(){var b,d,c,e,f;c=h.val();e=j.val();"mono"===c?k.parent().show().addClass("in"):(k.val(""),k.parent().hide().removeClass("in"));if(!c||"string"===typeof i[e][c])a.val(""),a.hide().removeClass("in");else{a.empty();e=i[e][c];f=[];for(b in e)d=e[b],"label"===b?(c="",d="\u5168\u4f53"):c=b,$("<option />").attr("value",c).text(d).appendTo(a),f.push(a.show().addClass("in"));return f}});j.on("change",function(){var a,b,c,d;h.empty();d=i[j.val()];for(a in d)b=d[a],"label"===a?c="":(c=a,b="string"===typeof b?b:b.label),$("<option />").attr("value",c).text(b).appendTo(h);return h.trigger("change")}).trigger("change");return g.on("click","a",function(a){var c;a.preventDefault();a=$(this).parent();if(!a.hasClass("disabled")&&!a.hasClass("active"))return a=$(this).data("page")-1,c=d.val()-0,e.val(a*c+1),b.submit()})};t=function(a){$("#loading").hide().removeClass("in");(function(){if(null==a.items)return a;this.opt.table.html("<tbody>"+this.opt.template.render(a.items.item)+"</tbody>");return a}).apply(this);this.opt.table.addClass("in");return u.apply(this,[a])};u=function(a){var b,d,c;5E4<a.total_count&&(a.total_count=5E4);d=$("select[name=hits]",this.opt.dmm.opt.form).val();b=Math.ceil(a.first_position/d);a=Math.ceil(a.total_count/d);c=(new l).get({current:b,total:a});$(".pagination").each(function(){return $(this).empty().append(c.clone())}).addClass("in");return c.remove()};s.prototype.alert=function(a){var b;b="<p>"+a.message+"</p>";a.title&&(b="<strong>"+a.title(NaN+b));return this.opt.alert.html(b).show().addClass("in")};var v=function(){},w;w={range:5,prev:"\u00ab",next:"\u00bb"};v.prototype.get=function(a){var b,d,c,e,g,f;this.opt=$.extend(w,a);f=this.opt.total;e=this.opt.range;a=this.opt.current;1>f&&(f=1);1>a&&(a=1);e>f&&(e=f);d=Math.ceil(e/2);0>a-d?g=1:a+d>=f?(g=f-e+1,e=f):(g=a-d+1,e=a+d);d=$("<ul/>");for(b=g;g<=e?b<=e:b>=e;g<=e?b++:b--)c=$("<li>").appendTo(d),b===a&&c.addClass("active"),$("<a>").attr({href:"#","data-page":b}).text(b).appendTo(c);b=$('<li class="disabled"><a href="#">...</a></li>');1<g&&(b.prependTo(d),g=$("<li>").prependTo(d),$("<a>").attr({href:"#","data-page":1}).text("1").appendTo(g));e<f&&(b.clone().appendTo(d),g=$("<li>").appendTo(d),$("<a>").attr({href:"#","data-page":f}).text(f).appendTo(g));e=$('<li class="prev" />');g=$('<li class="next" />');$("<a />").attr({href:"#",page:a-1}).text(this.opt.prev).appendTo(e);$("<a />").attr({href:"#",page:a+1}).text(this.opt.next).appendTo(g);1>=a&&e.addClass("disabled");a>=f&&g.addClass("disabled");d.prepend(e).append(g);return d};l=v;$(function(){return new s({dmm:new m({api_id:"evyGhvwFDvEd5AFzq05b",affiliate_id:"toaru-990",form:$("#search")}),table:$("#items"),template:$("#template-item"),alert:$("#alert")})})}).call(this);