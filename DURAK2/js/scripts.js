function diffImage(img) 
{
   if(img.src.match(/blank/)) img.src = "img/Ac.png";
   else img.src = "img/rubashka.png";
}
