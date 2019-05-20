function validation(){
	
	var name=document.formname.prdctname.value;
	var price=document.formname.price.value;
	var quan=document.formname.quantity.value;
	if(name == ""){
		alert("please mention name of product");
			document.formname.prdctname.focus();
			return false;
	}
	if(name.length<3){
		alert("product name should be more than 3 letter");
			document.formname.prdctname.focus();
			return false;
	}
	if(price == "")
	{
		alert("please mention the price of the product");
		document.formname.price.focus();
		return false;
	}	
if(quan == "")
	{
		alert("enter the quantity of product ");
		document.formname.quantity.focus();
		return false;
	}	

	if(document.formname.description.value==""){
		alert("write some description about product");
		document.formname.description.focus();
		return false;
	}
	if(document.formname.check[0] ==false)
	{
		alert("sada");
	}
	
return true;
	}