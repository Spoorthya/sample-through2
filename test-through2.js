var fs = require('fs');
var through2 = require('through2');

fs.createReadStream('ext.txt')
.pipe(through2(function (chunk, enc, done) {
    for (var i = 0; i < chunk.length; i++)
      if (chunk[i] == 97)
        chunk[i] = 122; // swap 'a' for 'z'                                                                                                                                          

    this.push(chunk);

    done();//done is needed to continue the pipe chainin or to indicate trnsformation is completeg
}))
.pipe(fs.createWriteStream('out.txt'))
