'use strict';

// tests for datapoint
// Generated by serverless-mocha-plugin

const mod = require('../../../src/main/js/handler.js');
const mochaPlugin = require('serverless-mocha-plugin');

const lambdaWrapper = mochaPlugin.lambdaWrapper;
const expect = mochaPlugin.chai.expect;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'datapoint' });

describe('datapoint', () => {
  
  before((done) => {
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda
    done();
  });

  it('response not empty', () => {
    return wrapped.run({}).then((response) => {
      expect(response).to.not.be.empty;
    });
  });
});
