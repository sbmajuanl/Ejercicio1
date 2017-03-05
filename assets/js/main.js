function enviardatos(){
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var dni=document.getElementById("dni");
var direccion=document.getElementById("direccion");

enviar.innerHTML =(
  "<div><ul><li> Nombre : "+ nombre.value+"</li><li> Apellido : " + apellido.value +
          "</li><li> DNI : " + dni.value +"</li><li> Direccion : " + direccion.value+
          "</li></ul><div>");
}
