$(document).ready( ()=>{


    // JQUERY MASK
    $('.call_form-phone').mask('+7(000)000-00-00');
    $('.modal_form-phone').mask('+7(000)000-00-00')
    //JQUERY MASK END


    // MODAL
    $('#modal').on('hidden.bs.modal', function(){
        // setTimeout(alert(123), 2000)
    })

})