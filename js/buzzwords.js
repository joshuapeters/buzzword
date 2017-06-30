/**
 * Created by Josh on 1/21/2017.
 */

String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function get_buzzword()
{
    var my_trace = tracery.createGrammar(buzzword_grammar);
    var text = my_trace.flatten("#origin#");
    return fix_ing_modifier(text);
}

function send_suggestion()
{
    var suggestion = document.getElementById("suggestionInput").value;
    var name = document.getElementById("fname").value;
    var subject = "Hey, " + name + " wants see these pop up on buzzword.io.";

    var body = 'Here\'s what I want to see...' +
        '\n ' + suggestion + '.';
    window.open('mailto:jgpeters717+buzzwordsuggestions@gmail.com?subject=' + subject + '&body=' + body);
}

function get_title()
{
    var my_trace = tracery.createGrammar(header_grammar);
    return fix_ing_modifier(my_trace.flatten("#origin#").capitalize());
}

function reload()
{

    var buzzword = document.getElementById("buzzword-main");
    buzzword.innerText = get_buzzword();
}

function load()
{
    document.getElementById("header-text").innerText = get_title();
    reload();
}

function fix_ing_modifier(text)
{
    return text.replace("eing", "ing");
}


document.onload += load();
