# Fun-Land Website ReadMe



[View the live project here.](https://alexjakeman.github.io/Project-2/public/index.html)

<details><summary>Expand Desktop Homepage</summary>

![Image of the homepage from a Desktop user's perspective](/public/images/readme-images/readme-desktop-image.png)

</details>

<details><summary>Expand Mobile Homepage</summary>

![Image of the homepage from a Mobile user's perspective](/public/images/readme-images/readme-mobile-image.png)

</details>

## Description

Welcome to Fun-Land, the home of the "MATCH!" card game. "MATCH!" is a memory-enhancing card game designed for young adults to have fun while improving their memory skills. This ReadMe provides an overview of the website's design, user experience, technologies used, and testing methods.

## Design

### Website Color Scheme

- Main Background: #EBEDDF (Body / Light Text)
- Dark Accent: #333A2F (Navbar / Footer / Dark Elements)
- Light Accent: #edc8c8 (Titles / Buttons / Light Elements)
- Standout Items: #fbb040 (Bold / Highlighted Elements)

### Font

We use the "Geo" retro-style font to add a touch of nostalgia and playfulness to the website.

## UX

### Project Goal

Fun-Land is a website that hosts the "MATCH!" memory card game as its primary attraction. The website is designed to provide an engaging and user-friendly platform for players to enjoy the game.

### Player Goal

The primary objective is to have fun playing the "MATCH!" card game. Users visit Fun-Land to engage in an entertaining gaming experience that challenges their memory skills. The game offers a mentally stimulating activity where players can test their memory, concentration, and pattern recognition abilities.

### User Stories

Here are some user stories to illustrate the user experience:

1. As a player, I want clear instructions on how to play "MATCH!" so I can quickly get started.

<details><summary>Expand Images</summary>

![Image of the How To Play button on the Match The Cards page](/public/images/readme-images/user-story-clear-instructions-1.png)

![Image of the Modal popout for instructions on how to play](/public/images/readme-images/user-story-clear-instructions-2.png)

</details>

2. As a user, I expect an intuitive and responsive interface to make the game enjoyable and accessible.

<details><summary>Expand Images</summary>

![Image of the homepage from a Desktop user's perspective](/public/images/readme-images/readme-desktop-image.png)

![Image of the homepage from a Mobile user's perspective](/public/images/readme-images/readme-mobile-image.png)

</details>

3. As a player, I want to track my progress and see my score to motivate myself to improve.

<details><summary>Expand Images</summary>

![Image of the negative pair feedback](/public/images/memory-instructions/step-two-b.png)

![Image of the positive pair feedback](/public/images/memory-instructions/step-two-d.png)

</details>

4. As a user, I would appreciate a visually pleasing design to make the gaming experience more enjoyable.

<details><summary>Expand Image</summary>

![Image of the negative pair feedback](/public/images/readme-images/user-story-visuals.png)

</details>

5. As a player, I want the ability to restart the game or go back to the homepage easily for a seamless gaming experience.

<details><summary>Expand Image</summary>

![Image of the negative pair feedback](/public/images/readme-images/user-story-restart.png)

</details>

## Technologies Used

Fun-Land uses the following technologies:

- JavaScript: [Learn more about JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- HTML: [Learn more about HTML](https://en.wikipedia.org/wiki/HTML)
- CSS: [Learn more about CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

## Frameworks, Libraries & Programs Used

- Google Fonts https://fonts.google.com/specimen/Geo
Google fonts were used to import the 'OSWALD' font into the style.css file which is used on all pages throughout the project.

- Font Awesome (https://fontawesome.com/):
Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

- GitHub (https://github.com/):
GitHub is used to store the projects code after being pushed from Git.

## Testing

### Validation/Code Linter

1. Validate Javascript (https://validatejavascript.com)
- Validated my JS code using the link above

-- Memory-card-game.js
![Image of the Memory-card-game js validation](/public/images/readme-images/memory-card-game-js-validation.png)

-- Script.js
![Image of the script js validation](/public/images/readme-images/script-js-validation.png)

2. W3C (https://jigsaw.w3.org/css-validator/#validate_by_input)
- Checked all HTML and CSS manually using

3. HTML (https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator)
- There are no clear HTML errors within the project. Checked using W3C VS Code extension (https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator)

-- About-us.html
![Image of the about-us html validation](/public/images/readme-images/about-us-validation-html.png)

-- Alex-says.html
![Image of the alex says html validation](/public/images/readme-images/alex-says-html-validation.png)

-- Index.html
![Image of the index html validation](/public/images/readme-images/index-html-validation.png)

-- Memory-card-game.html
![Image of the memory card game html validation](/public/images/readme-images/memory-card-game-html-validation.png)

4. CSS (https://marketplace.visualstudio.com/items?itemName=CelianRiboulet.webvalidator)
- There are no clear CSS errors within the project. Checked using W3C VS Code extension.

![Image of the style css validation](/public/images/readme-images/css-file-validation.png)

### Automated Testing
Automated testing involves using tools and scripts to test the application automatically. This can include unit tests, integration tests, and end-to-end tests. Automated testing is beneficial for catching regressions and ensuring that the application functions as expected after code changes.

### Manual Testing
Manual testing is performed by human testers who interact with the application to identify bugs, usability issues, and other problems. Manual testing is valuable for evaluating the user experience, design, and overall functionality.

#### Manual Test Case 1 (Functionality of the "Match" game)

<details><summary>Expand Test Case 1</summary>

Test Objective: To verify that the "MATCH!" game correctly identifies and allows players to match card pairs.

Preconditions:

1. The "MATCH!" game is loaded and accessible on the Fun-Land website.
2. The player is on the game's main screen with all cards face-down.

Test Steps:

1. Click the "Start Game" button to begin the game.
2. Observe that all cards are initially face-down.

Test Step 1: Match Card Pairs

1. Click on the first card to reveal it.
2. Click on a second card to reveal it.
3. Verify that the cards remain face-up for a brief moment to allow the player to see their contents.
4. If the two cards match (i.e., they have the same symbol or image), they should remain face-up.
5. If the two cards do not match, they should flip back face-down after a short delay.
6. Repeat steps 3-7 until you successfully match six pairs of cards.

Expected Results:

- After successfully matching six pairs, a message should indicate that the game is completed.
- All matched card pairs should remain face-up.
- The game should not allow the player to click on more than two cards at a time.
- If a player clicks on the same card twice, it should not count as a match.
- If the player matches six pairs, the game should provide feedback on their success and prompt them to play again.

Test Step 2: Restart the Game

1. Click on the "Restart" or "New Game" button (whichever is available) to restart the game.

Expected Results:

- The game should reset, shuffling the card positions and flipping them face-down.
- The player's progress (e.g., the number of matched pairs) should be reset to zero.

Postconditions:

1. Ensure that the game can be played again and that the above steps can be repeated for additional rounds.

Test Results:

- Tests Passed
- Expected results for both steps were successful. 

![Image of the PASS result for Test Step 1](/public/images/readme-images/match-pairs-test-results.png)

![Image of the PASS result for Test Step 2](/public/images/readme-images/restart-test-result.png)

</details>

#### Manual Test Case 2 (Responsiveness of the Web Application)

<details><summary>Expand Test Case 2</summary>

Test Objective: To verify that the Fun-Land web application is user-friendly, intuitive, and responsive across various devices and browsers.

Test Environment: The test will be conducted on multiple devices and browsers, including:

Desktop (Windows and macOS):
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

Mobile (iOS and Android):
- Safari (iOS)
- Google Chrome (Android)

Test Steps:

1. Usability Testing:

a. Open the Fun-Land website on a desktop browser.
b. Verify that the homepage loads correctly.
c. Check if the navigation menu (navbar) is visible and functional.
d. Verify that there is a clear and concise set of instructions or a tutorial for playing the game.
e. Play the game and observe if the card-matching logic is intuitive and provides feedback.
f. Verify that there is a way to restart the game.
g. Check if the visible progress indicator to track the number of matched pairs is correct.
h. Ensure that the game provides clear feedback for winning.
i. Test the responsiveness of the application by resizing the browser window to different dimensions and checking if the layout adjusts accordingly.

2. Responsiveness Testing:

a. Access the Fun-Land website on a mobile device (iOS, Safari).
b. Verify that the website is responsive and adapts to the smaller screen size.
c. Check if all elements, including text and buttons, are readable and usable without horizontal scrolling.
d. Attempt to play the game on the mobile device and ensure that touch interactions (tapping) work as expected.
f. Access the website on a different mobile device (Android, Google Chrome) and repeat the testing process.

Expected Results:

- The Fun-Land web application is user-friendly, with clear instructions for playing the game.
- The game is intuitive, providing feedback on card matches, progress, and game outcomes.
- The website is responsive and adjusts to different screen sizes and orientations on both mobile and desktop devices.
- The application functions correctly and consistently across multiple browsers.

Test Results:

- Tests Passed
- Expected results for both steps were successful.

![Image of the PASS result for Usability Testing](/public/images/readme-images/usability-test-results.png)

![Image of the PASS result for Responsiveness Testing](/public/images/readme-images/responsiveness-test-results.png)

</details>

#### Examples of Testing for "MATCH!"

1. **Automated Testing**:
   - Writing unit tests for the card-flipping logic to ensure cards behave correctly.
   - Implementing end-to-end tests to simulate player interactions and verify game completion conditions.

2. **Manual Testing**:
   - Manually testing the user interface to ensure cards, feedback items (Score, pairs, etc.) and game other elements function as expected.
   - Testing the game on different browsers and devices to identify cross-browser compatibility issues.
   - Testing the game with a focus on user experience, such as ensuring that instructions are clear and that feedback is provided for correct and incorrect moves.
   - Identifying edge cases, such as what happens when a player completes the game multiple times.

### "MATCH!" - Testing The Game

To ensure the functionality and user-friendliness of "MATCH!", we conducted various tests, including:

1. **Unit Testing**: Testing individual functions and components of the game to ensure they work as expected.

2. **User Interface (UI) Testing**: Ensuring that the user interface is responsive, visually appealing, and easy to use across different devices and browsers.

3. **Performance Testing**: Checking the game's performance, including load times, to ensure a smooth and enjoyable gaming experience.

4. **Cross-Browser Testing**: Verifying that "MATCH!" works well on various web browsers, such as Chrome, Firefox, and Safari.

5. **User Feedback**: Collecting feedback from real users to identify any issues or areas for improvement in the game's design, gameplay, and overall experience.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Opera and Safari browsers.
- The website was viewed on a variety of devices such as Desktop (OSX & Windows), Laptop (OSX & Windows), Tablet, iOS (iPhone) and Android (Google Pixel).
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Deployment

### GitPages (https://alexjakeman.github.io/Project-2/public/index.html)-
The project was deployed to GitHub Pages using the following steps...
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### LiveServer (localhost:5500)
The project was deployed to LiveServer using the following steps...
1. Install Liveserver extension for Visual Studio Code.
2. Select "Go Live" in the bottom right of VS Code.
3. Observe browser window has opened with a local version of your website.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

## Credits

### Content

- All text-based content was written by the developer.
- Custom code written by developer, influenced by YouTube (Mentioned in external sources article)

### Acknowledgements

- Stackoverflow for JS error troubleshooting.

### Code snippets from external sources

- YouTube - Influenced the creation of the Match The Card game - https://www.youtube.com/watch?v=xWdkt6KSirw
- Popup window for articles/instructions - https://www.cssscript.com/demo/minimal-overlay-modal-pure-css/#