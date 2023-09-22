$(document).ready(function () {
   $("#feedback-form").submit(function (event) {
       event.preventDefault();

       var formData = {
         name: $("input[name='store-num']").val(),
         message: $("textarea[name='txtarea']").val()
       };

       $.ajax({
           type: "POST",
           url: "https://script.google.com/macros/s/AKfycbwv59USXJhZ4aiNmRlVyS-_mwjaloAHlD3x-G4VX52cBDzl2nCZ5N_twpoCZEw4N7Pn/exec",
           data: JSON.stringify(formData),
           contentType: "application/json; charset=utf-8",
           success: function (data) {
               alert(data);
           }
       });
   });
});
