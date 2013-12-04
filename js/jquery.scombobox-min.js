/**
 * jquery.simple-combobox: jquery combobox plugin | (c) 2013 Ilya Kremer
 * MIT license http://www.opensource.org/licenses/mit-license.php
 */
(function(e,t){function w(e){return{fast:200,normal:400,slow:600}[e]||e}function S(e,t,n,r){if(typeof n!="function"){var i=e+(typeof n=="string"?"."+n:typeof r=="string"?"."+r:"");t.trigger(i)}else{x.call(t,e,n,r)}return this}function x(e,t,n){var r=e+(typeof n=="string"?"."+n:"");this.bind(r,t)}function T(){var t=[];var n=this.find(r+c+" p");for(var i=0;i<n.length;i++){if(e(n[i]).find(":checkbox").is(":checked")){t.push(e(n[i]).data("value"))}}return t}function N(t){var n=e(this).find(r+c+" p"),i=e(this).children(r+s),o="[";for(var u=0;u<n.length;u++){var a=e(n[u]),f;if((f=t.indexOf(a.data("value")))>=0){a.find(":checkbox").prop("checked",true);o+=t[f]+","}}i.val(o.replace(/,\s+$/,"")+"]").change()}function C(t){var n=e(this);var o=n.children("select"),u=n.children(r+s),a=n.children(r+i);var f=o.children('[value="'+t+'"]');if(f.length==0){o.children().prop("selected",false).first().prop("selected",true);if(u.val()!=""){u.val("").change()}a.val("");return}o.val(t).change()}function k(){if(this.data("listenersAdded")){return}var a=this;this.on("keyup",r+i+", "+r+u,function(t){if([13,38,40,9].indexOf(t.which)>=0){return}var i=a.data(n);var s=i.fullMatch,o=i.highlight;if(s){o=o!==false}else{o=!!o}var u=e(this),f=this.value.toLowerCase().trim();var l=u.closest(r).children(r+c);P.call(l,"down",true);var p=u.closest(r).find("select option");e(r+" "+r+c).each(function(){if(l[0]!=this){P.call(e(this),"up")}});if(!f){l.children("p").show().each(function(){e(r+"-marker",this).contents().unwrap()});return}l.children("p").hide();p.each(function(){var t=e(this).text().toLowerCase().trim();if(s?t.indexOf(f)>=0:t.indexOf(f)==0){var i=new RegExp(f,s?"g":"");var u=l.children("p:eq("+p.index(this)+"):not("+r+d+", "+r+v+")").show();if(o){u.each(function(){e(r+"-marker",this).contents().unwrap();var t=e(r+h,this)[0];t.innerHTML=t.innerHTML.replace(i,'<span class="'+n+'-marker">'+f+"</span>")})}}})});this.on("keydown",r+i,function(t){if([38,40,13,27].indexOf(t.which)>=0){t.preventDefault();var s=e(this).closest(r);var o=s.children(r+c);var u=e(r+p,o[0]),f,l;var m=e("p:first",o[0])}else{return}var g=a.data(n);var y=g.mode=="default"?g.fillOnArrowPress:false;if(o.is(":animated")){return}var b=o.scrollTop();if(t.which==40){if(o.is(":hidden")){P.call(o,"down");return}if(u.length==0){if(m.is(":visible:not("+r+d+")")){f=m.addClass(n+p)}else{f=m.nextAll(":visible:not("+r+d+")").first().addClass(n+p)}}else{f=u.removeClass(n+p).nextAll(":visible:not("+r+d+", "+r+v+")").first().addClass(n+p);if(f.length==0){if(m.is(":visible")){f=m.addClass(n+p)}else{f=m.nextAll(":visible:not("+r+d+")").first().addClass(n+p)}}if(f.length==0){f=m}l=f.position().top-o.position().top;if(l+f.outerHeight()*6>o.height()){o.scrollTop(b+f.outerHeight())}else if(l<0){o.scrollTop(0)}}if(y){this.value=f.find(r+h).text();s.children(r+i).data("fillonarrow",true)}}else if(t.which==38){if(o.is(":visible")){f=u.removeClass(n+p).prevAll(":visible:not("+r+d+", "+r+v+")").first().addClass(n+p);if(f.length==0){f=e("p:visible:not("+r+d+"):last",o[0]).addClass(n+p)}l=f.position().top-o.position().top;if(l<f.outerHeight()*3){o.scrollTop(b-f.outerHeight())}else if(l>o.height()){o.scrollTop(o[0].scrollHeight)}if(y){this.value=f.find(r+h).text();s.children(r+i).data("fillonarrow",true)}}}else if(t.which==13){if(g.fillOnBlur){j(o).click();return}var w=this.value.trim().toLowerCase(),E=false;o.children("p").each(function(){if(e(r+h,this).text().trim().toLowerCase()==w){e(this).click();E=true}});if(E==false){o.children(r+p).trigger("click",[t.shiftKey])}if(g.mode=="default"){P.call(o,"up")}}else if(t.which==27){P.call(e(this).blur().closest(r).children(r+c),"up")}});this.on("change","select",function(t,n){var o=e(this).closest(r);var u=e("option:selected",this).text();o.children(r+i).val(u).data("value",u);var a=o.children(r+s);if(a.data("changed")){a.data("changed",false);return}a.change();if(n){return}P.call(o.children(r+c),"up")});this.on("click",r+c+" p",function(t,i){t.stopPropagation();if(e(this).is(r+d+", "+r+v)){return}if(i!=undefined){t.shiftKey=i}var o=e(this),u=o.parent(),f=u.children("p:not("+r+d+", "+r+v+")");var l=f.index(this);if(a.data(n).mode=="checkboxes"){H.call(this,t);return}var c=u.closest(r).children("select");c.children("option").eq(l).prop("selected",true);c.siblings(r+s).val(c.val());c.change();P.call(o.parent(),"up");o.addClass(n+p).siblings().removeClass(n+p)});this.on("mousedown",r+c+" p",function(){setTimeout(function(){a.children(r+o).removeClass(n+o)})});this.on("blur",r+i,function(){var t=e(this),u=a.data(n);if(u.fillOnBlur){j(t.parent().children(r+c)).click();return}var f=t.val().trim().toLowerCase();var l=t.siblings("select");var h="";l.find("option").each(function(){if(f==e(this).text().trim().toLowerCase()){h=this.value}});var p=t.siblings(r+s);var d=!h&&f;if(d){if(u.forbidInvalid){t.closest(r).find(r+i).val("").data("value","")}else{t.addClass(n+o).siblings(r+m).addClass(n+m+o)}t.siblings("select, "+r+s).val("")}else{t.removeClass(n+o).siblings(r+m).removeClass(n+m+o)}var v=p.val();if(f==""){p.val("")}if(v!=p.val()){p.change().data("changed",true)}});this.on("focus",r+i,function(){if(!this.value.trim()){if(a.data(n).expandOnFocus){e(this).keyup()}}else{if(a[n]("val")){var t=a.children(r+c);t.children().show();P.call(t,"down")}}});this.on("click",r+i+"-div",function(){if(a.data(n).disabled){return}P.call(e(this).siblings(r+c),"down")});this.on("click",r+i,function(e){e.stopPropagation()});this.on("click",r+g,function(t){t.stopPropagation();var n=e(this),s=n.closest(r);var o=s.children(r+c);if(o.is(":visible")){P.call(o,"up")}else{P.call(o,"down");s.children(r+i).focus()}});this.on("click",r+f,function(t){t.stopPropagation();var i=e(this);var s=a.data(n);var o=i.parent(),u=a.children(r+c);u.children("p").eq(i.data("index")).find(":checkbox").prop("checked",false);o.fadeOut(s.animation.duration);i.closest(r).children("select").trigger("change",[true])});if(b==false){b=true;e(t).bind("click."+n,function(){P.call(e(r+c),"up")})}this.data("listenersAdded",true)}function L(t){if(typeof t=="string"){t=e.parseJSON(t);if(t==null){return[]}}if(!t){return false}if(!(t instanceof Array)){if(typeof t!="object"){return false}if(typeof t.length=="undefined"){t.length=Object.keys(t).length}t=[].slice.call(t)}return t}function A(e,t){for(var n=0;n<e.length;e++){if((!e[n].value||!e[n].text)&&!e[n].hasOwnProperty("separator"))delete e[n]}}function O(t){for(var r=0;r<t.length;r++){if(!t[r].value&&!e(t[r]).hasClass(n+d)){e(t[r]).remove()}}}function M(e,t){return e.text.trim().toLowerCase()>t.text.trim().toLowerCase()?1:-1}function _(e){for(var t=0;t<e.length;t++){for(var n=t+1;n<e.length;n++){if(!e[t]||!e[n])continue;if(e[t].value==e[n].value)delete e[t]}}}function D(t){for(var n=0;n<t.length;n++){for(var r=n+1;r<t.length;r++){if(!t[n]||!t[r])continue;if(t[n].value==t[r].value){e(t[n]).remove()}}}}function P(t,s){if(this.is(":animated"))return;var o=this.parent().data(n).animation;if(t=="up"&&this.is(":hidden")&&this.length==1){return}if(e.easing[o.easing]==null){console.warn("no such easing: "+o.easing);o.easing="swing"}if(t=="up"){this.slideUp(o).data("p-clicked-index",-1)}else{this.slideDown(o)}var u=this.parent().children(r+i);u.each(function(){var t=e(this);if(t.data("fillonarrow")&&!s){t.data("fillonarrow",false).val(t.data("value"))}})}function H(t){var s=e(this),o=s.parent(),u=o.children("p"),c=u.index(this),p=w(o.parent().data(n).animation.duration);var d=s.find(":checkbox");d.prop("checked",!d.prop("checked"));var v=d.prop("checked");if(t.shiftKey){if(o.data("p-clicked-index")>=0){var m=o.data("p-clicked-index");var g=m<c?m:c,y=m<c?c:m;for(var b=g;b<=y;b++){e(u[b]).find(":checkbox").prop("checked",v)}}}var E=e(r+l).prepend("<span />");e(r+l).fadeOut(p/5,function(){E.empty().show();u.each(function(t){var i=e(this);if(i.find(":checkbox").prop("checked")){E.append(e("<div />").addClass(n+a).append(e("<div />").addClass(n+a+"-text").text(i.find(r+h).text())).append(e("<div />").addClass(n+f).text("?").data("index",t)).fadeIn(p*1.5))}});E.append('<div style="clear: both" />')});o.data("p-clicked-index",c);s.closest(r).children("select").trigger("change",[true]);s.closest(r).children(r+i).focus()}function B(t,i){var s=this.data(n);var o=this.find("select"),u=this.find(r+c);for(var a=0;a<t.length;a++){if(t[a].hasOwnProperty("separator")){if(t[a].hasOwnProperty("header")){f=e('<p class="'+n+v+'" />').text(t[a].header)}else{var f=e('<p class="'+n+d+'" />')}}else{var l=e("<option />").val(t[a].value).text(t[a].text);o.append(l);f=i.pFillFunc.call(this,t[a],s)}u.append(f)}}function j(e){var t=e.children(r+p+":visible");if(t.length==0){t=e.children(":visible:first")}return t}function F(e){if(e==null){return null}var t=Object.keys(e);for(var n=0;n<t.length;n++){var r=t[n].replace(/-([a-z])/g,function(e){return e[1].toUpperCase()});if(t[n]!=r){e[r]=e[t[n]];delete e[t[n]]}if(typeof e[r]=="object"&&r!="data"){F(e[r])}}return e}var n="scombobox";var r="."+n;var i="-display",s="-value",o="-invalid",u=i+"-div",a=u+"-item",f=a+"-remove",l=u+"-holder",c="-list",h="-mainspan",p="-hovered",d="-separator",v="-header",m="-dropdown-background",g="-dropdown-arrow",y="-disabled";var b=false;var E={init:function(){var t=this.find("."+n+c),o=this.find("select"),a=this.find(r+m),f=this.find(r+g);var h=this.data(n);this.addClass(n);if(o.length==0){this.append(e("<select />"))}if(this.attr("id")){o.removeAttr("id")}if(a.length==0){this.append('<div class="'+n+m+'" />')}if(f.length==0){this.append('<div class="'+n+g+'" />')}E.displayDropdown.call(this,h.showDropDown);if(h.mode!="checkboxes"){if(this.find(r+i).length==0){this.append('<input class="'+n+i+'" type="text" />')}}if(h.tabindex!=null){this.find(r+i).attr("tabindex",h.tabindex)}if(this.find(r+s).length==0){this.append('<input class="'+n+s+'" type="hidden" />')}if(this.find(r+i).is(":disabled")||h.disabled){this.find(r+m+", "+r+g).hide()}if(h.disabled){this.find(r+i).prop("disabled",true);this.addClass(n+y)}if(t.length==0){this.append(t=e('<div class="'+n+c+'"></div>'))}if(h.mode=="checkboxes"){this.addClass(n+"-checkboxes");this.find(r+i).remove();var p=e(r+i+"-div");if(p.length==0){this.append('<div class="'+n+u+'"><div class="'+n+l+'" /></div>')}t.insertAfter(this.find(r+i+"-div"))}else{e(r+"-display-div",this[0]).remove();t.insertAfter(this.find(r+i))}t.css({"max-width":h.listMaxWidth,"max-height":h.maxHeight});if(h.wrap==true){t.css("white-space","normal")}k.call(this);return E.fill.call(this,h.data,true)},fill:function(t,o){var u=this.find("select option");var a=this.find("."+n+c).empty(),f=this.find("select");t=L(t);var l=this.data(n);var p=l.mode;if(!t){if(l.removeDuplicates){D(u);O(u);u=this.find("select option")}if(u.length==0){}else{u.each(function(){var t=e(this);if(t.hasClass(n+d)){if(t.hasClass(n+v)){a.append(e('<p class="'+n+v+'" />').text(t.text()))}else{var r=e('<p class="'+n+d+'" />')}}else{r=e("<p />").append(e('<span class="'+n+h+'" />').text(t.text())).data("value",this.value);if(p=="checkboxes"){r.prepend('<input type="checkbox" />')}}a.append(r)})}}else{if(l.removeDuplicates){_(t)}A(t);if(l.sort){t.sort(M);if(!l.sortAsc){t.reverse()}}f.empty();B.call(this,t,l);var m=this.children(r+s),g=m.val();if(g){m.val("");this.children(r+i).val("")}}if(o){l.callback.func.apply(this,l.callback.args)}return this},clear:function(){this.children("select").empty();this.children(r+c).empty().width("");this.children(r+i).removeClass(n+o);this.children(r+m).removeClass(n+m+o);return this},data:function(e){if(arguments.length==0){return this.data(n).data}else{this.data(n).data=e}return this},disabled:function(e){var t=this.data(n).mode;if(arguments.length==0){if(t=="checkboxes"){return this.hasClass(n+y)}else{return this.children(r+i).prop("disabled")}}e=!!e;this.children(r+i).prop("disabled",e);if(e){this.addClass(n+y);this.children(r+m+", "+r+g).hide()}else{this.removeClass(n+y);this.children(r+m+", "+r+g).show()}return this},options:function(t){if(arguments.length==0){return this.data(n)}e.extend(true,this.data(n),F(t));return this},val:function(e){var t=this.data(n).mode;if(arguments.length==0){return t=="default"?this.find(r+i).is(":disabled")?"":this.find(r+s).val():t=="checkboxes"?T.call(this):null}else{if(t=="default"){C.call(this,e)}else if(t=="checkboxes"){N.call(this,e)}}return this},open:function(){P.call(this.children(r+c),"down");return this},close:function(){P.call(this.children(r+c),"up");return this},change:function(e,t){return S.call(this,"change",this.children(r+s),e,t)},focus:function(e,t){return S.call(this,"focus",this.children(r+i),e,t)},blur:function(e,t){return S.call(this,"blur",this.children(r+i),e,t)},keyup:function(e,t){return S.call(this,"keyup",this.children(r+i),e,t)},keydown:function(e,t){return S.call(this,"keydown",this.children(r+i),e,t)},keypress:function(e,t){return S.call(this,"keypress",this.children(r+i),e,t)},click:function(e,t){return S.call(this,"click",this.children(r+i),e,t)},mousedown:function(e,t){return S.call(this,"mousedown",this.children(r+i),e,t)},clickDropdown:function(e,t){return S.call(this,"click",this.children(r+g),e,t)},invalid:function(e){if(arguments.length==0){this.children(r+i).hasClass(n+o)}else{this.children(r+i).addClass(n+o)}return this},toSelect:function(){var e=this.children("select").insertAfter(this);if(this.data(n).reassignId){e.attr("id",this.attr("id"))}this.remove();return e},displayDropdown:function(e){if(arguments.length){if(!!e){this.children(r+g+", "+r+m).show()}else{this.children(r+g+", "+r+m).hide()}}else{if(this.data(n).showDropdown){this.children(r+g+", "+r+m).show()}else{this.children(r+g+", "+r+m).hide()}}return this}};e.fn[n]=function(t){if(typeof t=="string"){if(this.length==0){return this}var r=E[t];if(!E[t]){e.error("No such method: "+r+" in jQuery."+n+"()")}}else if(typeof t=="object"||t==null){var i=e.extend(true,{},e.fn[n].defaults,F(t))}else{e.error("Incorrect usage");return this}if(r){return r.apply(this,Array.prototype.slice.call(arguments,1))}return this.each(function(){var t=e(this);if(!t.is("select, div")){console.warn("target element is incorrect: ",this);return}if(t.is("select")){t.wrap("<div />");if(i.reassignId){t.parent().attr("id",t.attr("id"))}t=t.parent()}t.data(n,e.extend(true,{},i));E.init.apply(t)})};e.fn[n].defaults={data:null,disabled:false,sort:true,sortAsc:true,removeDuplicates:true,fullMatch:false,highlight:null,expandOnFocus:true,tabindex:null,forbidInvalid:false,reassignId:true,mode:"default",pMarkup:'<img src="${imgsrc}" /><span class="'+n+h+'">${text}</span> <span>${additional}</span>',pFillFunc:function(t,n){var r=e("<p />").html(n.pMarkup.replace("${text}",t.text).replace("${additional}",t.additional?t.additional:"").replace("${imgsrc}",t.imgsrc||""));if(typeof t.imgsrc!="string"){r.find("img").hide()}return r},animation:{duration:"fast",easing:"swing"},listMaxWidth:window.screen.width/2,wrap:true,maxHeight:"",fillOnArrowPress:true,fillOnBlur:false,showDropDown:true,callback:{func:function(){},args:[]}};e.fn[n].extendDefaults=function(t){e.extend(true,e.fn[n].defaults,t)}})(jQuery,document)