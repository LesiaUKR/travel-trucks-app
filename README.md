# Travel Trucks Rental App

## Project Overview
This project is a Camper Rental App built with React and Redux, designed for users to explore, filter, and book campervans easily. Users can browse a catalog of campers, filter by features, add favorites, and book their chosen camper directly through the app. The app includes a user-friendly interface with a date picker for booking, customizable themes, and real-time notifications for booking confirmations.
### Key Features
- **Home Page** with a CTA to explore the catalog
- **Catalog** with filter options for location, type, and features
- **Detailed Camper Page** with camper specifications, reviews, gallery, and a booking form
- **Favorites Management** to add or remove campers from a saved list
- **Dynamic Loading**of more campers in the catalog
- **Notifications** for successful bookings

### Project Structure
- **Home Page:**  / - Banner and main CTA to catalog
- **Catalog Page:**  /catalog - Displays all campers with filtering options
- **Camper Details Page:**  /catalog/:id - Detailed camper info, reviews, gallery, and booking form

## Technologies

### Frontend
| Dependency | Description |
|:-----------|:-----------|
| **React**           |JavaScript library for building user interfaces|
| **Vite**            | modern frontend build tool|
| **Redux Toolkit**   |State management library, optimized for simplicity and performance |
|**react-redux**      | React bindings for Redux|
|**react-router-dom** | Routing | 
|**Axios**         | HTTP client for API requests |
|**react-datepicker** | 	Date picker component for selecting booking dates | 
| **react-helmet-async** | Head management for SEO |
| **react-hot-toast**     | Notification library |
| **react-loader-spinner** | Loading spinner to indicate async data fetching |
|**localStorage** | To persist user favorites across sessions|
|**styled-components**| CSS-in-JS library for styling components| 

### Backend (Mock API)
The frontend interacts with a mock API for campervan data, accessible at [Mock API](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers), with the following main endpoints:

- **GET <span style="color:green">/campers</span> -** Retrieve all camper listings (supports filters)
- **GET <span style="color:green">/campers/:id</span> -**  Retrieve detailed info for a specific camper

## Development Setup
1. Clone the repository: **git clone <repo-url>**
2. Install dependencies: **npm install**
3. Run the app: **npm run dev (uses Vite bundler)**
4. View the application in your web browser: **Open http://localhost:5173**
5. Deployment: **Ready for Vercel**

## License
This project is licensed under the MIT License.

![HOME PAGE](/public/assets/home-page.jpg)
![CATALOG PAGE](/public/assets/catalog-page.png)
![CATALOG PAGE NIGHT VIEW ](/public/assets/catalog-page.png)
![CAMPER DETAILS PAGE FEATURES](/public/assets/camper-details-page-features.png)
![CAMPER DETAILS PAGE REVIES](/public/assets/camper-details-page-review-bookingform.png)
![FAVORITES PAGE](/public/assets/favorites-page.png)
![NOTFOUND PAGE](/public/assets/not-found-page.png)
