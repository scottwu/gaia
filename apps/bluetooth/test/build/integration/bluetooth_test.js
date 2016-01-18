'use strict';

/* jshint node: true, mocha: true */
/* global suiteSetup */
console.log('!!!!!!!!!!!');
var helper = require('./../../../../../build/test/integration/helper.js');

suite('Bluetooth tests', function() {
  console.log(helper);
  console.log('>>> in suite');
  suiteSetup(helper.cleanupWorkspace);
  teardown(helper.cleanupWorkspace);
  console.log('>>> done setup');
  test('APP=bluetooth make', function(done) {
    console.log('>>> pre exec');
    helper.exec('APP=bluetooth make', function(error, stdout, stderr) {
      console.log('>>> in exec');
      helper.checkError(error, stdout, stderr);
      console.log('>>> done checking error');
      var zipPath = process.cwd() +
        '/profile/webapps/bluetooth.gaiamobile.org/application.zip';
      var checkList = ['manifest.webapp'];

      checkList.forEach(function(filePath) {
        helper.checkFilePathInZip(zipPath, filePath);
      });

      done();
    });
  });
});
