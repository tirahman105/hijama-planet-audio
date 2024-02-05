import React from "react";
import Container from "../../ui/Container";
import Swal from "sweetalert2";

const evilEyeAudio = "http://localhost:5173/Ruqyah-EvilEye-ruqyahbd.org.mp3";
const evilEyeAudio2 =
  "https://drive.google.com/file/d/1YSSsydXyrlou39Epivklmri1JKSRZPXM/view?usp=sharing";
const Audio = () => {
  const downloadAudio = (url) => {
    const fileName = url.split("/").pop();
    Swal.fire({
      title: "Download Confirmation",
      text: `Are you sure you want to download ${fileName}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, download it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        Swal.fire("Downloaded!", `${fileName} has been downloaded.`, "success");
      }
    });
  };
  return (
    <Container>
      <div>
        <h1 className="text-center p-4 text-2xl">বিষয়ভিত্তিক রুকইয়াহ</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4 ">
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>বদনজর (Evil Eye) | বদনজরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio);
              }}
              className="btn btn-primary "
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>২। বদনজর (Eye Hasad)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio2);
              }}
              className="btn btn-primary"
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৩। জাদু ও জিন (Sihr-Mass) | সিহরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary">Dlownload</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৪। কালো যাদু, বান এবং জিন (Sihr-Hibshi)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary mx-2">Download</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center p-4 text-2xl">
          বিভিন্ন ক্বারিদের সাধারণ রুকইয়াহ
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4 ">
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>বদনজর (Evil Eye) | বদনজরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio);
              }}
              className="btn btn-primary "
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>২। বদনজর (Eye Hasad)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio2);
              }}
              className="btn btn-primary"
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৩। জাদু ও জিন (Sihr-Mass) | সিহরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary">Dlownload</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৪। কালো যাদু, বান এবং জিন (Sihr-Hibshi)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary mx-2">Download</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center p-4 text-2xl">অন্যান্য রুকইয়াহ অডিও</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4 ">
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>বদনজর (Evil Eye) | বদনজরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio);
              }}
              className="btn btn-primary "
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>২। বদনজর (Eye Hasad)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button
              onClick={() => {
                downloadAudio(evilEyeAudio2);
              }}
              className="btn btn-primary"
            >
              Dlownload
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৩। জাদু ও জিন (Sihr-Mass) | সিহরের রুকইয়াহ</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary">Dlownload</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl border hover:shadow-md ">
          <div>
            <h1>৪। কালো যাদু, বান এবং জিন (Sihr-Hibshi)</h1>
            <h1>This is sub title</h1>
          </div>
          <div>
            <button className="btn btn-primary mx-2">Download</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Audio;
