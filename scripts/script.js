init = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
}
const response = fetch("https://api.lhtran.com/wwwresume/get_view_count", init)
  .then(r => r.json());
window.onload = async () => {
  let data = await response;
  $("#view_count").text('View: ' + data['view_count']);
};