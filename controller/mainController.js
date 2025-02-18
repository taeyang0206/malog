const express = require("express");
const mainLayout = "../views/layouts/main.ejs";

const viewMain = (req, res) =>
{
    const locals =
    {
        title: "HOME",
    };
    res.render("index", {locals, layout : mainLayout});
};

const viewAbout = (req, res) =>
{
    const locals =
    {
        title: "ABOUT",
    };
    
    res.render("about", {locals, layout: mainLayout});
}

module.exports = 
{   viewMain, 
    viewAbout };