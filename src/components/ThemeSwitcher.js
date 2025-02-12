import { useThemeContext } from "../ThemeContext";
import { MenuItem, Select, Box } from "@mui/material";

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useThemeContext();

  return (
    <Box sx={{ mb: 3 }}>
      <Select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
        <MenuItem value="makeMyTrip">MakeMyTrip</MenuItem>
        <MenuItem value="goibibo">Goibibo</MenuItem>
        <MenuItem value="paytm">Paytm</MenuItem>
        <MenuItem value="musafir">Musafir</MenuItem>
        <MenuItem value="yatra">Yatra</MenuItem>
      </Select>
    </Box>
  );
};

export default ThemeSwitcher;
