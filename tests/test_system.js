
const assert = require('assert');
const chai = require('chai');
const fsmock = require('mock-fs');

const system = require('../utils/system');


before(function(){
    fsmock({
        'source': {},
        'tests': {
            'script.py': '',
            'script.js': '',
            '.profile': '',
            '.cache': {},
            'fixtures': {},
        },
        'script.rb': '',
        '.config': '',
        '.eslintrc.js': '',
        '.bowerrc': '',
    });
});


after(function(){
    fsmock.restore();
});


describe('Test listdir()', function(){
    describe('Without arguments', function(){
        it('Return all files and folders in current directory', function(){
            assert.deepEqual(
                system.listdir().sort(),
                ['source', 'tests', 'script.rb', '.config', '.eslintrc.js', '.bowerrc'].sort()
            );
        });
    });
    describe('Filter resuls in current folder', function(){
        it('Return only files in current directory if passed a path as pointer', function(){
            assert.deepEqual(
                system.listdir('.', 'f').sort(),
                ['script.rb', '.config', '.eslintrc.js', '.bowerrc'].sort()
            );
        });
        it('Return only folders in current directory if passed a path as pointer', function(){
            assert.deepEqual(
                system.listdir('.', 'd').sort(),
                ['source', 'tests'].sort()
            );
        });
        it('Return only files in current directory if passed a path as pointer with slash', function(){
            assert.deepEqual(
                system.listdir('./', 'f').sort(),
                ['script.rb', '.config', '.eslintrc.js', '.bowerrc'].sort()
            );
        });
        it('Return only folders in current directory if passed a path as pointer with slash', function(){
            assert.deepEqual(
                system.listdir('./', 'd').sort(),
                ['source', 'tests'].sort()
            );
        });
    });
    describe('Expected errors if no correct path or it does not exists', function(){
        it('Throw error if path is not correct', function(){
            chai.expect(function(){system.listdir('/$_-2214')}).to.throw(Error);
        });
        it('Throw error if path is not correct', function(){
            chai.expect(function(){system.listdir('aaaaaaaaaaaaaaaa')}).to.throw(Error);
        });
        it('Throw error if passed unsupported fillter', function(){
            chai.expect(
                function(){system.listdir('.', 'z')}
            ).to.throw(Error, 'Support filter only for files and directories');
        });
    });
    describe('Listdir in not current folders', function(){
        it('Return folder and files from nested directory', function(){
            assert.deepEqual(
                system.listdir('./tests').sort(),
                ['.cache', '.profile', 'fixtures', 'script.js', 'script.py'].sort()
            );
        });
        it('Return only files from nested directory', function(){
            assert.deepEqual(
                system.listdir('./tests', 'f').sort(),
                ['.profile', 'script.js', 'script.py'].sort()
            );
        });
        it('Return only folder from nested directory', function(){
            assert.deepEqual(
                system.listdir('./tests', 'd').sort(),
                ['.cache', 'fixtures'].sort()
            );
        });
    });
    describe('Listdir in not current folders if directory is empty', function(){
        it('Return nothing from nested directory without filters', function(){
            assert.deepEqual(system.listdir('./source'), []);
        });
        it('Return nothing from nested directory with filters', function(){
            assert.deepEqual(system.listdir('./source', 'f'), []);
            assert.deepEqual(system.listdir('./source', 'd'), []);
        });
    });
});
