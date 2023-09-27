// $(document).ready(function () {
//    $("#feedback-form").submit(function (event) {
//        event.preventDefault();

//        var formData = {
//          storenum: $("input[name='store-num']").val(),
//          txtarea: $("textarea[name='txtarea']").val()
//        };

//        $.ajax({
//            type: "POST",
//            url: "https://script.google.com/macros/s/AKfycbwv59USXJhZ4aiNmRlVyS-_mwjaloAHlD3x-G4VX52cBDzl2nCZ5N_twpoCZEw4N7Pn/exec",
//            data: JSON.stringify(formData),
//            contentType: "application/json; charset=utf-8",
//            success: function (data) {
//                alert(data);
//            }
//        });
//    });
// });

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxxvtt18dcYkd0DA9zzTcz3yuh6Eg8ikL89zy4u1thySbMkooyCI2sNfqsn-Gg0CdHy/exec'
//   const form = document.forms['feedback-form']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)
//       })
//       .then(res => res.text())
//       .then(data => {
//          document.querySelector('#went').innerHTML = data;
//       })
//       // .then(response => response.json())
//       // .then(e => {
//       //    window.open('http://127.0.0.1:5501/', '_self');
//       // })

//       // .then((html) => {
//       //    window.open('http://127.0.0.1:5501/');
//       // });
//       // .then(response => console.log('Success!', response))
//       // .catch(error => console.error('Error!', error.message))
//   });


// function doPost(e) {
//    var lock = LockService.getScriptLock();
//    lock.tryLock(10000);
 
//    try {
//      var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
//      var sheet = doc.getSheetByName(sheetName);
 
//      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
//      var nextRow = sheet.getLastRow() + 1;
 
//      var newRow = headers.map(function (header) {
//        return header === 'timestamp' ? new Date() : e.parameter[header];
//      });
 
//      sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
 
//      // Construct the response with a Redirect header
//      var response = ContentService
//        .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//        .setMimeType(ContentService.MimeType.JSON);
 
//      response.addHeader('Location', 'https://carpet-cal.netlify.app/'); // Replace with your desired URL
 
//      // Set a 302 status code for redirection
//      response.setStatusCode(302);
 
//      return response;
//    } catch (e) {
//      var errorResponse = ContentService
//        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//        .setMimeType(ContentService.MimeType.JSON);
 
//      return errorResponse;
//    } finally {
//      lock.releaseLock();
//    }
//  }
 
let form = document.querySelector('feedback-form');
form.addEventListener('submit', (e) => {
   e.preventDefault();
   document.querySelector("#feedback-form-submitBtn").value="Submitting..";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbxxvtt18dcYkd0DA9zzTcz3yuh6Eg8ikL89zy4u1thySbMkooyCI2sNfqsn-Gg0CdHy/exec', {
      method:"POST",
      body:data
   })
      .then(res => res.text())
      .then(data => {
         document.querySelector("#went").innerHTML=data;
         document.querySelector("#feedback-form-submitBtn").value="Submit";
      });
});