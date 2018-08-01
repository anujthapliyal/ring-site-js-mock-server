# ring-site-js-mock-server

### To start mock server run

#### node server.js

#### server starts at port 8000

### Usage

#####  Change endpoins in ring-site-javascript that are erroring 

#### Eg :

#### Original url in code

#### url: '/account/activity/fetch_dings' + (queryString ? '?' + queryString : ''),

#### Pointing to mock server

#### url: 'http://fw.mydoorbot.com:8000/account/activity/fetch_dings' + (queryString ? '?' + queryString : ''),


#### Next step would be to this switch via config instead of manually changing endpoints