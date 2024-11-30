Wrestler Data API
<img width="149" alt="image" src="https://github.com/user-attachments/assets/b81ddd75-9784-4eda-86f3-fd4e093ad452">
This is a simple Express.js API that serves wrestler data, including details such as ring name, real name, rank, number of fights, physical attributes, and images.
Table of Contents

Getting Started

Prerequisites
Installation


Usage

API Endpoints


Deployment
Contributing
License

Getting Started
Prerequisites

Node.js (version 12 or higher)
npm (version 6 or higher)

Installation

Clone the repository:
Copygit clone https://github.com/your-username/wrestler-data-api.git

Navigate to the project directory:
Copycd wrestler-data-api

Install the dependencies:
Copynpm install


Usage
API Endpoints

GET /api/wrestlers: Returns an array of wrestler data.

Example response:
jsonCopy[
  {
    "ringName": "Undertaker",
    "realName": "Mark Calloway",
    "rank": "1",
    "fights": "305",
    "chest": "51",
    "biceps": "21.5",
    "height": "6'10",
    "weight": "328",
    "image": "/Undertaker.jpg"
  },
  {
    "ringName": "The Rock",
    "realName": "Dwayne Johnson",
    "rank": "2",
    "fights": "316",
    "chest": "51.5",
    "biceps": "65",
    "height": "6'5",
    "weight": "275",
    "image": "/rock.webp"
  }
]
Deployment
This project is deployed on Vercel and can be accessed at the following URL:
Copyhttps://wrestler-data-api.vercel.app/api/wrestlers
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
License
This project is licensed under the MIT License.
