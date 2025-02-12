import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Grid,
  Chip,
} from "@mui/material";

let sortingHeader = [
  {
    label: "DEPARTURE",
    description:"earliest @1:30 AM",
  },
  {
    label: "DURATION",
    description:"fastest @2h 30m",
  },
  {
    label: "ARRIVAL",
    description:"today @1:30 AM",
  },
  {
    label:"PRICE",
    description:"cheapest @1000",
  },
  {
    label:"BEST",
    description:"16hrs 5min, 1 stop-3000"
  }
]

const GoibiboFlightView = ({flights}) => (
  <Box p={2}>
    {/* Sort By Header */}
    <Typography fontWeight="bold" color="gray">Sort By</Typography>
    <Paper
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        alignItems: "center",
        p: 2,
        mb: 2,
        borderRadius: 2,
        boxShadow: 1,
        textAlign: "center",
      }}
    > 
      {sortingHeader?.map((item) => (
        <Box key={item.label}>
        <Typography fontWeight="bold" color="gray">
          {item.label}
        </Typography>
        <Typography variant="caption">{item.description}</Typography>
        </Box>
      ))}
    </Paper>

    {/* Flight Cards */}
    {flights?.map((flight) => (
      <Paper
        key={flight.id}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        {/* "Cheapest" Badge */}
        {flight.isCheapest && (
          <Chip
            label="Cheapest"
            color="success"
            sx={{ position: "absolute", top: 10, right: 10 }}
          />
        )}

        {/* Flight Details */}
        <Grid container alignItems="center" spacing={2}>
          {/* Airline Name & Layover Details */}
          <Grid item xs={2}>
          <Box display="flex" alignItems="center">
                <img src={flight.logo} alt={flight.airline} width={40} height={40} />
                <Box ml={1}>
                  <Typography fontWeight="bold">{flight.airline}</Typography>
                  <Typography variant="caption">{flight.flightNumber}</Typography>
                </Box>
              </Box>
            <Typography variant="caption" color="gray">
              {flight.layoverDetails}
            </Typography>
          </Grid>

          {/* Departure */}
          <Grid item xs={2}>
            <Typography fontWeight="bold">{flight.departure}</Typography>
            <Typography variant="caption">{flight.departureCity}</Typography>
          </Grid>

          {/* Duration */}
          <Grid item xs={2} textAlign="center">
            <Typography fontWeight="bold">{flight.duration}</Typography>
            <Typography variant="caption">Layover</Typography>
          </Grid>

          {/* Arrival */}
          <Grid item xs={2}>
            <Typography fontWeight="bold">{flight.arrival}</Typography>
            <Typography variant="caption">{flight.arrivalCity}</Typography>
          </Grid>

          {/* Price & CTA */}
          <Grid item xs={4} textAlign="right">
            <Typography fontWeight="bold" color="green">
              {flight.price}
            </Typography>
            <Typography variant="caption" color="green">
              {flight.discount}
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 1, textTransform: "none" }}
            >
              View Fares
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Bottom Options */}
        <Box display="flex" justifyContent="space-between">
          <Button size="small">Compare +</Button>
          <Button size="small" color="primary">
            Flight Details
          </Button>
        </Box>
      </Paper>
    ))}
  </Box>
);

export default GoibiboFlightView;
