import React from "react";
import { apiResponse } from "./Recognition";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CardProps {
  item: apiResponse;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    //border: "1px solid black", borderRadius: "1px"
    <Box
      display="inline-block"
      bgcolor={"white"}
      width="100%"
      padding={2}
      border="1px solid gray"
      borderRadius="8px"
    >
      <Typography fontSize="14px">Text Found: {item.text}</Typography>
      <Typography fontSize="14px">
        Coordinates: &#40;{item.bounding_box?.x1}, {item.bounding_box?.y1}
        &#41; , &#40;{item.bounding_box?.x2}, {item.bounding_box?.y2}&#41;
      </Typography>
    </Box>
  );
};

export default Card;
