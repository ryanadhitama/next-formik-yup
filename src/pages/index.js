import Form from "@/components/form";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Next.js Formik x Yup</title>
      </Head>
      <div className="container max-w-[600px] mx-auto ">
        <h1 className="mb-8 border-b border-gray-400 border-dashed py-10 font-semibold text-3xl">
          Next.js Formik x Yup
        </h1>
        <Form />
      </div>
    </>
  );
};

export default HomePage;
