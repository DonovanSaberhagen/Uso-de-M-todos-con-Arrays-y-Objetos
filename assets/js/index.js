document.write("<h1>Estadisticas centro medico concepcion</h1>");
document.write("<br>")
document.write("<br>")

const radiologia = [
    { Hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
    { Hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
    { Hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDA LUNA", rut: "16445345-9", prevision: "ISAPRE" },
    { Hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
    { Hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" },
  ];
  

  const traumatologia = [
    { Hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { Hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { Hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "SNS KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { Hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { Hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
    { Hora: "12:00", especialista: "ARTURO CAVAGNADO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { Hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" },
  ];
  
  const dental = [
    { Hora: "08:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    { Hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    { Hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    { Hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    { Hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    { Hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE" },
  ];


  //-----------------------------------------------------------------------------------------------------
  // (1) agrega nuevas horas a traumatologia

  const nuevasHorasTraumatologia = [
    { Hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { Hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { Hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { Hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { Hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" },
    
  ];
  

  traumatologia.push(...nuevasHorasTraumatologia);
  console.log(traumatologia); // nuevas horas agregadas

  //-------------------------------------------------------------------------------------------------------------

  // (2) Eliminar el primer y último elemento del arreglo de Radiología

  const primeroYultimo = radiologia.slice(1, -1); // Elimina el primer y último elemento
  console.log(radiologia); // [1, 2, 3, 4, 5] (sin cambios)
  console.log(primeroYultimo); // [2, 3, 4] (nuevo array)


  
  //-------------------------------------------------------------------------------------------------------------

  //(3) Imprimir en el Dom, la lista de consultas médicas de Dental separando por un guión cada dato

  
dental.forEach(consulta => {

  const parrafoConsulta = document.createElement("p"); // Crear un párrafo para cada consulta

  // agrega la informacion y el guion de la consulta
  parrafoConsulta.textContent = `- ${consulta.Hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;

  document.body.appendChild(parrafoConsulta); // Agregar el párrafo en el Dom
});

  //-----------------------------------------------------------------------------------------------------------------------------------------------------


  //(4) Imprimir un listado total de todos los pacientes que se atendieron en el centro médico

  
  const pacientesTotales = dental.concat(traumatologia).concat(radiologia);

  const nombresUnicos = new Set();
  pacientesTotales.forEach(paciente => nombresUnicos.add(paciente.nombre));
  const nombresArray = Array.from(nombresUnicos);

  nombresArray.forEach(nombre => {
  const parrafoNombre = document.createElement("p");
  parrafoNombre.textContent = nombre;
  document.body.appendChild(parrafoNombre);

  });






  //-----------------------------------------------------------------------------------------------------------------------------------------------------

  document.write("<br>")
  document.write("<br>")

  //(5) Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de dental

  const consultasISAPRE = [];

  dental.forEach(consulta => {
    if (consulta.prevision === "ISAPRE") {
      consultasISAPRE.push(consulta);
    }
  });

  consultasISAPRE.forEach(consulta => {
    document.write(`- ${consulta.paciente} - ${consulta.prevision}`);
    document.write("<br>"); // salto de línea
  });




  //-----------------------------------------------------------------------------------------------------------------------------------------------------

  
  document.write("<br>")
  document.write("<br>")
  
  
  //(6) Filtrar aquellos pacientes que indican ser de FONASA en la lista de traumatologia
  
    const consultasFONASA = [];

  traumatologia.forEach(consulta => {
    if (consulta.prevision === "FONASA") {
      consultasFONASA.push(consulta);
    }
  });

  consultasFONASA.forEach(consulta => {
    document.write(`- ${consulta.paciente} - ${consulta.prevision}`);
    document.write("<br>"); // salto de línea
  });