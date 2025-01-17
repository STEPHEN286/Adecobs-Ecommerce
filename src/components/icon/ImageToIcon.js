import React, { useEffect, useRef } from 'react';

const ColoredIcon = ({ dataUrl, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = dataUrl;

    img.onload = () => {
      // Set canvas size based on image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Set the color for the overlay
      ctx.globalCompositeOperation = 'source-in';
      ctx.fillStyle = color; // Specify the desired color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reset the global composite operation to draw normally again
      ctx.globalCompositeOperation = 'destination-over';
    };
  }, [dataUrl, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block' }}
    />
  );
}

export default ColoredIcon;