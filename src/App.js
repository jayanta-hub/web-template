import { useThemeContext, ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MakeMyTripView from "./components/MakeMyTripUI";
import GoibiboView from "./components/GoibiboUI";
import PaytmView from "./components/PaytmUI";
import MusafirView from "./components/MusafirUI";
import YatraView from "./components/YatraUI";
import flights from "./components/FlightList";

/**
 * The root component of the app, which renders the theme switcher and the appropriate
 * theme view component based on the current theme.
 *
 * @returns {React.ReactElement} A React element containing the theme switcher and the
 * themed view component.
 */

const App = () => {
  const { currentTheme } = useThemeContext();

  /**
   * Renders the appropriate theme view component based on the current theme.
   *
   * @returns {React.ReactElement|null} The themed view component corresponding 
   * to the current theme, or null if the theme is not recognized.
   */

  const renderComponentForTheme = () => {
    switch (currentTheme) {
      case "makeMyTrip":
        return <MakeMyTripView flights={flights} />;
      case "goibibo":
        return <GoibiboView flights={flights} />;
      case "paytm":
        return <PaytmView flights={flights} />;
      case "musafir":
        return <MusafirView flights={flights} />;
      case "yatra":
        return <YatraView flights={flights} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginTop: "10px"
      }}
      >
        <ThemeSwitcher />
      </div>
      {renderComponentForTheme()}
    </>
  );
};

/**
 * The root component of the application.
 *
 * It wraps the App component in a ThemeProvider.
 *
 * @returns {React.ReactElement} The root component of the application.
 */
const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
