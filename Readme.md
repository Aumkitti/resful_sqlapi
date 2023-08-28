# Restaurant RESTful API and Frontend

This project implements a RESTful API for managing restaurant information using Node.js, Express.js, Sequelize (with MySQL), and CORS. The frontend is built using Vite, React.js, and interacts with the API to perform CRUD operations on restaurant items.

## Getting Started

### Prerequisites

Make sure you have the following installed before proceeding:

- Node.js and npm (Node Package Manager)
- MySQL server
- Modern web browser

### Installation

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/msssrp/T.Worachet.git
Navigate to the project directory:

sh
Copy code
cd T.Worachet
Install backend dependencies:

sh
Copy code
cd work-2-RESTFul
npm install
Install frontend dependencies:

sh
Copy code
cd ../work-2-FrontEnd
npm install
Database Setup
Create a MySQL database for the project.

Update the database configuration in work-2-RESTFul/config/db_config.db with your database details.

Running the Server
Start the backend server:

sh
Copy code
cd work-2-RESTFul
npm run dev
The API server will run at http://localhost:8080.

Running the Frontend
Start the frontend development server:

sh
Copy code
cd work-2-FrontEnd
npm i
npm run dev
The frontend development server will run at http://localhost:5173.

RESTful API
The API provides endpoints to perform CRUD operations on restaurant items.

Endpoints
GET /restaurants: Get a list of all restaurant items.
GET /restaurants/:id: Get details of a specific restaurant item by ID.
POST /restaurants: Create a new restaurant item.
PUT /restaurants/:id: Update details of a specific restaurant item by ID.
DELETE /restaurants/:id: Delete a specific restaurant item by ID.
Frontend
The frontend interface allows users to manage restaurant items using a card-based UI.

Functionality
Display a list of restaurant items as cards.
Each card displays the name, type, and an image of the food item.
Users can delete a restaurant item using the delete button on each card.
Users can update a restaurant item's details using the update button on each card.
The navigation bar includes a "Create" button to add a new restaurant item. This button opens a form where users can input the name, type, and image URL of the new food item.
The navigation bar also has a search bar in the middle where you can type something to search for any food you want.
Technologies Used
Node.js
Express.js
Sequelize
MySQL
CORS
Vite
React.js
Contributing
Contributions are welcome! Please fork the repository and create a pull request.

License
This project is licensed under the MIT License.
