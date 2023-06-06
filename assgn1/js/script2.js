//Retrieve data from local storage
const quoteData = JSON.parse(localStorage.getItem("quoteData"));

//Extract data from quoteData object
if (quoteData) {
  //Customer's contact information (name and email)
  const customerName = quoteData.customerName;
  const emailAddress = quoteData.emailAddress;
  //Room to be painted
  const roomToPaint = quoteData.roomToPaint;
  const roomWidth = parseFloat(quoteData.roomWidth);
  const roomLength = parseFloat(quoteData.roomLength);
  //A colour swatch showing the colour the customer picked
  const roomColor = quoteData.roomColor;
  const paintType = quoteData.paintType;

  //The number of paint cans that will be needed to paint the room based on each can cover
  //approximately 400 sq ft of wall space (rounded up)
  const squareFootage = roomWidth * roomLength;
  const cans = Math.ceil(squareFootage / 400);

  //The final price for the number of cans based on which type of paint was selected plus 13% HST
  const paintPrice = paintType === "standard" ? 24.99 : 39.99;
  const totalPrice = paintPrice * cans * 1.13;

  //Generate the HTML content for the quote
  const quoteContent = `
    <h2>Contact Information</h2>
    <p><strong>Name:</strong> ${customerName}</p>
    <p><strong>Email:</strong> ${emailAddress}</p>

    <h2>Room to be Painted</h2>
    <p>${roomToPaint}</p>

    <h2>Room Size</h2>
    <p><strong>Square Footage:</strong> ${squareFootage} sq ft</p>

    <h2>Color</h2>
    <div id="color" style="display: flex; justify-content: center; align-items: center; width: 30px; height: 30px;  margin: auto; background-color: ${roomColor};"></div>

    <h2>Paint Details</h2>
    <p><strong>Cans Needed:</strong> ${cans}</p>
    <p><strong>Paint Type:</strong> ${paintType}</p>

    <h2>Price</h2>
    <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
  `;

  //Insert the quote content into the quoteContent div
  document.getElementById("quoteContent").innerHTML = quoteContent;
}
