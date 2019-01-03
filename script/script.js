
(function preloader(){
	var pr = document.getElementById('firstPage');
	if(pr) 
	{	
		setTimeout(function(){
			document.getElementById('firstPage').classList.add('first-page');
			setTimeout(" document.getElementById('firstPage').classList.remove('preloader');",3500);	
		},3000);

	}	


})()

