const countdown = () => {
    const countdate = new Date('May 25,2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countdate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const texthour = Math.floor((gap% day)/ hour);
    const textminute = Math.floor((gap % hour)/ minute );
    const textsecond = Math.floor((gap%minute)/second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = texthour;
    document.querySelector('.minute').innerText = textminute;
    document.querySelector('.second').innerText = textsecond;
};



setInterval(countdown, 1000);