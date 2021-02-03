init = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
}
const response = fetch("https://api.lhtran.com/www_resume/get_view_count", init)
  .then(r => r.json());
window.onload = async () => {
  let data = await response;
  $("#view_count").text('View: ' + data['body']['view_count']);
};