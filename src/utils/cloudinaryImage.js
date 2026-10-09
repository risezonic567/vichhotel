const CLOUDINARY_UPLOAD_PATH = "/image/upload/";

export function getCloudinaryImageUrl(url, width) {
  const uploadPathIndex = url.indexOf(CLOUDINARY_UPLOAD_PATH);

  if (uploadPathIndex === -1) {
    return url;
  }

  const transformationsStart =
    uploadPathIndex + CLOUDINARY_UPLOAD_PATH.length;
  const transformationsEnd = url.indexOf("/", transformationsStart);

  if (transformationsEnd === -1) {
    return url;
  }

  const transformations = url.slice(transformationsStart, transformationsEnd);

  if (/^v\d+$/.test(transformations)) {
    const versionAndAsset = url.slice(transformationsStart);
    return `${url.slice(0, transformationsStart)}f_webp,q_auto,w_${width},c_limit/${versionAndAsset}`;
  }

  const updatedTransformations = transformations
    .split(",")
    .filter(
      (transformation) =>
        !transformation.startsWith("f_") && !/^w_\d+$/.test(transformation),
    );
  updatedTransformations.unshift("f_webp");

  if (
    !updatedTransformations.some((transformation) =>
      transformation.startsWith("q_auto"),
    )
  ) {
    updatedTransformations.push("q_auto");
  }

  updatedTransformations.push(`w_${width}`);

  if (!updatedTransformations.includes("c_limit")) {
    updatedTransformations.push("c_limit");
  }

  const transformationPath = updatedTransformations.join(",");
  return `${url.slice(0, transformationsStart)}${transformationPath}${url.slice(transformationsEnd)}`;
}
