// Save form data to local storage when submitted
document
  .getElementById("quoteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const roomToPaint = document.getElementById("roomToPaint").value;
    const roomWidth = document.getElementById("roomWidth").value;
    const roomLength = document.getElementById("roomLength").value;
    const roomColor = document.getElementById("colorPicker").value;
    const paintType = document.getElementById("paintType").value;

    const quoteData = {
      customerName,
      emailAddress,
      roomToPaint,
      roomWidth,
      roomLength,
      roomColor,
      paintType,
    };

    localStorage.setItem("quoteData", JSON.stringify(quoteData));

    // Redirect to the quote page
    window.location.href = "quote.html";
  });
