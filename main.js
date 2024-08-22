function start()
{
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    //disabled false just means enabled
    intervalStart();
}

function stop()
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    //these functions make it so the button is disabled when you click on it and the other button becomes enabled
}

function intervalStart()
{
    
    var image = document.getElementById("memeImage");
    var change = 2;
 
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";
       //plus means to add to get the img to move
        change+=2;
 
    },500); // 500 means .5 seconds

}
function intervalStop()
{
    function intervalStop()
    {
        clearInterval(intervalID);
        clearInterval
    }
}