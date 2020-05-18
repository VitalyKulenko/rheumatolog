$(document).ready(() => {

    $('#list-request-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('.tab-pane span').css('display', 'none');
        $('.tab-pane a').css('display', 'none');
        $('.tab-pane img').css('display', 'none');
        $('#map').css('display', 'none');
        $('#authorization').css('display', 'none');
        $('#registration').css('display', 'none');
        $('#forget-password').css('display', 'none');
        $('#list-contacts').css('display', 'none');
        $('#list-request span').css('display', 'inline');
        $('#list-request a').css('display', 'inline');
        $('#list-request-list').addClass('active');
        $('#list-request').addClass('show active').css('display', 'flex');
    });

    $('.list-profile-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('.tab-pane span').css('display', 'none');
        $('.tab-pane a').css('display', 'none');
        $('.tab-pane img').css('display', 'none');
        $('#map').css('display', 'none');
        $('#authorization').css('display', 'block');
        $('#registration').css('display', 'none');
        $('#forget-password').css('display', 'none');
        $('#list-request').css('display', 'none');
        $('#list-contacts').css('display', 'none');
        $('#list-profile span').css('display', 'inline');
        $('.list-profile-list').addClass('active');
        $('#list-profile').addClass('show active');
    });

    $('#list-documents-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('.tab-pane span').css('display', 'none');
        $('.tab-pane a').css('display', 'none');
        $('#authorization').css('display', 'none');
        $('#registration').css('display', 'none');
        $('#forget-password').css('display', 'none');
        $('#list-request').css('display', 'none');
        $('#list-contacts').css('display', 'none');
        $('#map').css('display', 'none');
        $('.tab-pane img').css('display', 'inline');
        $('#list-documents a').css('display', 'inline');
        $('#list-documents-list').addClass('active');
        $('#list-documents').addClass('show active');
    });

    $('#list-contacts-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('.tab-pane span').css('display', 'none');
        $('.tab-pane a').css('display', 'none');
        $('.tab-pane img').css('display', 'none');
        $('#authorization').css('display', 'none');
        $('#registration').css('display', 'none');
        $('#forget-password').css('display', 'none');
        $('#list-request').css('display', 'none');
        $('#map').css('display', 'block');
        $('#list-contacts span').css('display', 'inline');
        $('#list-contacts a').css('display', 'inline');
        $('#list-contacts-list').addClass('active');
        $('#list-contacts').addClass('show active').css('display', 'flex');
    });

    $('#registration-link').click(() => {
        $('#authorization').css('display', 'none');
        $('#registration').css('display', 'block');
    });

    $('#forget-password-link').click(() => {
        $('#authorization').css('display', 'none');
        $('#forget-password').css('display', 'block');
    });
});