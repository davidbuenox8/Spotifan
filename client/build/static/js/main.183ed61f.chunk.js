(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(t,A,e){},39:function(t,A,e){},64:function(t,A,e){"use strict";e.r(A);var s=e(1),a=e.n(s),r=e(31),n=e.n(r),i=(e(38),e(14)),c=e(3),o=e(4),l=e(6),h=e(5),g=(e(39),e(7)),u=e(15),C=e(2),d=e.n(C),I=function(t,A){return d.a.post("/api/auth/signup",{username:t,password:A}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},j=function(t,A){return d.a.post("/api/auth/login",{username:t,password:A}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},b=function(){return d.a.delete("/api/auth/logout").then((function(t){return t.data})).catch((function(t){return t.response.data}))},E=e(9),m=e(0),B=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={username:"",password:"",message:""},t.handleChange=function(A){var e=A.target,s=e.name,a=e.value;t.setState(Object(u.a)({},s,a))},t.handleSubmit=function(A){A.preventDefault();var e=t.state,s=e.username,a=e.password;I(s,a).then((function(A){A.message?t.setState({message:A.message,username:"",password:""}):(t.props.setUser(A),t.props.history.push("/dashboard"))}))},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)("h1",{children:"Sign Up"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"userpasscontainer",children:[Object(m.jsxs)("label",{htmlFor:"username",children:[" ",Object(m.jsx)("strong",{children:" Username:"})," "]}),Object(m.jsx)("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(m.jsxs)("label",{htmlFor:"password",children:[Object(m.jsx)("strong",{children:"Password:"})," "]}),Object(m.jsx)("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"logcontainer",children:[Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)("div",{className:"signup",children:Object(m.jsxs)(E.b,{to:"/",children:[" ",Object(m.jsx)("strong",{children:"Back"})," "]})})}),Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)("strong",{children:"Sign Up"})})})]}),this.state.message&&Object(m.jsx)("h4",{className:"message",children:this.state.message})]})]})}}]),e}(s.Component),w=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={username:"",password:"",message:""},t.handleChange=function(A){var e=A.target,s=e.name,a=e.value;t.setState(Object(u.a)({},s,a))},t.handleSubmit=function(A){A.preventDefault();var e=t.state,s=e.username,a=e.password;j(s,a).then((function(A){A.message?t.setState({message:A.message,username:"",password:""}):(t.props.setUser(A),t.props.history.push("/dashboard"))}))},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)("h1",{children:"Log In"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"userpasscontainer",children:[Object(m.jsxs)("label",{htmlFor:"username",children:[" ",Object(m.jsx)("strong",{children:" Username:"})," "]}),Object(m.jsx)("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(m.jsxs)("label",{htmlFor:"password",children:[Object(m.jsx)("strong",{children:"Password:"})," "]}),Object(m.jsx)("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"logcontainer",children:[Object(m.jsx)("div",{className:"signup",children:Object(m.jsxs)(E.b,{to:"/",children:[" ",Object(m.jsx)("strong",{children:"Back"})," "]})}),Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)("strong",{children:"Log in"})})})]})]}),this.state.message&&Object(m.jsx)("h4",{className:"message",children:this.state.message})]})}}]),e}(s.Component),Q=e(33),p=function(t){var A=t.component,e=t.user,s=t.path,a=t.redirectPath,r=void 0===a?"/":a,n=Object(Q.a)(t,["component","user","path","redirectPath"]);return Object(m.jsx)(g.b,{exact:!0,path:s,render:function(t){return e?Object(m.jsx)(A,Object(i.a)(Object(i.a)(Object(i.a)({},t),n),{},{user:e})):Object(m.jsx)(g.a,{to:r})}})};function O(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png",alt:"Spotify.logo"}),Object(m.jsx)("h1",{children:"Spotifan"})]}),Object(m.jsxs)("p",{className:"pIntro",children:["No more missing out on music!","\n"]}),Object(m.jsx)("p",{className:"pIntro",children:"Keep track of all new releases from your favorite artists on Spotify."}),Object(m.jsxs)("div",{className:"logcontainer",children:[Object(m.jsx)("div",{className:"signup",children:Object(m.jsxs)(E.b,{to:"/signup",children:[" ",Object(m.jsx)("strong",{children:"Sign Up"})," "]})}),Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)(E.b,{to:"/login",children:Object(m.jsx)("strong",{children:"Log In"})})})]})]})}var v={width:"35px"},F=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={avatar:""},t}return Object(o.a)(e,[{key:"getUser",value:function(){var t=this;d.a.get("/api/users").then((function(A){t.setState({avatar:A.data.avatar})}))}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{children:[Object(m.jsx)("h3",{children:this.state.avatar?Object(m.jsx)("a",{href:"/profile",children:Object(m.jsx)("img",{className:"profileImgNav",src:this.state.avatar,alt:"avatar"})}):Object(m.jsx)("a",{href:"/profile",children:Object(m.jsx)("img",{className:"profileImgNav",src:"https://freesvg.org/img/abstract-user-flat-3.png",alt:""})})}),Object(m.jsxs)("h3",{children:[" ",Object(m.jsxs)("a",{href:"/dashboard",children:[" ",Object(m.jsx)("img",{style:v,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png",alt:"Home"}),"  "]})," "]}),Object(m.jsx)("h3",{children:Object(m.jsxs)("a",{href:"/artistSearch",children:[" ",Object(m.jsx)("img",{style:v,src:"https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png",alt:""})]})})]})})}}]),e}(a.a.Component),x={width:"100px"},f={width:"50px"},Y={width:"30px"},M=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={albumObj:t.props.album,albumName:t.props.album.artists[0].name,albumIdFromSpotify:t.props.album.id,userSavedAlbums:t.props.userSavedAlbums},t.bookmarkButton=function(A){A.preventDefault();var e=t.state,s=e.albumObj,a=e.albumName,r=e.albumIdFromSpotify;d.a.post("/api/albums",{albumObj:s,albumName:a,albumIdFromSpotify:r}).then((function(A){var e=A.data.savedAlbums.map((function(t){return t.albumIdFromSpotify}));t.setState({userSavedAlbums:e})}))},t.unbookmarkButton=function(A){A.preventDefault(),d.a.delete("/api/albums/".concat(t.state.albumIdFromSpotify)).then((function(A){var e=A.data.savedAlbums.map((function(t){return t.albumIdFromSpotify}));t.setState({userSavedAlbums:e}),t.props.userFollowedArtists()}))},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"albumResults",children:[this.props.album.images[0]?Object(m.jsx)("img",{style:x,src:this.props.album.images[0].url,alt:this.props.album.name}):Object(m.jsx)("img",{style:x,src:"https://peelander-z.com/wp-content/themes/soundcheck/images/default-album-artwork.png",alt:""}),Object(m.jsxs)("div",{className:"albumContent",children:[Object(m.jsx)("h4",{children:this.props.album.name}),Object(m.jsxs)("p",{className:"pAlbum",children:["By: ",this.props.album.artists[0].name]}),Object(m.jsxs)("div",{className:"bookandlogo",children:[Object(m.jsxs)("a",{href:this.props.album.external_urls.spotify,children:[" ",Object(m.jsx)("img",{style:f,src:"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png",alt:""})]}),this.state.userSavedAlbums.includes(this.state.albumIdFromSpotify)||"true"===this.props.bookmark?Object(m.jsxs)("button",{onClick:this.unbookmarkButton,children:[" ",Object(m.jsx)("img",{style:Y,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlYAAAJTCAYAAADKaFisAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA1LTE2VDEyOjMxOjUyKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNS0xNlQxMjozNTo1OCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0xNlQxMjozNTo1OCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMmQ2NmNhNi1hZThjLTA2NGMtOWI2NC1hN2U3OTAxZTkyZmEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MjRmOGRhMS1kN2Y3LTdiNDctOThlMi1mOTE1NjFiZDA3NjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZDJhZTU3Ni01MDRhLWJlNDktYjdmOS01Yzg2ZmRkNGE2YmUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkMmFlNTc2LTUwNGEtYmU0OS1iN2Y5LTVjODZmZGQ0YTZiZSIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0xNlQxMjozMTo1MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMmQ2NmNhNi1hZThjLTA2NGMtOWI2NC1hN2U3OTAxZTkyZmEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTZUMTI6MzU6NTgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5dMPyoAAARlUlEQVR4nO3dS5LcuBWGUZajp96BI7z/ZXWEd+AFlAdttUqlfPDxE7gAzpmoRxIJgLxfliLVH5+fnxsAANf9o/cFAADMQlgBAIQIKwCAEGEFABAirAAAQoQVAECIsAIACBFWAAAhwgoAIERYAQCECCsAgBBhBQAQIqwAAEKEFQBAiLACAAgRVgAAIcIKACBEWAEAhAgrAIAQYQUAECKsAABChBUAQIiwAgAIEVYAACF/9L4A+OE///7nZ+9rAMb2rz//+9H7Glibn1gBAIQIKwCA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",alt:"bookmark"})]}):Object(m.jsxs)("button",{onClick:this.bookmarkButton,children:[" ",Object(m.jsx)("img",{style:Y,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlYAAAJTCAYAAADKaFisAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA1LTE2VDEyOjMxOjUyKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNS0xNlQxMjozODoyNCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0xNlQxMjozODoyNCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkNTk5Y2RmMy1lNWQyLTZkNGMtYmEwNS1jN2VlNjEzODMwNGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ZjJlMWZkMy00MTA2LTRjNDgtYmI2My1jMzViNmZiOTExOTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMzliNjc0MS03OTJhLWU0NDItODE2NC1kMjVhMDllZGI2ZjQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzOWI2NzQxLTc5MmEtZTQ0Mi04MTY0LWQyNWEwOWVkYjZmNCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0xNlQxMjozMTo1MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNTk5Y2RmMy1lNWQyLTZkNGMtYmEwNS1jN2VlNjEzODMwNGEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTZUMTI6Mzg6MjQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7EIgoEAAAReElEQVR4nO3dy3bcNhaGUaqX3/+V1YPEsSTXhZefwAGw96R7lLAAEOcrecn5+Pz83AAAuO5/vR8AAGAWwgoAIERYAQCECCsAgBBhBQAQIqwAAEKEFQBAiLACAAgRVgAAIcIKACBEWAEAhAgrAIAQYQUAECKsAABChBUAQIiwAgAIEVYAACHCCgAgRFgBAIQIKwCAEGEFABAirAAAQoQVAECIsAIACPnV+wHgi8/eDwAM76P3A7A2P7ECAAgRVgAAIcIKACBEWAEAhAgrAIAQYQUA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",alt:"bookmark"})]})]})]})]},this.props.album.id)}}]),e}(a.a.Component),R=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={sortedAlbums:[],userSavedAlbums:t.props.user.savedAlbums,savedAlbums:null},t.getData=function(){d.a.get("/followedArtistsTracks").then((function(A){var e=[].concat.apply([],A.data).sort((function(t,A){return new Date(A.release_date)-new Date(t.release_date)})).slice(0,100);t.setState({sortedAlbums:e})})).catch((function(t){return console.log(t)}))},t.userFollowedArtists=function(){d.a.get("/api/users").then((function(A){var e=A.data.followedArtists.map((function(t){return t.artistIdFromSpotify})),s=A.data.savedAlbums.map((function(t){return t.albumIdFromSpotify}));t.setState({followedArtists:e,userSavedAlbums:s})}))},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.getData(),this.userFollowedArtists()}},{key:"render",value:function(){var t=this,A=this.state.sortedAlbums.map((function(A){return Object(m.jsx)("div",{children:Object(m.jsx)(M,{userFollowedArtists:t.userFollowedArtists,userSavedAlbums:t.state.userSavedAlbums,album:A})},A.id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(F,{}),0===this.state.sortedAlbums.length?Object(m.jsx)("h2",{className:"textbefore",children:"Your dashboard looks quite empty... Go and follow some artists."}):A]})}}]),e}(s.Component),W=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){return Object(c.a)(this,e),A.apply(this,arguments)}return Object(o.a)(e,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"editcontainer",children:Object(m.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:"title",children:[" ",Object(m.jsx)("h3",{children:"Name:"})," "]}),Object(m.jsx)("input",{type:"text",id:"chosenName",name:"chosenName",onChange:this.props.handleChange}),Object(m.jsxs)("label",{htmlFor:"avatar",children:[" ",Object(m.jsx)("h3",{children:"Avatar:"})," "]}),Object(m.jsx)("input",{type:"file",name:"avatar",id:"avatar",onChange:function(A){return t.props.handleFileUpload(A)}}),Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)("strong",{children:" Edit Profile"})})})]})})}}]),e}(s.Component),K={width:"50px",height:"50px",borderRadius:"50%"},y=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){return Object(c.a)(this,e),A.apply(this,arguments)}return Object(o.a)(e,[{key:"render",value:function(){return Object(m.jsx)(E.b,{to:"/artist/".concat(this.props.result.id),children:Object(m.jsxs)("div",{className:"artistResult",children:[this.props.result.images[0]?Object(m.jsx)("img",{style:K,src:this.props.result.images[0].url,alt:this.props.result.name}):Object(m.jsx)("img",{style:K,src:"https://freesvg.org/img/abstract-user-flat-3.png",alt:""}),Object(m.jsx)("h3",{children:this.props.result.name})]})},this.props.result.id)}}]),e}(a.a.Component),G=d.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MONGODB_URI||"http://localhost:5005"}),V=function(t){throw t},S=function(t){return G.post("/api/users/upload",t).then((function(t){return t.data})).catch(V)},N=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={user:t.props.user,chosenName:"",avatar:"",editForm:!1,followedArtists:[],followedArtistButton:!1,savedAlbums:[],savedAlbumsButton:!1,userSavedAlbums:t.props.user.savedAlbums.map((function(t){return t.albumIdFromSpotify}))},t.handleLogout=function(){b().then((function(){t.props.setUser(null)}))},t.userFollowedArtists=function(){d.a.get("/api/users").then((function(A){var e=A.data.savedAlbums.map((function(t){return t.albumIdFromSpotify}));t.setState({followedArtists:A.data.followedArtists,savedAlbums:A.data.savedAlbums,userSavedAlbums:e})}))},t.handleChange=function(A){var e=A.target,s=e.name,a=e.value;t.setState(Object(u.a)({},s,a))},t.handleFileUpload=function(A){console.log("The file to be uploaded is: ",A.target.files[0]);var e=new FormData;e.append("avatar",A.target.files[0]),S(e).then((function(A){console.log("response is: ",A),t.setState({avatar:A.secure_url})})).catch((function(t){console.log("Error while uploading the file: ",t)}))},t.handleSubmit=function(A){console.log(A);var e=t.state,s=e.chosenName,a=e.avatar;A.preventDefault(),d.a.put("/api/users/".concat(t.state.user._id),{chosenName:s,avatar:a}).then((function(A){console.log("second resopnse",A.data),t.setState({user:A.data,chosenName:A.data.name,avatar:A.data.avatar,editForm:!1})})).catch((function(t){return console.log(t)}))},t.toggleEditForm=function(){t.setState((function(t){return{editForm:!t.editForm,followedArtistButton:!1}}))},t.toggleFollowedArtists=function(){t.setState({editForm:!1,followedArtistButton:!t.state.followedArtistButton,savedAlbumsButton:!1})},t.toggleSavedAlbums=function(){t.setState({editForm:!1,followedArtistButton:!1,savedAlbumsButton:!t.state.savedAlbumsButton})},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.userFollowedArtists()}},{key:"render",value:function(){var t=this,A=this.state.user,e=this.state.followedArtists.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)(y,{result:t.artistObj})},t.artistObj.id)})),s=this.state.savedAlbums.map((function(A){return Object(m.jsx)("div",{children:Object(m.jsx)(M,{bookmark:"true",userFollowedArtists:t.userFollowedArtists,userSavedAlbums:t.state.userSavedAlbums,album:A.albumObj})},A.albumObj.id)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F,{}),Object(m.jsxs)("div",{className:"profilecontainer",children:[A.avatar?Object(m.jsx)("img",{src:A.avatar,alt:"avatar"}):Object(m.jsx)("img",{src:"https://freesvg.org/img/abstract-user-flat-3.png",alt:""}),A.chosenName?Object(m.jsx)("h1",{children:A.chosenName}):Object(m.jsx)("h1",{children:A.username}),Object(m.jsx)("button",{id:"edit",className:"followButton",onClick:this.toggleEditForm,children:"Edit"}),Object(m.jsxs)(E.b,{to:"/",onClick:this.handleLogout,children:[" ",Object(m.jsx)("button",{className:"followButton",children:"Log Out"})," "]})]}),this.state.editForm&&Object(m.jsx)(W,Object(i.a)(Object(i.a)({},this.state),{},{handleFileUpload:this.handleFileUpload,handleChange:this.handleChange,handleSubmit:this.handleSubmit})),Object(m.jsxs)("div",{className:"profilecontent",children:[Object(m.jsx)("div",{className:"signup",children:Object(m.jsx)("button",{onClick:this.toggleSavedAlbums,children:Object(m.jsx)("strong",{children:"Saved Albums"})})}),Object(m.jsx)("div",{className:"signup",children:Object(m.jsxs)("button",{onClick:this.toggleFollowedArtists,children:[Object(m.jsx)("strong",{children:"Followed Artists"})," "]})})]}),Object(m.jsxs)("div",{className:"resultscontainer",children:[!0===this.state.followedArtistButton&&e,!0===this.state.savedAlbumsButton&&s]})]})}}]),e}(a.a.Component),D=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={artists:[],query:"",avatar:""},t.searchArtist=function(A){A.preventDefault(),d.a.get("/artist-search/".concat(t.state.query)).then((function(A){t.setState({artists:A.data})})).catch((function(t){return console.log(t)}))},t.handleSearch=function(A){A.preventDefault();var e=A.target.value;t.setState({query:e})},t}return Object(o.a)(e,[{key:"getUser",value:function(){var t=this;d.a.get("/api/users").then((function(A){t.setState({avatar:A.data.avatar})}))}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var t=this.state.artists.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)(y,{result:t})},t.id)}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)("h3",{children:this.state.avatar?Object(m.jsx)("a",{href:"/profile",children:Object(m.jsx)("img",{className:"profileImgNav",src:this.state.avatar,alt:"avatar"})}):Object(m.jsx)("a",{href:"/profile",children:Object(m.jsx)("img",{className:"profileImgNav",src:"https://freesvg.org/img/abstract-user-flat-3.png",alt:""})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("form",{onSubmit:this.searchArtist,children:Object(m.jsxs)("div",{className:"searchbar",children:[Object(m.jsx)("input",{className:"search",type:"text",name:"query",placeholder:"Search...",onChange:this.handleSearch}),Object(m.jsxs)("button",{type:"submit",className:"searchButton",children:[" ",Object(m.jsx)("img",{style:{width:"15px"},src:"https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png",alt:"glass"})," "]})]})})}),Object(m.jsxs)("h3",{children:[" ",Object(m.jsxs)("a",{href:"/dashboard",children:[" ",Object(m.jsx)("img",{style:{width:"35px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/1200px-Home_Icon.svg.png",alt:"Home"}),"  "]})," "]})]}),Object(m.jsxs)("div",{className:"resultscontainer",children:[this.state.query?Object(m.jsx)("h1",{}):Object(m.jsx)("h2",{className:"textbefore",children:"Try searching for artists."}),t||Object(m.jsx)("h1",{children:"No results, try again..."})]})]})}}]),e}(a.a.Component),Z=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={albums:[],userSavedAlbums:t.props.userSavedAlbums},t.getAlbums=function(){d.a.get("/albums/".concat(t.props.artist)).then((function(A){t.setState({albums:A.data.body.items})}))},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.getAlbums()}},{key:"render",value:function(){var t=this,A=this.state.albums.map((function(A){return Object(m.jsx)("div",{children:Object(m.jsx)(M,{userFollowedArtists:t.props.userFollowedArtists,userSavedAlbums:t.state.userSavedAlbums,album:A})},A.id)}));return Object(m.jsx)("div",{children:A})}}]),e}(a.a.Component),U={width:"100px",borderRadius:"50%"},k=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={user:t.props.user,artistObj:null,name:null,avatar:null,artistIdFromSpotify:null,userArtistsIds:[],userSavedAlbums:[]},t.getArtist=function(){d.a.get("/artist/".concat(t.props.match.params.id)).then((function(A){t.setState({artistObj:A.data.body,name:A.data.body.name,avatar:A.data.body.images[0].url,artistIdFromSpotify:A.data.body.id})}))},t.followButton=function(A){A.preventDefault();var e=t.state,s=e.artistObj,a=e.name,r=e.avatar,n=e.artistIdFromSpotify;d.a.post("/api/artists",{artistObj:s,name:a,avatar:r,artistIdFromSpotify:n}).then((function(A){var e=A.data.followedArtists.map((function(t){return t.artistIdFromSpotify}));t.setState({userArtistsIds:e})}))},t.unfollowButton=function(A){A.preventDefault(),d.a.delete("/api/artists/".concat(t.state.artistIdFromSpotify)).then((function(A){var e=A.data.followedArtists.map((function(t){return t.artistIdFromSpotify}));console.log("the axios response",A),t.setState({userArtistsIds:e})}))},t.userFollowedArtists=function(){d.a.get("/api/users").then((function(A){var e=A.data.followedArtists.map((function(t){return t.artistIdFromSpotify})),s=A.data.savedAlbums.map((function(t){return t.albumIdFromSpotify}));t.setState({userArtistsIds:e,userSavedAlbums:s})}))},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.userFollowedArtists(),this.getArtist()}},{key:"render",value:function(){var t=this.state.artistObj,A=this.state.userArtistsIds;return t&&A?Object(m.jsxs)("div",{children:[Object(m.jsx)(F,{}),Object(m.jsxs)("div",{className:"resultscontainer",children:[Object(m.jsxs)("div",{className:"artistcontainer",children:[Object(m.jsxs)("div",{children:[t.images[0]?Object(m.jsx)("img",{style:U,src:t.images[0].url,alt:t.name}):Object(m.jsx)("img",{style:U,src:"https://freesvg.org/img/abstract-user-flat-3.png",alt:""}),Object(m.jsx)("h2",{children:t.name})]}),A.includes(this.state.artistIdFromSpotify)?Object(m.jsx)("form",{onSubmit:this.unfollowButton,children:Object(m.jsx)("button",{className:"followButton",type:"submit",children:"Unfollow"})}):Object(m.jsx)("form",{onSubmit:this.followButton,children:Object(m.jsx)("button",{className:"followButton",type:"submit",children:"Follow"})})]}),Object(m.jsx)("div",{children:Object(m.jsx)(Z,{userFollowedArtists:this.userFollowedArtists,userSavedAlbums:this.state.userSavedAlbums,artist:this.state.artistIdFromSpotify})})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(F,{}),Object(m.jsx)("h1",{children:"Loading..."})]})}}]),e}(a.a.Component),L=function(t){Object(l.a)(e,t);var A=Object(h.a)(e);function e(){var t;Object(c.a)(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=A.call.apply(A,[this].concat(a))).state={user:t.props.user},t.setUser=function(A){t.setState({user:A})},t}return Object(o.a)(e,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(g.d,{children:[Object(m.jsx)(g.b,{exact:!0,path:"/",component:O}),Object(m.jsx)(g.b,{exact:!0,path:"/signup",render:function(A){return Object(m.jsx)(B,Object(i.a)({setUser:t.setUser},A))}}),Object(m.jsx)(g.b,{exact:!0,path:"/login",render:function(A){return Object(m.jsx)(w,Object(i.a)({setUser:t.setUser},A))}}),Object(m.jsx)(p,{path:"/dashboard",user:this.state.user,component:R,redirectPath:"/login"}),Object(m.jsx)(p,{path:"/profile",user:this.state.user,component:N,redirectPath:"/login",setUser:this.setUser}),Object(m.jsx)(p,{path:"/artistSearch",user:this.state.user,component:D,redirectPath:"/login"}),Object(m.jsx)(p,{path:"/artist/:id",user:this.state.user,component:k,redirectPath:"/login"})]})})}}]),e}(a.a.Component),z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,65)).then((function(A){var e=A.getCLS,s=A.getFID,a=A.getFCP,r=A.getLCP,n=A.getTTFB;e(t),s(t),a(t),r(t),n(t)}))};d.a.get("/api/auth/loggedin").then((function(t){var A=t.data;n.a.render(Object(m.jsx)(E.a,{children:Object(m.jsx)(L,{user:A})}),document.getElementById("root"))})).catch((function(t){console.log(t)})),z()}},[[64,1,2]]]);
//# sourceMappingURL=main.183ed61f.chunk.js.map