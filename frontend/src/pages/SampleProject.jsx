import React, { useContext, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import youtubeImage from "../Assets/youtube.png";
import spotifyImage from "../Assets/spotify.png";
import ellipse from "../Assets/Ellipse.png";
import cloudupload from "../Assets/cloud_upload.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import UploadModal from "../components/UploadModal";
import Sidebar from "../components/Sidebar";

const SampleProject = () => {
  const { isuploadOpen, setIsUploadOpen } = useContext(CreateProjectContext);
  const [mediaName, setMediaName] = useState("");

  const handleOpenYoutube = () => {
    setIsUploadOpen(true);
    setMediaName("Youtube");
  };

  const handleOpenSpotify = () => {
    setIsUploadOpen(true);
    setMediaName("Spotify");
  };

  const handleOpenEllipse = () => {
    setIsUploadOpen(true);
    setMediaName("media");
  };
  return (
    <div className="flex gap-20">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      {/* Upload section */}

      <div>
        <p className="text-[#7E22CE] text-[40px] text-700 font-bold">
          Sample Project
        </p>

        <div className="grid grid-cols-3 gap-10">
          <div
            onClick={handleOpenYoutube}
            className="cursor-pointer mt-[50px] border  border-[#999999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={youtubeImage} alt="youtube" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Youtube Video</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenSpotify}
            className="cursor-pointer mt-[50px] border  border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={spotifyImage} alt="spotify" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Spotify Poadcast</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenEllipse}
            className="cursor-pointer mt-[50px] border  border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={ellipse} alt="rss" />
              </div>
              <div>
                <p className="font-bold">Upload Media</p>
                <p className="font-bold">or Text File</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#7E22CE] flex justify-between items-center p-5 rounded-md mt-10">
          <p className="text-white">
            All files are processed!Your widget is ready to go!
          </p>
          <button className="rounded-md text-[15px] font-bold bg-white px-3 py-1">
            Try it out!
          </button>
        </div>

        {/* Table starts*/}

        <div className="mt-10 p-2 border border-gray-300 rounded-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full bg-white p-3">
              <thead className="text-center">
                <tr className="mb-[10px]">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Upload Date & Time</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* map goes here */}
                <tr>
                  <td className="py-2 px-4">Name</td>
                  <td className="py-2 px-4">12 Jun 24 | 15:67</td>
                  <td className="py-2 px-4">Done</td>
                  <td className="py-2 px-4">
                    <button className="mr-2 font-medium">Edit</button>
                    <button className="text-red-400 font-medium">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Name</td>
                  <td className="py-2 px-4">12 Jun 24 | 15:67</td>
                  <td className="py-2 px-4">Done</td>
                  <td className="py-2 px-4">
                    <button className="mr-2 font-medium">Edit</button>
                    <button className="text-red-400 font-medium">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table ends */}
      </div>
      {isuploadOpen && <UploadModal mediaName={mediaName} />}
    </div>
  );
};

export default SampleProject;