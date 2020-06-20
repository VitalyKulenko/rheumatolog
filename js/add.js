$(document).ready(() => {
    $('input[type="tel"]').mask("+7 (999) 999 - 99 - 99");

    $('#send').click(() => {
        let hospital = $('#hospital');
        let doctor = $('#input-name');
        let objective =  $('#select');
        let phone =  $('#input-phone');
        let email =  $('#input-email');
        let diagnosis =  $('#input-diagnosis');
        let analysisUrine =  $('#input-analysis-urine');
        let analysisBlood =  $('#input-analysis-blood');
        let analysisBloodBiochemical =  $('#input-analysis-blood-biochemical');
        let CRPLevel =  $('#input-CRP-level');
        let pelvicBones =  $('#input-pelvic-bones');
        let treatmentNow =  $('#input-treatment-now');
        let complaints =  $('#input-complaints');
        let anamnesis =  $('#input-anamnesis');
        if (hospital.val() && doctor.val() && objective.val() && phone.val() && email.val() && diagnosis.val()
            && analysisUrine.val() && analysisBlood.val() && analysisBloodBiochemical.val() && CRPLevel.val()
            && pelvicBones.val() && treatmentNow.val() && complaints.val() && anamnesis.val()) {
            $('#input-error').hide();
        } else {
            $('#input-error').show();
        }
    });
});