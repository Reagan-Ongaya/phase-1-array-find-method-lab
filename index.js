const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
];

function superbolWin(time){
    return time.year === "2015";
}

console.log(record.find(is2015));
