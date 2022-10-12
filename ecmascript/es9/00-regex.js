const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchers = regex.exec('2015-01-02');

console.table(matchers);