$(document).ready(function() {
  $("form#stress_survey").submit(function(event) {
    event.preventDefault();
    var stressWarningSign = 0;
    var healthSymptoms = 0;
    var copingMethods = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      stressWarningSign += 1;
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      healthSymptoms += 1;
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      copingMethods += 1;
    });

    console.log("This is stress sum: " + stressWarningSign);
    console.log("This is Health Symptom sum: " + healthSymptoms);
    console.log("This is Coping Method sum: " + copingMethods);
  });
});
