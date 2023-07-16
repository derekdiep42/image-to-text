import React, { useState } from "react";
import Button from "@mui/material/Button";
import { callImageApi } from "../helpers/helpers";
import { apiResponse } from "./Recognition";

interface FileUploaderProps {
  setData: (jsonData: apiResponse[] | null) => void;
  setImageDisplay: (image: Blob | File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  setData,
  setImageDisplay,
}) => {
  const [imageFile, setImageFile] = useState<FormData | null>(null);
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    console.log(file);

    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      setImageDisplay(file);

      // Send the form data to the state
      setImageFile(formData);
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(image) => {
          handleImageUpload(image);
        }}
      />
      <Button
        variant="contained"
        sx={{ maxWidth: "200px", fontSize: "11px" }}
        onClick={() => {
          callImageApi(imageFile).then((jsonData) => setData(jsonData ?? []));
        }}
      >
        Send Uploaded Image
      </Button>
    </>
  );
};

export default FileUploader;
