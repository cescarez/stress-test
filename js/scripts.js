var warningCheck = function(stressSigns, healthWhatever, coping) {
  if (stressSigns > 4) {
    $("div#stressRecommendations").show();
    $("div#stress-responses").show();
  }

  if (healthWhatever > 2) {
    $("div#healthRecommendations").show();
    $("div#stress-responses").show();
  }

  if (coping > 3) {
    $("div#GoodJob").show();
    $("div#stress-responses").show();
  }

  if (stressSigns <= 4) {
    $("div#stressRecommendations").hide();
  }

  if (healthWhatever <= 2) {
    $("div#healthRecommendations").hide();
  }

  if (coping <= 3) {
    $("div#GoodJob").hide();
  }

  if (stressSigns <= 4 && healthWhatever <= 2 && coping <= 3) {
    $("div#stress-responses").hide();
  }
}

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
    warningCheck(stressWarningSign, healthSymptoms, copingMethods);
  });
});
