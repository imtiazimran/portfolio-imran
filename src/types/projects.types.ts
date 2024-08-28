

export type TProject = {
    _id: string; // Assuming MongoDB ObjectId is converted to a string
    title: string;
    description: string;
    image: string;
    projectType: string;
    links: { label: string; url: string; }[];
    company?: {
        label: string;
        text: string;
      }[];
    color: string;
};
