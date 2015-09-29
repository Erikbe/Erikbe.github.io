$(document).ready(function(){  
    dynamicNavBar();     
    fillTable(file);
});  

var file = [
["teenus1","kirjeldus1","hind1"],
["teenus2","kirjeldus2","hind2"],
["teenus3","kirjeldus3","hind3"],
["teenus4","kirjeldus4","hind4"]
];

// This function is used to fill in a table using the file matrix
function fillTable(matrix){
    var tableRef = document.getElementById('table1').getElementsByTagName('tbody')[0];

    for (i = 0; i < matrix.length; i++){
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        for (j = 0; j < 3; j++){
            var newCell  = newRow.insertCell(j);
            var cellContent  = document.createTextNode(matrix[i][j])
            newCell.appendChild(cellContent);       
        }
    } 
}

function dynamicNavBar(){
    $('.content').css('display','none');
    $('#content1').css('display','');
    $('#menu1').click(function(){
        $('.button').removeClass('active');            
        $(this).addClass('active');
        $('.content').fadeOut(0);
        $('#content1').fadeIn(0);
    });
     $('#menu2').click(function(){
        $('.button').removeClass('active');            
        $(this).addClass('active');
        $('.content').fadeOut(0);
        $('#content2').fadeIn(0);
    });
     $('#menu3').click(function(){
        $('.button').removeClass('active');            
        $(this).addClass('active');
        $('.content').fadeOut(0);
        $('#content3').fadeIn(0);
    });
      $('#menu4').click(function(){
        $('.button').removeClass('active');            
        $(this).addClass('active');
        $('.content').fadeOut(0);
        $('#content4').fadeIn(0);
    });
        $('#menu6').click(function(){
        $('.button').removeClass('active');            
        $(this).addClass('active');
        $('.content').fadeOut(0);
        $('#content6').fadeIn(0);
    });
}
