var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.classList.add("row", "m-3");
container.append(row);
async function holiday() {
  let res = await fetch("https://www.gov.uk/bank-holidays.json");
  let res1 = await res.json();
  console.log(res1);
  let index = res1.scotland;
  let scot = index.events;
  console.log(scot);
  var table = document.createElement("table");
  table.setAttribute("class", "table");
  table.classList.add("table-bordered");
  table.innerHTML = `<thead class="thead-dark">
                  <tr>
                   <th>Date</th>
                   <th>Day</th>
                  </tr>
                 </thead>`;
  row.append(table);
  for (i = 0; i < scot.length; i++) {
    table.innerHTML += ` <tbody>
    <tr>
      <td class="td1">${scot[i].date} </td>
      <td>${scot[i].title} </td>
    </tr>
    </tbody>`;
    document.body.append(container);
  }
}
holiday();
