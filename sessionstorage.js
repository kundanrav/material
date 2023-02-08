function initiate()
{
    var saveButton=document.getElementById('save');
    var retrieveButton=document.getElementById('retrieve');
    saveButton.addEventListener('click',saveItem);
    retrieveButton.addEventListener('click',retrieveItem);
}
function saveItem(){
    var key=document.getElementById('key').value;
    var Value=document.getElementById('value').value;
    sessionStorage[key]=Value;
    console.log("data saved");
}
function retrieveItem(){

    var data=document.getElementById('data');
    var key=document.getElementById('key').value;
    var value=sessionStorage[key];

data.innerHTML='<div>'+key+':'+value+'<div>';
}
  addEventListener("load",initiate);
