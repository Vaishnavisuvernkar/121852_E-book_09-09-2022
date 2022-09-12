function validate()
{
    var bcats=document.getElementsByName("bookCategory");
    var bcat;
    var price;
    var disc;
    for(var i=0;i<bcats.length;i++)
    {
    if(bcats[i].checked)
    {
        bcat=bcats[i].value;
    }
    }
    var bcount=document.getElementById("bookval").value;
    bcount=parseInt(bcount);
    if(bcat=="Science")
    {
        price=400;
        if(bcount<=250)
        {
            disc=5;
        }
        else{
            disc=7;
        }
    }
    else{
        price=300;
        if(bcount<=250)
        {
            disc=3;
        }
        else{
            disc=4;
        }
    }
    var tot=bcount*price-((bcount*price*disc)/100);
    document.getElementById("result").innerHTML="Total Price is:"+tot;
}
