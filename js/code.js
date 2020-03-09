 flatpickr($(".inputRange"), {
  locale: "es", 
  dateFormat: "d-m-Y",
  minDate: "today",
  disableMobile: "true",
  plugins:plugin = [new rangePlugin({ input: "#secondRangeInput"})]
  
});
flatpickr($(".inputSoloIda"), {
  locale: "es", 
  dateFormat: "d-m-Y",
  minDate: "today",
  mode:'single',
  disableMobile: "true",
  
});

let botonIda = document.querySelector('.btnSoloIda');

botonIda.checked=false;

let botonIdaYVuelta = document.querySelector('.botonIdaYVuelta');
botonIdaYVuelta.checked=true;

botonIda.onclick= function(){

  
  document.querySelector('.arrow').style.display="none";
  document.querySelector('.inputRange').style.display="none";
  document.querySelector('.inputSoloIda').style.display="flex";
  document.querySelector('#secondRangeInput').style.display="none";
  document.querySelector('.inputIdaYVuelta2').style.display="none";
  document.querySelector('.inputIdaYVuelta').style.width="100%";
  botonIda.checked=true;
  botonIdaYVuelta.checked=false;
}

botonIdaYVuelta.onclick= function(){

  
  document.querySelector('.arrow').style.display="flex";
  document.querySelector('.inputRange').style.display="flex";
  document.querySelector('.inputSoloIda').style.display="none";
  document.querySelector('#secondRangeInput').style.display="flex";
  document.querySelector('.inputIdaYVuelta2').style.display="flex";
  document.querySelector('.inputIdaYVuelta').style.width="42%";
  botonIda.checked=false;
  botonIdaYVuelta.checked=true;
}
let modal = document.querySelector('.modal');

modal.onclick=function(){
var mayores = parseInt(document.getElementById("mayores").value);
var ninios =parseInt( document.getElementById("ninios").value);
var bebes = parseInt(document.getElementById("bebes").value);
var clase = document.getElementById("clase").value;
let total = mayores+ninios+bebes;
console.log(clase);
console.log(document.getElementsByClassName('inputPasajerosyClase')); 
document.getElementsByClassName('inputPasajerosyClase')[0].value=''+total+' Pasajeros, '+clase;
}


$(".dropdown-toggle").click(function(){
  toggleElement($(".modal"));
});


function toggleElement(element){
  element.toggle();
};


$(document).click(function(e){
  if(!$(e.target).closest('.dropdown-toggle').length){
      $(".modal").hide();
  }
})



/*
$(".inputPasajerosyClase").click(function(){
  toggleElement($(".modals"));
});


$(".dropdown-chocolates a").each(function(){
  ($(this).css("display","block"));
  ($(this).css("text-decoration","none"));
});

function toggleElement(element){
  element.toggle();
};



  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      showWeekNumbers:'true',
      autoApply:true,
       locale: {
         format:' DD/MM/YYYY ',
       
        daysOfWeek: [
            "Dom",
            "Lu",
            "Ma",
            "Mie",
            "Ju",
            "Vie",
            "Sab"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agusto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
        "firstDay": 1
    }
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + '<svg class="_1ehavpg" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg> ' + picker.endDate.format('MM/DD/YYYY'));
  });
  });
*/
 



      