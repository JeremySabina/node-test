import path from 'path';
import url from 'url'


const filePath = './dir1/dir2/test.txt';

// basename()

console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));



const __fileName = url.fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__fileName)
console.log(`File name is ${__fileName}, Directory name is ${__dirname}`);


// join ()

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath3);



