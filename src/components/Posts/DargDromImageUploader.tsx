"use client";
import { useState } from "react";
import firebaseUploadHandler from "@/utils/firebaseUploadHandler";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Blocks } from "react-loader-spinner";
import { RxCross2 } from "react-icons/rx";
const DargDromImageUploader = ({
  setFeatureImageUrl,
}: {
  setFeatureImageUrl: any;
}) => {
  const [file, setFile] = useState<string>("");
  const [postImage, setoPostImage] = useState<string>("");
  const [postImageLoader, setoPostImageLoader] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  //   React.useEffect(() => {
  //     if (!file) {
  //       return;
  //     }
  //     const fileReader: any = new FileReader();
  //     fileReader.onload = () => {
  //       setImageUrl(fileReader?.result);
  //     };
  //     fileReader.readAsDataURL(file);
  //   }, [file]);

  React.useEffect(() => {
    if (!file) {
      return;
    }
    async function uploadFile() {
      setoPostImageLoader(true);
      try {
        const profileUrl: any = await firebaseUploadHandler(file);
        setoPostImage(profileUrl);
        setFeatureImageUrl(profileUrl);
      } catch (err) {
        toast.error("Image upload failed");
      } finally {
        setoPostImageLoader(false);
      }
    }

    uploadFile();
  }, [file]);

  return (
    <div className="text-white mt-3">
      {!postImageLoader ? (
        <>
          {postImage && (
            <div className="h-32 border relative  rounded-sm">
              <img
                src={postImage}
                className="h-full ounded-sm w-full object-cover "
                alt=""
              />
              <button
                onClick={() => {
                  setoPostImage("");
                  setFile("");
                }}
                className="absolute top-1 right-1 text-rose-800 "
              >
                <RxCross2 className="text-2xl" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="h-32 w-full border flex items-center justify-center">
          {" "}
          <Blocks
            height="40"
            width="35"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </div>
      )}

      {!postImageLoader && !postImage && (
        <>
          <div
            className="h-32 cursor-pointer w-full flex justify-center items-center border border-dotted border-white"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center">Drop the files here</p>
            ) : (
              <p className="text-center">Drag and Drop files here</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DargDromImageUploader;
