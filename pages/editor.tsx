import dynamic from "next/dynamic";

const Editor = dynamic(() => import("components/Editor"), {
  //! without this, it will throw a windows is not defined error.
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const editorPage = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};
export default editorPage;
