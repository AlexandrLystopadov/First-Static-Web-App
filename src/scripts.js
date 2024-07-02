let count = 0;

function incrementCount() {
    count++;
    return count;
}

document.getElementById('clickButton').addEventListener('click', () => {
    const newCount = incrementCount();
    document.getElementById('clickCount').textContent = `Clicks: ${newCount}`;
});

module.exports = { incrementCount };
