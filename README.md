# Gyldig 1.0

An all-in-one package, for validating various Norwegian government identification numbers (fødselsnummer, organisasjonsnummer, kontonummer, etc.)

## Install

`npm i gyldig`

## Usage

Simply pass the value you want to validate (String or Integer) and the module will tell you wether or not the given input is a valid ID number!

```javascript
const gyldig = require('gyldig');

gyldig.fodselsNr("15096514953") ➞ true
gyldig.orgNr("981 078 365") ➞ true
```
