// Constants to calculate a value for a given date. When a timeframe ticks over the number always increases
// For example at the end of a month days can decrease by a max of 30, from 31 to 1, but the
// contribution from months incrementing by 1 is +50, always outweighing the decrease.
const MONTH_WEIGHT = 50; // >30 (31st to 1st day of a new month)
const YEAR_WEIGHT = 1000; // >11*50 (12th to 1st month of a new year)

const GetEarlierDate = (date1, date2) => {

    let _date1 = date1.split('-');
    let _date2 = date2.split('-');
    if ( YEAR_WEIGHT*_date1[2] + MONTH_WEIGHT*_date1[1] + _date1[0] < YEAR_WEIGHT*_date2[2] + MONTH_WEIGHT*_date2[1] + _date2[0] ) {
        return date1;
    } else { 
        return date2; 
    }

}

export { GetEarlierDate };