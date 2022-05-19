# Gyldig 1.0

Validates Norwegian SSN (fødselsnummer) or OrgNr's on the fly.

## Install

`npm i gyldig`

## Usage

Simply pass the value you want to validate (String or Integer) and the module will tell you wether or not the given input is a valid ID number!

```javascript
const gyldig = require('gyldig');

gyldig.fodselsNr("15096514953") ➞ true
gyldig.orgNr("981 078 365") ➞ true
```
