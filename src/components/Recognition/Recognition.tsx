import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Card from "./Card";
import Canvas from "./Canvas";
import FileUploader from "./FileUploader";
import { saveRecords } from "../helpers/manageRecords";

export interface apiResponse {
  text: string;
  bounding_box?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

export default function Recognition() {
  const [apiData, setApiData] = useState<apiResponse[] | null>(null);
  const [image, setImage] = useState<Blob | File | null>(null);

  const setData = (data: apiResponse[] | null) => {
    if (!data || data.length < 0) setApiData(null);
    setApiData(data);
  };

  const setImageDisplay = (image: Blob | File) => {
    setImage(image);
  };

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" padding={3} gap={2}>
        <Canvas setData={setData} setImageDisplay={setImageDisplay} />
        <FileUploader setData={setData} setImageDisplay={setImageDisplay} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        padding={3}
        gap={2}
        maxWidth="43vw"
        width="100%"
      >
        <Box display="flex" gap={2}>
          <Typography variant="h4">Results</Typography>
          {apiData && (
            <Button
              size="small"
              variant="contained"
              sx={{ height: "30px", alignSelf: "center" }}
              onClick={() =>
                saveRecords(image ? URL.createObjectURL(image) : "", apiData)
              }
            >
              Record Results
            </Button>
          )}
        </Box>
        {apiData ? (
          <>
            {image && (
              <img
                alt="description"
                className="blob-to-image"
                src={URL.createObjectURL(image)}
              />
            )}
            {apiData.length > 0 ? (
              apiData.map((item) => (
                <Card key={`${item.text}`} item={item}></Card>
              ))
            ) : (
              <Typography>No Text Found</Typography>
            )}
          </>
        ) : (
          <Typography>No Data</Typography>
        )}
      </Box>
    </Box>
  );
}
