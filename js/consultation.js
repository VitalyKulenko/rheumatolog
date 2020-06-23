$(document).ready(() => {
    $('#message-2 .like').css('display', 'none');
    $('#message-2 .like-check').css('display', 'inline');

    $('#home-tab').click(() => {
        $('#chat').css('display', 'none');
        $('#dialogue').css('display', 'none');
    });

    $('#chat-tab').click(() => {
        $('#send-form-dialogue').css('display', 'none');
        $('#send-form-chat').css('display', 'flex');
        $('#chat').css('display', 'flex');
        $('#dialogue').css('display', 'none');
        gotoBottom('chat');
    });

    $('#dialogue-tab').click(() => {
        $('#send-form-dialogue').css('display', 'flex');
        $('#send-form-chat').css('display', 'none');
        $('#chat').css('display', 'none');
        $('#dialogue').css('display', 'flex');
        gotoBottom('dialogue');
    });

    function gotoBottom(id){
        var element = document.getElementById(id);
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }
});