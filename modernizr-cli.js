#!/usr/bin/env node
'use strict';

/*globals console, process, __dirname */

var modernizr = require('modernizr');
var fs = require('fs');
var path = require('path');

var args = process.argv.slice(2);
console.log('CLI arguments:', args);

var fileNames;

function cleanFileName(name) {
    return name.replace( /\.js(on)?$/ , '');
}

switch (args.length) {
    case 0:
        console.error('Must, at minimum, provide the name of the config file');
        break;
    case 1:
        var arg0Cleaned = cleanFileName(args[0]);
        fileNames = {
            config: args[0],
            output: arg0Cleaned+'.modernizr.js',
            minifiedOutput: arg0Cleaned+'.modernizr.min.js'
        };
        break;
    case 2:
        var arg1Cleaned = cleanFileName(args[1]);
        fileNames = {
            config: args[0],
            output: arg1Cleaned+'.js',
            minifiedOutput: arg1Cleaned+'.min.js'
        };
        break;
    case 3:
        fileNames = {
            config: args[0],
            output: args[1],
            minifiedOutput: args[2]
        };
        break;
    default:
        console.error('Too many arguments specified');
}

if (!fileNames) {
    console.error('Expects three arguments: config [output] [minifiedOutput]');
    process.exit(1);
}

console.log('File names:', fileNames);

//Read config file, and parse as JSON
var configFile = __dirname + '/' + fileNames.config;
fs.readFile(fileNames.config, function(err, data) {
    if (err) {
        console.error('Failed to read config file:', configFile);
        process.exit(2);
    }
    var config;
    try {
        config = JSON.parse(data);
    } catch (x) {
        console.error('Failed to parse config file as valid JSON');
        process.exit(3);
    }

    //invoke the modernizr build step + write outputs to file
    modernizr.build(config, function(result) {
        var outputFile = __dirname + '/' + fileNames.output;
        fs.writeFile(fileNames.output, result.code, function(err) {
            if (err) {
                console.error('Failed to write to output file:', err);
            }
            else {

            }
        });
        var minifiedOutputFile = __dirname + '/' + fileNames.minifiedOutput;
        fs.writeFile(fileNames.minifiedOutput, result.min, function(err) {
            if (err) {
                console.error('Failed to write to minified output file:', err);
            }
        });
    });
});
