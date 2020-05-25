$(document).ready(() => {

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
        $('#ref-info-description-container').css('display', 'flex');
        $('#experts-container').css('display', 'block');
        $('#ref-info').css('justify-content', 'flex-start');
        if (window.matchMedia("screen and (min-width: 1301px) and (max-width:1920px)").matches) {
            $('#ref-info-container').css('width', '600px');
        }
        if (window.matchMedia("screen and (min-width: 1201px) and (max-width:1300px)").matches) {
            $('#ref-info-container').css('width', '520px');
        }
        if (window.matchMedia("screen and (min-width: 1025px) and (max-width:1200px)").matches) {
            $('#ref-info-container').css('width', '375px');
        }
        if (window.matchMedia("screen and (min-width: 1025px) and (max-width:1200px)").matches) {
            $('#ref-info-container').css('width', '375px');
        }
        if (window.matchMedia("screen and (min-width: 851px) and (max-width:1024px)").matches) {
            $('#ref-info-container').css('width', '800px');
        }
        if (window.matchMedia("screen and (min-width: 769px) and (max-width:850px)").matches) {
            $('#ref-info-container').css('width', '700px');
        }
        if (window.matchMedia("screen and (min-width: 641px) and (max-width:768px)").matches) {
            $('#ref-info-container').css('width', '600px');
        }
        if (window.matchMedia("screen and (min-width: 481px) and (max-width:640px)").matches) {
            $('#ref-info-container').css('width', '400px');
        }
        if (window.matchMedia("screen and (min-width: 361px) and (max-width:480px)").matches) {
            $('#ref-info-container').css('width', '300px');
        }
        if (window.matchMedia("screen and (min-width: 320px) and (max-width:360px)").matches) {
            $('#ref-info-container').css('width', '280px');
        }
    });

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
        $('#ref-info-description-container').css('display', 'none');
        $('#experts-container').css('display', 'none');
        $('#ref-info').css('justify-content', 'center');
        $('#ref-info-container').css('width', 'auto');
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
        $('#ref-info-description-container').css('display', 'none');
        $('#experts-container').css('display', 'none');
        $('#ref-info').css('justify-content', 'center');
        $('#ref-info-container').css('width', 'auto');
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
        $('#ref-info-description-container').css('display', 'none');
        $('#experts-container').css('display', 'none');
        $('#ref-info').css('justify-content', 'center');
        $('#ref-info-container').css('width', 'auto');
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