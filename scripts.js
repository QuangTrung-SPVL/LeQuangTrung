function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file.");
        return;
    }

    const gallery = document.getElementById('gallery');
    const fileURL = URL.createObjectURL(file);

    let element;
    if (file.type.startsWith('image/')) {
        element = document.createElement('img');
        element.alt = file.name;
    } else if (file.type.startsWith('video/')) {
        element = document.createElement('video');
        element.controls = true;
    } else {
        alert("Unsupported file type.");
        return;
    }

    element.src = fileURL;
    element.style.opacity = 0;
    gallery.appendChild(element);
    
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transition = "opacity 0.5s";
    }, 10);
}
