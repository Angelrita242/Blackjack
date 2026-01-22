# Blackjack Card Game; A Web-Based Interactive Casino Game

## **Title**
**Blackjack Card Game** – A Web-Based Interactive Casino Game

## **Intro**
A fully functional, browser-based Blackjack game built with vanilla HTML, CSS, and JavaScript. This project simulates the classic casino card game where players aim to get a hand value as close to 21 as possible without going over. The game features intuitive controls, real-time card tracking, and dynamic game state management, providing an engaging single-player Blackjack experience.

## **Tools and Tech**
- **HTML5** – Game structure and semantic markup
- **CSS3** – Styling and visual presentation
- **Vanilla JavaScript (ES6+)** – Game logic and interactivity
- **DOM Manipulation** – Real-time UI updates
- **Git** (assumed) – Version control
- **VS Code / Any Text Editor** – Development environment
- **Modern Web Browser** – Runtime environment (Chrome, Firefox, Safari, etc.)

## **Features**
1. **Game Initialization** – Start a new round with two random cards
2. **Card Generation** – Random card values (1-10) with proper face card handling
3. **Real-time Sum Calculation** – Automatic total calculation of card values
4. **Game State Management** – Tracks player status (alive/bust/blackjack)
5. **Dynamic Messaging** – Contextual prompts and game outcome messages
6. **Card Drawing System** – Draw additional cards while respecting game rules
7. **Visual Feedback** – Clear display of cards, sum, and game messages
8. **Responsive Styling** – Casino-themed green and gold interface
9. **Game Rule Enforcement** – Prevents illegal moves (drawing after bust/blackjack)

## **Processes**
1. **Initialization** – Player clicks "START GAME" triggering `startGame()`
2. **Card Generation** – Two random cards generated via `getRandomCard()`
   - Numbers 2-10 retain face value
   - Face cards (J, Q, K) count as 10
   - Ace handling implemented (currently returns 1, but logic exists for 11)
3. **Rendering** – `renderGame()` updates DOM elements:
   - Displays current cards
   - Calculates and shows sum
   - Updates game message based on sum value
4. **Game Logic Flow**:
   - **Sum < 21**: Player can draw new cards
   - **Sum = 21**: Blackjack! Player wins round
   - **Sum > 21**: Player busts, round ends
5. **Card Drawing** – `newCard()` allows drawing additional cards only when:
   - Player is alive (`isAlive === true`)
   - Player doesn't have blackjack (`hasBlackValue === false`)
6. **State Management** – Boolean flags control game flow and prevent invalid actions

## **Running the Project**
1. **Local Setup**:
   ```bash
   # Clone or download project files
   # Ensure these three files are in the same directory:
   # - blackjack.html (or index.html)
   # - blackj.css
   # - blackj.js
   ```

2. **Open Game**:
   - Double-click `blackjack.html` OR
   - Open HTML file in any modern web browser

3. **Gameplay Instructions**:
   - Click **"START GAME"** to begin
   - View your cards and sum
   - Click **"NEW CARD"** to draw additional cards
   - Try to reach 21 without going over
   - Game messages guide your next move

4. **Restarting**: Refresh browser page to reset completely

## **Project Preview**
The game presents a classic casino-themed interface:
- **Color Scheme**: Dark green background with goldenrod accents
- **Typography**: Large, clear text using Trebuchet MS font
- **Layout**: Centered, responsive design with intuitive button placement
- **Game Elements**:
  - Title: "BLACKJACK" in goldenrod
  - Game status message area
  - Cards display with current hand
  - Running sum calculation
  - Two primary buttons: START GAME and NEW CARD
  - Player information section (currently placeholder)

## **Code Structure Highlights**
- **Modular Functions**: Each game action is handled by separate, reusable functions
- **Global State Variables**: `cards`, `sum`, `isAlive`, `hasBlackValue` manage game progress
- **DOM References**: Cached element references for efficient updates
- **Conditional Logic**: Comprehensive rules enforcement throughout game flow
- **Randomization**: Proper card probability distribution (1-14 range for all card types)



---

**The game is fully functional and ready to play!** The clean separation of concerns (HTML structure, CSS presentation, JavaScript logic) makes the code maintainable and extendable for future features.
