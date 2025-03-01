import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

// Import your videos
import videoFullBody from "../assets/fullbody.mp4";
import videoFront from "../assets/front.mp4";
import videoCabin from "../assets/cabin.mp4";
import videoTrunk from "../assets/trunk.mp4";
import videoExterior from "../assets/exteriro.mp4";
import commfull from "../assets/commfull.mp4"

const Veoverview = () => {
  const criteriadata = useSelector((state: RootState) => state.counter.criteriaa);
  const criteriadataa = useSelector((state: RootState) => state.counter.criteria);
  console.log("criteria", criteriadata,criteriadataa);

  // Define a mapping between criteria values and videos
  const videoMap: Record<string, string> = {
    fullbody: videoFullBody,
    front: videoFront,
    cabin: videoCabin,
    trunk: videoTrunk,
    Exterior: videoExterior, // Changed "Exterior" to "exterior" for consistency
  };
  const video1Map: Record<string, string> = {
    fullbodycommerce:commfull,
    front: videoFront,
    cabin: videoCabin,
    trunk: videoTrunk,
    exterior: videoExterior, // Changed "Exterior" to "exterior" for consistency
  };

  const selectedVideo = videoMap[criteriadataa] || videoFullBody;
  const selectedVideo1 = video1Map[criteriadataa] || videoFullBody;
  console.log("I am selected video", selectedVideo,selectedVideo1);

  return (
    <>
      {criteriadata === "passenger" ? (
        <>
          {/* Key attribute forces re-render when video changes */}
          <video className="hidden lg:block" key={selectedVideo} width="400" autoPlay loop >
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>


  



        </>
      ) : (
        <>
          {/* Render a different video when criteriadata is NOT "passenger" */}
          <video className="hidden lg:block"  key={selectedVideo1} width="400" autoPlay loop>
            <source src={selectedVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </>
  );
};

export default Veoverview;
