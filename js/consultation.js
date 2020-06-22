$(document).ready(() => {
    $('#message-2 .like').css('display', 'none');
    $('#message-2 .like-check').css('display', 'inline');

    $('#chat-tab').click(() => {
        $('#send-form-dialogue').css('display', 'none');
        $('#send-form-chat').css('display', 'flex');
    });

    $('#dialogue-tab').click(() => {
        $('#send-form-dialogue').css('display', 'flex');
        $('#send-form-chat').css('display', 'none');
    });
});