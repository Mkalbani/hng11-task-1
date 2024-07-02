# My Tech Goals Web App

## Overview
This is a simple single-page website outlining my tech goals for the next two years. The website is built using HTML, CSS, and JavaScript, and it is designed to be visually appealing, mobile-friendly, and responsive. The website includes a carousel that displays my goals in a rotating fashion, with each goal highlighted for easy reading.

## Features
- **Responsive Design**: The website adjusts seamlessly to different screen sizes (desktop, tablet, mobile).
- **Current Time and Day Display**: Shows the current time in UTC and the current day of the week.
- **Goals Carousel**: A carousel that highlights each of my goals, rotating every two seconds.
- **Navigation Bar**: Contains my Slack display name, email, and profile picture.

## Requirements
- Only HTML, CSS, and JavaScript are used.
- All images have natural dimensions.
- Required elements have specified `data-testid` attributes for easy identification and testing.


## Usage
### Display My Tech Goals
The main section of the website includes a carousel displaying my tech goals. Each goal is shown in a card-like div that moves every two seconds.

### Navigation Bar
The navigation bar includes:
- **Slack Display Name**: Displayed in the center (`data-testid="slackDisplayName"`).
- **Slack Email**: Displayed as an icon on the right (`data-testid="slackEmail"`).
- **Slack Profile Picture**: Displayed as an icon on the left (`data-testid="slackProfilePicture"`).

### Current Time and Day
- **Current Time in UTC**: Displayed in a weather-like div in the sidebar (`data-testid="currentTimeUTC"`).
- **Current Day of the Week**: Displayed in the same style as the current time (`data-testid="currentDay"`).

### Links
The footer contains links to external websites:
- **HNG Learn** (`data-testid="hngLink"`)
- **Keyword Dog** (`data-testid="keywordLink"`)
- **Scrape Any Web** (`data-testid="scrapeanywebLink"`)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.comMkothm/hng11-task-1.git
