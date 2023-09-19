// Code is wrapped in a ready function
$(document).ready(function () {

  const blockTime = $('.time-block');

 
  // this saves the input into local storage
  blockTime.on('click', '.saveBtn', function () {
    const idValue = $(this).closest('.time-block').attr('id');
    const inputValue = $(this).siblings('.description');
    localStorage.setItem(idValue, inputValue.val());
  })


  // Time is updated per hour 
  blockTime.each(function () {

    timeId = $(this).attr('id');
    currentTime = dayjs().format('H')
    if (timeId < currentTime) {
      $(this).removeClass('present future');
      $(this).addClass('past');
    }
    else if (timeId > currentTime) {
      $(this).removeClass('present past');
      $(this).addClass('future');
    }
    else {
      $(this).removeClass('past future');
      $(this).addClass('present');
    }

    
    savedInput = localStorage.getItem(timeId);
    $(this).find('.description').val(savedInput);
  })


  // Display of the current date and time in header:
  function displayTime(){
  $('#currentDay').text(dayjs().format('|| dddd, MMMM D, YYYY || hh:mm:ss a ||'));
  }
  setInterval(displayTime, 1000);
});