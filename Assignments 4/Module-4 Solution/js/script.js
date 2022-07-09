
var names = ["Hemant", "Jignesh", "julee", "jeams", "vijay", "shruti", "Hitesh", "Aniket", "Shubham", "Jagu"];

for (var i = 0; i < names.length; i++) 
{
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') 
    {
        console.log("Good Bye " + names[i])
    }
    else 
    {
        console.log("Hello " + names[i])
    }
}
    


    