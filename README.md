# Gyldig 1.0

An all-in-one package, for validating various Norwegian government identification numbers (fødselsnummer, organisasjonsnummer, kontonummer, etc.)

## Install

`npm i gyldig`

## Usage

Validate the org/fødselsnummer on the fly!

```javascript
const gyldig = require('gyldig');

gyldig.fodselsNr("15096514953") ➞ true
gyldig.orgNr("981 078 365") ➞ true
```
