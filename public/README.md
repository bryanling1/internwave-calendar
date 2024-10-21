# Calendar Extension for Internwave Desktop

![Demo](G:/uni/uwwave/code/extensions/extensions/internwave-calendar/demo.gif)

## Overview
The **Calendar** extension for Internwave's desktop app enhances your job search experience by allowing you to add notes with start and end dates to job listings. This feature helps you keep track of important dates and deadlines.

## Features
- **Add Notes**: Attach detailed notes to any job listing.
- **Keep track of dates**: Specify important dates for each note to manage deadlines. 
- **Rich Text Editor**: Format your notes with checklists, bullet points, and code blocks
- **Sort** Sort your notes per job listing by start or end date to prioritize your tasks.

## Development

### Pre-requisites
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
  
### Setup
1. Clone the repository
2. Run `yarn install` to install dependencies
3. Run `yarn build` to build the extension
4. In the Internwave Desktop app, click on Extensions on the sidebar
5. Click on the `+` icon and locate the `manifest.json` file in the `build` folder

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Roadmap

- [ ] Add Calendar view
- [ ] Add sorting on master job list (currently not supported by Internwave's API)
