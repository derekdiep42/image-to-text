import React from "react";
import { getRecords } from "./helpers/manageRecords";
import Card from "./Recognition/Card";
import { apiResponse } from "./Recognition/Recognition";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

export default function Records() {
  const records = getRecords();
  return (
    <Box display="flex" flexDirection="column" padding={3} gap={1}>
      {records.length > 0 ? (
        records.map((record) => (
          <>
            <img
              alt="description"
              className="blob-to-image"
              src={record.image}
              width="300px"
            />
            {(JSON.parse(record.data) as apiResponse[]).map((item) => (
              <Card key={`${item.text}`} item={item}></Card>
            ))}
            <Divider sx={{ margin: 2 }} />
          </>
        ))
      ) : (
        <Typography alignSelf="center">No Records Available</Typography>
      )}
    </Box>
  );
}
