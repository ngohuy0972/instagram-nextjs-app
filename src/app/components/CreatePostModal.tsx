import Image from "next/image";
import avatar from "../../public/avatar.jpg";

interface CreatePostModalProps {
  callback: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ callback }) => {
  return (
    <div>
      <div
        className="relative z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="ease-custom fixed inset-0 z-10 w-screen">
          <div className="flex min-h-full items-center justify-center">
            <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex flex-row justify-center border-b-xs bg-white p-4 px-4 text-sm">
                <button
                  type="button"
                  className="z-10 bg-white text-center text-sm font-light sm:mt-0 sm:w-auto"
                  onClick={callback}
                >
                  Cancel
                </button>
                <div className="z-0 -ml-10 flex flex-grow justify-center bg-white font-bold">
                  New Thread
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <div className="flex w-full">
                  <Image
                    className="rounded-full"
                    src={avatar}
                    alt="avatar"
                    width={40}
                  />
                  <input
                    type="text"
                    placeholder="What's new?"
                    className="z-10 ml-4 flex-grow border-0 p-2"
                  />
                  <button
                    className="py-1/2 rounded-xl px-4 text-black"
                    onClick={() => alert("Created post")}
                  >
                    <span className="text-sm font-normal">Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
