import React from "react";
import { Card, Button } from "@mui/material";
import { Box, Typography, Divider, Grid } from "@mui/material";

const FlightCard = ({flights}) => {
  return (
    <Box>
    {
      flights?.map((flight) => (
      <Card key={flight.id} sx={{ maxWidth: 900, margin: "auto", padding: 2, boxShadow: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {flight.airline} {flight.flightNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {flight.departureCity} → {flight.arrivalCity}
            </Typography>
          </Box>
          <Button variant="contained" color="error">
            Book Now
          </Button>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" color="primary">
                ₹6,532
              </Typography>
              <Typography variant="body2">Value</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                Book
              </Button>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" color="primary">
                ₹7,057
              </Typography>
              <Typography variant="body2">Classic</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                Book
              </Button>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" color="primary">
                ₹8,107
              </Typography>
              <Typography variant="body2">Flex</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                Book
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Card>
      ))
    }
    </Box>
  );
};

export default FlightCard;
