$("#button1").click(function(){
    var mymessage=$("#one").val();
    mymessage =parseInt(mymessage)+8;
    $("p").append(mymessage+" is the amount of people that live in a ");
});
$("#button2").click(function(){
    var mymessage=$("#two").val();
    $("p").append( mymessage+" somewhere in the world such as ");
});
$("#button3").click(function(){
    var mymessage=$("#three").val();
    $("p").append(mymessage+"! Isn't that crazy!!!");
});