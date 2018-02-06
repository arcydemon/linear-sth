'use strict';

const mean = require('stats-mean');
const covariance = require('@elstats/covariance');
const variance = require('stats-variance');

function linearRegression(data) {
    const x = data.map(x => x[0]);
    const y = data.map(x => x[1]);

    const b = covariance(x, y) / variance.calc(x);
    const a = mean.calc(y) - b * mean.calc(x);

    return { a, b };
}

module.exports = linearRegression;