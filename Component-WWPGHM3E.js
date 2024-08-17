import"@angular/core";var s=function(n){return n.User="user",n.Chatbot="chatbot",n}(s||{});import{FormControl as h,ReactiveFormsModule as u,Validators as b}from"@angular/forms";import{CommonModule as _}from"@angular/common";import*as t from"@angular/core";import*as o from"@angular/forms";import"@angular/core";import*as r from"@angular/core";import*as d from"@angular/common/http";var l=(()=>{class n{constructor(e){this.http=e}sendUserMessage(e){return this.http.post("http://localhost:8080/",e)}static{this.\u0275fac=function(a){return new(a||n)(r.\u0275\u0275inject(d.HttpClient))}}static{this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();import*as c from"@angular/common";function f(n,g){if(n&1&&(t.\u0275\u0275elementStart(0,"div")(1,"div",11)(2,"span",12),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd()()()),n&2){let e=g.$implicit;t.\u0275\u0275classMapInterpolate1("message-content ",e.sender,""),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",e.message," ")}}function C(n,g){n&1&&(t.\u0275\u0275elementStart(0,"div",13)(1,"div",11)(2,"span",12)(3,"div",14),t.\u0275\u0275element(4,"div",15)(5,"div",15)(6,"div",15),t.\u0275\u0275elementEnd()()()())}var I=(()=>{class n{constructor(e,a){this.formBuilder=e,this.service=a,this.transcript=null,this.loading=null,this.userInput=new h("",[b.required]),this.messages=[],this.chatForm=this.formBuilder.group({userInput:this.userInput}),"webkitSpeechRecognition"in window?(this.recognition=new window.webkitSpeechRecognition,this.recognition.lang="en-US",this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=i=>{this.transcript=i.results[0][0].transcript,alert(this.transcript)},this.recognition.onerror=i=>{console.error("Speech recognition error",i)}):console.log("Nao")}startListening(){this.recognition&&this.recognition.start()}handleMessageSent(){let e=this.userInput.value;if(e==null||e==""){alert("Favor informar uma mensagem.");return}this.loading=!0,this.userInput.setValue(""),this.messages.push({sender:s.User,message:e}),this.scrollToBottom();let a={message:e,language:"portuguese"};this.service.sendUserMessage(a).subscribe(i=>{this.loading=!1,this.messages.push({sender:s.Chatbot,message:i.message}),this.scrollToBottom()})}scrollToBottom(){setTimeout(()=>{document.querySelector("#chatEnd")?.scrollIntoView({behavior:"smooth"})},1)}static{this.\u0275fac=function(a){return new(a||n)(t.\u0275\u0275directiveInject(o.FormBuilder),t.\u0275\u0275directiveInject(l))}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-root"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:14,vars:4,consts:[[1,"chatbot-content"],[1,"chatbot-header"],[1,"chatbot-title"],[3,"click"],[1,"chatbot-body"],[3,"class",4,"ngFor","ngForOf"],["class","message-content chatbot",4,"ngIf"],["id","chatEnd"],[1,"chatbot-footer",3,"ngSubmit","formGroup"],["type","text","formControlName","userInput","placeholder","Digite sua mensagem...",1,"chatbot-input"],["type","submit",1,"chatbot-send",3,"disabled"],[1,"message"],[1,"text"],[1,"message-content","chatbot"],[1,"loading-dots"],[1,"dot"]],template:function(a,i){a&1&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"span",2),t.\u0275\u0275text(3,"Dalme"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"button",3),t.\u0275\u0275listener("click",function(){return i.startListening()}),t.\u0275\u0275text(5,"Start Voice Input"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(6,"div",4),t.\u0275\u0275template(7,f,4,4,"div",5)(8,C,7,0,"div",6),t.\u0275\u0275element(9,"div",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"form",8),t.\u0275\u0275listener("ngSubmit",function(){return i.handleMessageSent()}),t.\u0275\u0275element(11,"input",9),t.\u0275\u0275elementStart(12,"button",10),t.\u0275\u0275text(13,"Enviar"),t.\u0275\u0275elementEnd()()()),a&2&&(t.\u0275\u0275advance(7),t.\u0275\u0275property("ngForOf",i.messages),t.\u0275\u0275advance(),t.\u0275\u0275property("ngIf",i.loading),t.\u0275\u0275advance(2),t.\u0275\u0275property("formGroup",i.chatForm),t.\u0275\u0275advance(2),t.\u0275\u0275property("disabled",i.loading))},dependencies:[u,o.\u0275NgNoValidate,o.DefaultValueAccessor,o.NgControlStatus,o.NgControlStatusGroup,o.FormGroupDirective,o.FormControlName,_,c.NgForOf,c.NgIf],styles:["@keyframes _ngcontent-%COMP%_dotUp{0%,to{transform:translateY(0)}50%{transform:translateY(-2.3333333333px)}}@keyframes _ngcontent-%COMP%_dotMiddle{0%,to{transform:translateY(0)}50%{transform:translateY(-2.3333333333px)}}@keyframes _ngcontent-%COMP%_dotDown{0%,to{transform:translateY(0)}50%{transform:translateY(-2.3333333333px)}}.chatbot-content[_ngcontent-%COMP%]{height:100%;width:100%;max-width:1366px;margin:0 auto;display:flex;flex-direction:column;color:#1e1a1d}.chatbot-content[_ngcontent-%COMP%]   .chatbot-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:60px;background-color:gold;font-size:2rem;column-gap:1rem}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:15px;display:flex;flex-direction:column}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-bottom:28px}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:relative;max-width:70%}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{background-color:gold;border-radius:5px;white-space:pre-line;display:flex;padding:10px}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .loading-dots[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:3.5px;margin:0 1rem}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .loading-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:7px;height:7px;background-color:#1e1a1d;border-radius:50%;display:inline-block;animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .loading-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1){animation-name:_ngcontent-%COMP%_dotUp;animation-delay:0s}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .loading-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2){animation-name:_ngcontent-%COMP%_dotMiddle;animation-delay:.3333333333s}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .loading-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(3){animation-name:_ngcontent-%COMP%_dotDown;animation-delay:.6666666667s}.chatbot-content[_ngcontent-%COMP%]   .chatbot-body[_ngcontent-%COMP%]   .message-content.user[_ngcontent-%COMP%]{justify-content:flex-end}.chatbot-content[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%]{display:flex;padding:1rem;border-top:1px solid #e0e0e0}.chatbot-content[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%]   .chatbot-input[_ngcontent-%COMP%]{flex:1;margin-right:10px;padding:10px;border:1px solid #e0e0e0;border-radius:5px;text-transform:none}.chatbot-content[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%]   .chatbot-send[_ngcontent-%COMP%]{padding:10px 15px;background-color:gold;cursor:pointer;border:none;border-radius:5px}.chatbot-content[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%]   .chatbot-send[_ngcontent-%COMP%]:hover{background-color:#fad300}"]})}}return n})();export{I as AppComponent};
