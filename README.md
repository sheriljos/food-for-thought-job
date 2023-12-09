# Food for Thought

A Node.js TypeScript project for sending insightful quotes to users in the database.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

<pre>
```bash
   git clone https://github.com/your-username/reminder-email-job.git
```
</pre>

2. Install dependencies:

<pre>
```bash
    cd reminder-email-job
    npm install
```

3. Create a .env file in the project root and add the following:

<pre>
```bash
    MONGODB_URI=your-mongodb-uri
```
</pre>

Replace your-mongodb-uri with your actual MongoDB connection URI.

4. Run the application:

<pre>
```bash
    npm start
```
</pre>

## Usage

This project sends quotes to users in the database based on a specified schedule. You can adjust this for new letter or anyother communication based on your usecase

Adjust the schedule and email content as needed in the src/reminderEmailJob.ts file.

## Tech Stack
    Node.js
    TypeScript
    MongoDB
    Nodemailer
    Cron

## Contributing
Contributions are welcome! Feel free to open issues or pull requests.