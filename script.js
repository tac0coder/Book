var i;
var inputs = document.getElementById('pages_inputs')
var pages = document.getElementById('pages')
var story = document.getElementById('Storydiv')
pages.oninput = function () {
  inputs.style['display'] = ''
  inputs.innerHTML = ''

  for (i = 1; i < parseInt(pages.value) + 1; i++) {
    inputs.innerHTML += `<label for=page_${i}>Page ${i}</label><input type=file id=page_${i} accept="image/png,image/jpeg"><script>var page_${i}=document.getElementById(page_${i})</script></br>`
  }
  inputs.innerHTML += '<br><br><button type=button id=done onclick=done_func()>Done</button><br><br><br><input type=reset>'
}
  var p1p=0
  var p2p=1
  var pagefile=[]
  var form=document.forms.pages_inputs
  var controls=document.getElementById('control')
done_func = function () {
controls.style['display']=''
  story.innerHTML = `<div id=p1 style="float:left;padding:10px;"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p1p]}></div><div id=p2 style="float:right;padding:10px"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p2p]}></div>`

  for (i=0;i<=form.length-3;i++){
    pagefile.push(URL.createObjectURL(form[i].files[0]))
  }
  pagefile.push('/the_end.png')
  

  
  inputs.style['display'] = 'none'
  pages.style['display']='none'
  document.getElementById('he').style['display']='none'
  story.innerHTML = `<div id=p1 style="float:left;padding:10px;"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p1p]}></div><div id=p2 style="float:right;padding:10px"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p2p]}></div>`
}
controls.children.back.onclick = function(){
  if(p1p>=1){
    p1p-=2
    p2p-=2
    story.innerHTML = `<div id=p1 style="float:left;padding:10px;"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p1p]}></div><div id=p2 style="float:right;padding:10px"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p2p]}></div>`
  }
}
controls.children.next.onclick = function(){
  if(p1p+2<=pagefile.length){
    p1p+=2
    p2p+=2
    story.innerHTML = `<div id=p1 style="float:left;padding:10px;"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p1p]}></div><div id=p2 style="float:right;padding:10px"><img width=${window.screen.width/2}px height=${window.screen.height-20};px src=${pagefile[p2p]}></div>`
  }
}