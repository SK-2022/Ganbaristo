export function createReservationForms() {
  const mainContainer = document.getElementById("content");
  const reservePageButton = document.getElementById("reserve");

  reservePageButton.addEventListener("click", function () {
    const formHTML = ` 
    
    <div class="form-parent-container">
        <form class="form-container" action="/submit-reservation" method="POST">
          <label for="restaurant">Choose a restaurant:</label>
          <select class="form-input" id="restaurant" name="restaurant" required>
            <option value="">*Restaurant</option>
            <option value="A">Serenza Osaka</option>
            <option value="B">Serenza Roppongi</option>
          </select>

          <label for="date">Reservation Date:</label>
          <input
            class="form-input"
            type="date"
            id="date"
            name="date"
            required
          />

          <label for="time">Reservation Time:</label>
          <select class="form-input" id="time" name="time" required>
            <option value="12:00">12:00 PM</option>
            <option value="12:15">12:15 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="12:45">12:45 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:15">1:15 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="13:45">1:45 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="14:15">2:15 PM</option>
            <option value="14:30">2:30 PM</option>
            <option value="14:45">2:45 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="15:15">3:15 PM</option>
            <option value="15:30">3:30 PM</option>
            <option value="15:45">3:45 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="16:15">4:15 PM</option>
            <option value="16:30">4:30 PM</option>
            <option value="16:45">4:45 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:15">5:15 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="17:45">5:45 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:15">6:15 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="18:45">6:45 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:15">7:15 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="19:45">7:45 PM</option>
            <option value="20:00">8:00 PM</option>
          </select>

          <label for="people">Number of People:</label>
          <input
            class="form-input"
            type="number"
            id="people"
            name="people"
            min="1"
            max="20"
            required
          />

          <button class="form-submit-button" type="submit">BOOK TABLE</button>
        </form>
      </div> `; 
    // INSERT FORM CODE ABOVE

    mainContainer.innerHTML = formHTML;
  });
}
