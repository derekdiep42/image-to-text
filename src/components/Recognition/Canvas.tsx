import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Button from "@mui/material/Button";
import { ReactSketchCanvasRef } from "react-sketch-canvas";
import { dataURItoBlob, callImageApi } from "../helpers/helpers";
import { apiResponse } from "./Recognition";
import Box from "@mui/material/Box";

interface CanvasProps {
  setData: (jsonData: apiResponse[] | null) => void;
  setImageDisplay: (image: Blob | File) => void;
}

const Canvas: React.FC<CanvasProps> = ({ setData, setImageDisplay }) => {
  const canvas = useRef<ReactSketchCanvasRef>(null);

  return (
    <>
      <ReactSketchCanvas
        ref={canvas}
        style={{ border: "2px solid gray", borderRadius: "1px" }}
        width="45vw"
        height="65vh"
        strokeWidth={4}
        strokeColor="black"
      />
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{ maxWidth: "170px", fontSize: "11px" }}
          onClick={async () => {
            canvas?.current?.clearCanvas();
          }}
        >
          Clear Image
        </Button>
        <Button
          variant="contained"
          sx={{ maxWidth: "170px", fontSize: "11px" }}
          onClick={async () => {
            canvas?.current?.undo();
          }}
        >
          Undo
        </Button>
        <Button
          variant="contained"
          sx={{ maxWidth: "170px", fontSize: "11px" }}
          onClick={async () => {
            canvas?.current?.redo();
          }}
        >
          Redo
        </Button>
      </Box>
      <Button
        variant="contained"
        sx={{ maxWidth: "170px", fontSize: "11px" }}
        onClick={async () => {
          canvas?.current
            ?.exportImage("png")
            .then((data: any) => {
              const formData = new FormData();
              formData.append("image", dataURItoBlob(data));
              setImageDisplay(dataURItoBlob(data));
              callImageApi(formData).then((jsonData) => {
                setData(jsonData ?? null);
              });
            })
            .catch((e: any) => {
              console.log(e);
            });
        }}
      >
        Send Drawn Image
      </Button>
    </>
  );
};

export default Canvas;
