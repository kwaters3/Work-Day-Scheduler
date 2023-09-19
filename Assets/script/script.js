// Code is wrapped in a ready function
$(document).ready(function () {

  const blockTime = $('.time-block');

 
  blockTime.on('click', '.saveBtn', function () {
    const idValue = $(this).closest('.time-block').attr('id');
    const inputValue = $(this).siblings('.description');
    localStorage.setItem(idValue, inputValue.val());
  })

  // The ID of each timeBlock is checked against the current hour
  // and a new class is added to each element.
  blockTime.each(function () {

    hourId = $(this).attr('id');
    currentHour = dayjs().format('HH')
    if (hourId < currentHour) {
      $(this).removeClass('present future');
      $(this).addClass('past');
    }
    else if (hourId > currentHour) {
      $(this).removeClass('present past');
      $(this).addClass('future');
    }
    else {
      $(this).removeClass('past future');
      $(this).addClass('present');
    }

    
    savedInput = localStorage.getItem(hourId);
    $(this).find('.description').val(savedInput);
  })


  // Display of the current date and time in header:
  function displayTime(){
  $('#currentDay').text(dayjs().format('|| dddd, MMMM D, YYYY || hh:mm:ss a ||'));
  }
  setInterval(displayTime, 1000);
});