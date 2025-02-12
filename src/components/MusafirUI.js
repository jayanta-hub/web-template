import React from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";

const MusafirFlightView = ({flights}) => (
  <Box p={2}>
    {/* Header Tabs */}
    <Box display="flex" alignItems="center" mb={2}>
      <Typography fontWeight="bold" sx={{ borderBottom: "3px solid orange", pb: 1, mr: 2 }}>
        Cheapest
      </Typography>
      <Typography color="gray">Non stop</Typography>
    </Box>

    {/* Flight Cards */}
    {flights.map((flight) => (
      <Paper key={flight.id} sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 3 }}>
        <Grid container alignItems="center" spacing={2}>
          {/* Airline & Details */}
          <Grid item xs={3}>
            <Box display="flex" alignItems="center">
              <img src={flight.logo} alt={flight.airline} width={40} height={40} />
              <Box ml={1}>
                <Typography fontWeight="bold">{flight.airline}</Typography>
                <Typography variant="body2" color="gray">
                  {flight.flightNumber}
                </Typography>
                <Typography variant="body2" color="gray">
                  {flight.class}
                </Typography>
              </Box>
            </Box>
            <Typography color="primary" sx={{ cursor: "pointer" }}>Flight Details</Typography>
          </Grid>
          {/* Departure */}
          <Grid item xs={2}>
            <Typography fontWeight="bold">{flight.departure}</Typography>
            <Typography variant="caption" color="gray">{flight.departureDate}</Typography>
            <Typography variant="body2">{flight.departureAirport}</Typography>
          </Grid>
          {/* Flight Duration & Stops */}
          <Grid item xs={3} textAlign="center">
            <Typography variant="body2" color="gray">{flight.duration}</Typography>
            <Typography variant="body2" color="gray">{flight.stops}</Typography>
          </Grid>
          {/* Arrival */}
          <Grid item xs={2}>
            <Typography fontWeight="bold">{flight.arrival}</Typography>
            <Typography variant="caption" color="gray">{flight.arrivalDate}</Typography>
            <Typography variant="body2">{flight.arrivalAirport}</Typography>
          </Grid>
          {/* Price & Booking */}
          <Grid item xs={2} textAlign="right">
            <Typography fontWeight="bold">{flight.price}</Typography>
            <Typography variant="caption" color="gray">{flight.refundable}</Typography> &nbsp;
            <Button variant="contained" sx={{ mt: 1, backgroundColor: "#007BFF", color: "white" }}>Book</Button>
          </Grid>
        </Grid>
      </Paper>
    ))}
  </Box>
);

export default MusafirFlightView;