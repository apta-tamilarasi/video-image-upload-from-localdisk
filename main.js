var a=document.getElementById("in")
var b=document.getElementById("img")
let handle=(e)=>{
	console.log(a.files[0]);
	if(a.files[0].type==='video/mp4'){
		b.innerHTML=` <div> <video controls style="padding:10px width:30% margin:auto">
		<source src='${URL.createObjectURL(a.files[0])}' type="video/mp3"/>
		<source src='${URL.createObjectURL(a.files[0])}' type="video/mp4"/>
		<source src='${URL.createObjectURL(a.files[0])}' type="video/mov"/>
	</video></div>`
	}
	else{
		b.innerHTML=`<img src="${URL.createObjectURL(a.files[0])}" alt="" style="padding:10px width:80% margin:auto"/>`
	}
	
}