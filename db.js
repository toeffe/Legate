const apiUrl = "https://script.google.com/macros/s/AKfycbx6eOA7RZDqK7XwxXKVA5jHgUL0W8n1V8z_39hJoi-CAnZQV3jUaPKYz90jc-61XVXB/exec";

// Function to fetch data from Google Sheet
function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Do something with the data
    });
}

// Function to post data to Google Sheet
function postData(row, value) {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ row: row, value: value }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.text())
  .then(data => console.log(data));
}
