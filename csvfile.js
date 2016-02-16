var fs = require("fs");
var csv = require("fast-csv");

var stream = fs.createReadStream("climate-vulnerability.csv");

function countryData(code, callback) {
  var countryInfo = [];
  csv
   .fromStream(stream)
   .on("data", function(data){
       if (data[0] == code){
         // console.log(data);
         countryInfo.push(data);
       }
   })
   .on("end", function(){
       console.log("done");
       // console.log(countryInfo);
       callback(countryInfo);
   });
}
// implementation
countryData('AG', function (data){
  console.log(data);
});
