/* eslint-disable no-unused-vars */
import FooterContent from "../../components/footer/FooterContent";
import MainHeader from "../../components/header/MainHeader";
import BlogContent from "./BlogContent/BlogContent";

const BlogModel = () => {
  return (
    <section className="bg-black">
      <MainHeader />
      <BlogContent />
      <FooterContent />
    </section>
  );
};

export default BlogModel;
