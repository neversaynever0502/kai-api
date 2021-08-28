module.exports = function (port, jsonData) {

    var chalk = require('chalk');
    var express = require('express');
    var cors = require('cors');
    var app = express();
    var port = port || 8080;
    var ngrok = require('ngrok');


    var router = express.Router();

    app.use(cors());
    router.use(function (req, res, next) {
        next();
    })

    router.get('/', function (req, res) {

        if (jsonData) {
            res.json(jsonData)
        } else {
            res.json(
                [
                    { message: 'Good01', detail: 'test-get-api-01', imgURL: 'http://californiacommunitycolleges.cccco.edu/Portals/0/logos/ccc_logo_no_text_bw.jpg' },
                    { message: 'Good02', detail: 'test-get-api-02', imgURL: 'http://geotypografika.com/wp-content/uploads/2009/01/8851-500-500.jpg' },
                    { message: 'Good03', detail: 'test-get-api-03', imgURL: 'https://dspncdn.com/a1/media/692x/22/c7/39/22c73916a6aaa2672e7d85a386911e61.jpg' },
                    { message: 'Good04', detail: 'test-get-api-04', imgURL: 'http://zenefashion.com/wp-content/uploads/2016/08/500-500-88.jpg' },
                    { message: 'Good05', detail: 'test-get-api-05', imgURL: 'https://www.noao.edu/image_gallery/images/d3/ngc3582-500.jpg' },
                    { message: 'Good06', detail: 'test-get-api-06', imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Kaizer_Chiefs_logo.svg/500px-Kaizer_Chiefs_logo.svg.png' },
                ]
            )
        }
    });

    router.put('/', function (req, res) {
        res.json({ message: 'update success' });
    });

    router.post('/', function (req, res) {
        res.json({ message: 'post success' });
    });

    router.delete('/', function (req, res) {
        res.json({ message: 'delete success' });
    });

    app.use('/', router);

    app.listen(port, async function () {
        console.log(("Server now listen on:" + chalk.green(" http://localhost:" + port)))
        let ngrokUrl = await ngrok.connect(port)
        if(ngrokUrl){
            console.log('online URL: ', chalk.blue(ngrokUrl))
            require("openurl").open(ngrokUrl)
        }else{
            console.log('Ngrok not return url.')
        }
            // function (err, url) {
        //     if(err){
        //         console.log(err)
        //     }
        //     if(url){
        //         console.log('online URL: ', chalk.blue(url))
        //         require("openurl").open(url)
        //     }else{
        //         console.log('Ngrok not return url.')
        //     }
        // });
    });

}