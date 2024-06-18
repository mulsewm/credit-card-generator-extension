const addresses = [
  "123 Maple St, Springfield, IL 62701",
  "456 Oak Ave, Denver, CO 80202",
  "789 Pine Blvd, Seattle, WA 98101",
  "101 Cedar Ln, Austin, TX 73301",
  "202 Birch Dr, Miami, FL 33101",
  "303 Walnut St, Atlanta, GA 30301",
  "404 Elm St, Boston, MA 02101",
  "505 Ash St, San Francisco, CA 94101",
  "606 Cherry Ave, Chicago, IL 60601",
  "707 Redwood Rd, Portland, OR 97201",
  "808 Poplar St, New York, NY 10001",
  "909 Sycamore Ln, Las Vegas, NV 89101",
  "111 Hickory St, Houston, TX 77001",
  "222 Spruce Ave, Philadelphia, PA 19101",
  "333 Fir Dr, Phoenix, AZ 85001",
  "444 Willow Blvd, Dallas, TX 75201",
  "555 Magnolia St, San Diego, CA 92101",
  "666 Cypress Ln, Orlando, FL 32801",
  "777 Dogwood Dr, Columbus, OH 43201",
  "888 Sequoia Ave, Nashville, TN 37201",
  "999 Cedar St, Charlotte, NC 28201",
  "123 Pine Ln, Minneapolis, MN 55401",
  "234 Maple Dr, St. Louis, MO 63101",
  "345 Oak St, San Jose, CA 95101",
  "456 Birch Ave, Detroit, MI 48201",
  "567 Walnut Dr, Baltimore, MD 21201",
  "678 Elm St, Milwaukee, WI 53201",
  "789 Cherry Ln, Albuquerque, NM 87101",
  "890 Redwood Blvd, Kansas City, MO 64101",
  "901 Sycamore Ave, Indianapolis, IN 46201",
  "1010 Hickory Dr, Memphis, TN 38101",
  "1111 Spruce St, Louisville, KY 40201",
  "1212 Fir Ln, New Orleans, LA 70101",
  "1313 Willow Dr, Salt Lake City, UT 84101",
  "1414 Magnolia Ave, Oklahoma City, OK 73101",
  "1515 Cypress Blvd, Richmond, VA 23201",
  "1616 Dogwood St, Birmingham, AL 35201",
  "1717 Sequoia Dr, Providence, RI 02901",
  "1818 Cedar Ave, Hartford, CT 06101",
  "1919 Pine St, Buffalo, NY 14201",
  "2020 Maple Ln, Des Moines, IA 50301",
  "2121 Oak Dr, Anchorage, AK 99501",
  "2222 Birch St, Honolulu, HI 96801",
  "2323 Walnut Ln, Boise, ID 83701",
  "2424 Elm Ave, Little Rock, AR 72201",
  "2525 Cherry Dr, Jackson, MS 39201",
  "2626 Redwood St, Charleston, WV 25301",
  "2727 Sycamore Ln, Cheyenne, WY 82001",
  "2828 Hickory Blvd, Dover, DE 19901",
  "2929 Spruce Dr, Montpelier, VT 05601",
  "3030 Fir Ave, Concord, NH 03301",
  "3131 Willow Ln, Pierre, SD 57501",
  "3232 Magnolia Dr, Helena, MT 59601",
  "3333 Cypress Ave, Bismarck, ND 58501",
  "3434 Dogwood Blvd, Augusta, ME 04330",
  "3535 Sequoia Ln, Madison, WI 53701",
  "3636 Cedar Dr, Olympia, WA 98501",
  "3737 Pine Ave, Jefferson City, MO 65101",
  "3838 Maple St, Harrisburg, PA 17101",
  "3939 Oak Ln, Frankfort, KY 40601",
  "4040 Birch Dr, Lansing, MI 48901",
  "4141 Walnut Ave, Columbus, GA 31901",
  "4242 Elm Ln, Baton Rouge, LA 70801",
  "4343 Cherry Dr, Santa Fe, NM 87501",
  "4444 Redwood St, Raleigh, NC 27601",
  "4545 Sycamore Ave, Lincoln, NE 68501",
  "4646 Hickory Ln, Concord, NH 03301",
  "4747 Spruce Ave, Fargo, ND 58102",
  "4848 Fir Dr, Topeka, KS 66601",
  "4949 Willow Ln, Boise, ID 83701",
  "5050 Magnolia Blvd, Salt Lake City, UT 84101",
  "5151 Cypress Ave, Trenton, NJ 08601",
  "5252 Dogwood Ln, Columbia, SC 29201",
  "5353 Sequoia Dr, Charleston, SC 29401",
  "5454 Cedar Ave, Hartford, CT 06101",
  "5555 Pine St, Augusta, GA 30901",
  "5656 Maple Ln, Salem, OR 97301",
  "5757 Oak Dr, Annapolis, MD 21401",
  "5858 Birch St, Montgomery, AL 36101",
  "5959 Walnut Ave, Tallahassee, FL 32301",
  "6060 Elm Ln, Denver, CO 80202",
  "6161 Cherry Dr, Atlanta, GA 30301",
  "6262 Redwood Ave, Boise, ID 83701",
  "6363 Sycamore Blvd, Raleigh, NC 27601",
  "6464 Hickory St, Portland, OR 97201",
  "6565 Spruce Ave, Richmond, VA 23201",
  "6666 Fir Dr, Columbus, OH 43201",
  "6767 Willow Blvd, Indianapolis, IN 46201",
  "6868 Magnolia Ln, Las Vegas, NV 89101",
  "6969 Cypress Ave, New Orleans, LA 70101",
  "7070 Dogwood Blvd, Oklahoma City, OK 73101",
  "7171 Sequoia Ln, Miami, FL 33101",
  "7272 Cedar Ave, Phoenix, AZ 85001",
  "7373 Pine Blvd, Kansas City, MO 64101",
  "7474 Maple Dr, Austin, TX 73301",
  "7575 Oak St, San Francisco, CA 94101",
  "7676 Birch Ln, Chicago, IL 60601",
  "7777 Walnut Dr, Houston, TX 77001",
  "7878 Elm Ave, Los Angeles, CA 90001",
  "7979 Cherry Blvd, Philadelphia, PA 19101"
];

document.addEventListener('DOMContentLoaded', () => {
  // Load saved card details from local storage
  const savedCardDetails = JSON.parse(localStorage.getItem('cardDetails'));
  if (savedCardDetails) {
    displayCardDetails(savedCardDetails);
  }

  document.getElementById('generate-btn').addEventListener('click', () => {
    const cardType = document.getElementById('card-type').value;
    const cardDetails = generateValidCardDetails(cardType);
    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
    displayCardDetails(cardDetails);
  });

  document.getElementById('rate-us').addEventListener('mouseout', () => {
    resetStars();
  });

  document.getElementById('rate-us').addEventListener('click', (e) => {
    const rating = e.target.getAttribute('data-value');
    if (rating) {
      const url = rating >= 4 ? 'https://www.google.com/' : 'https://www.youtube.com/hashtag/funnyvideo';
      window.open(url, '_blank');
      document.querySelector('.rating').style.display = 'none';
      localStorage.setItem('hideRating', 'true');
    }
  });

  document.getElementById('card-info').addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-icon')) {
      const text = e.target.getAttribute('data-copy');
      copyToClipboard(text, e.target);
    }
  });

  if (localStorage.getItem('hideRating') === 'true') {
    document.querySelector('.rating').style.display = 'none';
  }

  function displayCardDetails(cardDetails) {
    document.getElementById('card-info').innerHTML = `
      <p><strong>Card number:</strong> <span>${cardDetails.cardNumber}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.cardNumber}" /></p>
      <p><strong>CVV:</strong> <span>${cardDetails.cvv}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.cvv}" /></p>
      <p><strong>Date:</strong> <span>${cardDetails.expiryDate}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.expiryDate}" /></p>
      <p><strong>Name:</strong> <span>${cardDetails.name}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.name}" /></p>
      <p><strong>Street Address:</strong> <span>${cardDetails.streetAddress}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.streetAddress}" /></p>
      <p><strong>Country:</strong> <span>USA</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="USA" /></p>
      <p><strong>Zip code:</strong> <span>${cardDetails.zip}</span> <img src="../icons/copy-icon.png" class="copy-icon" data-copy="${cardDetails.zip}" /></p>
    `;
  }
  function highlightStars(rating) {
    const stars = document.querySelectorAll('#rate-us span');
    stars.forEach((star, index) => {
      star.classList.toggle('highlighted', index < rating);
    });
  }
  function resetStars() {
    const stars = document.querySelectorAll('#rate-us span');
    stars.forEach(star => {
      star.classList.remove('highlighted');
    });
  }

  function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      element.src = "../icons/check-icon.png";
      setTimeout(() => {
        element.src = "../icons/copy-icon.png";
      }, 2000);
    }, (err) => {
      alert('Failed to copy: ', err);
    });
  }

  function generateValidCardDetails(cardType) {
    const cardPrefixes = {
      'Visa': '4',
      'Mastercard': '5',
      'American Express': '3'
    };
    const prefix = cardPrefixes[cardType] || '4';
    let cardNumber;
  
    do {
      cardNumber = prefix + Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
    } while (!isValidCardNumber(cardNumber));
  
    const cvv = String(Math.floor(100 + Math.random() * 900));
    const expiryDate = `${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}/${String(Math.floor(24 + Math.random() * 6))}`;
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const zip = address.split(', ').pop().split(' ').pop(); // Extracts only the zip code, ensuring it's the last numeric part
  
    return {
      cardNumber,
      cvv,
      expiryDate,
      name: `John Miller`, // Placeholder name, replace if necessary
      streetAddress: address,
      country: 'USA',
      zip: zip
    };
  }
  
  function isValidCardNumber(cardNumber) {
    let sum = 0;
    let isEven = false;
  
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);
  
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      isEven = !isEven;
    }
  
    return sum % 10 === 0;
  }
});

document.querySelectorAll('#rate-us span').forEach((star) => {
  star.addEventListener('mouseover', () => {
    highlightStars(star.getAttribute('data-value'));
  });
  star.addEventListener('mouseout', () => {
    resetStars();
  });
});