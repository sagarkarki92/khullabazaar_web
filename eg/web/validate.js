function validationi(control)
{
	uname = control.value;
	if(uname.length < 6)
	{
		control.nextSibling.innerHTML = "Length of username should be greater than 6";
		control.focus();
		returnValue=false;
	
	}
	
}
function validation(form)
{
	returnValue = true;
	uname = form.txtusername.value;
	pass1 = form.password1.value;
	pass2 = form.password2.value;
	
	if(uname.length < 6)
	{
		form.txtusername.nextSibling.innerHTML = "Length of username should be greater than 6";
		form.txtusername.focus();
		returnValue=false;
	
	}
	if(pass1.length < 6)
	{
		form.password1.nextSibling.innerHTML = "Length of password should be greater than 6";
		form.password1.value="";
		form.password1.focus();
		returnValue=false;
	
	}
	if(pass1 != pass2)
	{
		form.password2.nextSibling.innerHTML = "Password didn't match try again";
		form.password1.value="";
		form.password2.value="";
		form.password1.focus();
		returnValue=false;
	
	}
	return returnValue;
	
}