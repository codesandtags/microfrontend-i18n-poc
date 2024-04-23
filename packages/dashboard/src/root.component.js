import ImageGallery from "./components/image-gallery";

export default function Root(props) {
  return (
    <>
      <section>
        <main className="container mx-auto px-4 py-8">
          <header className="">
            <h1 className="text-3xl my-4">Unsplash Gallery</h1>
          </header>
          <ImageGallery />
        </main>
      </section>
    </>
  );
}
