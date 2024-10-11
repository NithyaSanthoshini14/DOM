var name_ele=document.getElementById("r1")
        console.log(name_ele.innerHTML)
var tag_ele=document.getElementsByTagName("tr")
console.log(tag_ele[3].innerHTML)
var class_ele=document.getElementsByClassName("details")
console.log(class_ele[0])
var query_ele=document.querySelector("th")
console.log(query_ele.innerHTML)
var data_ele=document.querySelectorAll("td")
console.log(data_ele)
for(i=0;i<data_ele.length;i++){
        console.log(data_ele[i].innerHTML)
}
data_ele[0].innerHTML="<i style='color:blue;'>Nithya Santhoshini</i>"
data_ele[1].innerHTML="<i style='color:blue;'>nithyagunda61@gmail.com</i>"
data_ele[2].innerTEXT="<i style='color:blue;'>BTECH</i>"
var doc=document.body
console.log(doc)
let s1_ele=document.getElementById("s1")
s1_ele.innerHTML="<i style='color:blue;'>ECE</i>"
var c_ele=document.getElementsByClassName("h1")
console.log(c_ele)
c_ele[0].innerHTML="<b style='color:red;'>Name</b>"
c_ele[1].innerHTML="<b style='color:red;'>Email</b>"
c_ele[2].innerHTML="<b style='color:red;'>Bachelors degree</b>"
c_ele[3].innerHTML="<b style='color:red;'>course</b>"
c_ele[4].innerHTML="<b style='color:red;'>college</b>"

