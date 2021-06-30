var fs = require('fs');

fs.writeFile('Createfile.txt','Welcome to Node Training!!!',function(err){
    if(err) throw err;
    console.log('File Is Created Successfully');
})



