function sortTickets(tickets: Array < string > , criteria: string) {

  let ticketsArr = [];

  tickets.forEach(e => {

    let ticketArr = (e.split("|"));

    let ticketObj = {
      destination: ticketArr[0],
      price: ticketArr[1],
      status: ticketArr[2]
    }

    ticketsArr.push(ticketObj)
  });
  console.log(ticketsArr.sort((a, b) => (a[criteria] > b[criteria]) ? 1 : ((b[criteria] > a[criteria]) ? -1 : 0)));



}
sortTickets([
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'
], 'destination');

sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'status');