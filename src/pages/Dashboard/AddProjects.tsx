import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateProjectsMutation } from "@/redux/features/projects/project.api";
import ImageUploader from "@/utils/ImageUploader";
import { Check, Cross, Loader } from "lucide-react";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

interface ProjectFormInputs {
  title: string;
  description: string;
  image: string;
  projectType: "Personal" | "Professional";
  links: { label: string; url: string }[];
  company: { label: string; text: string }[];
  color: string;
}

const AddProjects: React.FC = () => {
  const [postProject, { isLoading: isPosting }] = useCreateProjectsMutation();
  const [image, setImage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState("");
  const { register, handleSubmit, control } = useForm<ProjectFormInputs>({
    defaultValues: {
      projectType: "Personal",
      links: [{ label: "", url: "" }],
      company: [{ label: "", text: "" }],
    },
  });

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: "links",
  });

  const {
    fields: companyFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({
    control,
    name: "company",
  });

  const onSubmit = async (data: ProjectFormInputs) => {
    const projectData = {
      ...data,
      color: "",
      image,
    };

    try {
      const res = await postProject(projectData).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    console.log("Form Data:", data);
    // Handle the form data here, such as sending it to a backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:w-4/5 mx-auto px-11">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-white" htmlFor="title">
            Title
          </label>
          <Input {...register("title")} placeholder="Project Title" required />
        </div>

        <div>
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <Input
            {...register("description")}
            placeholder="Project Description"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="text-white flex gap-5">
            Upload Image {isLoading === "loading" && <Loader />}{" "}
            {isLoading === "done" && <Check />}{" "}
            {isLoading === "error" && <Cross />}
          </label>
          <ImageUploader onUpload={setImage} setIsLoading={setIsLoading} />
        </div>

        <div>
          <label htmlFor="projectType" className="text-white">
            Project Type
          </label>
          <Select {...register("projectType")} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-white">Links</label>
          {linkFields.map((field, index) => (
            <div key={field.id} className="space-y-2">
              <Input
                className="my-3"
                {...register(`links.${index}.label`)}
                placeholder="Label"
                required
              />
              <Input
                {...register(`links.${index}.url`)}
                placeholder="URL"
                required
              />
              <Button
                type="button"
                onClick={() => removeLink(index)}
                className="bg-red-500 hover:bg-red-600 text-white "
              >
                Remove Link
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => appendLink({ label: "", url: "" })}
            className="bg-blue-500 hover:bg-blue-700 text-white my-4"
          >
            Add Link
          </Button>
        </div>

        <div>
          <label className="text-white">Company</label>
          {companyFields.map((field, index) => (
            <div key={field.id} className="space-y-2">
              <Input
                className="my-3"
                {...register(`company.${index}.label`)}
                placeholder="Label"
                required
              />
              <Input
                {...register(`company.${index}.text`)}
                placeholder="Text"
                required
              />
              <Button
                type="button"
                onClick={() => removeCompany(index)}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Remove Company
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => appendCompany({ label: "", text: "" })}
            className="bg-blue-500 text-white my-4 hover:bg-blue-700"
          >
            Add Company
          </Button>
        </div>
      </div>
      <Button
        disabled={isLoading !== "done"}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 my-10 text-white py-2 px-4 rounded"
      >
        {isPosting ? "Posting..." : "Submit"}
      </Button>
    </form>
  );
};

export default AddProjects;
