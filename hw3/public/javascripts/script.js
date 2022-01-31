$(document).ready(function () {

    //Allows for months to change
    $("#jan").click(function (){
        $("#myDrop").html("January");
    });
    $("#feb").click(function (){
        $("#myDrop").html("Febuary");
    });
    $("#mar").click(function (){
        $("#myDrop").html("March");
    });
    $("#apr").click(function (){
        $("#myDrop").html("April");
    });
    $("#may").click(function (){
        $("#myDrop").html("May");
    });
    $("#jun").click(function (){
        $("#myDrop").html("June");
    });
    $("#jul").click(function (){
        $("#myDrop").html("July");
    });
    $("#aug").click(function (){
        $("#myDrop").html("August");
    });
    $("#sep").click(function (){
        $("#myDrop").html("September");
    });
    $("#oct").click(function (){
        $("#myDrop").html("October");
    });
    $("#nov").click(function (){
        $("#myDrop").html("November");
    });
    $("#dec").click(function (){
        $("#myDrop").html("Decemeber");
    });
    
$(document).ready(function () {

    //Allows for months to change
    $("#jan").click(function (){
        $("#myDrop").html("January");
    });
    $("#feb").click(function (){
        $("#myDrop").html("Febuary");
    });
    $("#mar").click(function (){
        $("#myDrop").html("March");
    });
    $("#apr").click(function (){
        $("#myDrop").html("April");
    });
    $("#may").click(function (){
        $("#myDrop").html("May");
    });
    $("#jun").click(function (){
        $("#myDrop").html("June");
    });
    $("#jul").click(function (){
        $("#myDrop").html("July");
    });
    $("#aug").click(function (){
        $("#myDrop").html("August");
    });
    $("#sep").click(function (){
        $("#myDrop").html("September");
    });
    $("#oct").click(function (){
        $("#myDrop").html("October");
    });
    $("#nov").click(function (){
        $("#myDrop").html("November");
    });
    $("#dec").click(function (){
        $("#myDrop").html("Decemeber");
    });

    

  

    //When submit button is clicked
    $("#submitBtn").click(function () {
        
        //vars to send thank you message
        var radioVal = $('input[name="topping"]:checked').val();
        var quantVal = $("#myQuant").val();

        //https://www.geeksforgeeks.org/how-to-get-the-value-of-a-textarea-in-jquery/
        var txt = $("#textArea").val();

        //if user says vegan
        if(txt.includes("vegan") || txt.includes("Vegan")){
            alert("Cheesecake's contain dairy");
        }
        else{
            //remove all items
            $("#submitBtn").remove();
            $("#quant").remove();
            $("#myQuant").remove();
            $("#submitBtn").remove();
            $("#toppingHeader").remove();
            $("#plain").remove();
            $("#cherry").remove();
            $("#chocolate").remove();
            $("label").remove();


            alert("Your order has been placed Thank you!");

            //order info
            $('#textArea').val("Thank you for placing your order! \n You ordered    " + quantVal + " " + radioVal + " cheesecake(s)");
        }
    });
}); 