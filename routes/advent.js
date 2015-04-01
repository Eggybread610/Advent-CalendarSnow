/**
 * Created by Catherine on 21/03/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var columnCounts = [1,2,3,4,5,5,3,2];
    var htmlString = '';
    for (var rowIndex = 0; rowIndex < columnCounts.length; rowIndex++) {
        htmlString += '<div class="advent center">';
        for (var columnIndex = 0; columnIndex < columnCounts[rowIndex]; columnIndex++) {
            htmlString += '<div><img src="images/santaimage.jpg"></div>';

        }
        htmlString += '</div>';
        snowCanvas = '<div><canvas id="myCanvas" width="100%" height="100%"></canvas></div>'
    }
    // images/santaimage.jpg
    // loop 25 days
        // Create div
        // Position div
    res.render('advent', { title: 'advent', htmlstring: htmlString, snowcanvas: snowCanvas });
});

module.exports = router;