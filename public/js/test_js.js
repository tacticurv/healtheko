<html>
<body>
<script>
var CLIENT_ID = "koC4UquWk0AqnjnnL2AZ5ndQMU6wljno"; // Retrieve this key from the developer portal
var CLIENT_SECRET = "q6uDbzxuZo7ZgSNB"; // Retrieve this key also from the developer portal

var BASE_URL = "https://gateway.api.pcftest.com:9004"; // HTTPS url
var BASE_URL_GET_TOKEN = BASE_URL + "/v1/oauth2/token?grant_type=client_credentials";
var BASE_URL_LOGIN = BASE_URL + "/v1/oauth2/authorize/login";
var BASE_URL_LOGOUT = BASE_URL + "/v1/oauth2/authorize/logout";
var BASE_FHIR_INFO_URL = BASE_URL + "/v1/fhir_rest";
var BASE_URL_PATIENT = BASE_FHIR_INFO_URL + "/Patient/";
var BASE_URL_ORGANIZATION = BASE_FHIR_INFO_URL + "/Organization/";
var BASE_URL_OBSERVATION = BASE_FHIR_INFO_URL + "/Observation";
var patient_id = "a101"
var observation_code = "3141-9"

    function x(patient_id, observation_code) {
        var final_data = [];
        var url_base = BASE_URL_OBSERVATION + '?subject:_id=' + patient_id + '&name=' + observation_code + '&_sort:asc=date&_count=205'
        $http({
            url: url_base,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json'
            }
        }).success(function (data, status, headers, config) {
            var total_count = data["totalResults"];
            document.alert(total_count);
        })
                   };
x(patient_id, observation_code);
</script>
<p></p>
</body>
</html>
