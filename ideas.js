// // loop through requests - add individual shifts - if sum of any shift is 1, it means its a unique request, so assign. if sum is 0, say that the shift will be unfilled

// const matrixSum = (a, b) => {
//     let c = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0],
//         [0, 0],
//         [0, 0],
//     ];

//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             c[i][j] = a[i][j] + b[i][j];
//         }
//     }

//     return c;
// };

// requests.reduce((prev, curr, i) => {
//     let sum = matrixSum(prev, curr);
//     console.log({ sum });
//     return sum;
// });

for (let i = 0; i < days.length; i++) {
    // console.log(`${days[i]} Availability:`);

    for (let j = 0; j < requests[0][i].length; j++) {
        if (requests[0][i].length === 2) {
            // console.log(
            //     `${weekendShifts[j]} Availability: ${Boolean(
            //         requests[0][i][j]
            //     )}`
            // );
        }
        //     } else
        //         console.log(
        //             `${shifts[j]} Availability: ${Boolean(requests[0][i][j])}`
        //         );
    }
}

grid.forEach((day, i) => {
    day.forEach((shift, j) => {
        let candidates = getCandidates(i, j, requests);
        if (getCandidates(i, j, requests).length === 1) {
            let shiftTime = day.length === 2 ? weekendShifts[j] : shifts[j];
            console.log(
                `One Candidate: ${names[candidates[0]]} for ${
                    days[i]
                }'s ${shiftTime} shift`
            );
        }
    });
});
