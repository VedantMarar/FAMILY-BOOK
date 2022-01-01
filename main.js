var images = ["FAMILY BOOK COVER.jpg","dad.jpg","mom.jpg","didi.png","blur.jpg","999 vedant.png"]
var names = ["MY FAMILY BOOK","My father","My mother","MY CRAZY SIS🤣","DRUMBEAT PLS FOR","THE LEGEND AKA:VEDANT(ME)"]
var i=0;


function update(){
    i++;
    var number_of_family_members = 5;
    if(i>number_of_family_members)
{
    i = 0
}
var updated_images = images[i];
var updated_names = names[i];
document.getElementById("family").src = updated_images;
document.getElementById("names").innerHTML = updated_names;
}