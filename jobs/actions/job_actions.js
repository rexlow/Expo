import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS } from "./types";

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOBS_QUERY_PARAMS = {
  publisher: "5640111509765922",
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript" // job type
};

const buildJobsUrl = (zipCode) => {
  const query = qs.stringify({ ...JOBS_QUERY_PARAMS, l: zipCode })
  return `${JOB_ROOT_URL}${query}`;
}

export const fetchJobs = region => async dispatch => {
  try {
    let zipCode = await reverseGeocode(region);
    const url = buildJobsUrl(zipCode);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
  } catch (error) {
    console.error(error);
  }
};
