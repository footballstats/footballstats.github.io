function createTable(tableID, jsonURL) {
  const table = document.getElementById(tableID);

  let count = 1;
  $.getJSON(jsonURL, function(stats) {
    
  for (var i = 0; i < stats.length; i ++) {
      let player = stats[i]
      
      row = table.insertRow(count);
      count ++;

      cell1 = row.insertCell(0)

      let flag = document.createElement('img')
      flag.src = player.flag;
      flag.alt = player.nation;
      flag.title = player.nation;
      $(cell1).append(flag);

      let name = document.createTextNode(player['name'])
      let space = document.createTextNode(' ');
      $(cell1).append(space);
      $(cell1).append(name);

      let cell2 = row.insertCell(1);
      let club = document.createTextNode(player.club);
      $(cell2).append(club);

      let cell3 = row.insertCell(2);
      let amount = document.createTextNode(player.amount);
      $(cell3).append(amount);
    }
  });
}

createTable('goalsTable', 'https://footballstats.github.io/data/epl_goals.json');
createTable('assistsTable', 'https://footballstats.github.io/data/epl_assists.json');