const express = require('express');

const app = express();

app.use(express.static('public'));

// HOME PAGE
app.get('/', (req, res) => {
    res.send(`
        <h1>Study Buddies</h1>
        <p>Find study partners and share knowledge.</p>

        <nav>
            <a href="/">Home</a> |
            <a href="/users">Users</a> |
            <a href="/listings">Listings</a> |
            <a href="/detail">Detail</a> |
            <a href="/categories">Categories</a> |
            <a href="/profile">Profile</a> |
            <a href="/messages">Messages</a> |
            <a href="/login">Login</a> |
            <a href="/register">Register</a> |
            <a href="/ratings">Ratings</a> |
            <a href="/recommendations">Recommendations</a>
        </nav>
    `);
});

// USERS PAGE
app.get('/users', (req, res) => {
    res.send(`
        <h1>Users List</h1>

        <ul>
            <li>Daniel - Cyber Security - Needs help with Java</li>
            <li>Sarah - Computer Science - Can help with Databases</li>
            <li>John - Software Engineering - Needs help with Node.js</li>
            <li>Aisha - Computing - Can help with Web Development</li>
        </ul>
    `);
});

// LISTINGS PAGE
app.get('/listings', (req, res) => {
    res.send(`
        <h1>Study Listings</h1>

        <ul>
            <li><a href="/detail">Java Programming Help Needed</a></li>
            <li><a href="/detail">Database Revision Partner Needed</a></li>
            <li><a href="/detail">Cyber Security Study Group</a></li>
            <li><a href="/detail">Node.js Project Support</a></li>
        </ul>
    `);
});

// DETAIL PAGE
app.get('/detail', (req, res) => {
    res.send(`
        <h1>Study Request Detail</h1>

        <h2>Java Programming Help Needed</h2>

        <p><strong>Posted By:</strong> Daniel</p>
        <p><strong>Subject:</strong> Java Programming</p>
        <p><strong>Availability:</strong> Monday and Wednesday</p>
        <p><strong>Description:</strong> Looking for help with Java classes and objects.</p>
    `);
});

// CATEGORIES PAGE
app.get('/categories', (req, res) => {
    res.send(`
        <h1>Categories</h1>

        <ul>
            <li>Programming</li>
            <li>Databases</li>
            <li>Networking</li>
            <li>Cyber Security</li>
            <li>Web Development</li>
        </ul>
    `);
});

// PROFILE PAGE
app.get('/profile', (req, res) => {
    res.send(`
        <h1>User Profile</h1>

        <p><strong>Name:</strong> Daniel</p>
        <p><strong>Course:</strong> Cyber Security</p>
        <p><strong>Subjects:</strong> Java, Networking, Web Development</p>
        <p><strong>Availability:</strong> Monday, Wednesday, Friday</p>
        <p><strong>Rating:</strong> 4.5 / 5</p>
    `);
});

// MESSAGES PAGE
app.get('/messages', (req, res) => {
    res.send(`
        <h1>Messages</h1>

        <p>Sarah: Hi, I can help you with Databases.</p>
        <p>John: Are you free to study Node.js tomorrow?</p>
    `);
});

// LOGIN PAGE
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>

        <form>
            <label>Email:</label><br>
            <input type="email"><br><br>

            <label>Password:</label><br>
            <input type="password"><br><br>

            <button>Login</button>
        </form>
    `);
});

// REGISTER PAGE
app.get('/register', (req, res) => {
    res.send(`
        <h1>Register</h1>

        <form>
            <label>Name:</label><br>
            <input type="text"><br><br>

            <label>Email:</label><br>
            <input type="email"><br><br>

            <label>Course:</label><br>
            <input type="text"><br><br>

            <label>Password:</label><br>
            <input type="password"><br><br>

            <button>Register</button>
        </form>
    `);
});

// RATINGS PAGE
app.get('/ratings', (req, res) => {
    res.send(`
        <h1>User Ratings</h1>

        <ul>
            <li>Daniel - 4.5/5</li>
            <li>Sarah - 5/5</li>
            <li>John - 4/5</li>
            <li>Aisha - 4.8/5</li>
        </ul>
    `);
});

// RECOMMENDATIONS PAGE
app.get('/recommendations', (req, res) => {
    res.send(`
        <h1>Study Recommendations</h1>

        <ul>
            <li>Java Programming Study Group</li>
            <li>Database Revision Sessions</li>
            <li>Networking Fundamentals Group</li>
            <li>Cyber Security Practice Labs</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});