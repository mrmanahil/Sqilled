import { useState,useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loader } from "graphql.macro";
import { withApollo } from "react-apollo";
import { useMutation } from '@apollo/client';
import compose from 'recompose/compose';
import $ from 'jquery';
import * as commonFunctions from '../../utilities/commonFunctions';
import UserUtils from '../../utilities/userUtils';
import useMediaRecorder from '@wmik/use-media-recorder';


const UPLOAD_VIDEO_RECODRING = loader('../../graphql/search/uploadVideoRecording.graphql');

const RecordVideo = (props) => {
  function Player({ srcBlob}) {
    if (!srcBlob) {
      return null;
    }}
  const postRes = (data) => {
    console.log(data, 'record respose')
    if (data.status === "SUCCESS") {
      UserUtils.setSaveVideo((data.status));
      props.history.push('/view-profile');
    }
    $("#loadingDiv").hide();
  }
  const streamCamVideo = () => {
    var constraints = { audio: false, video: { width: 1200, height: 1000 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");
         video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
           video.play();
          }
          
        ;
      })
      
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
    }
  
    useEffect(()=>{
      streamCamVideo()
    },[])
  const [mutate] = useMutation(UPLOAD_VIDEO_RECODRING, {
    onCompleted({
      uploadVideoRecording: {
        status: status,
        message: message,
      },
    }) {
      postRes({ status, message });
    },
    onError(error) {
      const err = commonFunctions.parseGraphQLErrorMessage(error);
      UserUtils.setSaveVideo((err));
      $("#loadingDiv").hide();
    },
  });
    const stopRecordData =  async (srcBlob) => {
      const file = await new File([srcBlob], 'profile')
      $("#loadingDiv").show();
      mutate({ variables: { file } });
    }
    
    
  let {
    stopRecording,
    startRecording,
  } = useMediaRecorder({
    recordScreen: true,
    blobOptions: { type: 'video/webm' },
    mediaStreamConstraints: { audio: true, video: true },
    onStop: stopRecordData
  });
  const stopWebcam=()=>{
    var video = document.querySelector("video");
        video.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
  

  }
  return (
    <>
      <Link className="btn btn-default back-btn" to="/edit-profile">Back</Link>
      <p className="video-record-title">Record Self Profile Video </p>
      <section>

      <div id= "container">
          <video Play={true} id="videoElement" ></video> 
          <button type="button" onClick={startRecording}>Start Recording</button>
           <button type="button" onClick={(event)=>{stopRecording(event);stopWebcam()} }>Stop recording</button>
        </div>
      </section>
     
      <div className="record-video-profile">
        <Player
          onStop={srcBlob => {
            // Do something with the video...
            stopRecordData(srcBlob)
          }}
        />
       
      </div>
    </>
  )
}
const enhance = compose(
  withRouter,
  withApollo,
);
export default enhance(RecordVideo);
