import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Retro Grote Prijs El Toro</h1>
          <h2>4 September 2022</h2>
          <div>
            Een koers waar winnen ondergeschikt is aan vertier, waar gestart
            wordt in retro outfit en waar we van klikpedalen en dikke zanten
            niet moeten weten.
          </div>
          <a data-scroll href="#inschrijvingen">
            Inschrijven
          </a>
        </header>
        <section id="calendar">
          <h2 class="textGreen">Kalender</h2>
          <h3>Zondag 4 september</h3>
          <article>
            <h3>Kinderkoers</h3>
            <div class="details">
              <div class="calendarItem">
                <span>14u00</span>
                <div>
                  <div>Kinderen t.e.m. 5 jaar</div>
                  <div class="distance">Rechte lijn van 500m</div>
                </div>
              </div>
              <div class="calendarItem">
                <span>14u15</span>
                <div>
                  <div>6 - 7 jaar</div>
                  <div class="distance">1 ronde, 800m</div>
                </div>
              </div>
              <div class="calendarItem">
                <span>14u30</span>
                <div>
                  <div>8 - 9 jaar</div>
                  <div class="distance">2 rondes, 1600m</div>
                </div>
              </div>
              <div class="calendarItem">
                <span>14u45</span>
                <div>
                  <div>10 - 11 jaar</div>
                  <div class="distance">2 rondes, 1600m</div>
                </div>
              </div>
              <a data-scroll href="#inschrijvingKoers">
                Inschrijven
              </a>
            </div>
          </article>

          <article>
            <h3>Retrokoers</h3>
            <div class="details">
              <div class="calendarItem">
                <span>vanaf 13u00</span>
                <span>
                  Inschrijvingen, startblad tekenen, startnummer ontvangen (5
                  euro)
                </span>
              </div>
              <div class="calendarItem">
                <span>15u30</span>
                <span>Verkenningsronde en start</span>
              </div>
              <div class="calendarItem">
                <span>17u00</span>
                <span>Podiumceremonie</span>
              </div>
              <a data-scroll href="#inschrijvingKoers">
                Inschrijven
              </a>
            </div>
          </article>
        </section>
        <section id="parcours">
          <div class="left">
            <h2 id="parcoursHead" class="textYellow">
              Parcours
            </h2>

            <div class="retroBike1">
              <img src="./assets/retro_bike.png" alt="retro bike" />
            </div>
          </div>
          <div class="right">
            <img
              id="plannetje"
              class="parcoursImage"
              src="./assets/parcours.jpg"
              alt="parcours race"
            />
          </div>
        </section>
        <section id="inschrijvingen">
          <h2 class="textYellow">Inschrijven</h2>
          <div class="inschijvingInfo">
            <p>
              Inschrijvingen volwassenen retrokoers: 10 euro <br />
              Inschrijvingen kinderen retrokoers: 3 euro <br />
            </p>
            <p>
              Te betalen via overschrijving via
              <span>BE13 8913 7410 2839</span> met mededeling "Retro - Naam"
            </p>
            <p>
              Omwille van verzekering dient iedere deelnemer zijn paspoort mee
              te brengen
            </p>
          </div>
          <div id="inschrijvingContainer">
            <article id="inschrijvingKoers">
              <div class="inschrijvingsContaier">
                <h3 class="textGreen">Retrokoers</h3>

                <form
                  method="post"
                  action="#"
                  name="signUpForm"
                  id="signUpForm"
                >
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
                  <div class="dateInput">
                    <input id="retroDay" type="number" placeholder="17" />
                    <input id="retroMonth" type="number" placeholder="06" />
                    <input id="retroYear" type="number" placeholder="1945" />
                  </div>
                  <label>Dikkelvennenaar</label>
                  <div>
                    <input
                      id="retroIsLocal"
                      class="radio"
                      type="radio"
                      name="local"
                    />
                    ja
                    <input
                      id="retroIsNoLocal"
                      class="radio"
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
                      class="radio"
                      type="radio"
                      name="kidCheck"
                    />
                    ja
                    <input
                      id="isAdult"
                      class="radio"
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
        <section id="praktisch">
          <h2 class="textYellow">Praktisch</h2>
          <div class="praktischContent">
            <article>
              <h3 class="textYellow">Bereikbaarheid en parking</h3>
              <div>
                Er zijn parkeermogelijkheden op het parkeerterrein van Hubo en
                van KSC Dikkelvenne. Bekijk zeker ons
                <a data-scroll class="linkPlan" href="#plannetje">
                  plannetje
                </a>
                op deze website.
              </div>
            </article>
            <article>
              <h3 class="textYellow">Kinderkoers</h3>
              <div>
                Ook de kinderen worden niet vergeten op de Groote Prijs El Toro.
                De kinder-’koers’ zal hun deel zijn. Ookal zijn hun fietsjes nog
                niet noodzakelijk van pedalen voorzien, in deze rit zullen ze
                zich ware Flandriens wanen. Elk kind kan vrij kiezen met welke
                fiets hij/zij aan de start verschijnt, zolang hij maar veilig en
                niet gemotoriseerd is. Elk kind mag begeleid worden door één
                volwassene. Voor elke deelnemer is er een aandenken. Inschrijven
                doe je via deze website of ter plaatse vanaf 13u.
              </div>
            </article>
            <article>
              <h3 class="textYellow">Reglement</h3>
              <div>
                <ol>
                  <li>
                    Uw vehikel beschikt over:
                    <ul>
                      <li>Versnellingen aan de buis</li>
                      <li>Pedalen met haken, géén klikpedalen</li>
                      <li>Goed functionerende remmen</li>
                    </ul>
                  </li>

                  <li>
                    Renners van het mannelijke type zijn voorzien van haar op de
                    benen.
                  </li>
                  <li>
                    Renners van het vrouwelijke type zijn vrijgesteld van regel
                    2.
                  </li>
                  <li>
                    We verwachten iedereen op tijd voor aanmelding en
                    inschrijving (13u).
                  </li>
                  <li>Valhelm verplicht.</li>
                  <li>
                    Renners die roekeloos en/of onsportief gedrag vertonen
                    worden uit koers genomen. Toon respect voor elke deelnemer.
                  </li>
                  <li>Geen bier voor of tijdens de wedstrijd.</li>
                  <li>
                    Koersgeschillen dienen aan de koerscommissaris voorgelegd te
                    worden.
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </section>
      </main>

      <div id="popupMessage">message</div>
      {/* 
      <script
        type="module"
        src="https://unpkg.com/rough-notation?module"
      ></script>

      <script src="./airtable.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
      <script>var scroll = new SmoothScroll('a[href*="#"]');</script>
      <script type="module" src="./app.js"></script> */}
    </>
  );
}
