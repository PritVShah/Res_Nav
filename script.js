const hamburg=document.getElementById('hamburg')
hamburg.addEventListener('click',function(e){
    const ul=document.querySelector('nav > ul');
    ul.classList.toggle('slider');
    hamburg.classList.toggle('cross');
});