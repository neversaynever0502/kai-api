## [0.3.1] release
Online Api - Now you can use the test-api online, Not only use in localhost by use ngrok automatically.

Fix - use new ngrok version 4.1.0


## Installation

`npm install kai-api --save`


## quickly start

For front-end to test or practice CRUD api in localhost.
```javascript
var apiTestServer = require('kai-api');

apiTestServer(5151)
```

Now when you use http://localhost:5151/ or NGROK_ONLINE_URL , you will get it.

[GET] http://localhost:5151/

Example response
```javascript
[
  {
    "message": "Good01",
    "detail": "test-get-api-01",
    "imgURL": "http://californiacommunitycolleges.cccco.edu/Portals/0/logos/ccc_logo_no_text_bw.jpg"
  },
  {
    "message": "Good02",
    "detail": "test-get-api-02",
    "imgURL": "http://geotypografika.com/wp-content/uploads/2009/01/8851-500-500.jpg"
  },
  {
    "message": "Good03",
    "detail": "test-get-api-03",
    "imgURL": "https://dspncdn.com/a1/media/692x/22/c7/39/22c73916a6aaa2672e7d85a386911e61.jpg"
  },
  {
    "message": "Good04",
    "detail": "test-get-api-04",
    "imgURL": "http://zenefashion.com/wp-content/uploads/2016/08/500-500-88.jpg"
  },
  {
    "message": "Good05",
    "detail": "test-get-api-05",
    "imgURL": "https://www.noao.edu/image_gallery/images/d3/ngc3582-500.jpg"
  },
  {
    "message": "Good06",
    "detail": "test-get-api-06",
    "imgURL": "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Kaizer_Chiefs_logo.svg/500px-Kaizer_Chiefs_logo.svg.png"
  }
]

```

[PUT] http://localhost:5151/

Example response
```javascript
{message:'update success'}
```

[POST] http://localhost:5151/

Example response
```javascript
{message:'post success'}
```

[DELETE] http://localhost:5151/

Example response
```javascript
{message:'delete success'}
```


## custom get json

```javascript
var apiTestServer = require('kai-api');

apiTestServer(5151,
  [
    {
      "name": "kevin",
      "phone": "0911111111",
    },
    {
      "name": "mary",
      "phone": "0922222222",
    }
  ]
)
```

[GET] http://localhost:5151/

Example response
```javascript
[
  {
    "name": "kevin",
    "phone": "0911111111",
  },
  {
    "name": "mary",
    "phone": "0922222222",
  }
]
```


## default port
```javascript
var apiTestServer = require('kai-api');

apiTestServer()
```
You will listen port on 8080.