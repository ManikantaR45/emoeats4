import React, { useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

const WebcamComponent = () => {
  const navigate = useNavigate();
  const [permissionGranted, setPermissionGranted] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/captured-image", { state: { imageData: imageSrc } });
  }, [webcamRef, navigate]);

  // Check and request webcam permission
  const checkAndRequestPermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      setPermissionGranted(true);
    } catch (error) {
      console.error("Webcam permission not granted yet.");
      setTimeout(checkAndRequestPermission, 1000); // Check again after 1 second
    }
  }, []);

  // Check if permission is granted
  useEffect(() => {
    checkAndRequestPermission();
  }, [checkAndRequestPermission]);

  return (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      {permissionGranted ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            mirrored={true}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#D3D3D3",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "150px",
                marginTop: "10px",
                marginBottom: "10px",
                fontFamily: "Poppins",
              }}
              onClick={capture}
            >
              Capture
            </button>
          </div>
        </>
      ) : (
        <div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#000",
            }}
          >
            Please grant permission to access the webcam.
          </p>
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;
