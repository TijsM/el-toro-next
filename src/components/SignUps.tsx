export const SignUps = () => {
  return (
    <section id="inschrijvingen">
      <h2 className="textYellow">Inschrijven</h2>
      <div className="inschijvingInfo">
        <p>
          Inschrijvingen volwassenen retrokoers: 10 euro <br />
          Inschrijvingen kinderen retrokoers: 3 euro <br />
        </p>
        <p>
          Te betalen via overschrijving via
          <span>BE13 8913 7410 2839</span> met mededeling &quot;Retro -
          Naam&quot;
        </p>
        <p>
          Omwille van verzekering dient iedere deelnemer zijn paspoort mee te
          brengen
        </p>
      </div>
      <div id="inschrijvingContainer">
        <article id="inschrijvingKoers">
          <div className="inschrijvingsContaier">
            <h3 className="textGreen">Retrokoers</h3>

            <form method="post" action="#" name="signUpForm" id="signUpForm">
              <label>Volledige naam</label>
              <input
                id="retroName"
                name="kidName"
                type="text"
                placeholder="Eddy Merckx"
              />
              <label>E-mail</label>
              <input
                id="retroEmail"
                name="kidEmail"
                type="text"
                placeholder="de.kanibaal@gmail.com"
              />
              <label>Geboortedatum</label>
              <div className="dateInput">
                <input id="retroDay" type="number" placeholder="17" />
                <input id="retroMonth" type="number" placeholder="06" />
                <input id="retroYear" type="number" placeholder="1945" />
              </div>
              <label>Dikkelvennenaar</label>
              <div>
                <input
                  id="retroIsLocal"
                  className="radio"
                  type="radio"
                  name="local"
                />
                ja
                <input
                  id="retroIsNoLocal"
                  className="radio"
                  type="radio"
                  name="local"
                  checked
                />
                nee
              </div>
              <label>Kinderkoers</label>
              <div>
                <input
                  id="isKid"
                  className="radio"
                  type="radio"
                  name="kidCheck"
                />
                ja
                <input
                  id="isAdult"
                  className="radio"
                  type="radio"
                  name="kidCheck"
                  checked
                />
                nee
              </div>
              <button id="registerRetroButton">schrijf in!</button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};
