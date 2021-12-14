(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"RegistrationForm_form__CyN3T"}},11:function(t,e,n){t.exports={list:"ContactList_list__2ORbz"}},12:function(t,e,n){t.exports={filter:"App_filter__2vLqq"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),i=n(13),o=n(9),l=n(2),u=n(3),h=n(5),b=n(4),m=n(14),p=n(10),d=n.n(p),j=n(6),f=n.n(j),x=n(0),O=function(t){var e=t.text,n=t.value,a=t.type,r=t.name,c=t.pattern,s=t.title,i=t.onChange;return Object(x.jsxs)("div",{className:f.a.block,children:[Object(x.jsx)("label",{className:f.a.label,htmlFor:"name",children:e}),Object(x.jsx)("input",{value:n,className:f.a.input,type:a,name:r,pattern:c,title:s,required:!0,onChange:i})]})},C=function(t){var e=t.type,n=t.text,a=t.onClick;return Object(x.jsx)("button",{type:e,onClick:a,children:n})},v=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:d.a.form,onSubmit:this.props.onSubmit,children:[Object(x.jsx)(O,{value:this.props.name,text:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:this.props.onChange}),Object(x.jsx)(O,{value:this.props.number,text:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:this.props.onChange}),Object(x.jsx)(C,{type:"submit",text:"Add contacts"})]})}}]),n}(a.Component),g=v,y=function(t){var e=t.title,n=t.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e}),n]})},_=n(11),k=n.n(_),N=function(t){var e=t.contacts,n=t.onClick;if(!e.length)return null;var a=e.map((function(t){var e=t.name,a=t.id,r=t.number;return Object(x.jsxs)("li",{id:a,className:k.a.list,children:[e,": ",r," ",Object(x.jsx)(C,{type:"button",text:"Delete",onClick:n})]},a)}));return Object(x.jsx)("ul",{children:a})},S=n(12),A=n.n(S),w=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],name:"",number:"",filter:""},t.handleChange=function(e){var n=e.target.name;t.setState(Object(o.a)({},n,e.target.value))},t.handleSubmit=function(e){if(e.preventDefault(),t.filterContacts(t.state.name).length)return alert("".concat(t.state.name," is already in contacts!")),void t.setState({name:"",number:""});t.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[{id:Object(m.a)(),name:t.state.name,number:t.state.number}]),name:"",number:""}}))},t.filterContacts=function(e){return t.state.contacts.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())}))},t.handleDelete=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e.target.parentElement.id}));t.setState((function(){return{contacts:n,filter:""}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{title:"Phonebook",children:Object(x.jsx)(g,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:this.state.name,number:this.state.number})}),Object(x.jsxs)(y,{title:"Contacts",children:[Object(x.jsx)(O,{className:A.a.filter,name:"filter",type:"text",value:this.state.filter,text:"Find contacts by name",onChange:this.handleChange}),Object(x.jsx)(N,{contacts:this.filterContacts(this.state.filter),onClick:this.handleDelete})]})]})}}]),n}(a.Component),z=w;s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={block:"InputElement_block__2cteh",input:"InputElement_input__2rAw4",label:"InputElement_label__3Cxyb"}}},[[20,1,2]]]);
//# sourceMappingURL=main.dc59baaf.chunk.js.map