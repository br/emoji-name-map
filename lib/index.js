"use strict";

var emoji = require("emojilib"),
    mapO = require("@br/map-o"),
    iterateObject = require("@br/iterate-object");

var nameMap = module.exports = {};
nameMap.emoji = mapO(emoji.lib, function (value) {
    return value.char;
}, true);
iterateObject(nameMap.emoji, function (value, name, obj) {
    return !value && delete obj[name] || true;
});

/**
 * get
 * Gets the emoji character (unicode) by providing the name.
 *
 * @name get
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji character (unicode).
 */
nameMap.get = function (name) {
    return this.emoji[name];
};