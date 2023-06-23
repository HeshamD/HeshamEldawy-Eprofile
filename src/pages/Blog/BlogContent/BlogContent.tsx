import { FC } from "react";
import blogConst from "./BlogConst";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface BlogItem {
  imageSrc: string;
  title: string;
  description: string;
  img_w?: number;
  github?: string;
}

const BlogContent: FC = () => {
  return (
    <div className="container mx-auto">
      {blogConst.map(
        (
          { imageSrc, title, description, img_w, github }: BlogItem,
          index: number
        ) => (
          <div key={index} className="bg-white shadow-xl my-5 flex rounded">
            <div className="w-1/4">
              <img
                src={imageSrc}
                alt="Image"
                className={`h-full w-full object-cover w-${img_w}`}
              />
            </div>
            <div className="w-3/4 p-4 flex flex-col justify-between">
              <div>
                <h2
                  className="text-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
              <div className="flex items-center">
                <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn more
                </button>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-gray-700"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BlogContent;
