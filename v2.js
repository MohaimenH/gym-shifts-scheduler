import _ from "lodash";

// shifts:
// Weekdays: 5:45-10, 10-2, 12-5, 2-6, 5-10:15, 6-10:15
//              0,      1,    2,   3,     4,       5
// Weekends: 8:45-6:15, 11-6:15
//               6,        7

let grid = [
    //  5:45-10, 10-2, 12-5, 2-6, 3:45-7:15 (M,W,T), 5-10:15, 6-10:15
    [
        "Unfilled",
        "Unfilled",
        "Unfilled",
        "Unfilled",
        // "Unfilled", //Women's Only
        "Unfilled",
        "Unfilled",
    ], // Monday
    ["Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled", "Unfilled"], // Tuesday
    [
        "Unfilled",
        "Unfilled",
        "Unfilled",
        "Unfilled",
        // "Unfilled", //Women's Only
        "Unfilled",
        "Unfilled",
    ], // Wednesday
    [
        "Unfilled",
        "Unfilled",
        "Unfilled",
        "Unfilled",
        // "Unfilled", //Women's Only
        "Unfilled",
        "Unfilled",
    ], // Thursday
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

let attendantsInput = [
    {
        name: "Angela",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Bernard",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
    },
    {
        name: "Creed",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Dwight",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Elle",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Frank",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Gabe",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Holly",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Ian",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Jim",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Kelly",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: false,
    },
    {
        name: "Lewis",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Micheal",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Nate",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Oscar",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Pam",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Ryan",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Stanley",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Toby",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
    {
        name: "Karen",
        score: 0,
        shifts: 0,
        hours: 0,
        request: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1],
            [1, 1],
        ],
        womensOnly: true,
    },
];

let attendants = _.shuffle(attendantsInput); // Shuffles the attendants

let shifts = [
    { time: "5:45-10", duration: 4.25 },
    { time: "10-2", duration: 4 },
    { time: "12-5", duration: 4 },
    { time: "2-6", duration: 4 },
    { time: "3:45-7:15", duration: 3.5, isWomensOnly: true },
    { time: "5-10:15", duration: 5.25 },
    { time: "6-10:15", duration: 4.25 },
];

const weekendShifts = [
    { time: "8:45-6:15", duration: 9.25 },
    { time: "11-6:15", duration: 7.25 },
];

// if Shift_i > Shift_j, J gets the Shift
// if Shift_i = Shift_j, check ShiftDuration
// if same, randomize

const getEligibleAttendants = (day, slot, allAttendants) => {
    let eligibleAttendants = [];
    allAttendants.forEach((attendant) => {
        if (attendant.request[day][slot] === 1) {
            eligibleAttendants.push(attendant);
        }
    });
    return eligibleAttendants;
};

const pickEligibleAttendant = (eligibleAttendants) => {
    // console.log({ eligibleAttendants, details });
    if (eligibleAttendants.length === 0) {
        return null;
    }
    if (eligibleAttendants.length === 1) {
        return eligibleAttendants[0];
    }

    let minShifts = 9999;
    let minHours = 9999;
    let minScore = 9999;

    let eligible = [];

    let result = null;

    eligibleAttendants.forEach((eligibleAttendant) => {
        if (eligibleAttendant.hours < minHours) {
            minHours = eligibleAttendant.hours;
            eligible = [eligibleAttendant];
        } else if (
            eligibleAttendant.hours === minHours &&
            eligibleAttendant.shifts < minShifts
        ) {
            minShifts = eligibleAttendant.shifts;
            eligible = [eligibleAttendant];
        } else if (
            eligibleAttendant.hours === minHours &&
            eligibleAttendant.shifts === minShifts &&
            eligibleAttendant.score < minScore
        ) {
            minScore = eligibleAttendant.score;
            eligible = [eligibleAttendant];
        } else if (
            eligibleAttendant.hours === minHours &&
            eligibleAttendant.shifts === minShifts &&
            eligibleAttendant.score === minScore
        ) {
            eligible.push(eligibleAttendant);
        }
    });

    if (eligible.length === 1) {
        result = eligible[0];
    } else {
        result = eligible[Math.floor(Math.random() * eligible.length)];
        result.score++;

        eligible.forEach((e) => {
            if (e != result) e.score--;
        });
    }

    return result;
};

shifts = shifts.filter((shift) => !shift.isWomensOnly);

console.log("---Regular Shifts---");
grid.forEach((day, i) => {
    console.log(`${days[i]} Shifts:`);
    let dynamicAttendantsList = _.shuffle(attendants); // JSON.parse(JSON.stringify(requests));
    day.forEach((shift, j) => {
        let eligibleAttendant = pickEligibleAttendant(
            getEligibleAttendants(i, j, dynamicAttendantsList)
        );
        // console.log(shifts[j]);
        let shiftTime =
            day.length === 2 ? weekendShifts[j].time : shifts[j].time;
        if (eligibleAttendant === null) {
            console.log(
                `Didn't find anyone for shift ${shiftTime} on ${days[i]}`
            );
            return;
        }

        // console.log(dynamicAttendantsList[eligibleAttendant][i]);
        eligibleAttendant.request[i] = eligibleAttendant.request[i].fill(0);
        // switch (j) {
        //     case 1 || 2:
        //         dynamicAttendantsList[eligibleAttendant][i][1] = 0;
        //         dynamicAttendantsList[eligibleAttendant][i][2] = 0;
        //     case 2 || 3:
        //         dynamicAttendantsList[eligibleAttendant][i][2] = 0;
        //         dynamicAttendantsList[eligibleAttendant][i][3] = 0;
        //     case 3 || 4:
        //         dynamicAttendantsList[eligibleAttendant][i][3] = 0;
        //         dynamicAttendantsList[eligibleAttendant][i][4] = 0;
        //     case 4 || 5:
        //         dynamicAttendantsList[eligibleAttendant][i][4] = 0;
        //         dynamicAttendantsList[eligibleAttendant][i][5] = 0;
        // }

        // console.log(dynamicAttendantsList[eligibleAttendant][i]);

        eligibleAttendant.shifts++;
        eligibleAttendant.hours =
            day.length === 2
                ? eligibleAttendant.hours + weekendShifts[j].duration
                : eligibleAttendant.hours + shifts[j].duration;

        grid[i][j] = eligibleAttendant.name;
        console.log(`\x1b[31m${shiftTime}: \x1b[0m${eligibleAttendant.name}`);
    });
});

console.log(
    _.map(attendants, (attendant) => {
        return {
            name: attendant.name,
            hours: attendant.hours,
            shifts: attendant.shifts,
            score: attendant.score,
        };
    })
);

// constraints: 1 shift a day - unless they are the only ones requesting for that shift
