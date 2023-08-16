document.addEventListener("DOMContentLoaded", function () {
    // Function to generate a single review card
    function createReviewCard(review) {
      const reviewCard = document.createElement("div");
      reviewCard.className = "review-card";
  
      const nameElement = document.createElement("p");
      nameElement.className = "review-name";
      nameElement.innerHTML = `<strong>${review.name}</strong> - ${review.gemName}`;
      reviewCard.appendChild(nameElement);
  
      const dateElement = document.createElement("p");
      dateElement.className = "review-date";
      dateElement.textContent = formatDate(review.date);
      reviewCard.appendChild(dateElement);
  
      const ratingElement = document.createElement("p");
      ratingElement.className = "review-rating";
      ratingElement.textContent = generateRatingStars(review.rating);
      reviewCard.appendChild(ratingElement);
  
      const reviewElement = document.createElement("p");
      reviewElement.className = "review-text";
      reviewElement.textContent = review.review;
      reviewCard.appendChild(reviewElement);
  
      return reviewCard;
    }
  
    // Format the date in a readable format
    function formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  
    // Generate rating stars based on the given rating value
    function generateRatingStars(rating) {
      const starRating = "★".repeat(rating) + "☆".repeat(5 - rating);
      return starRating;
    }
  
    // Add reviews to the review cards container
    const reviewCardsContainer = document.getElementById("review-cards-container");
    for (const review of reviewData) {
      const reviewCard = createReviewCard(review);
  
      // Add rating-specific class to the review card
      if (review.rating >= 4 && review.rating <= 5) {
        reviewCard.classList.add("review-rating-4-5");
      } else if (review.rating === 3) {
        reviewCard.classList.add("review-rating-3");
      } else if (review.rating >= 1 && review.rating <= 2) {
        reviewCard.classList.add("review-rating-1-2");
      }
  
      reviewCardsContainer.appendChild(reviewCard);
    }
  });
  