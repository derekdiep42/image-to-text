import { apiResponse } from "../Recognition/Recognition";

export function dataURItoBlob(dataURI: string) {
  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(",")[1]);
  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

export async function callImageApi(formData: any) {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/imagetotext", {
      method: "POST",
      headers: { "X-Api-Key": "Fyxgwhe9lxcoi8YpCvcUpg==ESIKNYXsZDhyyPbN" },
      body: formData,
    });

    // Check if the request was successful
    if (response.ok) {
      const data = await response.json();
      return data as apiResponse[];
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
