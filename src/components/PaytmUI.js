import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";

const PaytmFlightView = ({flights}) => {
  return (
    <Box p={2}>
      {/* Date Selection Tabs */}
      <Tabs value={0} variant="scrollable" scrollButtons="auto">
        {["Feb 12, Wed", "Feb 13, Thu", "Feb 14, Fri", "Feb 15, Sat", "Feb 16, Sun"].map((date, index) => (
          <Tab key={index} label={date} sx={{ minWidth: 120 }} />
        ))}
      </Tabs>

      <Typography variant="h6" fontWeight="bold" mt={2}>
        Cheapest fares starting from <span style={{ color: "#007bff" }}>₹6,352</span> per adult
      </Typography>

      {/* Flight Cards */}
      {flights?.map((flight) => (
        <Paper key={flight.id} sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 3 }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            {/* Airline & Time */}
            <img src={flight.logo} alt={flight.airline} width={40} height={40} />
            <Box>
              <Typography fontWeight="bold">{flight.airline}</Typography>
              <Typography variant="caption">{flight.departureCity}</Typography>
              <Typography fontWeight="bold" fontSize="1.2rem">{flight.departure}</Typography>
            </Box>

            {/* Duration & Stops */}
            <Box textAlign="center">
              <Typography fontWeight="bold">- {flight.duration}{flight?.stops? " . 1 stops" : ""} - </Typography>
              <Typography variant="caption">{flight.stops}</Typography>
            </Box>

            {/* Arrival Time & City */}
            <Box>
              <Typography fontWeight="bold" fontSize="1.2rem">{flight.arrival}</Typography>
              <Typography variant="caption">{flight.arrivalCity}</Typography>
            </Box>

            {/* Price & View Fare */}
            <Box textAlign="center">
              <Typography fontWeight="bold" fontSize="1.2rem" color="primary">
                {flight.price}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                View Fare
              </Button>
            </Box>
          </Box>
          <Divider sx={{ my: 1 }} />
          {/* Bottom Options */}
          <Box display="flex" justifyContent="space-between">
            <Button size="small">Flight Details</Button>
            {flight.includesMeal && <Chip label="Includes Free Meal" color="success" size="small" />}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default PaytmFlightView;