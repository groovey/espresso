require('module-alias/register');
var path = require('path');
const express = require('express');
const config = require('@config');

console.log(config.app.name);
console.log(config.app.env);
console.log(config.app.url);