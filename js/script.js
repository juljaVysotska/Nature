
// (function preloader(){
// 	var pr = document.getElementById('firstPage');
// 	if(pr) 
// 	{	
// 		setTimeout(function(){
// 			document.getElementById('firstPage').classList.add('first-page');
// 			setTimeout(" document.getElementById('firstPage').classList.remove('preloader');",3500);	
// 		},3000);

// 	}	


// })()

 window.addEventListener('scroll', function () {
 	//console.log('true');


 	let scrolled = window.pageYOffset;


 	let elems = document.querySelectorAll('p.letter');
 	//elems.setAttribute('transform', 'translateY('+ scrolled * -.2+'px)');

 	for(var i =0; i< elems.length; i++){

 		elems[i].setAttribute('style', 'transform: translateY('+ scrolled * -.09+'px)');
 	}


 	let sectionElems = document.querySelectorAll('div.section');

 	for(let i = 0 ;i < sectionElems.length; i++){
 			if(sectionElems[i].pageYOffset - window.pageYOffset == 0){
 				scrolled = scrolled = sectionElems[i].pageYOffset;
 			}
 	}


 });