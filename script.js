// import _ from "lodash";
window.onbeforeunload = function (event) {
    return confirm("Confirm refresh - you will lose all data on the page!");
};

const allocationStats = document.querySelector("#allocation-stats");

const createAttendant = (name, requests) => {
    return {
        name,
        ...requests,
        score: 0,
        shifts: 0,
        hours: 0,
    };
};

const a = (id) => {
    return document.getElementById(id).checked;
};

const createRequests = () => {
    return {
        request: [
            [
                a("monday54510"),
                a("monday102"),
                a("monday125"),
                a("monday26"),
                a("monday51015"),
                a("monday61015"),
            ],
            [
                a("tuesday54510"),
                a("tuesday102"),
                a("tuesday125"),
                a("tuesday26"),
                a("tuesday51015"),
                a("tuesday61015"),
            ],
            [
                a("wednesday54510"),
                a("wednesday102"),
                a("wednesday125"),
                a("wednesday26"),
                a("wednesday51015"),
                a("wednesday61015"),
            ],
            [
                a("thursday54510"),
                a("thursday102"),
                a("thursday125"),
                a("thursday26"),
                a("thursday51015"),
                a("thursday61015"),
            ],
            [
                a("friday54510"),
                a("friday102"),
                a("friday125"),
                a("friday26"),
                a("friday51015"),
                a("friday61015"),
            ],
            [a("saturday845615"), a("saturday11615")],
            [a("sunday845615"), a("sunday11615")],
        ],
        womensOnlyRequest: [
            [a("mondaywo")],
            [a("wednesdaywo")],
            [a("thursdaywo")],
        ],
    };
};

const addAttendantBtn = document.querySelector("#add-attendant-btn");
const attendantsBox = document.querySelector("#attendants-box");
const nameField = document.querySelector("#nameField");

let attendantsInput = [];

addAttendantBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!String(nameField.value).trim()) {
        alert('Please type a name in the "Name" field.');
        return;
    }

    if (
        attendantsInput.filter(
            (attendant) => attendant.name === nameField.value
        ).length > 0
    ) {
        alert("The person already exists in the list");
        return;
    }

    attendantsInput.push(createAttendant(nameField.value, createRequests()));
    attendantsBox.value += `\n${nameField.value}`;
});

const allocateShiftsBtn = document.querySelector("#allocate-shifts-btn");

allocateShiftsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    allocateShifts(JSON.parse(JSON.stringify(attendantsInput)), resultTextBox);
});

let sampleAttendantsInput = [
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

        womensOnlyRequest: [[1], [1], [1]],
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

        womensOnlyRequest: [[1], [1], [1]],
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

        womensOnlyRequest: [[1], [1], [1]],
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
    },
];

const resultTextBox = document.getElementById("allocation-result");

const allocateShifts = (listOfAttendants, textbox) => {
    allocationStats.value = "";

    let grid = [
        //  5:45-10, 10-2, 12-5, 2-6, 5-10:15, 6-10:15
        [
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
            // "Unfilled", //Women's Only
            "Unfilled",
            "Unfilled",
        ], // Monday
        [
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
        ], // Tuesday
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
        [
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
            "Unfilled",
        ], // Friday
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

    let attendants = _.shuffle(listOfAttendants); // Shuffles the attendants

    let shifts = [
        { time: "5:45-10", duration: 4.25 },
        { time: "10-2", duration: 4 },
        { time: "12-5", duration: 4 },
        { time: "2-6", duration: 4 },
        { time: "5-10:15", duration: 5.25 },
        { time: "6-10:15", duration: 4.25 },
    ];

    const womensOnlyShifts = [
        { time: "3:45-7:15", duration: 3.5, isWomensOnly: true },
    ];

    const womensOnlyDays = ["Monday", "Wednesday", "Thursday"];

    const weekendShifts = [
        { time: "8:45-6:15", duration: 9.25 },
        { time: "11-6:15", duration: 7.25 },
    ];

    // if Shift_i > Shift_j, J gets the Shift
    // if Shift_i = Shift_j, check ShiftDuration
    // if same, randomize

    const getAvailableAttendants = (day, slot, allAttendants) => {
        let eligibleAttendants = [];
        allAttendants.forEach((attendant) => {
            if (attendant.request[day][slot] === true) {
                eligibleAttendants.push(attendant);
            }
        });
        return eligibleAttendants;
    };

    const getAvailableFemaleAttendants = (day, slot, femaleAttendants) => {
        let eligibleAttendants = [];
        femaleAttendants.forEach((attendant) => {
            if (
                attendant.womensOnlyRequest &&
                attendant.womensOnlyRequest[day][slot] === true
            ) {
                eligibleAttendants.push(attendant);
            }
        });
        // console.log(eligibleAttendants);
        return eligibleAttendants;
    };

    const pickAvailableAttendant = (eligibleAttendants) => {
        // console.log(eligibleAttendants);
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

        let basedOnScore = false;

        let eligible = [];

        let result = null;

        eligibleAttendants.forEach((eligibleAttendant) => {
            if (eligibleAttendant.hours < minHours) {
                minHours = eligibleAttendant.hours;
                minShifts = eligibleAttendant.shifts;
                minScore = eligibleAttendant.score;
                eligible = [eligibleAttendant];
                basedOnScore = false;
            } else if (
                eligibleAttendant.hours === minHours &&
                eligibleAttendant.shifts < minShifts
            ) {
                minHours = eligibleAttendant.hours;
                minShifts = eligibleAttendant.shifts;
                minScore = eligibleAttendant.score;
                eligible = [eligibleAttendant];
                basedOnScore = false;
            } else if (
                eligibleAttendant.hours === minHours &&
                eligibleAttendant.shifts === minShifts &&
                eligibleAttendant.score < minScore
            ) {
                minHours = eligibleAttendant.hours;
                minShifts = eligibleAttendant.shifts;
                minScore = eligibleAttendant.score;
                eligible = [eligibleAttendant];
                basedOnScore = true;
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
            if (basedOnScore) result.score++;
        } else {
            result = eligible[Math.floor(Math.random() * eligible.length)];
            result.score++;

            eligible.forEach((e) => {
                if (e != result) e.score--;
            });
        }

        return result;
    };

    textbox.value = "====Women's Only Shifts====";
    womensOnlyDays.forEach((day, i) => {
        textbox.value += `\n\n---${day} Women's Only Shifts---`;
        womensOnlyShifts.forEach((shift, j) => {
            let availableAttendant = pickAvailableAttendant(
                getAvailableFemaleAttendants(
                    i,
                    j,
                    attendants.filter(
                        (attendant) => attendant.womensOnlyRequest
                    )
                )
            );

            if (availableAttendant === null) {
                textbox.value += `\nDidn't find anyone for shift ${shift.time} on ${day}`;
                return;
            }

            switch (i) {
                case 0:
                    availableAttendant.request[0][2] = false;
                    availableAttendant.request[0][3] = false;
                    availableAttendant.request[0][4] = false;
                    availableAttendant.request[0][5] = false;
                    break;
                case 1:
                    availableAttendant.request[2][2] = false;
                    availableAttendant.request[2][3] = false;
                    availableAttendant.request[2][4] = false;
                    availableAttendant.request[2][5] = false;
                    break;
                case 2:
                    availableAttendant.request[3][2] = false;
                    availableAttendant.request[3][3] = false;
                    availableAttendant.request[3][4] = false;
                    availableAttendant.request[3][5] = false;
                    break;
            }

            availableAttendant.shifts++;
            availableAttendant.hours += shift.duration;
            console.log(availableAttendant.request);
            textbox.value += `\n${shift.time}: ${availableAttendant.name}`;
        });
    });

    console.log("---Regular Shifts---");

    textbox.value += "\n\n====Regular Shifts====";
    grid.forEach((day, i) => {
        // console.log(`${days[i]} Shifts:`);
        textbox.value += `\n\n---${days[i]} Shifts---`;
        let dynamicAttendantsList = _.shuffle(attendants); // JSON.parse(JSON.stringify(requests));
        day.forEach((shift, j) => {
            let eligibleAttendant = pickAvailableAttendant(
                getAvailableAttendants(i, j, dynamicAttendantsList)
            );
            // console.log(shifts[j]);
            let shiftTime =
                day.length === 2 ? weekendShifts[j].time : shifts[j].time;
            if (eligibleAttendant === null) {
                // console.log(
                //     `Didn't find anyone for shift ${shiftTime} on ${days[i]}`
                // );
                textbox.value += `\nDidn't find anyone for shift ${shiftTime} on ${days[i]}`;
                return;
            }

            // console.log(dynamicAttendantsList[eligibleAttendant][i]);
            // eligibleAttendant.request[i] = eligibleAttendant.request[i].fill(0);
            if (day.length === 2) {
                if (j === 0 || j === 1) {
                    eligibleAttendant.request[i][0] = false;
                    eligibleAttendant.request[i][1] = false;
                }
            } else {
                switch (j) {
                    case 1:
                        eligibleAttendant.request[i][1] = false;
                        eligibleAttendant.request[i][2] = false;
                        break;
                    case 2:
                        eligibleAttendant.request[i][1] = false;
                        eligibleAttendant.request[i][2] = false;
                        eligibleAttendant.request[i][3] = false;
                        break;
                    case 3:
                        eligibleAttendant.request[i][2] = false;
                        eligibleAttendant.request[i][3] = false;
                        eligibleAttendant.request[i][4] = false;
                        break;
                    case 4:
                        eligibleAttendant.request[i][3] = false;
                        eligibleAttendant.request[i][4] = false;
                        eligibleAttendant.request[i][5] = false;
                        break;
                    case 5:
                        eligibleAttendant.request[i][4] = false;
                        eligibleAttendant.request[i][5] = false;
                }
            }
            console.log(eligibleAttendant.request);
            // console.log(dynamicAttendantsList[eligibleAttendant][i]);

            eligibleAttendant.shifts++;
            eligibleAttendant.hours =
                day.length === 2
                    ? eligibleAttendant.hours + weekendShifts[j].duration
                    : eligibleAttendant.hours + shifts[j].duration;

            grid[i][j] = eligibleAttendant.name;
            console.log(
                `\x1b[31m${shiftTime}: \x1b[0m${eligibleAttendant.name}`
            );
            textbox.value += `\n${shiftTime}: ${eligibleAttendant.name}`;
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

    attendants.forEach((attendant) => {
        allocationStats.value += `\nName: ${attendant.name}, Hours: ${attendant.hours}, Shifts: ${attendant.shifts}`;
    });
};
