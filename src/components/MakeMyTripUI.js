import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const MakeMyTripView = ({ flights }) => (
  <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Flight</TableCell>
          <TableCell>Departure</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Arrival</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {flights?.map((flight) => (
          <TableRow key={flight.id} sx={{ borderBottom: "1px solid #ddd" }}>
            {/* Flight Details */}
            <TableCell>
              <Box display="flex" alignItems="center">
                <img src={flight.logo} alt={flight.airline} width={40} height={40} />
                <Box ml={1}>
                  <Typography fontWeight="bold">{flight.airline}</Typography>
                  <Typography variant="caption">{flight.flightNumber}</Typography>
                </Box>
              </Box>
            </TableCell>

            {/* Departure */}
            <TableCell>
              <Typography fontWeight="bold">{flight.departure}</Typography>
              <Typography variant="body2">{flight.departureCity}</Typography>
            </TableCell>

            {/* Duration & Stops */}
            <TableCell>
              <Typography>{flight.duration}</Typography>
              <Typography variant="caption" color="primary">
                {flight.stops}
              </Typography>
            </TableCell>

            {/* Arrival */}
            <TableCell>
              <Typography fontWeight="bold">{flight.arrival}</Typography>
              <Typography variant="body2">{flight.arrivalCity}</Typography>
            </TableCell>

            {/* Pricing & CTA */}
            <TableCell>
              <Typography fontWeight="bold" color="green">
                {flight.price}
              </Typography>
              <Button variant="contained" sx={{ mt: 1, textTransform: "none" }}>
                View Prices
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    {/* Discount Section */}
    <Divider />
    <Box p={2} bgcolor="#fff8e1">
      <Typography variant="body2">
        ⚠️ <strong>Change of Terminals</strong> | Get ₹800 discount using **MMTDEALS** OR 10% Instant Discount on SBI Credit Cards EMI.
      </Typography>
    </Box>
  </TableContainer>
);

export default MakeMyTripView;
