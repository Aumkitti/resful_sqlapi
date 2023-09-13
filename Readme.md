# Restaurant RESTful API and Frontend

This project implements a RESTful API for managing restaurant information using Node.js, Express.js, Sequelize (with MySQL), and CORS. The frontend is built using Vite, React.js, and interacts with the API to perform CRUD operations on restaurant items.

## Getting Started
### Prerequisites

- Node.js and npm (Node Package Manager)
- MySQL server
- Modern web browser

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Aumkitti/resful_sqlapi.git
```

2. Navigate to the project directory:

```bash
cd resful_sqlapi
```

3. Install backend dependencies:

```bash
cd resful_sqlapi
npm install
```

4. Install frontend dependencies:

```bash
cd ../Fornt_end
npm install
```

### Database Setup

1. Create a MySQL database for the project.

2. Update the database configuration in `resful_sqlapi/config/db_config.db` with your database details.


### Running the Server

1. Start the backend server:

```bash
cd resful_sqlapi
npm run dev
```

The API server will run at `http://localhost:8080`.

### Running the Frontend

1. Start the frontend development server:

```bash
cd Fornt_end
npm i
npm run dev
```

The frontend development server will run at `http://localhost:5173`.

## RESTful API

The API provides endpoints to perform CRUD operations on restaurant items.

### Endpoints

- **GET** `/restaurant`: Get a list of all restaurant items.
- **GET** `/restaurant/:id`: Get details of a specific restaurant item by ID.
- **POST** `/restaurant`: Create a new restaurant item.
- **PUT** `/restaurant/:id`: Update details of a specific restaurant item by ID.
- **DELETE** `/restaurant/:id`: Delete a specific restaurant item by ID.

## Frontend

The frontend interface allows users to manage restaurant items using a card-based UI.

### Functionality

- Display a list of restaurant items as cards.
- Each card displays the name, type, and an image of the food item.
- Users can delete a restaurant item using the delete button on each card.
- Users can update a restaurant item's details using the update button on each card.
- The navigation bar includes a "Create" button to add a new restaurant item. This button opens a form where users can input the name, type, and image URL of the new food item.
- The navigation bar also have the search bar at the middle of navbar you can type something for search any food you want.

## Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL
- CORS
- Vite
- React.js

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
