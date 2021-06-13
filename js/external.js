
function fun() {
    // get loan detail

    var i_loanamount = parseInt(document.getElementById("loanamount").value);
    var i_intrestrate = parseInt(document.getElementById("intrestrate").value);
    var i_loanduration = parseInt(document.getElementById("loanduration").value);
    var i_monthpaid = parseInt(document.getElementById("monthpaid").value);
	i_intrestrate=i_intrestrate/1200;
	var o_emi=i_loanamount*i_intrestrate*Math.pow(1+i_intrestrate,i_loanduration)/(Math.pow(1+i_intrestrate,i_loanduration)-1);
	var c_remainingbal=i_loanamount;
	var container = document.getElementById("reportcontainer");

	var output = document.createElement("output");
	output.type = "Number";
	output.name = "childElementCount";
	output.value=container.childElementCount;
	//document.write(output);
	//container.appendChild(output);
	
	if(container.childElementCount==i_monthpaid*3){
		for (i=0;i<i_monthpaid;i++){
			// Append a node with a random text
		//	container.appendChild(document.createTextNode("Month " + (i+1)));
			// Create an <input> element, set its type and name attributes
			//container.childNodes;
			//container.appendChild(document.createTextNode("Test: "+i_monthpaid+" & " container.childNodes[i*3].getAttributeNode("value")));
			//container.appendChild(document.createTextNode("Test: "+i_monthpaid+" & " container.down()));
			o_emi=container.childNodes[i*5+1].value;
			//container.appendChild(document.createTextNode(o_emi));
		//	var input = document.createElement("input");
		//	input.type = "Number";
		//	input.name = "Month" + i;
		//	input.value = Math.round(o_emi);
		//	container.appendChild(input);
			c_remainingbal=c_remainingbal-Math.round(o_emi)+c_remainingbal*i_intrestrate;
			container.childNodes[i*5+3].value=Math.ceil(c_remainingbal);
		//	container.appendChild(document.createTextNode("MonthBal " + (i+1)));
		//	var output = document.createElement("input");
		//	output.type = "Number";
		//	output.name = "MonthBal" + i;
		//	output.value=Math.ceil(c_remainingbal);
		//	container.appendChild(output);
			// Append a line break 
		//	container.appendChild(document.createElement("br"));
		}
	}else{
		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
		}
		for (i=0;i<i_monthpaid;i++){
			// Append a node with a random text
			container.appendChild(document.createTextNode("Month " + (i+1)));
			// Create an <input> element, set its type and name attributes
			var input = document.createElement("input");
			input.type = "Number";
			input.name = "Month" + i;
			input.value = Math.round(o_emi);
			container.appendChild(input);
			c_remainingbal=c_remainingbal-Math.round(o_emi)+c_remainingbal*i_intrestrate;
			container.appendChild(document.createTextNode(" \t MonthBal " + (i+1)));
			var output = document.createElement("input");
			output.type = "Number";
			output.name = "MonthBal" + i;
			output.value=Math.ceil(c_remainingbal);
			output.readOnly=true;
			container.appendChild(output);
			// Append a line break 
			container.appendChild(document.createElement("br"));
		}
		container.appendChild(document.createTextNode(container.childElementCount));
	}
}
function calculate() {
	
}
function clr() {
    // alert("ok");
    var disp_year = document.getElementById("disp_year");
    var disp_month = document.getElementById("disp_month");
    var disp_days = document.getElementById("disp_days");

    disp_year.innerHTML = "";
    disp_month.innerHTML = "";
    disp_days.innerHTML = "";

}
