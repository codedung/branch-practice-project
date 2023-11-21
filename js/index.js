window.addEventListener('load',()=>{
  const topMenu = document.querySelectorAll('nav > ul > li');
  const navBg = document.querySelector('.nav-bg');

  listTwoTitle();

  topMenu.forEach((el,i)=>{
    el.addEventListener('mouseover',()=>{
      const target = el.getElementsByClassName('nav-list-deps1');
      listReset();
      navBg.classList.add('on')
      target[0].classList.add('on');
    })
    el.addEventListener('mouseleave',()=>{
      listReset();
      navBg.classList.remove('on')
    })
  })

})

function listReset(){
  const topMenu = document.querySelectorAll('nav > ul > li');
  for(let i = 0; i< topMenu.length; i++){
    topMenu[i].lastElementChild.classList.remove('on')
  }
}

function listTwoTitle(){
  //li안에 자식이 2개 이상이면 3번째 자식에게 class명 추가
  const topMenu = document.querySelectorAll('nav > ul > li');
  topMenu.forEach((el,i)=>{
    const midMenu = el.children[1].children
    for(let j=0; j<midMenu.length; j++){
      console.log(midMenu[j].children)
      if(midMenu[j].children.length > 2){
        console.log((midMenu[j].children[2]))
        midMenu[j].children[2].classList.add('divid-title')
      }
    }
  })
  for(let i = 0; i<topMenu.length; i++){
    if(topMenu[0].children.length > 2){

    }
  }
}