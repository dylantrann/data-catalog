## B2B Data Catalog Application
Allows users to view a list of products. 
* Users must login to view products. 
* There is a search feature to query products by their categories. 
The frontend uses React while the backend uses Express and a SQLite database. 

### Project Setup
1. Clone the repository: git clone <repository-url>
2. Install dependencies:
    For backend: cd server && npm install
    For frontend: cd client && npm install
3. Run the application:
    For backend: npm start
    For frontend: npm start
Make sure **both** the front and backend are running, may need to split terminals.

Access the application at http://localhost:3000.

### Authentication Details:
You can add users and products using the given Postman requests or by creating your own.

For an easier time logging in, there's already a user stored in the database. 
* username: dummy
* password: 12345

There are also a couple of products already in the database, but feel free to add more using Postman.