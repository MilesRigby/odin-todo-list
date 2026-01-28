// Constants to calculate a value for a given date. When a timeframe ticks over the number always increases
// For example at the end of a month days can decrease by a max of 30, from 31 to 1, but the
// contribution from months incrementing by 1 is +50, always outweighing the decrease.
const MONTH_WEIGHT = 50; // >30 (31st to 1st day of a new month)
const YEAR_WEIGHT = 1000; // >11*MONTH_WEIGHT (12th to 1st month of a new year)

// Compares two dates and returns whichever is earliest, or date2 if they are the same
const GetEarlierDate = (date1, date2) => {

    // Splits each date into an array [DD, MM, YYYY]
    let _date1 = date1.split('-');
    let _date2 = date2.split('-');

    // Returns date1 if it is sooner than date2, returns date2 otherwise
    if ( YEAR_WEIGHT*_date1[2] + MONTH_WEIGHT*_date1[1] + _date1[0] < YEAR_WEIGHT*_date2[2] + MONTH_WEIGHT*_date2[1] + _date2[0] ) {
        return date1;
    } else { 
        return date2; 
    }

}

const ValidateDateFormat = (date) => {

    const _date = date.split('-');

    if (_date.length != 3) { return false; }
    if (_date[2].length != 4 || isNaN(_date[2])) { return false; }
    if (_date[1].length !=2 || _date[1] < 1 || _date[1] > 12 || isNaN(_date[1])) { return false; }
    if (_date[0].length !=2 || _date[0] < 1 || _date[0] > DaysInMonth(_date[1], _date[2]) || isNaN(_date[0])) { return false; }
    return true;

}

// Helperfunction for comparing user input to the length of a month.
// Returns 0 on an invalid month because this means the checks for a value either before the first
// or after the date returned (0) will always trigger on an invalid month, invalidating the input
// Valid between 01-01-0001 and 31-12-9999.
const DaysInMonth = (month, year) => {

    switch(month) {
        case "01": return 31;
        case "03": return 31;
        case "04": return 30;
        case "05": return 31;
        case "06": return 30;
        case "07": return 31;
        case "08": return 31;
        case "09": return 30;
        case "10": return 31;
        case "11": return 30;
        case "12": return 31;
        case "02":
            if (year % 4 != 0) { return 28; }
            if (year % 100 != 0) { return 29; }
            if (year % 400 != 0) { return 28; }
            return 29;
        default: return 0;
    }

}

export { GetEarlierDate, ValidateDateFormat };