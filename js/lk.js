$(document).ready(() => {

    $('#list-consultations-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('#list-program').css('display', 'none');
        $('#list-study').css('display', 'none');
        $('#list-consultations-list').addClass('active');
        $('#list-consultations').addClass('show active');
        $('#new-consultation').css('display', 'block');
        $('#list-container2').css('display', 'block');
        $('#list-answered').addClass('show active');
        $('#list-answered-list').addClass('active');
        $('#list-answered .consultation').css('display', 'flex');
        $('#list-find').css('display', 'none');
    });

    $('#list-program-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('#new-consultation').css('display', 'none');
        $('#list-program-list').addClass('active');
        $('#list-program').addClass('show active').css('display', 'flex');
        $('#program-text').css('display', 'block');
        $('#list-container2').css('display', 'none');
        $('#list-study').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-study-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('#new-consultation').css('display', 'none');
        $('#program-text').css('display', 'none');
        $('#list-study-list').addClass('active');
        $('#list-study').addClass('show active').css('display', 'block');
        $('#list-container2').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-settings-list').click(() => {
        $('.list-group-item').removeClass('active');
        $('.tab-pane').removeClass('show active');
        $('#new-consultation').css('display', 'none');
        $('#program-text').css('display', 'none');
        $('#list-study').css('display', 'none');
        $('#list-settings-list').addClass('active');
        $('#list-settings').addClass('show active').css('display', 'flex');
        $('#list-settings div').css('display', 'flex');
        $('#list-settings span').css('display', 'block');
        $('#list-settings a').css('display', 'block');
        $('#list-container2').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-answered-list').click(() => {
        $('#list-seen').removeClass('show active');
        $('#list-draft').removeClass('show active');
        $('#list-find').removeClass('show active');
        $('#list-seen-list').removeClass('active');
        $('#list-draft-list').removeClass('active');
        $('#list-find-list').removeClass('active');
        $('#list-answered .consultation').css('display', 'flex');
        $('#list-seen .consultation').css('display', 'none');
        $('#list-draft .consultation').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-seen-list').click(() => {
        $('#list-answered').removeClass('show active');
        $('#list-draft').removeClass('show active');
        $('#list-find').removeClass('show active');
        $('#list-answered-list').removeClass('active');
        $('#list-draft-list').removeClass('active');
        $('#list-find-list').removeClass('active');
        $('#list-seen').addClass('show active');
        $('#list-seen-list').addClass('active');
        $('#list-seen .consultation').css('display', 'flex');
        $('#list-answered .consultation').css('display', 'none');
        $('#list-draft .consultation').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-draft-list').click(() => {
        $('#list-answered').removeClass('show active');
        $('#list-seen').removeClass('show active');
        $('#list-find').removeClass('show active');
        $('#list-answered-list').removeClass('active');
        $('#list-seen-list').removeClass('active');
        $('#list-find-list').removeClass('active');
        $('#list-draft').addClass('show active');
        $('#list-draft-list').addClass('active');
        $('#list-draft .consultation').css('display', 'flex');
        $('#list-answered .consultation').css('display', 'none');
        $('#list-seen .consultation').css('display', 'none');
        $('#list-find').css('display', 'none');
    });

    $('#list-find-list').click(() => {
        $('#list-answered').removeClass('show active');
        $('#list-seen').removeClass('show active');
        $('#list-draft').removeClass('show active');
        $('#list-answered-list').removeClass('active');
        $('#list-seen-list').removeClass('active');
        $('#list-draft-list').removeClass('active');
        $('#list-find').addClass('show active').css('display', 'flex');
        $('#list-find-list').addClass('active');
        $('#list-find .consultation').css('display', 'flex');
        $('#list-answered .consultation').css('display', 'none');
        $('#list-seen .consultation').css('display', 'none');
        $('#list-draft .consultation').css('display', 'none');
    });
});