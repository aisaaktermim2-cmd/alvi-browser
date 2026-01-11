function toggleMenu() {
    const menu = document.getElementById('kiwiMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openDevTools() {
    document.getElementById('devToolsPanel').style.display = 'flex';
    toggleMenu();
}

function closeDevTools() {
    document.getElementById('devToolsPanel').style.display = 'none';
}

function goHome() {
    document.getElementById('homeScreen').style.display = 'grid';
    document.getElementById('mainFrame').style.display = 'none';
    document.getElementById('mainFrame').src = '';
}

// সিমুলেটেড নেটওয়ার্ক লগার (কিউই স্টাইল)
setInterval(() => {
    if(document.getElementById('devToolsPanel').style.display === 'flex') {
        document.getElementById('emptyMsg').style.display = 'none';
        const logs = document.getElementById('networkLogs');
        const time = Math.floor(Math.random() * 100) + "ms";
        logs.innerHTML = `<tr>
            <td style="color:#1a73e8">getGameIssue</td>
            <td style="color:green">200</td>
            <td>xhr</td>
            <td>${time}</td>
        </tr>` + logs.innerHTML;
    }
}, 3000);
