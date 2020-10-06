student_array_names= [];
display_names=[];
function submit()
{


for (var j = 1; j <= 4; j++ )
{
    var name= document.getElementById ("name_of_the_student_"+j ).value;
    student_array_names.push(name);
}
var length1= student_array_names.length;

for (var k = 0; k < length1; k++)
{
display_names.push(student_array_names [k]);
}
document.getElementById ("display_name_with_commas").innerHTML=display_names;
var remove= display_names.join(" ");
document.getElementById ("display_name_without_commas").innerHTML=remove;
document.getElementById ("submit_button").style.display="none";
}  
