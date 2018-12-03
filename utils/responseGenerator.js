exports.getResponse = function (status,msg,records){
    var response = {
        "Status" : status,
        "Message":msg,
        "Data":records,
        "ErrorMessage":"",
        "URL":""
    }
    console.log(response);
    return response;
}