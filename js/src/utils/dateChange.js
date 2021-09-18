export const DateChange = (date) => {
    let New = new Date(date);
    let Year = New.getFullYear();
    let month = New.getMonth() + 1;
    let day = New.getDate();
    let hour = New.getHours();
    let min = New.getMinutes();
    let sec = New.getSeconds();
    if (parseInt(month, 10) < 10) {
        month = '0' + month;
    }
    if (parseInt(hour, 10) < 10) {
        hour = '0' + hour;
    }
    const result = month + '/' + day + ' ' + hour + ':' + min;

    return result;
};
