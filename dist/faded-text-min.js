export default function FadedText(t){this.id=document.getElementById(t).id,this.textContent=document.getElementById(t).textContent}FadedText.prototype.charFadeIn=function(t=1e3,e=1e3,n=0){let i=Math.random().toString(36).substr(2);document.getElementById(this.id).innerHTML=[...this.textContent].map(((t,n)=>'<span id="'+this.id+"-"+i+"-"+n+'" style="opacity: 0; transition: '+e+'ms">'+t+"</span>")).join(""),[...this.textContent].forEach(((e,o)=>setTimeout((()=>document.getElementById(this.id+"-"+i+"-"+o).style.opacity="1"),Math.floor(Math.random()*t)+n)))},FadedText.prototype.charFadeOut=function(t=1e3,e=1e3,n=0){let i=Math.random().toString(36).substr(2);document.getElementById(this.id).innerHTML=[...this.textContent].map(((t,n)=>'<span id="'+this.id+"-"+i+"-"+n+'" style="opacity: 1; transition: '+e+'ms">'+t+"</span>")).join(""),[...this.textContent].forEach(((e,o)=>setTimeout((()=>document.getElementById(this.id+"-"+i+"-"+o).style.opacity="0"),Math.floor(Math.random()*t)+n)))},FadedText.prototype.wordFadeIn=function(t=1e3,e=1e3,n=0){let i=Math.random().toString(36).substr(2);document.getElementById(this.id).innerHTML=this.textContent.split(" ").map(((t,n)=>'<span id="'+this.id+"-"+i+"-"+n+'" style="opacity: 0; transition: '+e+'ms">'+t+"&nbsp</span>")).join(""),this.textContent.split(" ").forEach(((e,o)=>setTimeout((()=>document.getElementById(this.id+"-"+i+"-"+o).style.opacity="1"),Math.floor(Math.random()*t)+n)))},FadedText.prototype.wordFadeOut=function(t=1e3,e=1e3,n=0){let i=Math.random().toString(36).substr(2);document.getElementById(this.id).innerHTML=this.textContent.split(" ").map(((t,n)=>'<span id="'+this.id+"-"+i+"-"+n+'" style="opacity: 1; transition: '+e+'ms">'+t+"&nbsp</span>")).join(""),this.textContent.split(" ").forEach(((e,o)=>setTimeout((()=>document.getElementById(this.id+"-"+i+"-"+o).style.opacity="0"),Math.floor(Math.random()*t)+n)))};