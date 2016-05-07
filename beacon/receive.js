var request = require('request');


// variables
var uuid_list = ['485344424c45414480c01800ffffbbbb'];
var checkpoint = process.argv[2];
var flag = true;
var d1 = new Date();

console.log("Your CHECKPOINT NUMBER is: " + checkpoint);

// start tracking
Bleacon = require('bleacon');
Bleacon.startScanning();

var f = function(bleacon) {
    var d2 = new Date();

    if (d2 - d1 > 1000){
      d1 = d2;
        // debug
        if (uuid_list.indexOf(bleacon.uuid) != -1 && bleacon.proximity != 'immediate'){
          console.dir(bleacon.proximity);
        } else
        {
          console.log("NO SIGNAL");
        }
       // console.log('checkpoint: ' + checkpoint)
       // console.log('uuid: ' + bleacon.uuid);
       // console.log('distance: ' + bleacon.proximity);

        var options = {
          uri: 'http://localhost:9090/?last_checkpoint_id=' + checkpoint + '&beacon_id=' + bleacon.uuid,
          form: { name: 'テストユーザー' },
          json: true
        };

        if (flag && bleacon.proximity == 'immediate' && uuid_list.indexOf(bleacon.uuid) != -1){
            request.get(options, function(error, response, body){
              if (error)
              {
                console.log("***GET REQUEST ERROR***");
                console.log(bleacon.uuid);
                console.log(bleacon.proximity);
                console.log(checkpoint);
              }
              else if (response.statusCode == 200) {
                console.log("***GET REQUEST SUCCESS***");
                console.log(bleacon.uuid);
                console.log(bleacon.proximity);
                console.log(checkpoint);
                // stop POST-ing
                flag = false;
              } else {
                console.log('error: '+ response.statusCode);
              }
            });
        }
    }
  };


Bleacon.on('discover', f);