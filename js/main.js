"use strict"
var re=document.getElementById("result");
var left=0;
var right=0;
var op='';
let keepHistory=[];


function calc(num){
	
if(document.querySelector('input').value=='0'){
	
	document.querySelector('input').value="";
}

	
	
	document.querySelector('input').value += num;
}

function equal(){
	let result=0;
	
	let test1=document.querySelector('input').value;
	
	keepHistory+=document.querySelector('input').value+"=";
	
	let test=test1.split('');
	
	for (let i=0; i<test.length; i++){
		
		if(test[i]==='*' ||test[i]==='/'||test[i]==='%'||test[i]==='+' ||test[i]==='-'){
			
			if(result===0){
				left=parseInt(test.slice(0,i).join(''));
				right=parseInt(test.slice(i+1).join(''));
				 op=test[i];
				
				
				result=add(left,op,right);
				
				
				
			}
			else{
				left=result;
				right=parseInt(test.slice(i+1).join(''));
				op=test[i];
				
				result=add(left,op,right);
				
			}
			
		}
		
		
		
	}
	
	keepHistory+=result+" ";
	
document.querySelector('input').value=result;	
document.getElementById('history').innerHTML=keepHistory;	
	
}	


function add(left,op,right){
	
	if(op=='+'){
	
	let sum=left+right;
	return sum;
	
	}
	else if(op=='-'){
	
	let sum=left-right;
	return sum;
	
	}
	else if(op=='*'){
	
	let sum=left*right;
	return sum;
	
	}
	else if(op=='/'){
	
	let sum=left/right;
	return sum;
	
	}
	else if(op=='%'){
	
	let sum=left%right;
	return sum;
	
	}
	else if(op=='sin'){
	
	let sum=Math.sin(right * (Math.PI / 180))
	return sum;
	
	}
	
	
	
}
	
function cclear(){
	
	document.querySelector('input').value =0;
	
}
function Eclear(){
	
	let test1=document.querySelector('input').value;
	
	
	let test=test1.split('');
	
	
	for (let i=0; i<test.length; i++){
		if((test[i]==='*')){
			test.splice(test[i+1],1);
		  
			
		}
		
			
		
		
		
	}
	
	
}	
function toggleShow() {
    var elem = document.getElementById('menu');
    if(elem.style.display == 'block'){
      elem.style.display="none";
    }
    else {
      elem.style.display = "block";
    }
  }
	


