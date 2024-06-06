// search functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('main section');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        
        // Clear previous highlights
        sections.forEach(section => {
            const content = section.querySelector('p');
            if (content) {
                content.innerHTML = content.innerText; // Remove any previous highlights
            }
            section.style.display = 'block'; // Ensure all sections are visible
        });

        if (query === '') {
            return; // If the query is empty, do nothing further
        }

        sections.forEach(section => {
            const content = section.querySelector('p');
            if (content) {
                const text = content.innerText.toLowerCase();
                if (text.includes(query)) {
                    const regex = new RegExp(`(${query})`, 'gi');
                    content.innerHTML = content.innerText.replace(regex, '<span class="highlight">$1</span>');
                    section.style.display = 'block';
                    section.scrollIntoView({ behavior: 'smooth' });
                } else {
                    section.style.display = 'none';
                }
            }
        });
    });
});


// form with ajax
$(document).ready(function() {
    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var formData = new FormData(this); // Create a FormData object for AJAX submission

        $.ajax({
            url: 'submit_form.php', // The PHP script URL
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var res = JSON.parse(response);
                // Check the response from the server
                if (res.success) {
                    showToast(res.message, true); // Show success message
                } else {
                    showToast(res.message, false); // Show error message
                }
            },
            error: function() {
                showToast('Sorry! Your feedback has not been submitted. Try again.', false); // Show error message
            }
        });
    });

    // toast message
    function showToast(message, isSuccess) {
        var toastEl = document.getElementById('liveToast');
        var toastBody = toastEl.querySelector('.toast-body');
        toastBody.textContent = message; // Set the message in the toast body
        
        // Reset any custom styles
        toastEl.classList.remove('bg-danger', 'bg-success'); // Remove any background color classes

        // Optionally, add a class for custom styling if needed
        if (isSuccess) {
            toastEl.classList.add('custom-success'); // Add a custom class for success
        } else {
            toastEl.classList.add('custom-error'); // Add a custom class for error
        }

        var toastInstance = new bootstrap.Toast(toastEl);
        toastInstance.show();
    }
});


//animated para in contact section
document.addEventListener("DOMContentLoaded", function() {
    const animatedContainer = document.querySelector(".animated-container");
    const paragraph = document.getElementById("animated-paragraph");
    const words = paragraph.innerText.split(" ");
    paragraph.innerHTML = ""; // Clear the paragraph text
  
    let observer;
  
    const animateParagraph = () => {
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        paragraph.appendChild(span);
        setTimeout(() => {
          span.classList.add("show");
        }, index * 300); // 300ms delay between words
      });
      observer.unobserve(animatedContainer); // Stop observing after animation
    };
  
    // Create the Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateParagraph();
          }
        });
      },
      { rootMargin: "0px 0px -200px 0px" } // Adjust the rootMargin value as needed
    );
  
    // Start observing the animated container
    observer.observe(animatedContainer);
  });

// home paragrpagh animation
document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.getElementById("home-paragraph");
    var text = paragraph.textContent;
    paragraph.innerHTML = ""; // Clear the content

    text.split(" ").forEach(function(word) {
        var span = document.createElement("span");
        span.textContent = word + " "; // Add space after each word
        paragraph.appendChild(span);
    });

    animateWords(paragraph);
});

function animateWords(paragraph) {
    var words = paragraph.querySelectorAll("span");
    var delay = 0.5; // Delay between each word animation in seconds

    words.forEach(function(word, index) {
        word.style.opacity = 0;
        word.style.animation = "appear 0.5s forwards";
        word.style.animationDelay = delay * index + "s";
    });
}


// animation on scrolling
AOS.init();