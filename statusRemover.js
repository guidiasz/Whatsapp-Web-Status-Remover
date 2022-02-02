let statusButton = document.querySelector('._26lC3 > span:nth-child(1)');

const timer = setInterval(function() {
    if (statusButton) {
        document.querySelector('._26lC3 > span:nth-child(1)').style.display = 'none';
        clearInterval(timer);
    }
    statusButton = document.querySelector('._26lC3 > span:nth-child(1)');
 }, 500);