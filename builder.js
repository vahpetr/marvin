var UglifyJS = require("uglify-js");

var config = {
    fromString: true,
    mangle: {
        except: ['readline', 'print']
    },
    //compress: true,
    //sourceMap: true,
    //sourceMapIncludeSources: true,
    //sourceMapName: 'js/app.min.js.map',
    //mangle: {
    //    //toplevel: true,
    //    //screw_ie8: true

    //},
    compress: {
        screw_ie8: true, // ?
        sequences: true, // join consecutive statemets with the “comma operator”
        properties: false, // optimize property access: a["foo"] → a.foo
        dead_code: true, // discard unreachable code
        drop_debugger: true, // discard “debugger” statements
        unsafe: true, // some unsafe optimizations (see below)
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        conditionals: true, // optimize if-s and conditional expressions
        comparisons: true, // optimize comparisons
        evaluate: true, // evaluate constant expressions
        booleans: true, // optimize boolean expressions
        loops: true, // optimize loops
        unused: true, // drop unused variables/functions
        toplevel: false,
        top_retain:false,
        hoist_funs: true, // hoist function declarations
        hoist_vars: true, // hoist variable declarations
        if_return: true, // optimize if-s followed by return/continue
        join_vars: true, // join var declarations
        cascade: true, // try to cascade `right` into `left` in sequences
        collapse_vars: true,
        reduce_vars: true,
        side_effects: true, // drop side-effect-free statements
        warnings: true, // warn about potentially dangerous optimizations/code
        negate_iife: true,
        pure_getters:true,
        drop_console: true,
        //droop func
        pure_funcs: [
            'printErr'
        ],
        expression:true,
        keep_fargs:true,
        passes:1,
        // global definitions
        global_defs: {
            DEBUG: false
        }
    }
};

var fs = require('fs');
fs.readFile('./index.js', 'utf8', function (err, data) {
    if (err) throw err;
    
    data = 'function test(readline, print) {' + data + '}';
    var result = UglifyJS.minify(data, config);
    var code = result.code.replace(/^function test\(readline,print\){/, '').replace(/}$/, '');
    fs.writeFile('marvin.js', code, (err) => {
        if (err) throw err;
        
        console.log(`Marvin update! New size ${code.length}`);
    });
});
