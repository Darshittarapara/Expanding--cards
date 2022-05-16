let child=document.getElementsByClassName('child-container');
let tagname=document.getElementsByTagName('h1')
// .


const change=(p)=>{
    // document.getElementById('one').style.width="10%"
    // if(p==child.length-1){
    //     child[0].style.width='10%'
    //     child[p-1].style.width='10%'

    for(let value of child){
        value.style.width='10%'
    }
    for(let values of tagname){
        values.style.display='none'
    }
        child[p].style.width='100%';
        tagname[p].style.display='block'
    // }
    // else if(p==0){
    //     child[p+1].style.width='10%'
    //     child[child.length-1].style.width='10%'
    //     child[p].style.width=900+'px';
    // }
    // else{
    //     child[p-1].style.width='10%'
    //     child[p+1].style.width='10%'
    // child[p].style.width=900+'px';
    // }
   

}

