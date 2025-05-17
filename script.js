//your JS code here. If required.
let ele=document.getElementById("level");
let res=0;
let curr=ele;
while(curr){
	res++;
	curr=curr.parentElement;
}
alert("The level of the element is: "+res);
	