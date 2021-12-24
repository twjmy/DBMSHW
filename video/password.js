function password()
{
	var testV =1;
	var pass1 = prompt('請輸入密碼:','');
	while(testV < 3)
	{
		if(!pass1)
		{
			history.go(-1);
		}
		if(pass1 == "algorithm")
		{
			alert('正確');
			break;
		}
		testV+=1;
		var pass1 =
		prompt('錯誤，重新輸入:');
	}
	if(pass1 != "password" & testV ==3)
	history.go(-1);
	return " ";
}
document.write(password());