function z1()
{
	var contactName = document.getElementById("contactName");

	
 if (contactName.value == ""){
document.getElementById("contactName").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("contactName").className="form-control is-valid "; 
	 
 }
 
 }
 
 function z2()
{

 var contactEmail = document.getElementById("contactEmail");
 
 if (contactEmail.value == ""){
document.getElementById("contactEmail").className="form-control is-invalid"; 
	 }
	  else
{

	document.getElementById("contactEmail").className="form-control is-valid "; 
	 

 var email = contactEmail.value;
 var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if(regex.test(email)==false)
 {
document.getElementById("contactEmail").className="form-control is-invalid"; 
 }
 else
 {
	document.getElementById("contactEmail").className="form-control is-valid "; 
	 
 }
} 




	
 
 
 }
   
   function z3()
{

  var contactSuName = document.getElementById("contactSuName");

	
 
 
  if (contactSuName.value == ""){
document.getElementById("contactSuName").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("contactSuName").className="form-control is-valid "; 
	 
 }
 

 
 }
   
   function z4()
{

   var Info = document.getElementById("Info");
	

 
  if (Info.value == ""){
document.getElementById("Info").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("Info").className="form-control is-valid "; 
	 
 }
 
 }
   

function checkForm()
{

 var error=false; //to znaczy, że danych nie brakuje
 var errorText=""; //komunikat z błędem
 var contactName = document.getElementById("contactName");
 var contactEmail = document.getElementById("contactEmail");
  var contactSuName = document.getElementById("contactSuName");
   var Info = document.getElementById("Info");
 
// jeśli nic nie wpisano w contactName to jest błąd - sprawdzamy czy contactName jest puste, jeśli tak to dodajemy do errorText pole imię i oznaczamy, że brakuje danych
 if (contactName.value == ""){
document.getElementById("errorName").className="alert alert-danger"; 
 error=true;
 }
  else
 {
document.getElementById("errorName").className="d-none"; 
 error=false; 
	 
 }
 
  if (contactSuName.value == ""){
document.getElementById("errorName2").className="alert alert-danger"; 
 error=true;
 }
 else
 {
	document.getElementById("errorName2").className="d-none"; 
 error=false; 
	 
 }
 
  if (Info.value == ""){
document.getElementById("errorName3").className="alert alert-danger"; 
 error=true;
 }
 else
 {
	document.getElementById("errorName3").className="d-none"; 
 error=false; 
	 
 }
 
// jeśli nic nie wpisano w contactEmail to jest błąd - sprawdzamy czy contactEmail jest puste, jeśli tak to dodajemy do errorText pole email i oznaczamy, że brakuje danych
	 if (contactEmail.value == ""){
document.getElementById("errorName4").className="alert alert-danger"; 
	 error=true;
	 }
	  else
{

	document.getElementById("errorName4").className="d-none"; 
 error=false; 
	 

 var email = contactEmail.value;
 var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if(regex.test(email)==false)
 {
document.getElementById("errorName4").className="alert alertdanger";  
 error=true;
 }
 else
 {
	document.getElementById("errorName4").className="d-none"; 
 error=false; 
	 
 }
} 
 
 //return false;

// jeśli nie brakuje danych wysyłamy formularz, jeśli brakuje pojawia się komunikat i formularz nie zostanie wysłany
if (error==true){return true;} 
else {document.getElementById("myForm").reset();}
//alert ("Nie wypełniłeś następujących pól:\n" + errorText);


}