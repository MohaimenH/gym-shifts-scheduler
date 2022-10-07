// shifts:
// Weekdays: 5:45-10, 10-2, 12-5, 2-6, 5-10:15, 6-10:15
//              0,      1,    2,   3,     4,       5
// Weekends: 8:45-6:15, 11-6:15
//               6,        7

let grid = [
    //  5:45-10, 10-2, 12-5, 2-6, 5-10:15, 6-10:15
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Monday
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Tuesday
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Wednesday
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Thursday
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Friday
    // 8:45-6:15, 11-6:15
    ["Unfilled", "Unfilled"], // Saturday
    ["Unfilled", "Unfilled"], // Sunday
];

let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

let names = [
    "Alexandria",
    "Berlin",
    "Cairo",
    "Denver",
    "Fuji",
    "Guadalajara",
    "Hanoi",
    "Istanbul",
    "Jakarta",
    "Kuala Lampur",
    "London",
    "Madrid",
    "New York",
    "Osaka",
    "Paris",
    "Rio",
    "Seoul",
    "Toronto",
    "Utah",
    "Vienna",
];

const shifts = ["5:45-10", "10-2", "12-5", "2-6", "5-10:15", "6-10:15"];
const shiftDuration = [4.25, 4, 4, 4, 5.25, 4.25];
const weekendShifts = ["8:45-6:15", "11-6:15"];
const weekendShiftDuration = [9.25, 7.25];

// if Shift_i > Shift_j, J gets the Shift
// if Shift_i = Shift_j, check ShiftDuration
// if same, randomize

let requests = [
    [
        [1, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [1, 0],
        [0, 0],
    ],
    [
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1],
        [0, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [1, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [0, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [1, 0],
        [0, 0],
    ],
    [
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 1],
        [0, 0, 1, 0, 1, 0],
        [1, 0],
        [1, 1],
    ],
    [
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [0, 1],
        [0, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [1, 0],
        [1, 1],
    ],
    [
        [1, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
    [
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0],
        [0, 0],
    ],
    [
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [1, 0],
        [0, 1],
    ],
    [
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0],
        [1, 0],
        [0, 1],
    ],
    [
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0],
        [0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 0],
        [0, 0],
    ],
    [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1],
        [1, 1],
    ],
];

let details = new Array(requests.length).fill().map(
    (e, i) =>
        (e = {
            name: names[i],
            score: 0,
            shifts: 0,
            hours: 0,
        })
);

const getCandidates = (day, slot, requestsList) => {
    let candidates = [];
    requestsList.forEach((request, i) => {
        if (request[day][slot] === 1) {
            candidates.push(i);
        }
    });
    return candidates;
};

const pickCandidate = (candidates) => {
    // console.log({ candidates, details });
    if (candidates.length === 0) {
        return null;
    }
    if (candidates.length === 1) {
        return candidates[0];
    }

    let minShifts = 9999;
    let minHours = 9999;
    let minScore = 9999;

    let eligible = [];

    let result = null;

    candidates.forEach((candidate) => {
        if (details[candidate].hours < minHours) {
            minHours = details[candidate].hours;
            eligible = [candidate];
        } else if (
            details[candidate].hours === minHours &&
            details[candidate].shifts < minShifts
        ) {
            minShifts = details[candidate].shifts;
            eligible = [candidate];
        } else if (
            details[candidate].shifts === minShifts &&
            details[candidate].hours === minHours &&
            details[candidate].score < minScore
        ) {
            minScore = details[candidate].score;
            eligible = [candidate];
        } else if (
            details[candidate].shifts === minShifts &&
            details[candidate].hours === minHours &&
            details[candidate].score === minScore
        ) {
            eligible.push(candidate);
        }
    });
    // console.log(eligible);
    if (eligible.length === 1) {
        result = eligible[0];
    } else {
        result = eligible[Math.floor(Math.random() * eligible.length)];
        details[result].score++;

        eligible.forEach((e) => {
            if (e != result) details[e].score--;
        });
    }

    return result;
};

grid.forEach((day, i) => {
    let dynamicRequestsList = requests; // JSON.parse(JSON.stringify(requests));
    day.forEach((shift, j) => {
        let candidate = pickCandidate(getCandidates(i, j, dynamicRequestsList));
        // console.log(requests);
        let shiftTime = day.length === 2 ? weekendShifts[j] : shifts[j];
        if (candidate === null) {
            console.log(
                `Didn't find anyone for shift ${shiftTime} on ${days[i]}`
            );
            return;
        }

        // console.log(dynamicRequestsList[candidate][i]);
        dynamicRequestsList[candidate][i] =
            dynamicRequestsList[candidate][i].fill(0);
        // switch (j) {
        //     case 1 || 2:
        //         dynamicRequestsList[candidate][i][1] = 0;
        //         dynamicRequestsList[candidate][i][2] = 0;
        //     case 2 || 3:
        //         dynamicRequestsList[candidate][i][2] = 0;
        //         dynamicRequestsList[candidate][i][3] = 0;
        //     case 3 || 4:
        //         dynamicRequestsList[candidate][i][3] = 0;
        //         dynamicRequestsList[candidate][i][4] = 0;
        //     case 4 || 5:
        //         dynamicRequestsList[candidate][i][4] = 0;
        //         dynamicRequestsList[candidate][i][5] = 0;
        // }

        // console.log(dynamicRequestsList[candidate][i]);

        details[candidate].shifts++;
        details[candidate].hours =
            day.length === 2
                ? details[candidate].hours + weekendShiftDuration[j]
                : details[candidate].hours + shiftDuration[j];

        grid[i][j] = candidate;
        console.log(
            `Picked ${names[candidate]} for shift ${shiftTime} on ${days[i]}`
        );
    });
});

for (let i = 0; i < grid.length; i++) {
    console.log(`${days[i]}:`, ...grid[i]);
}

console.log(details);

// constraints: 1 shift a day - unless they are the only ones requesting for that shift
