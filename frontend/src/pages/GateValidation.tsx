import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GateValidation() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [scanResult, setScanResult] = useState('');
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const video = videoRef.current;
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                video.srcObject = stream;
                video.play();
                requestAnimationFrame(scan);
            });

        const scan = () => {
            const canvas = canvasRef.current;
            if (canvas && video.readyState === video.HAVE_ENOUGH_DATA) {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    setScanResult(code.data);
                    setIsValid(code.data.startsWith('ticket')); // Mock validation
                }
            }
            requestAnimationFrame(scan);
        };
    }, []);

    return (
        <div className="min-h-screen bg-bg-white flex flex-col items-center justify-center">
            <Navbar />
            <h1 className="text-3xl font-bold mb-4">QR Scanner for Gate</h1>
            <video ref={videoRef} className="w-80 h-80 mb-4 rounded" />
            <canvas ref={canvasRef} className="hidden" />
            {scanResult && (
                <p className={`text-xl ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                    {isValid ? 'Valid Ticket: Entry Allowed' : 'Invalid QR'}
                </p>
            )}
            <Footer />
        </div>
    );
}