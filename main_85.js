menu_list_array = [ "MARGHERITA - VEG",                  
 "MEXICAN GREEN WAVE", "FARMHOUSE", "CHICKEN TANDOORI PIZZA", "PEPPY PANEER", "NON VEG SUPREME", "CREAMY TOMATO PASTA PIZZA - NON VEG", "MOROCCAN SPICE PASTA PIZZA - NON VEG", "VEGGIE PARADISE", "MOROCCAN SPICE PASTA PIZZA - VEG", "INDI TANDOORI PANEER", "CHEESE N CORN"                                       ];

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion()
{
   var item = document.getElementById("pizza_name").value;

    menu_list_array.push()(item);
}

