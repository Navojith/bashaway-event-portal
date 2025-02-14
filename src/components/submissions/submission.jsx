import { IoStar } from "react-icons/io5";
import moment from "moment";
import { downloadFile } from "@/helpers";

const Submission = ({ submission }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full items-center bg-card/30 shadow-md border border-[#ffffff26] rounded-md overflow-hidden my-4 px-3 py-6 md:px-6 md:py-8 grid md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="flex items-center ">
            <IoStar className="text-white" />
            <h3 className="ml-2 text-md md:text-lg text-white">
              Submitted At --&gt;{" "}
              <span className="text-primary">{moment(submission.created_at).format("hh:mm:ss:A")}</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 text-sm text ml-6 mt-4 gap-y-2 text-gray-400">
            <p>
              Marked -{" "}
              {submission.graded_by ? (
                <span className="text-primary">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </p>
            <p>
              Score -{" "}
              {submission.graded_by ? (
                <span className="text-primary">{submission.score}</span>
              ) : (
                <span className="text-red-500">N/A</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex mt-4 ml-6 items-center md:justify-end mr-8 sm:ml-6 sm:mt-4 md:col-span-2 md:mt-0 md:ml-0 ">
          <span
            className=" px-6 py-2 font-semibold sm:text-xl focus:outline-none focus:ring focus:ring-offset-1 cursor-pointer bg-white text-black rounded-md hover:bg-primary hover:text-white focus:ring-black focus:ring-opacity-20 transition-all duration-300"
            onClick={() => {
              downloadFile(submission.link);
            }}
          >
            Download
          </span>
        </div>
      </div>
    </div>
  );
};

export default Submission;
