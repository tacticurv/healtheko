

var code_map = {
  "MDC_HF_ACT_SLEEP" : "8455148",
  "MDC_AIR_QUALITY_INDEX": "67108868",
  "MDC_CONC_GLU_UNDETERMINED_WHOLEBLOOD" : "160364",
  "MDC_MASS_BODY_ACTUAL" : "3141-9",
  "MDC_PULS_OXIM_PULS_RATE": "",
  "MDC_HF_DISTANCE": "",
  "MDC_PRESS_BLD_SYS": "",
  "MDC_PRESS_BLD_DIA": "",
  "MDC_PRESS_BLD_MEAN" : "",
  "Blood pressure systolic & diastolic": ""
}

this.dataRetrieval = function(patient_id, observation_code)
  {
  var final = [];
  var url_base = BASE_URL_OBSERVATION + '?subject:_id=' + patient_id + '&name=' + observation_code + '&_sort:asc=date&_count=205'
  $http
    ({
      url: url_base,
      method: "GET",
      headers: {'Authorization':'Bearer ' + accessToken,'Accept':'application/json'}
      }).success(function (data, status, headers, config) {
      var total_count = data["totalResults"];
      }
  for(count = 0, inti = 0; inti < total_count; inti=inti+205)
    {
        $http({
        url: url_base,
        method: "GET",
        headers: {'Authorization':'Bearer ' + accessToken,'Accept':'application/json'}
              }).success(function (data, status, headers, config) {
        for(co=0, co<205, co++)
              {
              final[count] = data[co]};
              count++;

              }
    }
  };
  //     $rootScope.$broadcast("glucoseObsSuccess");
  //   }).error(function (data, status, headers, config) {
  //     console.log(data);
  //   });
  // };
