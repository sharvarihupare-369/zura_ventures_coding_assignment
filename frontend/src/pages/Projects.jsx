import React, { useContext, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import youtubeImage from "../Assets/youtube.png";
import spotifyImage from "../Assets/spotify.png";
import rssfield from "../Assets/rssfield.png";
import cloudupload from "../Assets/cloud_upload.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import UploadModal from "../components/UploadModal";

const Projects = () => {
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

  const handleOpenRss = () => {
    setIsUploadOpen(true);
    setMediaName("RSS");
  };

  return (
    <div className="flex gap-12">
      <div className="border border-gray  w-[20%] h-[100vh] p-2 bg-[#F3E8FF] ">
        <div>
          <div>
            <div className="flex items-center gap-2 w-[10px]">
              <div>
                {/* <img src={arrowImg}/> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <path
                    d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                    fill="#7E22CE"
                  />
                  <path
                    opacity="0.4"
                    d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                    fill="#7E22CE"
                  />
                </svg>
              </div>
              <div id="logo" className="text-[#7E22CE] font-bold text-2xl">
                LAMA.
              </div>
            </div>

            <div className="mt-[30px]">
              <p>Poadcast Upload Flow</p>
            </div>

            <div className="mt-[30px]">
              <div className="bg-[#E2D8EE] p-2 rounded-full hover:bg-[#7E22CE] hover:text-white">
                <button className="rounded-xl flex items-center gap-2">
                  <p className="bg-[#CAC1D5] w-8 p-1 rounded-full hover:bg-[#2C2C2C]">
                    1
                  </p>
                  Projects
                </button>
              </div>

              <div className="bg-[#E2D8EE] p-2 rounded-full mt-1 hover:bg-[#7E22CE] hover:text-white">
                <button className="rounded-xl flex items-center gap-2">
                  <p className="bg-[#CAC1D5] w-8 p-1 rounded-full hover:bg-[#0f172a]">
                    2
                  </p>
                  Widget Configurations
                </button>
              </div>

              <div className="border border-gray-300 mt-2"></div>
            </div>
          </div>

          <div className="mt-60">
            <div className="border border-gray-300  mb-2"></div>
            <div className="flex items-center gap-3">
              <div className="bg-[#CAC1D5]  p-1 rounded-full">
                <IoIosSettings style={{ fontSize: "25px" }} />
              </div>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload section */}

      <div>
        <p className="text-[#7E22CE] text-[55px] text-700 font-bold">Upload</p>

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
            onClick={handleOpenRss}
            className="cursor-pointer mt-[50px] border  border-[#999] shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
          ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={rssfield} alt="rss" />
              </div>
              <div>
                <p className="font-bold">Upload from</p>
                <p className="font-bold">RSS Feed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center m-6">
          <p className="text-[#999] text-2xl">or</p>
        </div>

        <div className="border border-dashed border-[#999999] w-[100%] text-center p-5">
          <div className="flex justify-center">
            <img src={cloudupload} alt="cloud_upload" className="w-20" />
          </div>
          <p className="text-[#49454F] text-[20px] text-400">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className="text-[#999] text-[12px] text-400">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
          </p>

          <button className="border mt-5 border-[#7E22CE] border-[1.925px] rounded-full text-[#7E22CE] px-3 py-2 font-medium">
            Select File
          </button>
        </div>
      </div>
      {isuploadOpen && <UploadModal mediaName={mediaName} />}
    </div>
  );
};

export default Projects;
