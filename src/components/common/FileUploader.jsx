import React, { useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import "./fileUploader.css";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import apis from "../../utils/apis";
import httpActions from "../../utils/httpAction";
const FileUploader = ({ files, setFiles, multiple, count }) => {
  const fileRef = useRef(null);
  const { dispatch } = useProvideGeneralHooks();
  const handleFileOpen = () => {
    fileRef.current.click();
  };

  const handleFileChange = async (event) => {
    const newFiles = Array.from(event.target.files).slice(
      0,
      count - files.length
    );

    // Insert files one by one with a delay of 1 second
    for (let img of newFiles) {
      setFiles((prevFiles) => [...prevFiles, "loading"]);
      await generateUrl(img); // Generate the URL for the file
    }
  };

  async function generateUrl(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const data = {
        url: apis().uploadImage,
        method: "POST",
        formData: formData,
      };
      const result = await dispatch(httpActions(data));
      if (result?.status) {
        setFiles((prevPreview) =>
          prevPreview.map((item, index) =>
            index === prevPreview.length - 1 ? result?.savedGalary.image : item
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteFile = (index) => {
    const prevFiles = [...files];
    prevFiles.splice(index, 1);
    setFiles(prevFiles);
  };

  return (
    <div>
      <div onClick={handleFileOpen} className="project_image_upoader">
        <IoMdCloudUpload />
        <span>Upload</span>
        <input
          onChange={handleFileChange}
          ref={fileRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          multiple={multiple}
          style={{ display: "none" }}
        />
      </div>

      <div className="file_preview">
        {files.map((item, index) => (
          <div className="file_preview_item" key={index}>
            <div className="file_preview_delete">
              <MdOutlineCancel onClick={() => deleteFile(index)} />
            </div>
            {item === "loading" ? (
              <span className="loading-text">
                <CircularProgress size="20px" />
              </span>
            ) : (
              <img src={item} alt={`uploaded-preview-${index}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
