const stats = [
    {
      "Eden Hazard": [
        "Chelsea",
        "6",
        "Belgium",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png"
      ],
      "Sergio Ag\u00fcero": [
        "Manchester City",
        "5",
        "Argentina",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png"
      ],
      "Harry Kane": [
        "Tottenham Hotspur",
        5,
        "England",
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/23px-Flag_of_England.svg.png"
      ]
    }
];
goals = stats[0]

function objectLength(x) {
    count = 0;
    for (let i in x) {
        count ++;
    }
    return count;
}



let count = 1;
const table = document.getElementById('table');
for (let player in goals) {
    let row = table.insertRow(count);
    count ++;
    
    let cell1 = row.insertCell(0);
    let flag = document.createElement('img');
    flag.src = goals[player][3];
    flag.title = goals[player][2];
    flag.alt = goals[player][2];
    let space = document.createTextNode(' ')
    let name = document.createTextNode(player);

    cell1.appendChild(flag);
    cell1.appendChild(space); 
    cell1.appendChild(name);

    let cell2 = row.insertCell(1);
    $(cell2).append(goals[player][0])

    let cell3 = row.insertCell(2);
    $(cell3).append(goals[player][1]);
}

