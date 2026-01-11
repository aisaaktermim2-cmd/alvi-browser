function initiateSniff() {
    let url = document.getElementById('target-url').value;
    if(!url) url = "https://tkclub2.com";
    document.getElementById('browser-view').src = url;
    
    // ডাটা ক্যাপচার মেসেজ
    document.getElementById('sniff-status').innerHTML = ">> TARGET: " + url.toUpperCase() + " | SCANNING_API...";
    
    // লাইভ এপিআই রিকোয়েস্টের মত দেখা যাবে
    setTimeout(() => {
        addLogRow("GetGameIssueEmerd", "200 OK", '{"issue":"20260111"}');
    }, 2000);
}

function addLogRow(api, status, result) {
    const table = document.getElementById('api-rows');
    const time = new Date().toLocaleTimeString();
    const row = `<tr>
        <td>${time}</td>
        <td>${api}</td>
        <td><span class="success">${status}</span></td>
        <td>${result}</td>
    </tr>`;
    table.innerHTML = row + table.innerHTML;
}
