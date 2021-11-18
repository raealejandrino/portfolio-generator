// const fs = require('fs');

// const generateSite = requite('./utils/generate-site.js');

const { writeFile, copyFile } = require('./utils/generate-site.js');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'

            
            });
        });
    });
};


const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/syle.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Copied file successfully'
            });
        });
    });
};

// module.exports = writeFile;

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

module.exports = { writeFile, copyFile };