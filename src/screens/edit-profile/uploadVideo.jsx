
import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter, Link } from 'react-router-dom';
import { withApollo } from "react-apollo";
import compose from 'recompose/compose';
import { loader } from "graphql.macro";

const UPLOAD_VIDEO_RECODRING = loader('../../graphql/search/uploadVideoRecording.graphql');

const UploadVideo = () => {
  const [mutate] = useMutation(UPLOAD_VIDEO_RECODRING, {
    onCompleted: data => console.log(data, 'response'),
    onError: (err) => { console.log(err, 'error') }
  });

  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return
    mutate({ variables: { file } });
  }

  return (
    <>
      <input type="file" onChange={onChange} />
    </>
  )
}

const enhance = compose(
  withRouter,
  withApollo,
);
export default enhance(UploadVideo);