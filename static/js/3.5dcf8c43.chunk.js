(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{398:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3Tbpw",mainPhoto:"ProfileInfo_mainPhoto__3omOQ",contact:"ProfileInfo_contact__vwQY9"}},399:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2kHHE",posts:"MyPosts_posts__1TYUV"}},400:function(t,e,s){t.exports={item:"Post_item__2kTVW"}},401:function(t,e,s){"use strict";s.r(e);var c=s(5),o=s(160),i=s(161),n=s(196),r=s(194),a=s(1),j=s(0),l=s.n(j),u=s(158),b=s(398),d=s.n(b),h=s(113),p=function(t){var e=Object(j.useState)(!1),s=Object(u.a)(e,2),c=s[0],o=s[1],i=Object(j.useState)(t.status),n=Object(u.a)(i,2),r=n[0],l=n[1];Object(j.useEffect)((function(){l(t.status)}),[t.status]);return Object(a.jsxs)("div",{children:[!c&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Status: "})," ",Object(a.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-------"})]}),c&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},O=s(162),f=s(62),x=s(193),m=s(90),v=s.n(m),k=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(a.jsxs)("form",{onSubmit:e,children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"save"})}),c&&Object(a.jsx)("div",{className:v.a.formSummaryError,children:c}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name"}),": ",Object(f.c)("Full name","fullName",[],f.a)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job"}),": ",Object(f.c)("","lookingForAJob",[],f.a,{type:"checkbox"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills"}),":",Object(f.c)("My professional skills","lookingForAJobDescription",[],f.b)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me"}),":",Object(f.c)("About me","aboutMe",[],f.b)]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(a.jsx)("div",{className:d.a.contact,children:Object(a.jsxs)("b",{children:[t,": ",Object(f.c)(t,"contacts."+t,[],f.a)]})},t)}))]})]})})),g=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(a.jsxs)("div",{children:[s&&Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:c,children:"edit"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(a.jsx)(P,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},P=function(t){var e=t.contactTitle,s=t.contactValue;return Object(a.jsxs)("div",{className:d.a.contact,children:[Object(a.jsx)("b",{children:e}),": ",s]})},S=function(t){var e=t.profile,s=t.status,c=t.updateStatus,o=t.isOwner,i=t.savePhoto,n=t.saveProfile,r=Object(j.useState)(!1),l=Object(u.a)(r,2),b=l[0],f=l[1];if(!e)return Object(a.jsx)(h.a,{});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(a.jsx)("img",{src:e.photos.large||O.a,className:d.a.mainPhoto}),o&&Object(a.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&i(t.target.files[0])}}),b?Object(a.jsx)(k,{initialValues:e,profile:e,onSubmit:function(t){n(t).then((function(){f(!1)}))}}):Object(a.jsx)(g,{goToEditMode:function(){f(!0)},profile:e,isOwner:o}),Object(a.jsx)(p,{status:s,updateStatus:c})]})})},y=s(159),_=s(61),w=s(399),I=s.n(w),A=s(400),C=s.n(A),M=function(t){return Object(a.jsxs)("div",{className:C.a.item,children:[Object(a.jsx)("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),t.message,Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"like"})," ",t.likesCount]})]})},N=s(111),T=Object(x.a)({form:"profile-add-post"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("div",{children:Object(f.c)("Your post","newPostText",[N.b],f.a)}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Add post"})})]})})),F=function(t){var e=Object(_.a)(t.posts).reverse().map((function(t){return Object(a.jsx)(M,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(a.jsxs)("div",{className:I.a.postsBlock,children:[Object(a.jsx)("h3",{children:"My posts"}),Object(a.jsx)(T,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(a.jsx)("div",{className:I.a.posts,children:e})]})},U=l.a.memo(F),B=s(14),J=Object(B.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:y.a.addPostActionCreator})(U),D=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(S,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(a.jsx)(J,{})]})},E=s(19),V=s(15),z=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(t){return Object(o.a)(this,s),e.call(this,t)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)(D,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);e.default=Object(V.d)(Object(B.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),E.h)(z)}}]);
//# sourceMappingURL=3.5dcf8c43.chunk.js.map