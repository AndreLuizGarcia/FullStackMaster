const files = require('./files')
const expect = require('chai').expect
const fs = require('fs')
const sinon = require('sinon')

describe('reading directory', () =>{
    it('reads a directory', () =>{
        sinon.stub(fs, 'readdir').callsFake((path, cb) => {
            cb(null, ['file1.txt'])
        })
        const path = './'
        return files.readdir(path).then( list => {
            expect(list.length).to.equals(1)        
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })
})