const cors = require('cors')({origin: true});
const https = require('https');

function sendViaCors (request, response, uri) {

    return new Promise((resolve, reject) => {
        
        cors(request, response, () => {
            if (uri) {
                var onFinish = function (res) {

                    var body = '';

                    res.on('data', (d) => {
                        body += d;
                    });

                    res.on('end', () => {
                        resolve(body);
                    });         
                }

                https.get(uri, onFinish);
                
            } else {
                resolve('success');
            }


        }); // /CORS

    }); // /PROMISE
}

module.exports = sendViaCors;