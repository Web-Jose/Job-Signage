# Understanding the Job Baord Signage

## Overview

This document serves as a comprehensive guide for the Job Board Signage project developed for Fresno State Student Housing. It covers the tools, technologies, and methodologies used to create an engaging and informative digital job board for the residents of the student housing. This guide is designed for any developer or team that may take over or contribute to this project in the future.

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Project Information](#project-information)
- [Tools & Technologies](#tools--technologies)
- [Project Description](#project-description)
- [Challenges Overcome](#challenges-overcome)
- [Features](#features)
- [Learning Outcomes](#learning-outcomes)
- [Future Updates](#future-updates)
- [File Structure](#file-structure)
- [Usage](#usage)

## Project Information

**Client:** Fresno State Student Housing

**Duration:** 1 day

**Role:** Sole Developer, Designer, and Maintainer

**Scope:** The job board signage is intended for residents of Fresno State Student Housing to view the current job openings. It is displayed on the digital signage TVs in the housing buildings.

## Tools & Technologies

**Development Tools:** Visual Studio Code, Figma

**Frontend:** HTML, CSS, JavaScript

**Backend:** Pods Framework (REST API)

**Version Control:** Git, GitHub

## Project Description

### Idea:

The idea was to develop a digital job board signage to display current job openings at the student housing. The signage aims to provide real-time information to residents in a visually appealing and user-friendly manner.

### Implementation:

- **Design:**
  - **Figma:** Used for creating a mockup of the job board signage.
- **Frontend:**
  - **HTML:** Used for structuring the job board.
  - **CSS:** Used for styling the job board.
  - **JavaScript:** Used for fetching job data from the Pods REST API and displaying it on the job board.
- **Backend:**
  - **Pods Framework:** Used for creating and managing the job openings data.
  - **REST API:** Used for fetching job data from the Pods database.

## Challenges Overcome

- **Learning the REST API:** This project was my first encounter with the REST API provided by the Pods Framework. I successfully learned how to fetch and display custom post type data in the job board signage.

## Features

- **Real-time Job Data:** The job board signage displays real-time job openings fetched from the Pods database.
- **QR Code Integration:** Residents can scan the QR codes displayed on the job board to access the [Job Opportunities](https://fresnostatestudenthousing.org/job-opportunities/) page and the [HireFresnoState](https://gtscandidate.mbafocus.com/FresnoState/RouteUsers.aspx?ReturnUrl=/FresnoState/Candidates/Authenticated/Dashboard.aspx) website.
- **Responsive Design:** The job board signage is designed to be responsive and compatible with various 16:9 aspect ratio screens.
- **Easy Maintenance:** Designed to be robust, reliable, and easily updatable.

## Learning Outcomes

- Advanced skills in Figma, HTML, CSS, and JavaScript.
- Proficiency in using the Pods Framework REST API.
- Ability to design and implement a user-friendly, visually appealing, and functional digital signage.
- Successful project management and execution within a constrained timeframe.

## Future Updates

- **Aesthetic Improvements:** Considering adding texture or thematic elements (e.g., paw prints) to fill empty spaces and enhance visual appeal.

## File Structure

```bash
Job-Signage/
│
├── index.html
├── README.md
├── CSS/
│   ├── JobBoard.css
│   └── Images/
│       └── Paw-Prints.png
├── JS/
│   └── JobBoard.js
└── Images/
    ├── HireFresnoStateQR.png
    └── HousingQR.png
```

## Usage

### Clone the Repository

```bash
git clone https://github.com/Web-Jose/Job-Signage.git
```

### Navigate to the Project Directory

```bash
cd Job-Signage
```

### Open the `index.html` File in a Browser

```bash
open index.html
```
