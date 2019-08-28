function TfaU2F_addkey() {
    
    var appId = document.getElementById('TfaU2F_appId').value;
    var challenge = JSON.parse("[" + document.getElementById('TfaU2F_challenge').value + "]");
    u2f.register(appId, challenge, [], function(data) {
        console.log("Register callback", data);
                if(data.errorCode && data.errorCode != 0) {
                    alert("registration failed with error: " + data.errorCode);
                    return;
                    
                } else {
                    document.getElementById('TfaU2F_regdata').value = JSON.stringify(data);
                    document.getElementById('TfaU2F_button').disabled = true;
                    document.getElementById('TfaU2F_msg').textContent = 'Security key added. Save this page to continue';
                    
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
