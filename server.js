const fs = require('fs');

// Writting files

// synchronusly
const content = "Some random content"

fs.writeFile('./file', content, err => {
    if(err){
        console.log(err);
    }
})