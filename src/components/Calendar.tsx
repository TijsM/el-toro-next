import { CalendarItem } from "./calendar/CalendarItem";

export const Calendar = () => {
  return (
    <section id="calendar">
      <h2 className="textGreen">Kalender</h2>
      <h3>Zondag 4 september</h3>
      <article>
        <h3>Kinderkoers</h3>
        <div className="details">
          <CalendarItem
            time="14u00"
            title="Kinderen t.e.m. 5 jaar"
            description="Rechte lijn van 500m"
          />
          <CalendarItem
            time="14u15"
            title="6 - 7 jaar"
            description="1 ronde, 800m"
          />
          <CalendarItem
            time="14u30"
            title="8 - 9 jaar"
            description="2 rondes, 1600m"
          />
          <CalendarItem
            time="14u45"
            title="10 - 11 jaar"
            description="2 rondes, 1600m"
          />

          <a data-scroll href="#inschrijvingKoers">
            Inschrijven
          </a>
        </div>
      </article>

      <article>
        <h3>Retrokoers</h3>
        <div className="details">
          <CalendarItem
            time="vanaf 13u00"
            title="Inschrijvingen, startblad tekenen, startnummer ontvangen (5 euro)"
          />
          <CalendarItem time="15u30" title="Verkenningsronde en start" />
          <CalendarItem time="17u00" title="Podiumceremonie" />

          <a data-scroll href="#inschrijvingKoers">
            Inschrijven
          </a>
        </div>
      </article>
    </section>
  );
};
