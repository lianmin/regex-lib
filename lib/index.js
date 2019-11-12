'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isNumber = /^\d+$/;

const email = /^[0-9a-zA-Z_\-.]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+)+$/;

const image = /^.+(\.jpg|\.JPG|\.gif|\.GIF|\.png|.PNG|\.png|\.bmp|\.BMP)$/;

const telephone = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;

const httpUrl = /^http:\/\/([^\s]+)$/;

const flv = /^.+(\.flv|\.FLV|\.Flv)$/;

const float = /^(\d*\.)?\d+$/;

const idCard = /^(\d{15})|(\d{17}([0-9]|X))$/;

const mobile = /1\d{10}/;

exports.email = email;
exports.float = float;
exports.flv = flv;
exports.httpUrl = httpUrl;
exports.idCard = idCard;
exports.image = image;
exports.isNumber = isNumber;
exports.mobile = mobile;
exports.telephone = telephone;
//# sourceMappingURL=index.js.map
