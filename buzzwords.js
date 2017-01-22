/**
 * Created by Josh on 1/21/2017.
 */

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function get_buzzword(){
    var my_trace = tracery.createGrammar(buzzword_grammar);
    return my_trace.flatten("#origin#");
}

function get_title(){
    var my_trace = tracery.createGrammar(header_grammar);
    return my_trace.flatten("#origin#").capitalize();
}

function reload(){

    var buzzword = document.getElementById("buzzword-main");
    buzzword.innerText = get_buzzword();
}

function load(){
    document.getElementById("header-text").innerText = get_title();
    reload();
}


document.onload += load();
