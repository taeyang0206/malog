const express = require("express");

const view = (req, res) =>
{
    res.send("router, controller test");
};

module.exports = view;