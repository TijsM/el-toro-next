export const Calendar = () => {
  return (
    <section id="calendar">
      <h2 className="textGreen">Kalender</h2>
      <h3>Zondag 4 september</h3>
      <article>
        <h3>Kinderkoers</h3>
        <div className="details">
          <div className="calendarItem">
            <span>14u00</span>
            <div>
              <div>Kinderen t.e.m. 5 jaar</div>
              <div className="distance">Rechte lijn van 500m</div>
            </div>
          </div>
          <div className="calendarItem">
            <span>14u15</span>
            <div>
              <div>6 - 7 jaar</div>
              <div className="distance">1 ronde, 800m</div>
            </div>
          </div>
          <div className="calendarItem">
            <span>14u30</span>
            <div>
              <div>8 - 9 jaar</div>
              <div className="distance">2 rondes, 1600m</div>
            </div>
          </div>
          <div className="calendarItem">
            <span>14u45</span>
            <div>
              <div>10 - 11 jaar</div>
              <div className="distance">2 rondes, 1600m</div>
            </div>
          </div>
          <a data-scroll href="#inschrijvingKoers">
            Inschrijven
          </a>
        </div>
      </article>

      <article>
        <h3>Retrokoers</h3>
        <div className="details">
          <div className="calendarItem">
            <span>vanaf 13u00</span>
            <span>
              Inschrijvingen, startblad tekenen, startnummer ontvangen (5 euro)
            </span>
          </div>
          <div className="calendarItem">
            <span>15u30</span>
            <span>Verkenningsronde en start</span>
          </div>
          <div className="calendarItem">
            <span>17u00</span>
            <span>Podiumceremonie</span>
          </div>
          <a data-scroll href="#inschrijvingKoers">
            Inschrijven
          </a>
        </div>
      </article>
    </section>
  );
};
