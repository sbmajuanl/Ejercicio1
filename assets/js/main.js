function EnviarDatos(){
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var dni=document.getElementById("dni");
var direccion=document.getElementById("direccion");

enviar.innerHTML =(

  "<br>"+ "- Nombre : "+ nombre.value +
  "</br>"+ "- Apellido : " + apellido.value +
  "</br>"+ "- DNI : " + dni.value +
  "</br>"+ "- Direccion : " + direccion.value);


}
