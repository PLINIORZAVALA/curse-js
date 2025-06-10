// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // ======================
    // 1. Element Selection
    // ======================
    const showSelectorsBtn = document.getElementById('showSelectors');
    const selectExamples = document.querySelectorAll('.select-example');
    
    showSelectorsBtn.addEventListener('click', function() {
        // Different selection methods
        const byId = document.getElementById('select1');
        const byClass = document.getElementsByClassName('select-example');
        const byTag = document.getElementsByTagName('p');
        const byQuery = document.querySelector('.select-example');
        const byQueryAll = document.querySelectorAll('.select-example');
        
        // Log examples to console
        console.log('getElementById:', byId);
        console.log('getElementsByClassName:', byClass);
        console.log('getElementsByTagName:', byTag);
        console.log('querySelector:', byQuery);
        console.log('querySelectorAll:', byQueryAll);
        
        // Highlight all examples
        selectExamples.forEach(el => {
            el.classList.add('highlight');
            setTimeout(() => el.classList.remove('highlight'), 1000);
        });
    });
    
    // ======================
    // 2. DOM Modification
    // ======================
    const changeTextBtn = document.getElementById('changeText');
    const changeHTMLBtn = document.getElementById('changeHTML');
    const addClassBtn = document.getElementById('addClass');
    const toggleClassBtn = document.getElementById('toggleClass');
    const createElementBtn = document.getElementById('createElement');
    const appendElementBtn = document.getElementById('appendElement');
    const removeElementBtn = document.getElementById('removeElement');
    const cloneElementBtn = document.getElementById('cloneElement');
    const modExample = document.getElementById('mod-example');
    const parentElement = document.getElementById('parent-element');
    const dynamicContent = document.getElementById('dynamic-content');
    
    // Change text content
    changeTextBtn.addEventListener('click', function() {
        modExample.textContent = 'Text changed using textContent';
    });
    
    // Change HTML content
    changeHTMLBtn.addEventListener('click', function() {
        modExample.innerHTML = '<strong>HTML</strong> changed using <em>innerHTML</em>';
    });
    
    // Add class
    addClassBtn.addEventListener('click', function() {
        modExample.classList.add('highlight');
    });
    
    // Toggle class
    toggleClassBtn.addEventListener('click', function() {
        modExample.classList.toggle('highlight');
    });
    
    // Create element
    createElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'Newly created element';
        dynamicContent.appendChild(newElement);
    });
    
    // Append element
    appendElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('li');
        newElement.textContent = 'Appended child';
        parentElement.appendChild(newElement);
    });
    
    // Remove element
    removeElementBtn.addEventListener('click', function() {
        const children = parentElement.children;
        if (children.length > 0) {
            parentElement.removeChild(children[children.length - 1]);
        }
    });
    
    // Clone element
    cloneElementBtn.addEventListener('click', function() {
        const clone = modExample.cloneNode(true);
        dynamicContent.appendChild(clone);
    });
    
    // ======================
    // 3. Event Handling
    // ======================
    const clickBox = document.getElementById('click-box');
    const hoverBox = document.getElementById('hover-box');
    const dragBox = document.getElementById('drag-box');
    const dropZone = document.getElementById('drop-zone');
    const keyInput = document.getElementById('key-input');
    const eventOutput = document.getElementById('event-output');
    
    // Click event
    clickBox.addEventListener('click', function(e) {
        eventOutput.textContent = `Clicked at X:${e.clientX}, Y:${e.clientY}`;
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
    
    // Mouseover event
    hoverBox.addEventListener('mouseover', function() {
        this.textContent = 'Mouse is over me!';
    });
    
    hoverBox.addEventListener('mouseout', function() {
        this.textContent = 'Hover over me';
    });
    
    // Drag and drop events
    dragBox.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.id);
        setTimeout(() => this.classList.add('hidden'), 0);
    });
    
    dragBox.addEventListener('dragend', function() {
        this.classList.remove('hidden');
    });
    
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('highlight');
    });
    
    dropZone.addEventListener('dragleave', function() {
        this.classList.remove('highlight');
    });
    
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        this.appendChild(draggedElement);
        this.classList.remove('highlight');
        this.textContent = 'Element dropped!';
    });
    
    // Keyboard events
    keyInput.addEventListener('keyup', function(e) {
        eventOutput.textContent = `Typed: ${e.target.value} (Key code: ${e.keyCode})`;
    });
    
    // ======================
    // 4. Form Handling
    // ======================
    const userForm = document.getElementById('user-form');
    const formOutput = document.getElementById('form-output');
    
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const subscribe = document.getElementById('subscribe').checked;
        
        formOutput.innerHTML = `
            <h3>Form Submitted</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Age: ${age}</p>
            <p>Subscribed: ${subscribe ? 'Yes' : 'No'}</p>
        `;
        
        formOutput.classList.add('success');
    });
    
    // Form reset
    userForm.addEventListener('reset', function() {
        formOutput.textContent = 'Form reset';
        formOutput.classList.remove('success');
    });
    
    // ======================
    // 5. Advanced Techniques
    // ======================
    const animateBtn = document.getElementById('animateBtn');
    const loadContentBtn = document.getElementById('loadContentBtn');
    const saveDataBtn = document.getElementById('saveDataBtn');
    const showDataBtn = document.getElementById('showDataBtn');
    const useTemplateBtn = document.getElementById('useTemplateBtn');
    const animationBox = document.getElementById('animation-box');
    const ajaxContent = document.getElementById('ajax-content');
    const storageExample = document.getElementById('storage-example');
    const templateExample = document.getElementById('template-example');
    const userTemplate = document.getElementById('user-template');
    
    // Animation
    animateBtn.addEventListener('click', function() {
        animationBox.classList.toggle('animate');
    });
    
    // Fetch API (AJAX)
    loadContentBtn.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                ajaxContent.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `;
            })
            .catch(error => {
                ajaxContent.textContent = 'Error loading content';
                console.error('Error:', error);
            });
    });
    
    // LocalStorage
    saveDataBtn.addEventListener('click', function() {
        const data = {
            name: 'John Doe',
            email: 'john@example.com',
            date: new Date()
        };
        localStorage.setItem('userData', JSON.stringify(data));
        storageExample.textContent = 'Data saved to localStorage';
        storageExample.classList.add('success');
    });
    
    showDataBtn.addEventListener('click', function() {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            storageExample.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Date: ${new Date(data.date).toLocaleString()}</p>
            `;
        } else {
            storageExample.textContent = 'No data found in localStorage';
            storageExample.classList.add('error');
        }
    });
    
    // Template usage
    useTemplateBtn.addEventListener('click', function() {
        const template = userTemplate.content.cloneNode(true);
        template.querySelector('.user-name').textContent = 'Jane Smith';
        template.querySelector('.user-email').textContent = 'jane@example.com';
        
        templateExample.innerHTML = '';
        templateExample.appendChild(template);
    });
});