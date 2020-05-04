(this.webpackJsonpmyforecast=this.webpackJsonpmyforecast||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=a(1),i=a.n(o),s=a(7),m=a(2),u=a(3),h=a(5),p=a(4),E=a(6),d=(a(16),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={term:"",lat:null,lon:null},a.onFormSubmit=function(e){e.preventDefault(),a.props.runMySubmit(a.state.term)},a.onMySearch=function(){a.props.runMyLocation(a.state.lat,a.state.lon)},a.mySearchSubmit=function(e){e.preventDefault(),window.navigator.geolocation.getCurrentPosition((function(e){a.setState({lat:e.coords.latitude,lon:e.coords.longitude}),a.onMySearch()}),(function(e){return alert("Please turn on location & try again!")}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"ui segment"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"appName"},"Weather Forecast"),c.a.createElement("button",{className:"ui button",onClick:this.mySearchSubmit},c.a.createElement("i",{className:"crosshairs icon"}),"My Location")),c.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},c.a.createElement("div",{className:"field"},c.a.createElement("label",null,"Search by Major City"),c.a.createElement("div",{className:"wrapper"},c.a.createElement("input",{id:"searchfield",placeholder:"Los Angeles, New York, Paris, London, Cairo, Tokyo, etc.",type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),c.a.createElement("div",{className:"ui submit button",onClick:this.onFormSubmit},"Search")),c.a.createElement("p",{className:"copyright"},"\xa9 Designed by ",c.a.createElement("a",{className:"link",href:"https://drakenguyen4000.github.io/portfolio/"},"Drake Nguyen 2020")))))}}]),t}(c.a.Component)),f="https://www.weatherbit.io/static/img/icons/",b=function(e){if(!e.weather||!e.weather.data)return c.a.createElement("h2",null,"Data only covers major cities. My Location feature will find the closes city with data.");var t=e.weather,a=e.weather.data;console.log(a);var n=[],r=[];a.forEach((function(e){var t=new Date(e.datetime).toUTCString(),a=t.slice(0,3),c=t.slice(4,11);n.push(a),r.push(c)}));var l=[];function o(e){return Math.round(9*e/5+32)}return a.forEach((function(e){var t=e.weather.code;switch(!0){case t<300:l.push("thunderstorm");break;case t<600:l.push("rain");break;case t<700:l.push("snow");break;case t<800:l.push("fog");break;case 800===t:l.push("sunny");break;case t<900:l.push("cloud");break;case 900===t:l.push("rain");break;default:l.push("sunny")}})),c.a.createElement("div",null,c.a.createElement("div",{className:"ui segment city_info"},c.a.createElement("h1",{className:"city_name"},t.city_name),c.a.createElement("div",{className:"detail_info"},c.a.createElement("p",null,"Country: ",c.a.createElement("br",null),t.country_code),c.a.createElement("p",null,"Timezone: ",c.a.createElement("br",null),t.timezone),c.a.createElement("p",null,"Latitude: ",c.a.createElement("br",null),t.lat),c.a.createElement("p",null,"Longitude: ",c.a.createElement("br",null),t.lon))),c.a.createElement("div",{className:"fiveday"},c.a.createElement("div",{className:"ui card ".concat(l[0])},c.a.createElement("h1",{className:"day"},n[0]),c.a.createElement("div",null,c.a.createElement("img",{className:"weather_icon",src:"".concat(f).concat(a[0].weather.icon,".png"),alt:"weather_img"})),c.a.createElement("h2",null,a[0].weather.description),c.a.createElement("h1",null,"H: ",o(a[0].max_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h1",null,"L: ",o(a[0].min_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h2",null,r[0])),c.a.createElement("div",{className:"ui card ".concat(l[1])},c.a.createElement("h1",{className:"day"},n[1]),c.a.createElement("div",null,c.a.createElement("img",{className:"weather_icon",src:"".concat(f).concat(a[1].weather.icon,".png"),alt:"weather_img"})),c.a.createElement("h2",null,a[1].weather.description),c.a.createElement("h1",null,"H: ",o(a[1].max_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h1",null,"L: ",o(a[1].min_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h2",null,r[1])),c.a.createElement("div",{className:"ui card ".concat(l[2])},c.a.createElement("h1",{className:"day"},n[2]),c.a.createElement("div",null,c.a.createElement("img",{className:"weather_icon",src:"".concat(f).concat(a[2].weather.icon,".png"),alt:"weather_img"})),c.a.createElement("h2",null,a[2].weather.description),c.a.createElement("h1",null,"H: ",o(a[2].max_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h1",null,"L: ",o(a[2].min_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h2",null,r[2])),c.a.createElement("div",{className:"ui card ".concat(l[3])},c.a.createElement("h1",{className:"day"},n[3]),c.a.createElement("div",null,c.a.createElement("img",{className:"weather_icon",src:"".concat(f).concat(a[3].weather.icon,".png"),alt:"weather_img"})),c.a.createElement("h2",null,a[3].weather.description),c.a.createElement("h1",null,"H: ",o(a[3].max_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h1",null,"L: ",o(a[3].min_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h2",null,r[3])),c.a.createElement("div",{className:"ui card ".concat(l[4])},c.a.createElement("h1",{className:"day"},n[4]),c.a.createElement("div",null,c.a.createElement("img",{className:"weather_icon",src:"".concat(f).concat(a[4].weather.icon,".png"),alt:"weather_img"})),c.a.createElement("h2",null,a[4].weather.description),c.a.createElement("h1",null,"H: ",o(a[4].max_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h1",null,"L: ",o(a[4].min_temp),c.a.createElement("sup",null,"o"),"F"),c.a.createElement("h2",null,r[4]))))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={forecasting:{}},a.onSearchSubmit=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(t,"&key=e144fc77ceb24c3780e746036b7405ff"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a.setState({forecasting:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Not found. Please enter another city.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),a.onLocation=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherbit.io/v2.0/forecast/daily?&lat=".concat(t,"&lon=").concat(n,"&key=e144fc77ceb24c3780e746036b7405ff"));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a.setState({forecasting:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Not found. Please search by field.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ui container",style:{marginTop:"10px",marginBottom:"100px"}},c.a.createElement(d,{runMySubmit:this.onSearchSubmit,runMyLocation:this.onLocation}),c.a.createElement(b,{weather:this.state.forecasting}))}}]),t}(c.a.Component);l.a.render(c.a.createElement(y,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.98545064.chunk.js.map