import { Landing } from "../components/Landing";
import { Calendar } from "../components/Calendar";
import { Parcours } from "../components/Parcours";
import { SignUps } from "../components/SignUps";
import { Rules } from "../components/Rules";

export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <Calendar />
        <Parcours />
        <SignUps />
        <Rules />
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
