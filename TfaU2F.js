var TfaU2F_count = 1;
function TfaU2F_addkey() {
    
    var appId = document.getElementById('TfaU2F_appId').value;
    var regdata = document.getElementById('TfaU2F_regdata');
    var challenge = JSON.parse("[" + document.getElementById('TfaU2F_challenge').value + "]");
    
    u2f.register(appId, challenge, [], function(data) {
        console.log("Register callback", data);
                if(data.errorCode && data.errorCode != 0) {
                    alert("registration failed with error: " + data.errorCode);
                    return;
                    
                } else {
                    if(regdata.value === "") {
                        regdata.value = JSON.stringify(data);
                        document.getElementById('TfaU2F_msg').textContent = 'Security key added. You can add more now or save this page to finish setup';
                    } else {
                        regdata.value = regdata.value+", "+JSON.stringify(data);
                        document.getElementById('TfaU2F_msg').textContent = 'Security key '+TfaU2F_count+' added. You can add even more or save this page to finish setup';
                    }    
                    TfaU2F_count++;
                    document.getElementById('TfaU2F_button').classList.remove('ui-state-active');                
                }
            });
}

function TfaU2F_authKey() {
    var appId = document.getElementById('TfaU2F_appId').value;
    var authreq = JSON.parse(document.getElementById('TfaU2F_authreq').value);
    var challenge = authreq[0].challenge;
    u2f.sign(appId, challenge, authreq, function(data) {
        console.log("Authenticate callback", data);
        if(data.errorCode && data.errorCode != 0) {
            document.getElementById('TfaU2F_error').textContent = "authentication failed with error: " + data.errorCode;
            document.getElementById('TfaU2F_error').style.display = "block";
        } else {
            document.getElementById('TfaU2F_error').style.display = "none";
            document.getElementById('TfaU2F_authresponse').value = JSON.stringify(data);
            document.getElementById('tfaform').submit();
        }        
    });
}
