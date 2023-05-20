function multitableFunction(number)
{
    let result_chek="";
    let i;
    for(i=1; i<=10; i++)
    {
        let product=number * i;
        result_chek=number+"*"+i+"="+product+"<br>";
        document.getElementById("result").innerHTML +=result_chek;
    }
}

