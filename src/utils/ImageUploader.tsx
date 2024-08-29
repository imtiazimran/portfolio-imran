/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import axios from "axios";

type imageUploaderProps = {
  onUpload: (url: string) => void;
  setIsLoading: (isLoading: string ) => void;
};

const ImageUploader = ({ onUpload, setIsLoading }: imageUploaderProps) => {
  const cloudName = import.meta.env.VITE_Cloud_name;
  const preset = import.meta.env.VITE_imgUploadPreset;

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading("loading");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", preset);
    data.append("cloud_name", cloudName);

    try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          data
        );
    
        onUpload(res.data.url);
        setIsLoading("done");
        
    } catch (error) {
      console.log(error);
      setIsLoading("error");
    }

  };
  return (
    <div>
      <Input onChange={handleChange} type="file" />
    </div>
  );
};

export default ImageUploader;
