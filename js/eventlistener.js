// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const itemInput = document.getElementById('item-input');
    const colorSelect = document.getElementById('color-select');
    const itemList = document.getElementById('item-list');
    const logEntries = document.getElementById('log-entries');

    // Counter for created items
    let itemCounter = 4;
    
    // Function to add a log entry
    function logEvent(message) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logEntries.appendChild(entry);
        logEntries.scrollTop = logEntries.scrollHeight;
    }

    // 1. Click Event - Add new item
    addBtn.addEventListener('click', function() {
        const text = itemInput.value.trim();
        if (text) {
            createListItem(text, colorSelect.value);
            itemInput.value = '';
            colorSelect.selectedIndex = 0;
            logEvent(`Added new item: "${text}"`);
        } else {
            logEvent('Attempted to add empty item');
        }
    });

    // 2. Keypress Event - Add item on Enter key
    itemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // 3. Click Event - Clear all items
    clearBtn.addEventListener('click', function() {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
        logEvent('Cleared all items');
    });

    // 4. Change Event - Log color selection
    colorSelect.addEventListener('change', function() {
        if (this.value) {
            logEvent(`Selected color: ${this.value}`);
        }
    });

    // 5. Delegated Event - Toggle completed state
    itemList.addEventListener('click', function(e) {
        // Check if click was on an icon
        if (e.target.tagName === 'I') {
            const listItem = e.target.closest('.list-item');
            listItem.classList.toggle('completed');
            
            const action = listItem.classList.contains('completed') ? 'Completed' : 'Uncompleted';
            logEvent(`${action} item: "${listItem.textContent.trim()}"`);
        }
    });

    // 6. Mouseover/Mouseout Events - Highlight items
    itemList.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('list-item')) {
            e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    itemList.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('list-item')) {
            e.target.style.boxShadow = 'none';
        }
    });

    // 7. Double Click Event - Remove item
    itemList.addEventListener('dblclick', function(e) {
        if (e.target.classList.contains('list-item')) {
            const text = e.target.textContent.trim();
            e.target.remove();
            logEvent(`Removed item: "${text}"`);
        }
    });

    // Function to create a new list item
    function createListItem(text, color = '') {
        const newItem = document.createElement('div');
        newItem.className = 'list-item';
        newItem.innerHTML = `${text} <i class="bi bi-check-square-fill"></i>`;
        
        if (color) {
            newItem.classList.add(color);
        }
        
        itemList.appendChild(newItem);
        itemCounter++;
    }

    // Initial log entry
    logEvent('Page loaded and ready for interaction');
});