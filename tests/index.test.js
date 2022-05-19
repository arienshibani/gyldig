const gyldig = require("../index.js");
const test = require("ava");

//npm run test:watch

test("A valid fodselsNr, represented as a string returns true", (t) => {
    t.is(gyldig.fodselsNr("15096514953"), true);
});

test("A valid fodselsNr, represented as an integer returns true", (t) => {
    t.is(gyldig.fodselsNr(15096514953), true);
});

test("A valid fodselsNr, represented as a string with spaces returns true", (t) => {
    t.is(gyldig.fodselsNr("15096514953"), true);
});

test("An invalid fodselsNr, represented as a string returns false", (t) => {
    t.is(gyldig.fodselsNr("10000514953"), false);
});

test("An invalid fodselsNr, represented as an integer returns false", (t) => {
    t.is(gyldig.fodselsNr(10000514953), false);
});

test("A valid OrgNr, represented as a string returns true", (t) => {
    t.is(gyldig.orgNr("981 078 365"), true);
});

test("A valid OrgNr, represented as an integer returns true", (t) => {
    t.is(gyldig.orgNr(981078365), true);
});

test("A invalid OrgNr, represented as a string returns false", (t) => {
    t.is(gyldig.orgNr("981 000 365"), false);
});

test("A invalid OrgNr, represented as an integer returns false", (t) => {
    t.is(gyldig.orgNr(981000365), false);
});
