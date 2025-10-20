import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';
import Navbar from '../Navbar';

export default function IDCard() {
  const cardRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    role: '',
    zone: '',
    photo: null,
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const generateCard = () => {
    if (
      !formData.name ||
      !formData.group ||
      !formData.role ||
      !formData.zone ||
      !formData.photo
    ) {
      alert('Please fill all fields and upload a photo.');
      return;
    }
    setShowCard(true);
  };

  //  Download PNG
  const downloadPNG = async () => {
    // const card = document.getElementById('id-card');
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = `${formData.name.replace(/\s+/g, '_')}_DanceCamp_ID.png`;
    link.click();
  };

  //Download PDF (Perfect Portrait)
  const downloadPDF = async () => {
    // const card = document.getElementById('id-card');

    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    // Get card size in pixels
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Convert pixels → millimeters
    const pdfWidth = (imgWidth * 25.4) / 96;
    const pdfHeight = (imgHeight * 25.4) / 96;

    // Create PDF same size as card
    const pdf = new jsPDF({
      orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${formData.name.replace(/\s+/g, '_')}_DanceCamp_ID.pdf`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-blue-200 font-sans">
      <Navbar />
      <div className="mt-20 flex flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-center text-2xl font-bold text-blue-700">
          Dance ID Card Generator
        </h1>

        {/* Input Form */}
        {!showCard && (
          <div className="w-full max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-md">
            <div>
              <label className="mb-1 block font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Card Pass</label>
              <input
                type="text"
                name="group"
                value={formData.group}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter dance group"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter role (e.g., Lead Dancer)"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Zone</label>
              <input
                type="text"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Enter zone (e.g., CELVZ PHZ2)"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Upload Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <button
              onClick={generateCard}
              className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
              Generate ID Card
            </button>
          </div>
        )}

        {/* ID Card Preview */}
        {showCard && (
          <div className="mt-6 flex flex-col items-center">
            <div
              ref={cardRef}
              className="relative flex h-[400px] w-[250px] flex-col items-center justify-start overflow-hidden rounded-xl border shadow-lg"
              style={{
                backgroundImage: "url('/bg-img.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dance Logo Placeholder */}
              <div className="w-full py-2 pt-5 text-center text-sm font-bold text-black">
                <p> DANCERS ID</p>
              </div>
              <div className="mt-10 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                {formData.photo && (
                  <img
                    src={formData.photo}
                    alt="user"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="mb-1 mt-3 text-center">
                <h2 className="text-balck text-2xl font-bold">
                  {formData.name}
                </h2>
                <p className="text-bold text-sm font-semibold">
                  {formData.role}
                </p>
              </div>
              <div className="mt-5 w-full p-2 text-center">
                <p className="text-sm font-bold text-black">{formData.group}</p>

                <p className="text-sm font-semibold text-black">
                  {formData.zone}
                </p>
              </div>

              {/* Logo Section */}
              <div className="absolute bottom-0 flex w-full flex-col items-center justify-center pb-8 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-black">
                  OFFICIAL ID
                </p>
                <div className="mb-3">
                  {/* Placeholder for Dance Logo */}
                  <p className="text-[10px] font-bold text-black">
                    LAA DANCE FACULTY
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={downloadPNG}
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                Download PNG
              </button>
              <button
                onClick={downloadPDF}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Download PDF
              </button>
            </div>

            <button
              onClick={() => setShowCard(false)}
              className="mt-4 text-sm text-gray-600 underline"
            >
              Back to form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
