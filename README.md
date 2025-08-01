# Overview
The goal was to build a lightweight React application that:
- Accepts user input via a form
- Displays entries in a table
- Detects valid JWTs submitted in the input field
- Highlights JWTs with a verified signature using a specific public key

# Tech stack
- Frontend framework: React
- Build tool: Vite
- Authentication: Firebase
- JWT verification: jsrsasign
- Hosting: Vercel
- Version control: Git & GitHub

# Features and behavior
- Google Authentication via Firebase
- Input form to accept any string (including JWTs)
- Table that displays the input text, timestamp, and verification result
- If the input is a JWT:
  - It attempts to verify the signature using ES256 with the provided public key
  - If valid, the row is highlighted in red
  - Invalid JWTs are treated as regular input

# Notes
- Used Vite for the first time: so fast and intuitive!
- Leveraged jsrsasign instead of jose (issues with ES256) or jsonwebtoken
- Gained hands-on experience with Firebase in a React app

# Author
Fred Descloux
GitHub: [@fredescloux](https://github.com/fredescloux)
LinkedIn: [linkedin.com/in/fredericdescloux](https://linkedin.com/in/fredericdescloux)
