(this.webpackJsonpmyforecast=this.webpackJsonpmyforecast||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=a(1),o=a.n(s),m=a(7),i=a(2),u=a(3),h=a(5),p=a(4),w=a(6),E=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",lat:null,lon:null},a.onFormSubmit=function(e){e.preventDefault(),a.props.runMySubmit(a.state.term)},a.mySearchSubmit=function(e){e.preventDefault(),window.navigator.geolocation.getCurrentPosition((function(e){a.setState({lat:e.coords.latitude,lon:e.coords.longitude}),a.onMySearch()}),(function(e){return alert("Please turn on location & try again!")}))},a}return Object(w.a)(t,e),Object(u.a)(t,[{key:"onMySearch",value:function(){this.props.runMyLocation(this.state.lat,this.state.lon)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"appName"},"Weather Forecast"),r.a.createElement("button",{className:"ui button",onClick:this.mySearchSubmit},r.a.createElement("i",{className:"crosshairs icon"}),"My Location")),r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search by Major City"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("input",{id:"searchfield",placeholder:"Los Angeles, New York, Paris, London, Cairo, Tokyo, etc.",type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),r.a.createElement("div",{class:"ui submit button",onClick:this.onFormSubmit},"Search")),r.a.createElement("p",{className:"copyright"},"\xa9 Designed by ",r.a.createElement("a",{className:"link",href:"https://drakenguyen4000.github.io/portfolio/"},"Drake Nguyen 2020"),". Powered by ",r.a.createElement("a",{className:"link",href:"https://www.metaweather.com/"}," MetaWeather ")," API."))))}}]),t}(r.a.Component)),d="https://www.metaweather.com/static/img/weather/png/",f=function(e){if(!e.weather||!e.weather.parent)return r.a.createElement("h2",null,"Data only covers major cities. My Location feature will find the closes city with data.");var t=e.weather,a=e.weather.consolidated_weather,n=[];a.forEach((function(e){var t=new Date(e.applicable_date).toUTCString().slice(0,3);n.push(t)}));var c=[];function l(e){return Math.round(9*e/5+32)}return a.forEach((function(e){switch(e.weather_state_name){case"Snow":case"Sleet":case"Hail":c.push("snow");break;case"Thunderstorm":case"Thunder":c.push("thunderstorm");break;case"Heavy Rain":case"Light Rain":case"Showers":c.push("rain");break;case"Heavy Cloud":case"Light Cloud":c.push("cloud");break;case"Clear":c.push("sunny");break;default:c.push("sunny")}})),r.a.createElement("div",null,r.a.createElement("div",{className:"ui segment city_info"},r.a.createElement("h1",{className:"city_name"},t.title),r.a.createElement("div",{className:"detail_info"},r.a.createElement("p",null,"State/Country: ",t.parent.title),r.a.createElement("p",null,"Timezone: ",t.timezone),r.a.createElement("p",null,"TZName: ",t.timezone_name))),r.a.createElement("div",{className:"fiveday"},r.a.createElement("div",{className:"ui card ".concat(c[0])},r.a.createElement("h1",{className:"day"},n[0]),r.a.createElement("div",null,r.a.createElement("img",{className:"weather_icon",src:"".concat(d).concat(a[0].weather_state_abbr,".png"),alt:"weather_img"})),r.a.createElement("h2",null,a[0].weather_state_name),r.a.createElement("h1",null,"H: ",l(a[0].max_temp),r.a.createElement("sup",null,"o"),"F"),r.a.createElement("h1",null,"L: ",l(a[0].min_temp),r.a.createElement("sup",null,"o"),"F")),r.a.createElement("div",{className:"ui card ".concat(c[1])},r.a.createElement("h1",{className:"day"},n[1]),r.a.createElement("div",null,r.a.createElement("img",{className:"weather_icon",src:"".concat(d).concat(a[1].weather_state_abbr,".png"),alt:"weather_img"})),r.a.createElement("h2",null,a[1].weather_state_name),r.a.createElement("h1",null,"H: ",l(a[1].max_temp),r.a.createElement("sup",null,"o"),"F"),r.a.createElement("h1",null,"L: ",l(a[1].min_temp),r.a.createElement("sup",null,"o"),"F")),r.a.createElement("div",{className:"ui card ".concat(c[2])},r.a.createElement("h1",{className:"day"},n[2]),r.a.createElement("div",null,r.a.createElement("img",{className:"weather_icon",src:"".concat(d).concat(a[2].weather_state_abbr,".png"),alt:"weather_img"})),r.a.createElement("h2",null,a[2].weather_state_name),r.a.createElement("h1",null,"H: ",l(a[2].max_temp),r.a.createElement("sup",null,"o"),"F"),r.a.createElement("h1",null,"L: ",l(a[2].min_temp),r.a.createElement("sup",null,"o"),"F")),r.a.createElement("div",{className:"ui card ".concat(c[3])},r.a.createElement("h1",{className:"day"},n[3]),r.a.createElement("div",null,r.a.createElement("img",{className:"weather_icon",src:"".concat(d).concat(a[3].weather_state_abbr,".png"),alt:"weather_img"})),r.a.createElement("h2",null,a[3].weather_state_name),r.a.createElement("h1",null,"H: ",l(a[3].max_temp),r.a.createElement("sup",null,"o"),"F"),r.a.createElement("h1",null,"L: ",l(a[3].min_temp),r.a.createElement("sup",null,"o"),"F")),r.a.createElement("div",{className:"ui card ".concat(c[4])},r.a.createElement("h1",{className:"day"},n[4]),r.a.createElement("div",null,r.a.createElement("img",{className:"weather_icon",src:"".concat(d).concat(a[4].weather_state_abbr,".png"),alt:"weather_img"})),r.a.createElement("h2",null,a[4].weather_state_name),r.a.createElement("h1",null,"H: ",l(a[4].max_temp),r.a.createElement("sup",null,"o"),"F"),r.a.createElement("h1",null,"L: ",l(a[4].min_temp),r.a.createElement("sup",null,"o"),"F"))))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={forecasting:{}},a.onSearchSubmit=function(){var e=Object(m.a)(o.a.mark((function e(t){var n,r,c,l,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r[0].woeid,e.next=10,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(c,"/"));case 10:return l=e.sent,e.next=13,l.json();case 13:s=e.sent,a.setState({forecasting:s}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert("Not found. Please enter another city.");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),a.onLocation=function(){var e=Object(m.a)(o.a.mark((function e(t,n){var r,c,l,s,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=".concat(t,",").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,l=c[0].woeid,e.next=10,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(l,"/"));case 10:return s=e.sent,e.next=13,s.json();case 13:m=e.sent,a.setState({forecasting:m}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert("Not found. Please search by field.");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(w.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px",marginBottom:"100px"}},r.a.createElement(E,{runMySubmit:this.onSearchSubmit,runMyLocation:this.onLocation}),r.a.createElement(f,{weather:this.state.forecasting}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2bf69cb6.chunk.js.map