console.log('Loaded');

$(document).ready(onReady);

function onReady(){
    $.ajax({
        type: 'GET',    
        url: '/monsters'
    })

.then(function(kochabMonsters){
    for(let i=0; i < kochabMonsters.length; i++){
    $('#bigMonsters').append('<li>' + kochabMonsters[i] + '</li>');
    }
});

}

