import $ from "jquery";
import CryptoJS from "crypto-js";

export const getLocationTemp = location => {
  const url = "https://weather-ydn-yql.media.yahoo.com/forecastrss";
  const method = "GET";
  const app_id = "ZOPg0l4s";
  const consumer_key =
    "dj0yJmk9c2FWd2FBV1ZOVFhoJmQ9WVdrOVdrOVFaekJzTkhNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PThl";
  const consumer_secret = "3b1d8057eac568413529779304a047f8e25f7712";
  const concat = "&";
  const query = { location: `${location},br`, format: "json", u: "c" };
  const oauth = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  };

  let merged = {};
  $.extend(merged, query, oauth);
  // Note the sorting here is required
  const merged_arr = Object.keys(merged)
    .sort()
    .map(function(k) {
      return [k + "=" + encodeURIComponent(merged[k])];
    });
  const signature_base_str =
    method +
    concat +
    encodeURIComponent(url) +
    concat +
    encodeURIComponent(merged_arr.join(concat));

  const composite_key = encodeURIComponent(consumer_secret) + concat;
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(CryptoJS.enc.Base64);

  oauth["oauth_signature"] = signature;
  const auth_header =
    "OAuth " +
    Object.keys(oauth)
      .map(function(k) {
        return [k + '="' + oauth[k] + '"'];
      })
      .join(",");

  return $.ajax({
    url: url + "?" + $.param(query),
    headers: {
      Authorization: auth_header,
      "X-Yahoo-App-Id": app_id
    },
    method: "GET",
    success: function(data) {
      return data;
    }
  }).then(response => {
    return response;
  });
};
