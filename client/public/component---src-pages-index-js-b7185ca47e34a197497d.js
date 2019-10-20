(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(221),r=(a(194),a(188)),c=a(192),i=a.n(c),s=a(115);a(245);var m,d=s.StyleSheet.create({hello:{fontFamily:[{fontFamily:"Google Sans"}],fontSize:"10vw",color:"white",display:"table",margin:"25vh auto",userSelect:"none",overflow:"hidden",position:"relative"}}),p=function(){var e=Object(n.useState)(""),t=(e[0],e[1],Object(n.useState)("")),a=(t[0],t[1],Object(n.useState)("")),o=(a[0],a[1],Object(n.useState)(""));return o[0],o[1],l.a.createElement("div",{className:Object(s.css)(d.hello)},"Hello, ",l.a.createElement("br",null),"I'm Daniel")},u=a(246),f=a.n(u);var b=s.StyleSheet.create({aboutContainer:{width:"50rem",color:"white",zIndex:"6",fontSize:"3em",paddingTop:"2rem",marginBottom:"4em"},content:{margin:"2rem",marginLeft:"0",fontSize:"1.5rem",fontFamily:[{fontFamily:"Poppins"}]},resumeLink:(m={width:"100%",userSelect:"none",cursor:"pointer",fontSize:"2rem",background:"#191919",borderColor:"#4067a5",borderWidth:"2px",borderStyle:"solid",display:"inline-block",margin:"5px 0",padding:"5px",color:"white",textDecoration:"none"},m.cursor="pointer",m.transition="background 0.5s, color 0.5s",m[":hover"]={color:"#4067a5",background:"#e5f2fc"},m),torch:{width:"6em",float:"left",padding:"15px"}}),g=function(){return l.a.createElement("div",{className:Object(s.css)(b.aboutContainer)},"About",l.a.createElement("div",{className:Object(s.css)(b.content)},"I am a freshman at the University of Toronto and an aspiring full-stack web developer.",l.a.createElement("br",null),"While my love for software is rooted in its mathematics and functionality, I've recently found myself playing with the client-side and learning UX/UI design.",l.a.createElement("br",null),"Currently in Toronto, Canada",l.a.createElement("br",null),l.a.createElement("a",{className:Object(s.css)(b.resumeLink),href:f.a,target:"_blank"},"Check Out My Resume (PDF)")))};var h=s.StyleSheet.create({projectsContainer:{width:"50rem",color:"white",zIndex:"6",fontSize:"3em",paddingTop:"2rem",marginBottom:"4em",marginLeft:"auto",marginRight:"0"},content:{margin:"2rem",marginLeft:"0",fontSize:"1.5rem",fontFamily:[{fontFamily:"Poppins"}]},description:{marginLeft:"1em",marginBottom:"2em",fontSize:"0.8rem",fontFamily:[{fontFamily:"B612 Mono"}]},projectLink:{width:"100%",userSelect:"none",curser:"pointer",fontSize:"2rem",background:"#191919",borderColor:"#4067a5",borderWidth:"2px",borderStyle:"solid",display:"inline-block",margin:"5px 0",padding:"5px",color:"white",textDecoration:"none",transition:"background 0.5s, color 0.5s",":hover":{color:"#4067a5",background:"#e5f2fc"}}}),v=function(){return l.a.createElement("div",{className:Object(s.css)(h.projectsContainer)},"Projects",l.a.createElement("div",{className:Object(s.css)(h.content)},l.a.createElement("a",{className:Object(s.css)(h.projectLink),href:"https://github.com/Dancharr/Portfolio",target:"_blank"},"Portfolio"),l.a.createElement("div",{className:Object(s.css)(h.description)},"This simple static react app."),l.a.createElement("a",{className:Object(s.css)(h.projectLink),href:"https://github.com/Dancharr/Aaron-and-Daniel-9D-Bomberman",target:"_blank"},"BomberPerson"),l.a.createElement("div",{className:Object(s.css)(h.description)},"Java remake of the first Super Bomberman."),l.a.createElement("a",{className:Object(s.css)(h.projectLink),href:"https://github.com/Dancharr/idle-app",target:"_blank"},"World of Irucraft"),l.a.createElement("div",{className:Object(s.css)(h.description)},"A work in progress incremental game."),l.a.createElement("br",null),l.a.createElement("br",null),"A bit empty but not for long."))},E=a(247),j=a.n(E);var w={fontFamily:"B612 Mono"},x=s.StyleSheet.create({contactContainer:{width:"50rem",color:"white",paddingTop:"2rem",margin:"3em auto",marginBottom:"20em"},text:{display:"flex",alignItems:"flex-end",fontSize:"4rem"},chat:{float:"left"},info:{float:"left",fontSize:"0.8rem",paddingBottom:"0.7rem",marginLeft:"0.5rem",fontFamily:[w]},textInput:{outline:"none",backgroundColor:"#191919",color:"white",padding:"12px 10px",borderColor:"#4067a5",borderWidth:"0 0 3px 0",borderStyle:"solid",boxSizing:"border-box",marginBottom:"10px",width:"100%"},message:{width:"100%",height:"10em"},submit:{userSelect:"none",padding:"5px",fontSize:"2rem",background:"#191919",borderColor:"#044489",borderWidth:"2px",borderStyle:"solid",display:"inline-block",marginTop:"5px",color:"white",cursor:"pointer",marginRight:"1rem",transition:"background 0.5s, color 0.5s",":hover":{background:"#e5f2fc",color:"#044489"}},confirm:{float:"right",paddingLeft:"5rem",fontFamily:[w]},red:{color:"#b32819"},blue:{color:"#73c1f4"}}),S=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],o=Object(n.useState)(""),r=o[0],c=o[1],m=Object(n.useState)(""),d=m[0],p=m[1],u=Object(n.useState)(""),f=u[0],b=u[1],g=Object(n.useState)(!1),h=g[0],v=g[1],E=Object(n.useState)(""),w=E[0],S=E[1],O=Object(n.useState)(""),y=O[0],k=O[1],N=Object(n.useState)("Send"),C=N[0],z=N[1],M=function(e){e.preventDefault(),z("...sending"),v(!1);var n={dataName:t,dataEmail:r,dataCell:f,dataMessage:d};j.a.post("/send",n).then(function(e){v(!0),k("blue"),S("Message Sent"),a(""),c(""),p(""),b(""),z("Send"),console.log(e)}).catch(function(){v(!0),k("red"),S("Error Sending Message"),console.log("Message not sent")})};return l.a.createElement("div",{className:Object(s.css)(x.contactContainer)},l.a.createElement("div",{className:Object(s.css)(x.text)},l.a.createElement("div",{className:Object(s.css)(x.chat)},"Let's Chat"),l.a.createElement("div",{className:Object(s.css)(x.info)},"Email: daniel.xia.279@gmail.com",l.a.createElement("br",null),"Tel: (647)-909-9338")),l.a.createElement("form",{onSubmit:function(e){return M(e)}},l.a.createElement("input",{type:"text",value:t,onInput:function(e){a(e.target.value)},placeholder:"Name",className:Object(s.css)(x.textInput)}),l.a.createElement("input",{type:"tel",value:f,onInput:function(e){b(e.target.value)},placeholder:"Phone Number",className:Object(s.css)(x.textInput)}),l.a.createElement("input",{type:"email",value:r,onInput:function(e){c(e.target.value)},placeholder:"Email",className:Object(s.css)(x.textInput)}),l.a.createElement("textarea",{value:d,onInput:function(e){p(e.target.value)},placeholder:"Write something..",className:Object(s.css)(x.textInput,x.message)}),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:Object(s.css)(x.submit)},C),h?l.a.createElement("span",{className:Object(s.css)(x.confirm,x[y])},l.a.createElement(i.a,{bottom:!0},w)):l.a.createElement("span",null))))},O=a(217);var y,k=s.StyleSheet.create({navbar:{height:"100vh",width:"120px",position:"fixed",color:"#5d95ef",right:"50px",top:"0px"},line:{position:"absolute",top:"21%",right:"11%",height:"45%",width:"0.3em",background:"white"},buttonContainer:{width:"auto",height:"auto",position:"absolute",right:"0"},button:{background:"white",borderRadius:"50%",width:"2em",height:"2em",transition:"background 0.2s",":hover":{background:"#fc6fa2"},float:"right",userSelect:"none"},innerCircle:{},label:{fontFamily:[{fontFamily:"B612 Mono"}],color:"white",float:"right",userSelect:"none",paddingTop:"0.4em",paddingRight:"0.3em"},top:{top:"20%"},about:{top:"35%"},projects:{top:"50%"},contact:{top:"65%"}}),N=function(e){var t=Object(n.useState)(""),a=(t[0],t[1]);return l.a.createElement("div",{className:Object(s.css)(k.navbar),onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}},l.a.createElement("div",{className:Object(s.css)(k.line)}),l.a.createElement("div",{className:Object(s.css)(k.buttonContainer,k.top)},l.a.createElement("div",{className:Object(s.css)(k.button),onClick:function(){return O.animateScroll.scrollToTop({duration:800})}}),l.a.createElement("div",{className:Object(s.css)(k.label)},"Top")),l.a.createElement("br",null),l.a.createElement("div",{className:Object(s.css)(k.buttonContainer,k.about)},l.a.createElement("div",{className:Object(s.css)(k.button),onClick:function(){return O.animateScroll.scrollTo(e.aboutRef.current.offsetTop,{duration:800})}}),l.a.createElement("div",{className:Object(s.css)(k.label)},"About")),l.a.createElement("br",null),l.a.createElement("div",{className:Object(s.css)(k.buttonContainer,k.projects)},l.a.createElement("div",{className:Object(s.css)(k.button),onClick:function(){return O.animateScroll.scrollTo(e.projectsRef.current.offsetTop,{duration:800})}}),l.a.createElement("div",{className:Object(s.css)(k.label)},"Projects")),l.a.createElement("br",null),l.a.createElement("div",{className:Object(s.css)(k.buttonContainer,k.contact)},l.a.createElement("div",{className:Object(s.css)(k.button),onClick:function(){return O.animateScroll.scrollTo(e.contactRef.current.offsetTop,{duration:800})}}),l.a.createElement("div",{className:Object(s.css)(k.label,k.fade)},"Contact")))};var C=s.StyleSheet.create({contactbar:{height:"100vh",width:"5vw",position:"absolute",color:"#5d95ef",left:"25px",top:"0px"},svg:{width:"75%",":hover .icon":{fill:"#fc6fa2"}},icon:{":hover":{fill:"#fc6fa2"}},buttonContainer:(y={width:"auto",height:"auto",position:"absolute",right:"0"},y.width="75%",y),label:{fontFamily:[{fontFamily:"Google Sans"}],color:"white",float:"right",userSelect:"none",paddingTop:"0.4em",paddingRight:"0.3em"},github:{top:"10vh"},linkedin:{top:"30vh"}}),z=function(e){var t=Object(n.useState)(""),a=(t[0],t[1]);return l.a.createElement("div",{className:Object(s.css)(C.contactbar),onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}},l.a.createElement("div",{className:Object(s.css)(C.buttonContainer,C.github)},l.a.createElement("a",{className:Object(s.css)(C.svg),href:"https://github.com/Dancharr?tab=repositories",target:"_blank"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},l.a.createElement("g",{className:"icon",fill:"white"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),l.a.createElement("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})))),l.a.createElement("div",{className:Object(s.css)(C.label)},"Github")),l.a.createElement("div",{className:Object(s.css)(C.buttonContainer,C.linkedin)},l.a.createElement("a",{className:Object(s.css)(C.svg),href:"https://www.linkedin.com/in/daniel-xia-094581171/",target:"_blank"},l.a.createElement("svg",{id:"Linkedin",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},l.a.createElement("path",{className:"icon",fill:"white",id:"plain",d:"M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"}))),l.a.createElement("div",{className:Object(s.css)(C.label)},"LinkedIn")))};a(272);var M=function(e){var t=s.StyleSheet.create({waterdrop:{position:"absolute",left:e.left,top:e.top},svg:{width:"20vh",height:"20vh"}}),a=[{speed:300,size:"20%",colour:"#73c1f4"},{speed:-50,size:"15%",colour:"#2173a8"},{speed:-100,size:"10%",colour:"#0e4b72"},{speed:-200,size:"5%",colour:"#063c5e"}],o=Object(n.useState)(a[e.depth-1].speed),c=o[0],i=(o[1],Object(n.useState)(a[e.depth-1].size)),m=i[0],d=(i[1],Object(n.useState)(a[e.depth-1].colour)),p=d[0];return d[1],l.a.createElement(r.Parallax,{y:[c,-1*c],className:Object(s.css)(t.waterdrop)},l.a.createElement("svg",{className:Object(s.css)(t.svg)},l.a.createElement("circle",{fill:p,cx:m,cy:m,r:m})))};var I=s.StyleSheet.create({parallaxContainer:{},absoParallax:{position:"absolute"},stalac:{width:"100vw"},parallax1:{position:"absolute",left:"30%",top:"10%"},parallax2:{position:"absolute",left:"50%",top:"15%"},parallax3:{position:"absolute",left:"40%",top:"25%"}}),L=Object(r.withController)(function(e){Object(n.useEffect)(function(){return e.parallaxController.update(),e.parallaxController.update(),void console.log("updated")},[]);var t=[{depth:1,left:"65%",top:"10%"},{depth:2,left:"40%",top:"15%"},{depth:3,left:"80%",top:"20%"},{depth:1,left:"20%",top:"18%"},{depth:1,left:"55%",top:"25%"},{depth:2,left:"30%",top:"28%"},{depth:2,left:"76%",top:"32%"},{depth:1,left:"34%",top:"38%"},{depth:3,left:"17%",top:"45%"},{depth:2,left:"67%",top:"51%"},{depth:1,left:"73%",top:"56%"},{depth:1,left:"40%",top:"62%"},{depth:2,left:"12%",top:"65%"},{depth:1,left:"67%",top:"73%"},{depth:4,left:"38%",top:"84%"},{depth:2,left:"94%",top:"86%"},{depth:3,left:"48%",top:"91%"}];return l.a.createElement("div",null,l.a.createElement(r.Parallax,{y:[-50,50],className:Object(s.css)(I.absoParallax)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(s.css)(I.stalac),viewBox:"0 0 1920 1080",id:"svg40"},l.a.createElement("g",{transform:"translate(9.796 166.53)",id:"layer5"},l.a.createElement("path",{d:"m -44.901278,320.95455 12.828937,239.4735 14.967092,79.11177 23.5197173,62.00653 10.6907807,79.11177 12.828936,64.14468 42.763122,-130.42752 -10.69078,-111.1841 8.552624,-104.76966 47.039439,94.07888 -8.55263,44.90127 6.41447,79.11176 12.82894,53.45391 14.96709,32.07234 4.27631,-70.55914 -2.13815,-38.48682 42.76312,-57.7302 29.93418,-98.3552 4.27632,-96.21703 4.27631,-132.56567 2.13816,218.09191 21.38156,72.69732 19.24339,115.46043 21.38156,-102.63147 6.41448,-89.80258 -6.41448,-57.7302 V 406.4808 l 6.41448,-83.38809 23.51971,-104.76965 4.27633,-147.532769 8.55261,-134.703837 21.38156,211.677456 27.79604,164.63802 v 121.87491 l 12.82893,111.18411 25.65789,-94.07888 10.69078,-119.73673 -2.13818,-85.52625 -8.5526,-98.35518 21.38156,89.80256 19.24341,81.24993 27.79601,111.18411 27.79604,113.32228 14.96708,-186.01957 c 0,0 -12.82893,-62.00653 -14.96708,-74.83546 -2.13815,-12.82896 -17.10526,-89.80257 -19.24341,-102.63151 -2.13815,-12.82893 4.2763,-205.262986 4.2763,-205.262986 l 4.27633,-168.914334 29.93419,23.51972 2.13815,74.835463 -2.13815,117.598586 -4.27633,124.013051 8.55263,59.86838 6.41448,100.49334 29.93417,-109.04597 -10.69078,-83.38809 V -4.0451743 l 70.55916,-132.5656857 -4.2763,160.361715 -12.82896,98.355185 21.38156,68.42099 v 34.2105 l 6.41448,96.21702 10.69078,25.65789 14.96708,-53.4539 2.13818,-98.35519 -17.10526,-104.769654 29.93419,-132.565681 12.82893,-138.980145 10.69078,156.085394 17.10526,109.045964 -8.55263,55.592062 21.38156,55.59206 21.38156,76.97363 2.13815,-55.59207 -19.24341,-91.94072 29.93419,-94.078867 19.24341,102.631497 2.13816,70.55915 12.82893,53.4539 14.96711,-85.52624 19.24341,-166.7761797 6.41445,106.9078097 14.96711,94.07887 8.5526,-62.00653 23.51974,76.97362 19.24338,-138.980148 14.96711,-100.493339 4.2763,119.736747 8.55263,147.53277 27.79604,119.73675 4.2763,-147.53278 14.96708,-83.38809 59.86837,111.18412 19.2434,119.73675 4.2763,-186.01959 12.829,-91.940714 40.6249,115.460434 v 81.24993 l -10.6908,76.97362 38.4869,-76.97362 57.7302,-89.80256 -34.2105,126.15121 4.2763,83.38809 40.625,113.32228 c 0,0 8.5526,-121.87491 10.6907,-132.56569 2.1382,-10.69078 17.1053,-111.18411 17.1053,-111.18411 l 36.3486,-12.82894 -2.1381,81.24993 -19.2434,44.9013 14.9671,126.15118 14.9671,40.62498 v -74.83547 l 27.796,-102.63147 21.3816,-138.98016 8.5526,149.67094 12.8289,109.04595 -6.4144,32.07234 -23.5198,53.45391 83.3881,-130.42752 25.6579,-156.08541 34.2105,59.86838 17.1052,83.38807 -19.2434,64.14468 -4.2763,124.01307 29.9342,85.52624 6.4145,-153.94723 14.9671,-68.42101 2.1381,-179.60511 12.829,151.8091 8.5526,104.76963 12.8289,113.32228 44.9013,-83.38809 25.6579,-175.32879 72.6973,179.60512 -21.3816,98.35517 6.4145,89.80255 14.9671,-104.76963 21.3816,-66.28286 8.5526,-162.49986 27.796,138.98015 12.8289,145.39462 4.2764,109.04596 23.5197,-162.49986 4.2763,102.63148 23.5197,-136.84197 36.3487,245.88795 10.6907,-168.91434 19.2435,-64.14468 12.8289,-83.38809 109.0459,-14.96711 126.1513,-339.96681 -36.3487,-697.0389 c 0,0 -1107.5649,-17.10526 -1186.67665,-17.10526 -79.11176,0 -1426.15013,79.11179 -1426.15013,79.11179 l 395.55887,391.282565 z",id:"path3774",fill:"#513b08",stroke:"#513b08"})))),l.a.createElement(r.Parallax,{y:[-30,30],className:Object(s.css)(I.absoParallax)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(s.css)(I.stalac),viewBox:"0 0 1920 1080",id:"svg40"},l.a.createElement("g",{transform:"translate(-9.796 78.367)",id:"layer2"},l.a.createElement("path",{d:"m -27.796029,415.03338 4.276311,151.8091 38.486811,91.9407 v 126.15121 l 21.381563,64.14471 -2.138156,156.0854 23.519717,-68.421 12.828937,-62.00654 14.967093,-91.94072 2.138156,-166.77619 27.796027,-132.56566 10.69079,132.56566 36.34865,188.15775 -4.27631,136.842 12.82894,36.34867 19.2434,-100.49336 8.55263,-100.49332 -29.93419,-113.32229 21.38156,-132.56569 17.10525,-134.70384 32.07234,-220.23008 27.79602,47.03943 -36.34864,126.15122 8.55262,153.94726 38.4868,151.80907 -4.2763,-181.74326 -14.96709,-147.53278 32.07235,-98.35519 25.65786,-153.947251 42.76313,314.308971 44.90127,66.28284 42.76315,162.49985 19.24338,130.42755 6.41448,-226.64457 L 502.46671,374.4084 466.11804,205.49408 517.43379,70.790233 536.6772,226.87564 575.16402,160.59279 v 100.49334 l 10.69078,149.67094 23.51971,-2.13815 -2.13815,83.3881 34.2105,-102.63151 -36.34865,-85.52624 V 75.066545 l 19.24339,109.045965 21.38156,96.21702 66.28286,57.73023 -8.55263,-156.0854 47.03942,-64.14469 L 737.66388,-4.0452328 803.94674,167.00726 c 0,0 29.93416,-126.151212 21.38156,-126.151212 -8.55263,0 8.5526,-96.21703 8.5526,-96.21703 l 34.21052,-32.072342 62.00654,113.322278 -2.13818,38.486811 34.21052,70.559155 19.24338,89.80256 -2.13815,104.76965 14.96711,47.03945 12.82896,83.38807 17.1052,-91.9407 -14.9671,-76.97364 10.6908,-117.59858 -21.38156,-79.111777 27.79606,-104.769654 12.8289,74.835466 19.2434,62.006525 21.3816,36.34866 -2.1382,51.31575 2.1382,79.11179 19.2434,94.07887 4.2763,-68.42101 -2.1382,-85.52625 21.3816,-76.97362 4.2763,-121.874901 34.2105,115.460431 25.6579,83.38809 6.4145,111.18411 25.6578,115.46044 21.3816,-27.79602 -17.1053,-72.69731 2.1382,-98.35519 12.8289,-104.76965 36.3487,160.36172 21.3815,109.04596 6.4145,113.32228 12.829,27.79604 -2.1382,-36.34867 -2.1381,-74.83546 12.8289,-87.6644 -6.4145,-81.24994 -10.6908,-74.83547 36.3487,102.63151 2.1381,57.7302 10.6908,115.46044 8.5527,106.9078 14.967,64.14469 8.5527,-29.93417 -8.5527,-145.39462 23.5197,-62.00654 29.9342,-55.59205 19.2434,-64.14471 34.2105,-25.65786 72.6974,-27.79603 10.6907,156.08539 14.9671,83.3881 -4.2763,104.76965 -4.2763,79.11179 21.3816,81.24992 8.5526,-74.83546 17.1052,-70.55914 V 502.6978 l -4.2763,-100.49336 70.5592,-38.48682 12.8289,141.11833 27.7961,96.21702 6.4144,111.18411 -21.3815,53.45393 17.1052,79.11176 29.9342,51.31575 29.9342,-100.49335 25.6579,-138.98014 10.6907,96.21702 19.2435,74.83546 25.6578,44.9013 -17.1052,-145.39462 25.6578,-70.55916 12.829,-119.73674 17.1052,79.11176 36.3487,-42.76312 89.8026,-179.60512 203.1248,-579.44032 -322.8616,-252.30243 -1937.169506,-53.4539 -478.946974,27.79604 64.14468,692.76259 168.91434,260.85505 z",id:"path3768",fill:"#7a590c",stroke:"#7a590c"})))),l.a.createElement("div",{y:[0,0],className:Object(s.css)(I.absoParallax)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(s.css)(I.stalac),viewBox:"0 0 1920 1080",id:"svg40"},l.a.createElement("g",{id:"layer1",transform:"translate(-16.37 825.095)"},l.a.createElement("path",{d:"m -15.119047,-614.67866 33.261904,320.52379 34.773809,134.55954 7.559524,145.142851 25.702381,117.928569 6.047619,137.58334 18.14286,10.58333 -1.51191,-69.54763 6.04762,-86.178578 -15.119046,-126.999998 42.333336,-217.714274 -9.07143,-134.55951 31.75,155.72618 28.72619,223.7619044 37.79761,98.2738156 -9.07142,-80.130966 -19.65476,-66.523817 4.53571,-179.916667 -9.07143,-119.44045 36.28572,-99.78573 31.75,-78.61904 9.07142,-28.72619 6.04761,-24.19048 13.60715,6.04763 3.02382,72.57142 -4.53573,90.7143 18.14288,43.84521 4.5357,52.91667 10.58333,71.05954 12.09524,43.84524 v -60.47621 l -1.51191,-49.89285 3.02382,-69.5476 -7.55952,-48.38097 18.14285,-166.30952 25.70237,-49.89285 13.60715,71.05952 21.16667,78.61906 -1.51191,98.27379 13.60715,102.80951 16.63094,52.91667 -1.51188,54.42857 15.11903,34.77382 -3.02382,34.77382 18.14288,-36.28573 1.51191,-71.05951 -7.55955,-105.83333 13.60715,-179.91667 25.7024,-46.86905 -13.60715,-61.98809 43.84524,-60.47619 52.91666,69.54762 -9.07142,90.71428 6.04761,37.79761 12.09524,-39.30952 3.02381,-45.35714 19.65476,-45.35714 15.11903,120.95238 -4.53569,125.48809 7.55951,61.98809 7.55952,40.82142 7.55954,-36.2857 c 0,0 -9.07145,-16.63096 -9.07145,-28.72618 0,-12.09524 12.09524,-143.63096 12.09524,-143.63096 l 6.04764,-95.25 33.2619,-60.47619 4.5357,155.72619 31.75,80.13096 -10.58333,105.83333 10.58333,51.40476 16.63097,-92.22621 9.07142,-74.08333 -19.65475,-148.16665 51.40475,-84.66667 3.02379,-78.61904 71.05955,-40.82143 6.0476,45.35714 25.7024,83.15476 6.0476,-27.21428 -12.09524,-51.40476 43.84524,-66.52381 71.05949,136.07142 -1.51185,250.9762 9.07145,184.45236 19.6547,-122.46427 c 0,0 -19.6547,-119.44048 -15.119,-136.07142 4.5357,-16.63097 42.3333,-95.25001 42.3333,-95.25001 l -25.7024,-123.97619 55.9405,-54.42857 27.2143,42.33333 60.4762,190.50001 c 0,0 -19.6548,57.45237 -19.6548,63.5 0,6.04761 21.1667,161.77379 21.1667,161.77379 l 16.6309,54.42857 1.5119,-84.66666 -13.6071,-78.61903 v -71.05955 l 39.3095,-77.10713 -21.1666,-68.03571 22.6785,-87.69048 54.4286,40.82143 -4.5357,58.96429 -4.5357,146.65475 31.75,77.10715 15.119,42.33334 -6.0476,-83.15476 -13.6071,-111.88097 46.869,-93.73808 37.7976,58.96428 4.5357,65.01189 3.0238,92.22621 -9.0714,58.96428 15.1191,127 12.0952,68.03572 6.0476,-71.05954 -4.5357,-57.45237 -3.0238,-54.42857 36.2857,-36.28573 -12.0952,-87.69045 c 0,0 -1.5119,-58.9643 -1.5119,-65.01191 0,-6.04763 33.2619,-54.42858 33.2619,-54.42858 l 46.869,98.27382 25.7024,101.29761 1.5119,108.85715 -12.0952,77.10712 7.5595,120.95239 13.6071,89.202391 6.0477,-77.107149 -7.5596,-71.059512 30.2381,-61.98812 -1.5119,-71.05952 -1.5119,-110.36903 22.6786,-65.01191 24.1905,68.0357 13.6071,145.14288 25.7024,68.0357 16.6309,-134.55952 24.1905,-86.17857 48.381,148.16666 16.6309,166.309516 -19.6547,166.309544 16.6309,31.75 16.631,-96.761911 31.75,-161.773819 7.5595,-151.19048 31.75,102.80954 24.1905,193.523792 24.1904,145.142878 4.5358,-77.10715 -7.5596,-122.464303 9.0715,-211.666667 40.8214,-166.30951 40.8214,-160.2619 69.5476,-430.89285 -544.2857,10.58333 -1262.44044,-22.67859 -515.55951,39.30955 139.09523,554.86903 z",id:"path60",fill:"#a57608",stroke:"#a57608"})))),l.a.createElement(r.Parallax,{y:[40,-51],className:Object(s.css)(I.absoParallax)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(s.css)(I.stalac),viewBox:"0 0 1920 1080",id:"svg40"},l.a.createElement("g",{id:"layer3"},l.a.createElement("path",{id:"path3805",d:"M -58.465211,90.768662 -51.449387,495.34793 -35.079126,298.9048 39.756343,537.44287 56.126601,336.32255 116.93042,93.107272 112.2532,266.1643 l 14.03166,102.89877 7.01582,-100.56017 51.44939,-154.34815 9.35443,-70.158255 14.03165,142.655115 2.33861,70.15825 28.0633,-140.31651 18.70887,49.11078 35.07911,-119.269028 7.01585,114.591808 30.4019,-35.07912 V 95.445879 l 70.15824,77.174081 4.67722,63.14243 30.40193,-147.332335 2.33859,65.481035 4.67723,42.09495 L 465.38307,65.04397 505.13942,172.61996 561.26601,36.980668 582.31351,149.23387 615.054,43.996495 V 100.1231 l 23.3861,70.15825 49.11077,-184.750067 9.35445,60.803819 84.18989,-198.781722 65.48104,149.670945 9.35443,28.063301 53.78799,-98.221553 9.35445,-44.433563 49.11077,123.9462487 51.44941,49.1107773 -39.75636,-168.379806 81.85126,81.851293 11.6931,51.449386 v 35.079127 l 65.481,-173.057026 -9.3544,135.639291 -7.0159,112.253199 46.7722,-161.363977 4.6772,-93.544333 35.0792,159.025371 28.0633,49.110777 11.693,44.433562 25.7247,-70.158257 2.3386,133.300687 37.4177,-63.14243 V 39.319278 l 46.7722,154.348152 -11.693,93.54435 51.4493,-180.07286 9.3545,-72.496859 32.7405,114.591809 v 77.17408 L 1475.6619,90.768662 V 27.626234 l 35.0792,133.300676 -14.0317,109.91459 14.0317,137.97791 23.386,-180.07285 18.7089,-119.26903 V 36.980668 l 49.1108,144.993722 -23.3861,116.93041 25.7247,98.22156 53.788,-245.55388 v 175.39564 l 72.4968,133.30066 -23.386,-121.60763 32.7405,-152.00954 35.0791,245.55387 39.7563,130.96209 23.3861,-182.41145 28.0633,81.85129 72.4969,-327.40519 63.1424,-271.27857 L 837.22183,-208.57322 9.3544337,-96.320012 Z",fill:"#4f330f",stroke:"#4f330f",strokeWidth:"0.265"})))),l.a.createElement(M,t[0]),l.a.createElement(M,t[1]),l.a.createElement(M,t[2]),l.a.createElement(M,t[3]),l.a.createElement(M,t[4]),l.a.createElement(M,t[5]),l.a.createElement(M,t[6]),l.a.createElement(M,t[7]),l.a.createElement(M,t[8]),l.a.createElement(M,t[9]),l.a.createElement(M,t[10]),l.a.createElement(M,t[11]),l.a.createElement(M,t[12]),l.a.createElement(M,t[13]),l.a.createElement(M,t[14]),l.a.createElement(M,t[15]),l.a.createElement(M,t[16]))});s.StyleSheet.create({rowLineContainer:{width:"100%",height:"100%",position:"absolute"},row:{width:"100%",height:"5%",border:"solid",borderWidth:"1px 0px 0px 0px",borderColor:"black",boxSizing:"border-box"}});var P=s.StyleSheet.create({mainWrapper:{margin:"0",padding:"0",border:"0",boxSizing:"border-box",backgroundColor:"#191919",position:"relative",overflow:"hidden"},contentWrapper:{margin:"0",paddingLeft:"10%",paddingRight:"10%",border:"0",boxSizing:"border-box",position:"relative",overflow:"hidden"},container:{width:"100%",zIndex:"5"}}),T=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null),o=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=document.getElementById("loading-page"),t=document.getElementById("loading-page2"),a=document.getElementById("loading-page3");e&&(e.classList.add("slide-out"),t.classList.add("slide-out-longer"),a.classList.add("slide-out-longerer"),setTimeout(function(){e.outerHTML="",console.log("removed")},1e3),setTimeout(function(){t.outerHTML="",console.log("removed")},1e3),setTimeout(function(){a.outerHTML="",console.log("removed")},1e3))},[]),l.a.createElement("div",{className:Object(s.css)(P.mainWrapper)},l.a.createElement(L,null),l.a.createElement("div",{className:Object(s.css)(P.contentWrapper)},l.a.createElement(p,null),l.a.createElement("div",{className:Object(s.css)(P.container),ref:e},l.a.createElement(g,null)),l.a.createElement("div",{className:Object(s.css)(P.container),ref:t},l.a.createElement(v,null)),l.a.createElement(z,null),l.a.createElement(N,{aboutRef:e,contactRef:a,projectsRef:t,quransRef:o}),l.a.createElement("div",{className:Object(s.css)(P.container),ref:a},l.a.createElement(S,null))))},B=(a(273),s.StyleSheet.create({mainContainer:{margin:"0",padding:"0",border:"0"}}));t.default=function(){return l.a.createElement(r.ParallaxProvider,{className:Object(s.css)(B.mainContainer)},l.a.createElement(o.Helmet,null,l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=B612+Mono|Poppins&display=swap",rel:"stylesheet"}),l.a.createElement("title",null,"Daniel Xia | Welcome!")),l.a.createElement("div",{class:"loading-page loading-page3",id:"loading-page3"}),l.a.createElement("div",{class:"loading-page loading-page2",id:"loading-page2"}),l.a.createElement("div",{class:"loading-page",id:"loading-page"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"svg8",viewBox:"0 0 210 297",class:"svg"},l.a.createElement("g",{id:"layer1",strokeWidth:"0.265"},l.a.createElement("path",{id:"path10",d:"M 96.00595,104.98809 46.869048,239.54762 69.547617,253.91071 146.65476,132.20238 Z",fill:"#999",stroke:"#999"}),l.a.createElement("path",{id:"path12",d:"m 83.15476,129.93452 -5.291667,15.875 47.624997,26.45833 8.31548,-11.33928 z",fill:"#666",stroke:"#666"})),l.a.createElement("g",{id:"layer2",strokeWidth:"0.265"},l.a.createElement("path",{id:"path21",d:"m 99.02976,91.380952 -6.80357,-19.654763 18.14286,-29.482142 4.53571,31.749999 -0.75595,21.922621 z",fill:"#f60",stroke:"#f60"}),l.a.createElement("path",{id:"path23",d:"m 120.95238,68.70238 -3.02381,-33.261903 11.33929,-16.630953 6.04761,15.874998 21.16667,-25.7023794 -2.26786,40.0654764 z",fill:"#f95",stroke:"#f95"}),l.a.createElement("path",{id:"path25",d:"M 120.95238,97.42857 V 74.75 L 141.36309,64.166667 142.11905,90.625 Z",fill:"#d45500",stroke:"#d45500"}),l.a.createElement("path",{id:"path27",d:"M 145.14286,92.136903 127,102.72024 148.16666,113.30357 164.79762,96.672618 158.75,58.119046 146.65476,58.875001 Z",fill:"#d45500",stroke:"#d45500"}),l.a.createElement("path",{id:"path29",d:"m 159.50595,48.291667 3.77976,-34.77381 13.60715,-5.2916665 -1.51191,18.1428565 21.92262,-9.827381 -15.875,32.505953 -2.26786,40.821427 -4.53571,6.047621 z",fill:"#f95",stroke:"#f95"}),l.a.createElement("path",{id:"path33",d:"m 167.06547,102.72024 -15.11904,13.60714 39.30952,-15.875 -9.07143,-8.315477 z",fill:"#ff7f2a",stroke:"#ff7f2a"})),";",l.a.createElement("g",{id:"layer3"},l.a.createElement("text",{id:"text3813",y:"283.13312",x:"46.471016",style:{fontStyle:"normal",fontWeight:"normal",fontSize:"30.14106941px",lineHeight:"1.25",fontFamily:"sans-serif",letterSpacing:0,wordSpacing:0,fill:"#000000",fillOpacity:1,stroke:"none",strokeWidth:"0.75352675"},xmlSpace:"preserve"},l.a.createElement("tspan",{style:{strokeWidth:"0.75352675",InkscapeFontSpecification:'"Palatino Linotype Bold"',fontFamily:'"Palatino Linotype"',fontWeight:"bold",fontStyle:"normal",fontStretch:"normal",fontVariant:"normal",stroke:"#ffffff",fill:"#ffffff"},y:"283.13312",x:"46.471016",id:"tspan3811"},"Loading"))))),l.a.createElement(T,null))}},189:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},194:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(5),r=a.n(o);a(41),a(189),l.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},195:function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),l=a.n(n),o=a(5),r=a.n(o),c=a(84),i=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=i},245:function(e,t,a){e.exports=a.p+"static/dragon-d851d1888dd9e917f545bb7f884c98e0.png"},246:function(e,t,a){e.exports=a.p+"static/resume-be861f4ce085612e81be8b6479c2f56b.pdf"},272:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGlkPSdzdmc4JyB2aWV3Qm94PScwIDAgMjEwIDI5NycKaGVpZ2h0PScyOTdtbScgd2lkdGg9JzIxMG1tJz4KICAgIDxnIGlkPSdsYXllcjEnPgogICAgICAgIDxjaXJjbGUgcj0nNTEuMDI3JyBjeT0nMTMxLjA2OCcgY3g9JzEwMC45MicgaWQ9J3BhdGgxMicgZmlsbD0nIzBmZicgc3Ryb2tlPScjMDAwJwogICAgICAgIHN0cm9rZVdpZHRoPScwLjI2NScgLz4KICAgIDwvZz4KPC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-index-js-b7185ca47e34a197497d.js.map