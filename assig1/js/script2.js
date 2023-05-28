// Retrieve data from local storage
const quoteData = JSON.parse(localStorage.getItem("quoteData"));

if (quoteData) {
  // Extract data from quoteData object
  const customerName = quoteData.customerName;
  const emailAddress = quoteData.emailAddress;
  const roomToPaint = quoteData.roomToPaint;
  const roomWidth = parseFloat(quoteData.roomWidth);
  const roomLength = parseFloat(quoteData.roomLength);
  const roomColor = quoteData.roomColor;
  const paintType = quoteData.paintType;

  // Calculate square footage and number of cans needed
  const squareFootage = roomWidth * roomLength;
  const cansNeeded = Math.ceil(squareFootage / 400);

  // Calculate price based on paint type
  const paintPrice = paintType === "standard" ? 24.99 : 39.99;
  const totalPrice = paintPrice * cansNeeded * 1.13; // Adding 13% HST

  // Generate the HTML content for the quote
  const quoteContent = `
    <h2>Contact Information</h2>
    <p><strong>Name:</strong> ${customerName}</p>
    <p><strong>Email:</strong> ${emailAddress}</p>

    <h2>Room to be Painted</h2>
    <p>${roomToPaint}</p>

    <h2>Room Size</h2>
    <p><strong>Square Footage:</strong> ${squareFootage} sq ft</p>

    <h2>Color</h2>
    <div style="width: 100px; height: 100px; background-color: ${roomColor};"></div>

    <h2>Paint Details</h2>
    <p><strong>Cans Needed:</strong> ${cansNeeded}</p>
    <p><strong>Paint Type:</strong> ${paintType}</p>

    <h2>Price</h2>
    <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
  `;

  // Insert the quote content into the quoteContent div
  document.getElementById("quoteContent").innerHTML = quoteContent;
}
