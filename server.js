var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    console.log(new Date() + ' ' + req.method + ' request on ' + req.url);

    res.setHeader('Access-Control-Allow-Origin', 'http://fw.mydoorbot.com:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", 'accepts,content-type,x-csrf-token,x-requested-with');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Content-Type', 'application/json');

    if (req.url.match('/account/api/cards')) {
        res.write(JSON.stringify({
            "credit_cards":[  
                 {  
                     "id":22441,
                     "last_digits":"4242",
                     "cc_type":"visa",
                     "month":"6",
                     "year":"2030",
                     "is_default":true,
                     "is_active":true,
                     "display_number":"XXXX-XXXX-XXXX-4242",
                     "display_expiry":"06/2030"
                 }
             ]
         }));
    } else if (req.url.match('/account/api/profile')) {
        res.write(JSON.stringify({
            "first_name":"TestUser",
             "last_name":"Emulated",
             "full_name":"TestUser Emulated",
             "email":"postman.rpufe@ringqa.com",
             "phone_number":"18006561918",
             "currency":"USD",
             "supports_ring_credit":true,
             "ring_credit_balance":"0.00",
             "legacy":false,
             "has_base_station":false
        }));
    } else if (req.url.match('/account/activity/fetch_dings')) {
        res.write(JSON.stringify({
            "dings":[  
                {  
                   "id":"6564014500050529491",
                   "created_at":"2018-06-06T16:48:41.000Z",
                   "answered":false,
                   "events":[  
       
                   ],
                   "kind":"motion",
                   "favorite":false,
                   "snapshot_url":"",
                   "recording":{  
                      "status":"ready"
                   },
                   "duration":0,
                   "animal_present":null,
                   "vehicle_present":null,
                   "person_present":null,
                   "doorbot":{  
                      "id":421075,
                      "description":"f160"
                   },
                   "formatted_date":"Jun 06, 2018, 09:48AM "
                },
                {  
                   "id":"6564014401266281682",
                   "created_at":"2018-06-06T16:48:18.000Z",
                   "answered":false,
                   "events":[  
       
                   ],
                   "kind":"ding",
                   "favorite":true,
                   "snapshot_url":"",
                   "recording":{  
                      "status":"ready"
                   },
                   "duration":0,
                   "animal_present":null,
                   "vehicle_present":null,
                   "person_present":null,
                   "doorbot":{  
                      "id":421074,
                      "description":"60c4"
                   },
                   "formatted_date":"Jun 06, 2018, 09:48AM "
                },
                {  
                   "id":"6564010810673622226",
                   "created_at":"2018-06-06T16:34:22.000Z",
                   "answered":false,
                   "events":[  
       
                   ],
                   "kind":"ding",
                   "favorite":true,
                   "snapshot_url":"",
                   "recording":{  
                      "status":null
                   },
                   "duration":0,
                   "animal_present":null,
                   "vehicle_present":null,
                   "person_present":null,
                   "doorbot":{  
                      "id":421074,
                      "description":"60c4"
                   },
                   "formatted_date":"Jun 06, 2018, 09:34AM "
                },
                {  
                   "id":"6564010724774276307",
                   "created_at":"2018-06-06T16:34:02.000Z",
                   "answered":false,
                   "events":[  
       
                   ],
                   "kind":"ding",
                   "favorite":true,
                   "snapshot_url":"",
                   "recording":{  
                      "status":null
                   },
                   "duration":0,
                   "animal_present":null,
                   "vehicle_present":null,
                   "person_present":null,
                   "doorbot":{  
                      "id":421075,
                      "description":"f160"
                   },
                   "formatted_date":"Jun 06, 2018, 09:34AM "
                }
             ]
        }));
    } else if (req.url.match('/account/api/subscription/notify')) {
        res.json(JSON.stringify({

        }));
    } else if (req.url.match('/account/cvr/cards')) {
        res.write(JSON.stringify({
            "credit_cards":[  
                 {  
                     "id":224411,
                     "last_digits":"4242",
                     "cc_type":"visa",
                     "month":"6",
                     "year":"2030",
                     "is_default":true,
                     "is_active":true,
                     "display_number":"XXXX-XXXX-XXXX-4242",
                     "display_expiry":"06/2030"
                 }
            ]
        }));
    } else if (req.url.match('/account/api/activity/user_devices')) {
        res.write(JSON.stringify({
            "devices":[  
                 {  
                     "id":421074,
                     "description":"60c4",
                     "enable_vod":0,
                     "timezone":"America/Los_Angeles",
                     "show_recordings":true,
                     "shared_doorbot":false
                 },
                 {  
                     "id":421075,
                     "description":"f160",
                     "enable_vod":0,
                     "timezone":"America/Los_Angeles",
                     "show_recordings":true,
                     "shared_doorbot":false
                 }
             ],
             "status":200
        }));
    } else if (req.url.match('/account/activity/ding_video')){
        res.write(JSON.stringify({
            "video_url":"https://ring-staging-transcoded-videos.s3.amazonaws.com/570124/6564014500050529491.mp4?X-Amz-Expires=3600&X-Amz-Date=20180726T002749Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIGIGBEWL3ASTDOMA/20180726/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=686f36713bbf94b0e0432cf513e876a6d60015371031d189f723a7f5e3aefbec",
            "trial_notification":null,
            "shared":false
         }));
    } else if (req.url.match('/account/api/event')) {
        res.write(JSON.stringify(true));
    } else if (req.url === '/api/activity/delete_favorite') {
        res.write(JSON.stringify({}));
    } else if (req.url === '/account/api/activity/add_favorite') {
        res.write(JSON.stringify({}));
    } else if (req.url.match('/account/cvr/event')) {
        res.write(JSON.stringify("true"));    
    } 
    res.end();
});

server.listen(8000);
console.log('server listening on port 8000');